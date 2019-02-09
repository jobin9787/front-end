import { Injectable } from '@angular/core';
import {AreaCode} from '../../const/car-labels';

@Injectable()
export class LabelService {



  getAreaCodeLabels(label:string){
     return this.areaCodeMap .get(localStorage.getItem('language')).get(label);
   }


  constructor() { }

}
