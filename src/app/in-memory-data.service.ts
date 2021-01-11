import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {MEMBERS} from "./mock-members";
import {Member} from "./member";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const members = MEMBERS
    return {members}
  }

  genId(members: Member[]): number {
    return members.length > 0 ? Math.max(...members.map((member)=>member.id)) + 1: 11
  }
}
