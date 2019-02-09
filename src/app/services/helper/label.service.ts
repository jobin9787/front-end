import { Injectable } from '@angular/core';
import {AreaCode} from '../../const/data-area';

@Injectable()
export class LabelService {
private areaCodeMaps=AreaCode.AreaCodeMaps;


  getAreaCodeLabels(label:string){
     return this.areaCodeMaps.get(localStorage.getItem('language')).get(label);
   }


  constructor() { }

}
