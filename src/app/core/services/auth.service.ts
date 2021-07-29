import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.onAuthStateChanged(user => console.log(user))
  }

  login(email: string, password: string): Promise<firebase.auth.UserCredential | void>{
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error =>  {
        console.error(error)
        throw new Error(error)
      })
  }

  logout(): Promise<void> {
    return this.afAuth.signOut()
  }
}
