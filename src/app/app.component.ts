import { Component } from '@angular/core';

import { Comment } from "./class/comment";
import {User} from "./class/user"
import {Observable} from "rxjs";
import {AngularFireDatabase, AngularFireList, SnapshotAction, snapshotChanges} from "@angular/fire/database";
import {map} from "rxjs/operators";

const CURRENT_USER: User = new User(1, "AAA aaa")
const ANOTHER_USER: User = new User(2, "BBB bbb")


@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  comments$: Observable<Comment[]>;
  commentsRef: AngularFireList<Comment>;
  currentUser = CURRENT_USER;
  comment = '';

  constructor(private db: AngularFireDatabase) {
    this.commentsRef = db.list('/comments');
    this.comments$ = this.commentsRef.snapshotChanges()
      .pipe(
        map((snapshots: SnapshotAction<Comment>[])=>{
          return snapshots.map(snapshot =>{
            const value = snapshot.payload.val()
            return new Comment({key: snapshot.payload.key, ...value})
          })
        })
      );
  }

  addComment(comment: string): void {
    if (comment){
      this.commentsRef.push(new Comment({user: this.currentUser, message: comment}));
      this.comment = '';
    }
  }

  updateComment(comment: Comment): void {
    const {key, message} = comment;
    if (key){
      this.commentsRef.update(key, {message})
    }
  }

  deleteComment(comment: Comment): void{
    this.commentsRef.remove(comment.key)
  }

}
