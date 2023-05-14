// for user type
export interface IUser {
    id:number;
    fullName:string;
    displayName:string;
    email:string;
    details:string;
}

// for userlist which contains user array

export interface IUserList {
    users: IUser[]
}

// for sorting types
export type IUserSortBy = "displayName" | "id";

// magic strings for user details
export const USER_DETAILS = {
    "ID" : "id",
    "FULLNAME" : "fullName",
    "DISPLAYNAME" : "displayName",
    "EMAIL" : "email",
    "DETAILS" : "details"
}


// "id" | "fullName" | "displayName" | "email" | "details";