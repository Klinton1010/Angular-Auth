import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any,next:any){
    //Creating a Object for AuthService in another way due to cylic dependency injection issue
    let authservice=this.injector.get(AuthService);
    let tokenizedReq=req.clone(
      {setHeaders:{
        Authorization:`Bearer ${authservice.getToken()}`
      }}
    );
    console.log(tokenizedReq);
    return next.handle(tokenizedReq);
  }
}
