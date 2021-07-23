import {User} from "./user";

export class Comment {

  user: User;
  message: string;
  date: number;
  key?: string;
  isEditing: boolean;

  constructor(value: any) {

    this.date = Date.now();
    this.user = value.user;
    this.message = value.message;
    this.date = value.date || Date.now();
    if (value.key) {
      this.key = value.key;
    }
  }

}
