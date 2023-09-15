import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebaseConfig";

export const auth = getAuth(app);

export const signInwithGoogle = async () => {
  const provider = new GoogleAuthProvider(app);
  try {
    const result = await signInWithPopup(auth, provider); // await 사용
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return { success: true, token: token, user: user };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData?.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    return { success: false };
  }
};
