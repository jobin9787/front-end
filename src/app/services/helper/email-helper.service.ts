import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Message} from '../../models/message';
import {AppConst} from '../../const/app-const';
@Injectable()
export class EmailHelperService {

  constructor(private http: Http) { }
  private serverPath:string = AppConst.serverPath;

  sendEmail(messageToSend:Message){

    let headers = new Headers ({
      'Content-Type': 'application/json'
        });

    let url = this.serverPath + "/user/sendmessage";
    let msgEmail = {
      "sender" : messageToSend.sender,
      "name" :messageToSend.name,
      "email" : messageToSend.email,
      "text" : messageToSend.text
        };
 console.log(' msgEmail'+ JSON.stringify(msgEmail));
    return this.http.post(url, JSON.stringify(msgEmail),{headers:headers} );


  }
}
