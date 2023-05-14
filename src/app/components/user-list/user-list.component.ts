import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import { IUser, IUserSortBy, } from 'src/app/shared/models/IUser';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit , OnDestroy{

  userDataSubscription: Subscription;

  userData: IUser[] = [];

  ascending:boolean = true;

  constructor(private userService:UserService){
  }
  

  ngOnInit(){
    this.userDataSubscription = this.userService.users$.subscribe(
      {
        next: data => this.userData = data,
        error: err => console.warn(err)
      }
    );    
  }

  onSort(sortBy: IUserSortBy) {
    this.ascending = !this.ascending;
    this.userData = this.userData.sort((a, b) => {
      if(this.ascending){
        return a[sortBy] > b[sortBy] ? 1 : -1;
      }
      else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    });
  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe()
  }

  
}
