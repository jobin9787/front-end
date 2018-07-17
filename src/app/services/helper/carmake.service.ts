import { Injectable } from '@angular/core';
import { Carmake } from '../../domain/carmake';
import { Carmodel } from '../../domain/carmodel';
import {CarLabels} from '../../const/car-labels';

@Injectable()
export class CarmakeService {
private LabelsMap = CarLabels.CarLabelsMap;

   getCarmake(): Carmake[] {
      let carmake = [
		 new Carmake('hond', 'Honda'),
		 new Carmake('toyo', 'Toyota'),
		 new Carmake('kia', 'Kia')
      ]	 
      return carmake;	  
      };

   getCarmodel( makeid:String):   Carmodel[] {
      let carmodelhonda = [
		     new Carmodel('civ','Civic'),
		     new Carmodel('acc','Accord'),
		     new Carmodel('pil','pilot')
        ]	;
   
	 let carmodelkia= [
    new Carmodel('rio','Rio'),
    new Carmodel('rio','Rio'),
    new Carmodel('rio','Rio')
      ] ;
	 
    let carmodeltoyota = [
		new Carmodel('cor','Corola'),
		new Carmodel('yar','Yaris'),
		new Carmodel('cam','Camry')
      ]	;

    let m = new Map();
	      m.set('hond',carmodelhonda);
        m.set('toyo',carmodeltoyota);
        m.set('kia',carmodelkia);
      
     
      return m.get(makeid);	  
   };


  getTransmission(): Map<String,String>{
	    let carTransmission = new Map();
	    carTransmission.set('auto','Automatic');
      carTransmission.set('man','Manual');
      carTransmission.set('oth','Other');
      return carTransmission;
    }

   getCarLabels(label:string){
    return this.LabelsMap.get(label);
   }

   
  constructor() { }



}
