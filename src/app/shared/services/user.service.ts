import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { IUser, IUserList } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersList:IUserList = {
    "users": [
      {
        "id": 1,
        "fullName": "John Wick",
        "displayName": "John W.",
        "email": "John@wick.com",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Dolor."
      },
      {
        "id": 2,
        "fullName": "John Snow",
        "displayName": "John S.",
        "email": "John@snow.com",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Dolor."
      },
      {
        "id": 3,
        "fullName": "John Doe",
        "displayName": "John D.",
        "email": "John@doe.com",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Dolor."
      },
      {
        "id": 4,
        "fullName": "John Lennon",
        "displayName": "John L.",
        "email": "John@lennon.com",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Dolor."
      },
      {
        "id": 5,
        "fullName": "John Adams",
        "displayName": "John A.",
        "email": "John@adams.com",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum. Dolor."
      }
    ]
  }
  
  users$ : BehaviorSubject<IUser[]>; 

  constructor() {
    this.users$ = new BehaviorSubject<IUser[]>(this.usersList['users'])
   }

  updateUser(user:IUser){
    this.usersList.users.find((data,index) => {
      if(data.id === user.id){
        this.usersList.users[index] = user
      }
    })
    
    this.users$.next(this.usersList['users']);
  }
}
