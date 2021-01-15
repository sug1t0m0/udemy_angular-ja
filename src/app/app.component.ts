import { Component } from '@angular/core';

import {Comment} from "./class/comment";

const COMMENTS: Comment[] = [
  {name: 'aaa', message: 'haaaaaaaaaaaa!'},
  {name: 'aaa', message: 'hiiiiiiii!'},
  {name: 'bbb', message: 'huuuuuuuuuu!'},
]

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
}
