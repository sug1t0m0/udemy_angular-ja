import { Component } from '@angular/core';

import {User} from "./class/user"

@Component({
  selector: 'ac-root',
  template: `
    <ac-header></ac-header>
    <div class="page">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
