import { Component, OnInit, Input,AfterViewInit,OnChanges } from '@angular/core';
import {GoogleMapService} from '../../services/google-map.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  
   result : any ={};
   lat: number = 45.5807879;
   lng: number = -73.59762359999999;
   zoom: number = 15;
   private _postalcode: string;
  constructor(private googleService:GoogleMapService) {}
  
ngAfterViewInit(){}
ngOnInit()	{}

get postalcode(): string {
    // transform value for display
    return this._postalcode;
  }
  
  @Input()
  set postalcode(code: string) {
    console.log('prev value: ', this._postalcode);
    console.log('got code: ', code);
    this._postalcode = code;
  }

ngOnChanges(){ 
    this.googleService.getLatLong(this._postalcode).subscribe(
    
   res=>{

    console.log("postalcode--->  "+this.postalcode);
    this.result= JSON.parse(JSON.parse(JSON.stringify(res))._body).results
    this.lat=this.result[0].geometry.location.lat;
    this.lng=this.result[0].geometry.location.lng;
   console.log("Latitude  "+ this.result[0].geometry.location.lat);
   console.log("lngitude  "+this.result[0].geometry.location.lng);
   },
   err=>{
     console.log("Erro no google Map");
   }

  )

   }

}
