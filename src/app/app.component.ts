import { Component } from '@angular/core';

import {Comment} from "./class/comment";
import {User} from "./class/user";
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/database";
import {AngularFireList} from "@angular/fire/database/interfaces";

const CURRENT_USER: User = new User(1, 'aaa')
const ANOTHER_USER: User = new User(2, 'bbb')

const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'haaaaa!'),
  new Comment(ANOTHER_USER, 'hiiiiiiii!'),
  new Comment(CURRENT_USER, 'huuuuuuuuuu!'),
  new Comment(CURRENT_USER, 'heeeeeeeeeeeeeeeee!')
]

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // comments = COMMENTS;
  comments$: Observable<Comment[]>;
  commentsRef: AngularFireList<Comment>;
  currentUser = CURRENT_USER;
  comment = '';
  item$: Observable<any>;

  constructor(private db: AngularFireDatabase){
    this.item$ = db.object('/item').valueChanges()
    this.commentsRef = db.list('/comments');
    this.comments$ = this.commentsRef.valueChanges()
  }


  addComment(comment: string): void {
    if(comment){
      this.commentsRef.push(new Comment(this.currentUser, comment))
      this.comment = '';
    }
  }
}
