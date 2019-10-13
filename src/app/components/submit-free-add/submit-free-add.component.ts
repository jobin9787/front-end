import { Component, OnInit } from '@angular/core';
import { Freead } from '../../models/freead';
import {GivefreeService} from '../../services/givefree.service';
import {UploadImageService} from '../../services/upload-image.service';
import {AppConst} from '../../const/app-const';
import { Response } from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-submit-free-add',
  templateUrl: './submit-free-add.component.html',
  styleUrls: ['./submit-free-add.component.css']
})
export class SubmitFreeAddComponent implements OnInit {

  public givrfree:Freead= new Freead();
  private serverPath:string = AppConst.serverPath;
 areaList=[{value:'',name:''}]
  constructor(public freeService:GivefreeService, public uploadImageService: UploadImageService,private router: Router)
  { }

  ngOnInit() {
  }

  onSubmit(){
  console.log("Submit give free");
  this.freeService.sendAd(this.givrfree).subscribe(
    (res:Response)=>{
   this.uploadImageService.upload(this.serverPath+"/givefree/add/image?id=",JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
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
