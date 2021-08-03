import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



export class RegisterModel
{
  email?:string;
  password?:string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:RegisterModel=new RegisterModel();
  constructor(private _auth:AuthService,private _router:Router) { }
  registerUser()
  {
   this._auth.registerUser(this.registerUserData)
   .subscribe(res=>
    {
     localStorage.setItem('token',res.token);
     this._router.navigate(['/special']);
    },err=>console.log(err))
  }

  ngOnInit(): void {
  }

}
