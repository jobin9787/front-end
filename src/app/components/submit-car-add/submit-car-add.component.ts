  import { Component, OnInit } from '@angular/core';
  import {CarmakeService} from '../../services/helper/carmake.service';
  import { Carmake } from '../../domain/Carmake';
  import { Carmodel } from '../../domain/carmodel';
  import {Carad } from '../../models/Carad';
  import {CarAdService} from '../../services/car-ad.service';
  import {UploadImageService} from '../../services/upload-image.service';
  import {years} from '../../const/data-years';
  import { Router} from '@angular/router';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  import { Response } from '@angular/http';
  import {AppConst} from '../../const/app-const';

  @Component({
    selector: 'app-submit-car-add',
    templateUrl: './submit-car-add.component.html',
    styleUrls: ['./submit-car-add.component.css']
  })
  export class SubmitCarAddComponent implements OnInit {
   allCarmake: Carmake[];
   modelarray: Carmodel[]=[];
   modellist: Carmodel[];
   yearsList =[{value:1,name:'1'}];
   cartransmission :  Map<String,String>;
   modelListMap : Map<String, Carmodel[]>;
    carad:Carad = new Carad();
    private serverPath:string = AppConst.serverPath;
   // carForm: FormGroup;

    constructor(private carmakeService: CarmakeService, private carAdService :CarAdService, public uploadImageService: UploadImageService,private router: Router)
     { }

    ngOnInit(): void{
     this.allCarmake = this.carmakeService.getCarmake();
     this.cartransmission=this.carmakeService.getTransmission()
     this.yearsList=Array.from(years);
     // this.carForm=new FormGroup({
     //  'postalcode': new FormControl(this.carad.postalcode, Validators.required)
     //
     // })
     }


     onSubmit1(){
       console.log('Car add 111 --->' + JSON.stringify( this.carad))
     }


    onSubmit(){
    //  console.log('Car add --->' + this.carad)
     this.carAdService.sendAd(this.carad).subscribe(
      (res:Response)=>{
     this.uploadImageService.upload(this.serverPath+"/carad/add/image?id=",JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
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

    onMakeChange(makeid){
      this.modellist=[];
      this.modellist=this.carmakeService.getCarmodel(this.carad.make);
      return this.modellist;
     }



  initModel() {
  	this.modelarray.push(new Carmodel('civ','Civic'));
  	this.modelarray.push(new Carmodel('acc','Accord'));
  	this.modelarray.push(new Carmodel('pil','pilot'));
  	this.modelListMap.set('hond',this.modelarray);
  	this.modelarray=[];
  	this.modelarray.push(new Carmodel('cor','Corola'));
  	this.modelarray.push(new Carmodel('yar','Yaris'));
  	this.modelarray.push(new Carmodel('cam','Camry'));
  	this.modelListMap.set('toyo',this.modelarray);
      this.modelarray=[];
      this.modelarray.push(new Carmodel('rio','Rio'));
  	this.modelarray.push(new Carmodel('rio','Rio'));
  	this.modelarray.push(new Carmodel('rio','Rio'));
  	this.modelListMap.set('kia',this.modelarray);
  	this.modelarray=[];
   }
  }
