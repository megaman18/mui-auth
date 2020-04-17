import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyAtWNsINpSQVM1PbLiTwDzrsIGTjX52P9g",
  authDomain: "dbdb-73584.firebaseapp.com",
  databaseURL: "https://dbdb-73584.firebaseio.com",
  projectId: "dbdb-73584",
  storageBucket: "dbdb-73584.appspot.com",
  messagingSenderId: "706871093349",
  appId: "1:706871093349:web:f56b1124042a92f1a5be8c",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.auth.signOut();
  }
  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }
  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
  getCurrentUserName() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}
export default new Firebase();
