import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



export class LoginUser
{
  email?:string
  password?:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData:LoginUser=new LoginUser();
  constructor(private _auth:AuthService,private _router:Router) { }

  LoginUser()
  {
    this._auth.loginUser(this.loginUserData)
    .subscribe(res=>
      {
       localStorage.setItem('token',res.token);
       this._router.navigate(['/special']);
      },err=>console.log(err))
    //console.log(this.loginUserData)
  }
  ngOnInit(): void {
  }

}
