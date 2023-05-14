# UserApp

This project is for showcasing data into table from object. 
We can view specific user and also edit user 

## Installation
Clone project and run below command 
```bash
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding


## Features 

 - View user list table feteched from service  
 - We can sort user list table by clicking on "ID" and "User Name" table headers 
 - On click on "View Details" link it will open details view of user profile 
 - In User profile we can edit user by clicking on "Edit" button 
 - Edit user page will show pre filed selected uses data in form and after updating filed page will redirect to main user list page with "Updated list" alert message.



## Tech Stack

Angular 15, Typescript, RxJS, Bootstrap 5 



## Possible Improvements

To run this project, you will need to add the following environment variables to your .env file

`Sorting Logic : Need to work on sorting logic also in UI where user can understand on UI with arrows`

`Notification : can add better notification to show user that data is updated`

`Email Masking : Need to work on pipe to hide email id better way` 


## Struggles 

- Updating data into array and reflecting on UI (resolved by using BehaviorSubject)
