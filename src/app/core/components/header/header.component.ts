import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user: firebase.User | null) => {
      this.isLogin = !!user;
    })
  }

}
