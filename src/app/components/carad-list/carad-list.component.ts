	import { Component, OnInit, ViewChild  } from '@angular/core';
	import { Carad } from '../../models/carad';
	import {CarmakeService} from '../../services/helper/carmake.service';
	import { Carmake } from '../../domain/Carmake';
	import { Carmodel } from '../../domain/carmodel';
	import { Search } from '../../models/search';
	import {CarAdService} from '../../services/car-ad.service';
	import {Params, ActivatedRoute, Router} from '@angular/router';
	import {Http} from '@angular/http';
	import {AppConst} from '../../const/app-const';


  import {DataSource} from '@angular/cdk/collections';
  import {Observable} from 'rxjs/Observable';
  import 'rxjs/add/observable/of';
 @Component({
	  selector: 'app-carad-list',
	  templateUrl: './carad-list.component.html',
	  styleUrls: ['./carad-list.component.css']
	})


	export class CaradListComponent implements OnInit {
	  public filterQuery = "";
	  public rowsOnPage = 5;
	  allCarmake: Carmake[];
	  modellist: Carmodel[];
	  private search:Search = new Search();
	  private selectedCarad : Carad;
	  private caradList : Carad[];
	  private serverPath:string = AppConst.serverPath;
	  constructor(
	  private carAdService: CarAdService,
	  private router: Router,
	  private http:Http,
	  private route: ActivatedRoute,
	  private carmakeService: CarmakeService
	  ) { }


	  onSelect(carad:Carad){
	   this.selectedCarad=carad;
     this.router.navigate(['/caradDetail',this.selectedCarad.id]);
	   }


     onKeywordSearch(){
      this.carAdService.sendAdSearch(this.search).subscribe(
    res=>{
      console.log('Succes' + JSON.stringify(res));
      this.caradList=res.json();
       this.caradList=res.json()
		     this.router.navigate(['/caradList',this.caradList]);
     },
    error=>{
     console.log('Error '+ error);
     }

    );

     }


		  ngOnInit() {
		  this.allCarmake = this.carmakeService.getCarmake();
		  this.route.queryParams.subscribe(params => {
		  if(params['caradList']){
			console.log("Filtred car ad list");
			this.caradList=JSON.parse(params['caradList']);
		   }else{
		     this.carAdService.getCaradList().subscribe(
		     res=>{
		     console.log(res.json());
		     this.caradList=res.json()
		    },
		     err=>{
		     console.log(err);
		     }
		 	)
		     }
		   });

		  }

    onMakeChange(makeid){
      console.log('onMakeChange '+ this.search.element1);
      this.modellist=[];
      this.modellist=this.carmakeService.getCarmodel(this.search.element1);

      console.log('modellist '+ JSON.stringify(this.modellist));
      return this.modellist;
     }



	onSubmit(){
     console.log("Send search key" + this.search);

      this.carAdService.sendAdSearch(this.search).subscribe(
      res=>{
        console.log('Succes' + JSON.stringify(res));
      },
      error=>{
      console.log('Error '+ error);
      }

     );
     }

   getCarLabel(label:string){
   console.log("call label function ---> "+ this.carmakeService.getCarLabels(label));
    return this.carmakeService.getCarLabels(label);
   }

	}
