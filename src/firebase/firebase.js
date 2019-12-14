import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDpvdq7zIQmSuWpuQUG6mkKn7oRb_xOD0I",
	authDomain: "crown-db-e317b.firebaseapp.com",
	databaseURL: "https://crown-db-e317b.firebaseio.com",
	projectId: "crown-db-e317b",
	storageBucket: "crown-db-e317b.appspot.com",
	messagingSenderId: "911697673901",
	appId: "1:911697673901:web:59e4234cbf6e7d0fad9024",
	measurementId: "G-6CP2GX3SJH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
