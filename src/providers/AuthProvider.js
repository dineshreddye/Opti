import React, { useEffect, useMemo, useState } from "react";
import _get from "lodash/get";
import { message } from "antd";
import { toast } from "react-toastify";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { get, ref } from "firebase/database";

import { getFunctions, httpsCallable } from "firebase/functions";

import AuthContext from "../contexts/AuthContext";

import { STATUS } from "../constants/common";
import { database, firebaseAuth } from "../configs/firebaseConfig";
import { getSubdomain } from "../utils/common.utils";

const functions = getFunctions();
const createUser = httpsCallable(functions, "createUser");

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signOutUser = async () => {
    setUser(null);
    await firebaseSignOut(firebaseAuth);
  };

  const checkForUserExists = async (userInfo) => {
    const userDetailsRef = ref(database, `users/${userInfo.uid}`);
    const userDetails = await get(userDetailsRef);
    if (userDetails.exists()) {
      return {
        status: STATUS.SUCCESS,
        data: { ...userInfo, ...userDetails.val() },
      };
    }

    return { status: STATUS.FAILED };
  };

  const canUserSignIn = (userInfo) => {
    // return true;
    if (!_get(userInfo, "party")) {
      return _get(userInfo, "isAdmin");
    }
    return getSubdomain() === _get(userInfo, "party");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      async (loggedInUser) => {
        if (loggedInUser) {
          const { status, data } = await checkForUserExists(loggedInUser);
          if (status === STATUS.SUCCESS) {
            setUser(data);
            return;
          }
          signOutUser();
        }
      },
    );

    return unsubscribe;
  }, []);

  const loginUser = async (email, password) => {
    try {
      const userDetails = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      // const isAdminUser =
      const { status, data } = await checkForUserExists(userDetails.user);

      console.log({ canUserSignIn: canUserSignIn(data) });
      if (status === STATUS.SUCCESS && canUserSignIn(data)) {
        setUser(data);
        return {
          status: STATUS.SUCCESS,
          msg: "Login Successful",
        };
      }
      signOutUser();
      return {
        status: STATUS.FAILED,
        msg: "Invalid User. Please try again",
      };
      // setUser(user)
    } catch (error) {
      if (_get(error, "code") === "auth/user-not-found") {
        return {
          status: STATUS.FAILED,
          msg: "No user found with email. Please signup.",
        };
      }
      return {
        status: STATUS.FAILED,
        msg: "Something went wrong. Please try again.",
      };
    }
  };

  const signupUser = async (email, password) => {
    try {
      const newuser = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      createUser(newuser.user.uid);
      setUser(user);
      return user;
    } catch {
      return null;
    }
  };

  // const getUserFromuid = (user) => {
  //   console.log({ user });
  //   const usersRef = ref(database, `users/${user.uid}`);
  //   onValue(usersRef, (snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log({ uid: user.uid, usersRef });
  //       console.log(snapshot.val());
  //       setUser({ ...snapshot.val(), uid: user.uid });
  //     } else {
  //       setUser({});
  //     }
  //   });
  // database
  //   .object("/users/" + user.uid)
  //   .valueChanges()
  //   .get(value => {
  //     if (value != null) {
  //       setUser(value)
  //     }
  //   })
  // };

  const sendResetPasswordMail = async (email) => {
    try {
      await sendPasswordResetEmail(firebaseAuth, email);
      return {
        status: STATUS.SUCCESS,
        msg: "Email sent successfully to reset your password",
      };
    } catch (error) {
      let msg = "Error sending email.";

      if (_get(error, "code") === "auth/user-not-found") {
        msg = "User does not exist. Please signup";
      }
      return {
        status: STATUS.FAILED,
        msg,
      };
    }
  };

  async function createNewUser({ email, password, name, party }) {
    const userData = {
      email,
      password,
      name,
      party,
    };

    try {
      await createUser(userData);
      toast("User added successfully.");
    } catch (error) {
      toast("Error creating user");
      console.error("Error creating user:", error);
    }
  }

  const value = useMemo(() => {
    return {
      user,
      loginUser,
      signupUser,
      signOutUser,
      sendResetPasswordMail,
      createNewUser,
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
