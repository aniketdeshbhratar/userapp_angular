import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'userlist', 
    pathMatch: 'full' 
  },
  {
    path:'userlist',
    component: UserListComponent,
  },
  {
    path:'userdetails/:id',
    component: UserDetailsComponent,
    children: [
      {path:'edituser', component: EditUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
