import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {AppConst} from '../const/app-const';



@Injectable()
export class LoginService {

    private serverPath:string = AppConst.serverPath;

  constructor(private http:Http, private router:Router) { }

  sendCredential(username: string, password: string) {
    let url = this.serverPath+'/token';
    console.log(url);
  	console.log(username +" " +password);
  	let encodedCredentials = btoa(username+":"+password);
  	let basicHeader = "Basic "+encodedCredentials;
  	let headers = new Headers({
  		'Content-Type' : 'application/x-www-form-urlencoded',
    /*  'Access-Control-Allow-Origin':'http://18.188.26.113',*/
  		'Authorization' : basicHeader
  	});

  	return this.http.get(url, {headers: headers});
  }

    checkSession() {
  	let url = this.serverPath+'/checkSession';
  	let headers = new Headers({
  		'x-auth-token' : localStorage.getItem('xAuthToken')
      /*,'Access-Control-Allow-Origin':'http://18.188.26.113'*/
  	});

  	return this.http.get(url, {headers: headers});
  }
/*
  checkSession() {
    const url = 'http://localhost:8181/checkSession';
    const xToken = localStorage.getItem('xAuthToken');
    const basicHeader = 'Basic ' + localStorage.getItem('credentials');
    const headers = new Headers({
      'x-auth-token' : xToken,
      'Authorization' : basicHeader
    });
    console.log(url);
    console.log(headers);
    return this.http.get(url, {headers: headers});
  }
*/
    logout() {
  	let url = this.serverPath+'/user/logout';
  	let headers = new Headers({
  		'x-auth-token' : localStorage.getItem('xAuthToken')
  	});

  	return this.http.post(url, '', {headers: headers});
  }



}
