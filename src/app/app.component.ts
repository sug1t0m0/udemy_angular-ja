import { Component } from '@angular/core';

import {Comment} from "./class/comment";
import {User} from "./class/user";

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
  comments = COMMENTS;
  currentUser = CURRENT_USER;
}
