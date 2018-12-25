import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {UserService} from '../../services/user.service';
import {AppConst} from '../../const/app-const';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

private serverPath = AppConst.serverPath;
public loginError:boolean = false;
public loggedIn=false;
public credential ={'username':'','password':''};
public emailSent:boolean=false;

public usernameExists:boolean;
public emailExists:boolean;
public username:string;
public password:string;

 emailNotExists:boolean=false;
 forgetPasswordEmailSent:boolean;
 email:string;
 recoverEmail:string;


  constructor(
   private loginService: LoginService,
   private userService :UserService,
   private router :Router
  ) { }


onLogin(){

	this.loginService.sendCredential(this.credential.username,this.credential.password).subscribe(
     res => {
  			console.log(res);
  			localStorage.setItem("xAuthToken", res.json().token);
  			this.loggedIn = true;
  			location.reload();
  			this.router.navigate(['/home']);
  		},
  		error => {
  			this.loggedIn = false;
  			this.loginError = true;
  		}
	);
}

/*
onSubmit() {
    this.loginService
      .sendCredential(this.credential.username, this.credential.password)
      .subscribe(
        res => {
          localStorage.setItem('xAuthToken', res.json().token);
          this.loggedIn = true;
          const encodedCredentials = btoa(this.credential.username + ':' + this.credential.password);
          localStorage.setItem('credentials', encodedCredentials);
          // location.reload();
        },
        error => {
          console.log(error);
        }
      );
  }*/

onNewAccount() {
  	this.usernameExists = false;
  	this.emailExists = false;
  	this.emailSent = false;

  	this.userService.newUser(this.username, this.email).subscribe(
  		res => {
  			console.log(res);
  			this.emailSent = true;
  		},
  		error => {
  			console.log(error.text());
  			let errorMessage = error.text();
  			if(errorMessage==="UserNameExist") this.usernameExists=true;
  			if(errorMessage==="EmailExist") this.emailExists=true;

  		}
  	);
  }


  onForgetPassword() {
  	this.forgetPasswordEmailSent = false;
  	this.emailNotExists = false;

  	this.userService.retrievePassword(this.recoverEmail).subscribe(
  		res => {
  			console.log(res);
  			this.forgetPasswordEmailSent = true;
  		},
  		error => {
  			console.log(error.text());
  			let errorMessage = error.text();
  			if(errorMessage==="Email not found") this.emailNotExists=true;
  		}
  	);
  }
    ngOnInit() {
  	this.loginService.checkSession().subscribe(
  		res => {
  			this.loggedIn = true;
  		},
  		error => {
  			this.loggedIn = false;
  		}
  	);
  }
}
