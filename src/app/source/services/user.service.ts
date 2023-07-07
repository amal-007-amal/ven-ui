import { Injectable } from '@angular/core';
import { Constant } from '../config/constants';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private baseUrl: Constant,
    private http: HttpClient
  ) { }

  //http options
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  /**
   * @param payload
   * @returns success
   * create new user with the details 
   */

  creatUser(payload: any): Observable<any> {
    return this.http.post<any>(this.baseUrl.serverUrl + this.baseUrl.postUserData, payload,this.httpOptions)
  }

  /**
   * get all the users list 
   * @returns users list
   */
  getUsers():Observable<any>{
    return this.http.get<any>(this.baseUrl.serverUrl + this.baseUrl.getUserData,this.httpOptions)
  }

  /**
   * edit user details
   * @param payload
   * @return success
   */

  editUser(payload:any):Observable<any>{
    return this.http.post<any>(this.baseUrl.serverUrl + this.baseUrl.editUserData,payload,this.httpOptions)
  }
}
