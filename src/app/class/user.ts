import * as firebase from "firebase";

export class User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  initial: string;

  constructor(user: firebase.User) {

    const displayName = user.displayName ?? '';
    this.uid = user.uid;
    this.displayName = displayName
    this.email = user.email ?? '';
    this.photoURL = user.photoURL ?? '';
    this.initial = displayName.slice(0, 1)
  }
}
