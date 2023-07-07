import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class Constant{
    
    //server url
    public readonly serverUrl:string = 'http://localhost:5000';

    //endpoint names for user handlers
    public readonly postUserData:string = '/api/v1/createUser';
    public readonly getUserData:string = '/api/v1/users';
    public readonly editUserData:string = '/api/v1/updateUser';
}