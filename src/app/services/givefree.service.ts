import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {AppConst} from '../const/app-const';
import {Freead} from '../models/freead';

@Injectable()
export class GivefreeService {


    constructor(private http:Http) {}
    private serverPath:string = AppConst.serverPath;


    sendAd(freead:Freead){
      console.log("Submit give free service");
      let url = this.serverPath+'/givefree/add';
      console.log('Car add-->' + JSON.stringify(freead));
      let headers = new Headers ({
        'Content-Type': 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
      return this.http.post(url, JSON.stringify(freead), {headers: headers});
    }


    getFreeList(){
      let url = this.serverPath+'/givefree/freeList';
      let headers = new Headers ({
        'Content-Type': 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });

      return this.http.get(url, {headers: headers});
    }



}
