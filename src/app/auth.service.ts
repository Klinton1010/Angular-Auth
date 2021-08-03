import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _registerUrl='http://localhost:3000/api/register'
  public _loginUrl='http://localhost:3000/api/login'
  constructor(public http:HttpClient,public _route:Router) { 
    
  }

  //Getting input from user and post the data in DB using Rest API
  registerUser(user:any)
  {
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(user:any)
  {
    return this.http.post<any>(this._loginUrl,user);
  }

  //Return true if token is found in Local storage otherwise it will return False
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  logOutUser()
  {
    localStorage.removeItem('token')
    this._route.navigate(['/events'])
  }
  getToken()
  {
    return localStorage.getItem('token');
  }
}
