import { Injectable } from '@angular/core';

@Injectable()
export class LabelService {



  getColorLabels(label:string){
     return this.colorLabelsMap.get(localStorage.getItem('language')).get(label);
   }


  constructor() { }

}
