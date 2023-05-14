import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import {FormBuilder, FormGroup , Validators} from '@angular/forms'
import { IUser } from 'src/app/shared/models/IUser';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit{

  @Input() userDetails:IUser
  updateUserForm:FormGroup;
  submitted = false;


  registerForm: FormGroup;
  constructor(private FB: FormBuilder, private userService: UserService,private location: Location){
  }

  

  ngOnInit() {

    this.updateUserForm = this.FB.group({
      fullName: [this.userDetails.fullName, Validators.required],
      displayName: [this.userDetails.displayName, Validators.required],
      email: [this.userDetails.email, [Validators.required, Validators.email]],
      details: [this.userDetails.details, [Validators.required, Validators.minLength(8)]]
    });
  }

  get controls() {return this.updateUserForm.controls;}
  
  onUpdate() {
    this.submitted = true;
    if (this.updateUserForm.invalid) {
        return;
    }
    this.userService.updateUser({id:this.userDetails['id'],...this.updateUserForm.value})
    this.location.back();
    alert('Updated list')
  }
}
