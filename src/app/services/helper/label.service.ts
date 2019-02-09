import { Injectable } from '@angular/core';
import {AreaCode} from '../../const/data-area';

@Injectable()
export class LabelService {
private areacodeMap=AreaCode.AreaCodeMap;


  getAreaCodeLabels(label:string){
     return this.areaCodeMap .get(localStorage.getItem('language')).get(label);
   }


  constructor() { }

}
