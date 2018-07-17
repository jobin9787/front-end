import { Component, OnInit } from '@angular/core';
import { Appad } from '../../models/appad';
import {AppAdService} from '../../services/app-ad.service';
import { Response } from '@angular/http';
import { Router} from '@angular/router';


@Component({
  selector: 'app-submit-app-ad',
  templateUrl: './submit-app-ad.component.html',
  styleUrls: ['./submit-app-ad.component.css']
})
export class SubmitAppAdComponent implements OnInit {

public appad : Appad = new Appad();
appList =[{value:1,name:'1 1/2'},
{value:2,name:'2 1/2'}, {value:3,name:'3 1/2'},{value:4,name:'4 1/2'}, {value:5,name:'5 1/2'},
{value:6,name:'6 1/2'}
]
  constructor(private appAdservice:AppAdService, private router: Router) { }

  ngOnInit() {
  }

    onSubmit()
    {

      this.appAdservice.sendAd(this.appad).subscribe(

        (res:Response)=>{
    //   this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
          console.log('Succes' + JSON.stringify(res));
          const data = res.json();
          console.log('Response: ' + JSON.parse(JSON.stringify(data)).id);
         this.router.navigate(['/result']);
        },
        error=>{
        console.log('Error '+ error);
        }

       );


    }

}
