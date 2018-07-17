import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';


@Injectable()
export class GoogleMapService {

  constructor(private http:Http) { }

    public getLatLong(postalCod:String){
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + postalCod)
          ;
    }


}
