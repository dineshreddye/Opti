import React, { useEffect, useMemo, useState } from "react";
import _get from "lodash/get";
import { message } from "antd";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { get, ref } from "firebase/database";
import AuthContext from "../contexts/AuthContext";

import { STATUS } from "../constants/common";
import { database, firebaseAuth } from "../configs/firebaseConfig";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      async (loggedInUser) => {
        const userName = loggedInUser.email.split("@")[0];
        const userDetailsRef = ref(database, `users/${userName}`);
        const userDetails = await get(userDetailsRef);
        if (userDetails.exists()) {
          setUser({ ...loggedInUser, ...userDetails.val() });
        } else {
          setUser(loggedInUser);
        }
      },
    );

    return unsubscribe;
  }, []);

  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      // setUser(user)
      return {
        status: STATUS.SUCCESS,
      };
    } catch (error) {
      console.log({ error });
      if (_get(error, "code") === "auth/user-not-found") {
        message.error("No user found with email. Please signup.");
        return {
          status: STATUS.FAILED,
          msg: "No user found with email. Please signup.",
        };
      }
      message.error(error.message);
      return {
        status: STATUS.FAILED,
        msg: "Something went wrong. Please try again.",
      };
    }
  };

  // const signupUser = async (email, password) => {
  //   try {
  //     const auth = getAuth();
  //     const user = await createUserWithEmailAndPassword(
  //       firebaseAuth,
  //       email,
  //       password
  //     );
  //     console.log({ user });
  //     getUserFromuid(user);
  //     setUser(user);
  //     return user;
  //   } catch {
  //     return null;
  //   }
  // };

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
  //   // database
  //   //   .object("/users/" + user.uid)
  //   //   .valueChanges()
  //   //   .get(value => {
  //   //     if (value != null) {
  //   //       setUser(value)
  //   //     }
  //   //   })
  // };

  const signOutUser = async () => {
    await firebaseSignOut(firebaseAuth);
  };

  const sendResetPasswordMail = async (email) => {
    try {
      await sendPasswordResetEmail(firebaseAuth, email);
      return {
        status: STATUS.SUCCESS,
        msg: "Email sent successfully to reset your password",
      };
    } catch (error) {
      console.log({ error });
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

  console.log({ user });

  const value = useMemo(() => {
    return {
      user,
      loginUser,
      // signupUser,
      signOutUser,
      sendResetPasswordMail,
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
