import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { EditUserComponent } from './edit-user.component';
import { UserService } from 'src/app/shared/services/user.service';
import { IUser } from 'src/app/shared/models/IUser';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  let userService: UserService;
  let location: Location;
  let userDetails: IUser

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder, UserService, Location],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    location = TestBed.inject(Location);

    // mock data
    userDetails = {
      id: 1,
      fullName: 'John Doe',
      displayName: 'John',
      email: 'john@example.com',
      details: 'Some details',
    };
    component.userDetails = userDetails;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has Edit User header', () => {
    const header = fixture.nativeElement as HTMLElement;
    const h5 = header.querySelector('h5');
    expect(h5?.textContent).toBe('Edit User Details')
  })

  it('should initialize the form with user details', () => {
    expect(component.updateUserForm.value.fullName).toEqual(userDetails.fullName);
    expect(component.updateUserForm.value.displayName).toEqual(userDetails.displayName);
    expect(component.updateUserForm.value.email).toEqual(userDetails.email);
    expect(component.updateUserForm.value.details).toEqual(userDetails.details);
  });


  it('should call updateUser method when onUpdate is called', () => {
    spyOn(userService, 'updateUser');
    spyOn(location, 'back');
    spyOn(window, 'alert');

    component.onUpdate();

    expect(userService.updateUser).toHaveBeenCalledWith({
      id: 1,
      fullName: 'John Doe',
      displayName: 'John',
      email: 'john@example.com',
      details: 'Some details',
    });
    expect(location.back).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Updated list');
  });

  it('should mark fullName field as invalid if it is empty', () => {
    const fullNameControl = component.updateUserForm.controls['fullName'];

    fullNameControl.setValue(''); 

    expect(fullNameControl.valid).toBeFalsy();
    expect(fullNameControl?.errors?.['required']).toBeTruthy();

  });

  it('should mark displayName field as invalid if it is empty', () => {
    const displayNameControl = component.updateUserForm.controls['displayName'];

    displayNameControl.setValue(''); 

    expect(displayNameControl.valid).toBeFalsy();
    expect(displayNameControl?.errors?.['required']).toBeTruthy();

  });

  it('should mark email field as invalid if it is empty', () => {
    const emailControl = component.updateUserForm.controls['email'];

    emailControl.setValue(''); 

    expect(emailControl.valid).toBeFalsy();
    expect(emailControl?.errors?.['required']).toBeTruthy();

  });

  it('should mark email field as invalid if it is entered wrong', () => {
    const emailControl = component.updateUserForm.controls['email'];

    emailControl.setValue('@sdas'); 

    expect(emailControl.valid).toBeFalsy();
    expect(emailControl?.errors?.['email']).toBeTruthy();
    
  });

  it('should mark details field as invalid if it is empty', () => {
    const detailsControl = component.updateUserForm.controls['details'];

    detailsControl.setValue(''); 

    expect(detailsControl.valid).toBeFalsy();
    expect(detailsControl?.errors?.['required']).toBeTruthy();

  });

  it('should mark details field as invalid if it is empty', () => {
    const detailsControl = component.updateUserForm.controls['details'];

    detailsControl.setValue('abc'); 

    expect(detailsControl.valid).toBeFalsy();
    expect(detailsControl?.errors?.['minlength']).toBeTruthy();

  });
});