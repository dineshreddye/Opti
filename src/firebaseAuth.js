import { getAuth } from "firebase/auth";
import app from "./configs/firebaseConfig";

const auth = getAuth(app);

export default auth;
