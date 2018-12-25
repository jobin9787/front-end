import { Injectable } from '@angular/core';
import {Appad} from '../models/appad';
import {Http,Headers} from '@angular/http';
import {AppConst} from '../const/app-const';
import {Search} from '../models/search';


@Injectable()
export class AppAdService {
  private serverPath:string = AppConst.serverPath;
  constructor(private http:Http) { }


  sendAd(appad:Appad) {
  let url = this.serverPath+'/appad/add';
  console.log('App ad-->' + JSON.stringify(appad));
  let headers = new Headers ({
    'Content-Type': 'application/json',
    'x-auth-token' : localStorage.getItem('xAuthToken')
  });
  return this.http.post(url, JSON.stringify(appad), {headers: headers});
}


getAll(){
let url = this.serverPath+'/appad/listAll';
let headers = new Headers ({
  'Content-Type': 'application/json',
  'x-auth-token' : localStorage.getItem('xAuthToken')
});

return this.http.get(url, {headers: headers});
}


getAppad(id: Number){
  let url = this.serverPath+"/appad/"+id;
  let headers = new Headers ({
  'Content-Type':'application/json'
  ,'x-auth-token':localStorage.getItem('xAuthToken')
   });
  return this.http.get(url, {headers:headers});
      //return this.http.get(url);
 }

 sendAdSearch(search:Search){
  let url = this.serverPath+'/appad/searchAppad/key';
  let headers = new Headers ({
  'Content-Type':'application/json',
  'x-auth-token':localStorage.getItem('xAuthToken')
   });

   return this.http.post(url,search, {headers:headers});
  //return this.http.post(url,search);
 }



}
