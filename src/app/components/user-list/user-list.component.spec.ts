import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IUser } from 'src/app/shared/models/IUser';
import { UserService } from 'src/app/shared/services/user.service';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let USERS:IUser[];
  let userServiceSpy: jasmine.SpyObj<UserService>;
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UserService', ['users$']);

    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      providers: [ { provide: UserService, useValue: spy }]
    })
    .compileComponents();
    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;

    USERS = [
      {"id": 1,"fullName": "John Wick","displayName": "John W.","email": "John@wick.com","details": "Lorem ipsum"},
      {"id": 2,"fullName": "John Snow","displayName": "John S.","email": "John@snow.com","details": "Lorem ipsum"},
    ]
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
