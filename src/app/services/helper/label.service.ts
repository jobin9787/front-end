import { Injectable } from '@angular/core';
import {AreaCode} from '../../const/car-labels';

@Injectable()
export class LabelService {
private areacodeMap=AreaCode.AreaCodeMap;


  getAreaCodeLabels(label:string){
     return this.areaCodeMap .get(localStorage.getItem('language')).get(label);
   }


  constructor() { }

}
