import {
  getAuth,
  createUserWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { app } from "./firebaseConfig";

export const auth = getAuth(app);

export const makeAccount = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    // Signed in
    return { success: true, user };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { success: false, errorCode, errorMessage };
  }
};

export const changePassword = async (user, newPassword) => {
  try {
    const response = await updatePassword(user, newPassword)
      .then(() => {
        console.log(JSON.stringify(response));
        return true;
      })
      .catch((error) => {
        // An error ocurred
        // ...
        return false;
      });
  } catch (error) {
    console.error(error);
  }
};
