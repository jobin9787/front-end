import { Component, OnInit } from '@angular/core';
import {Appad } from '../../models/appad';
import {AppAdService} from '../../services/app-ad.service';
import {AppConst} from '../../const/app-const';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';

import {
  AccessibilityConfig,
  Action,
  AdvancedLayout,
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy,
  ButtonType,
  Description,
  DescriptionStrategy,
  DotsConfig,
  GridLayout,
  Image,
  ImageModalEvent,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  PreviewConfig
} from 'angular-modal-gallery';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {GoogleMapService} from '../../services/google-map.service';
@Component({
  selector: 'app-appad-detail',
  templateUrl: './appad-detail.component.html',
  styleUrls: ['./appad-detail.component.css']
})
export class AppadDetailComponent implements OnInit {
private appadId : Number;
appad: Appad = new Appad();
private fileNumber : number;
private serverPath: string = AppConst.serverPath;
public imagesArray1: Image[] = [];

public imagesArray: Array<Image> = [];
  constructor(private appAdService:AppAdService,
    private router:Router,
		private http:Http,
		private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.forEach((params:Params)=>{
	     this.appadId= params['id'] ;
   });

  this.appAdService.getAppad(this.appadId).subscribe(
    res=>{
    this.appad=res.json();
    this.fileNumber= JSON.parse(JSON.stringify(res.json())).fileNumber;
    this.imageInit(this.fileNumber);

    },
     err=>{
     console.log(err)
   }

   );
  };


// Image gallery

	  imageInit(fNumber:number){
	     let init:number = 1;
       let index:number=0;
       let myImage:Image;
	   for(let i:number=init;i<=fNumber;i++)
	    {
      console.log('insert image---> '+ i);

	    this.imagesArray.push(
    new  Image(
      i,
       { img:this.serverPath+'/image/appad/'+this.appadId+'/'+this.appadId+i+'.png',
       description: ''  },
      { img: this.serverPath+'/image/appad/'+this.appadId+'/'+this.appadId+i+'.png'}
       )
      )
      index++;
	     }

    this.imagesArray1=   Array.from(this.imagesArray);
	    }

      plainGalleryRowATags: PlainGalleryConfig = {
        strategy: PlainGalleryStrategy.ROW,
        layout: new LineLayout({ width: '95px', height: '63px' }, { length: 17, wrap: true }, 'flex-start'),
        // when advanced is defined, additionalBackground: '50% 50%/cover' will be used by default.
        // I added this here, to be more explicit.
        advanced: { aTags: true, additionalBackground: '50% 50%/cover' }
      };

      customPlainGalleryRowDescConfig: PlainGalleryConfig = {
          strategy: PlainGalleryStrategy.CUSTOM,
          layout: new AdvancedLayout(-1, true)
        };



        openImageModalRowDescription(image: Image) {
          console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
          const index: number = this.getCurrentIndexCustomLayout(image, this.imagesArray1);
          this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
        }

        private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
        return image ? images.indexOf(image) : -1;
      }


}
