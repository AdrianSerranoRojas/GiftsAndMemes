import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

// Paste your config object here ⬇️
const firebaseConfig = {
  apiKey: "AIzaSyBzntHN0NF6-8w_KH5BlEgImW8OGIlzTEc",
  authDomain: "giftsandmemes.firebaseapp.com",
  projectId: "giftsandmemes",
  storageBucket: "giftsandmemes.appspot.com",
  messagingSenderId: "319898343505",
  appId: "1:319898343505:web:511e24f0584f4442e48070",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function singInWithGoogle() {
  const Provider = new GoogleAuthProvider();
  return signInWithPopup(auth, Provider);
}

export function singInWithEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function singUpWithEmailAndPassword(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function userSendPasswordResetEmail(email) {
  return sendPasswordResetEmail(auth, email);
}

export function userSignOut() {
  return signOut(auth);
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.getIdToken();
}

export function getCurrentUserEmail() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.email;
}

export function changePassword(newPassword) {
  const auth = getAuth();

  const user = auth.currentUser;
  console.log(user);
  console.log(newPassword);
  updatePassword(user, newPassword)
    .then(() => console.log("contraseña cambiada"))
    .catch(() => console.log("contraseña no cambiada"));
}

export async function reauthenticate(password) {
  const user = auth.currentUser;
  const credential = EmailAuthProvider.credential(
    auth.currentUser.email,
    password
  );
  return reauthenticateWithCredential(user, credential);
}
