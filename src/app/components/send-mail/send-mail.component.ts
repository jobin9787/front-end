import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../../models/message';
import {EmailHelperService} from '../../services/helper/email-helper.service';
@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
private _userEmail : string;
private clientEmail : string;

private outgoingMassge : Message = new Message();
  constructor(private emailSender: EmailHelperService) { }


 get userEmail(): string {
   return this._userEmail;
 }

 @Input()
 set userEmail(email:string){
   this._userEmail=email;
   this.outgoingMassge.email=email;
 }
  ngOnInit() {
  }

  onSendMessage(){

   this.emailSender.sendEmail(this.outgoingMassge).subscribe(
     res=>{
       console.log('Message was sent');
     },
     err=>{
       console.log('Error: '+ err)
     }

   )

  }

}
