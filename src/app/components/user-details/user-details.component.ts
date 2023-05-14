import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/shared/models/IUser';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit , OnDestroy {

  isEditUserVisible:boolean = false;
  currentUser:any;
  userServiceSubscription:Subscription;
  constructor(private route: ActivatedRoute,private userService: UserService){
    
  }

  ngOnInit(){
    const id = this.route.snapshot.params['id'];

    this.userServiceSubscription = this.userService.users$.subscribe(data => {
      this.currentUser = data[`${id-1}`]
    })
  }

  onEdit(){
    this.isEditUserVisible = true;
  }

  ngOnDestroy(): void {
    this.userServiceSubscription.unsubscribe()
  }
}
