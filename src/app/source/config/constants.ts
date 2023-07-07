import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class Constant{
    
    //server url
    public readonly serverUrl:string = 'http://localhost:5000';

    //endpoint names for user handlers
    public readonly postUserData:string = '/vendata/newUser';
    public readonly getUserData:string = '/vendata/usersDetails';
    public readonly editUserData:string = '/vendata/editUser';
}