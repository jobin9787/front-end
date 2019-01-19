import { Injectable } from '@angular/core';
import { Carmake } from '../../domain/carmake';
import { Carmodel } from '../../domain/carmodel';
import {CarLabels} from '../../const/car-labels';

@Injectable()
export class CarmakeService {
private LabelsMap = CarLabels.CarLabelsMap;
private colorLabelsMap = CarLabels.ColorLabelsMap;
private transmissionLabelsMap = CarLabels.TransmissionLabelsMap;
private drivetrainLabelsMap = CarLabels.DrivetrainLabelsMap;
private bodyTypeLabelsMap =CarLabels.BodyTypeLabelsMap;
private fuelTypeLabelsMap=CarLabels.FuelTypeLabelsMap;

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

  getColorLabels(label:string){
     return this.colorLabelsMap.get(localStorage.getItem('language')).get(label);
   }

  getTransmissionLabels(label:string){
    return this.transmissionLabelsMap.get(localStorage.getItem('language')).get(label);
  }

  getDrivetrainLabels(label:string){
    return this.drivetrainLabelsMap.get(localStorage.getItem('language')).get(label);
  }


  getBodyTypeLabels(label:string){
    return this.bodyTypeLabelsMap.get(localStorage.getItem('language')).get(label);
  }


  getBodyTypeLabels(label:string){
    return this.fuelTypeLabelsMap.get(localStorage.getItem('language')).get(label);
  }

  constructor() { }



}
