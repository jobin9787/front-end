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
import {LabelService} from '../../services/helper/label.service'

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
declare var $: any;
@Component({
	selector: 'app-carad-list',
	templateUrl: './carad-list.component.html',
	styleUrls: ['./carad-list.component.css']
})


export class CaradListComponent implements OnInit {

	public filterQuery = "";
	public rowsOnPage = 5;
	public config:any;
	allCarmake: Carmake[];
	modellist: Carmodel[];
	 search:Search = new Search();
	private selectedCarad : Carad;
	 caradList : Carad[];
	private serverPath:string = AppConst.serverPath;
	constructor(
	private carAdService: CarAdService,
	private router: Router,
	private http:Http,
	private route: ActivatedRoute,
	private carmakeService: CarmakeService,
	private labelService: LabelService
	) {

		let currentPage = localStorage.getItem('currentPage');
	 	this.config = {
				currentPage: currentPage ? currentPage : 1 ,
						};

   let lcaradList : Carad[];
	  lcaradList = JSON.parse(localStorage.getItem("caradList"));
				if (lcaradList){
					this.caradList=lcaradList;
						}
	 }

/*
	onSelect(carad:Carad){
	 this.selectedCarad=carad;
	 this.router.navigate(['/caradDetail',this.selectedCarad.id]);
 }*/

 onSelect(carad:Carad){
  	localStorage.setItem('caradList', JSON.stringify(this.caradList));
	  this.selectedCarad=carad;
	  this.router.navigate(['/caradDetail',this.selectedCarad.id]);
	}


	 pageChange(newPage: string) {
			 localStorage.setItem('currentPage', newPage);
			 this.config.currentPage = newPage;
	 }
/*
	 onKeywordSearch(){
		this.carAdService.sendAdSearch(this.search).subscribe(
	res=>{
		console.log('Succes get------->' + JSON.stringify(res));
		this.caradList=res.json();

			// this.router.navigate(['/caradSearch',{ caradList:JSON.stringify(this.caradList)}]);
	 },
	error=>{
	 console.log('Error '+ error);
	 }

	);

}*/



	onKeywordSearch(){
		    localStorage.setItem('currentPage', '1');
		     this.config.currentPage = 1;
		  	 this.carAdService.sendAdSearch(this.search).subscribe(
		    	  res=>{
		  	      	console.log('Succes' + JSON.stringify(res));
		  		      this.caradList=res.json();
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

	      	this.caradList=JSON.parse(params['caradList']);
		    }
		 });

		 $(document).ready(function(){
		   $("#collapseAdSearch").on("hide.bs.collapse", function(){
		     $("#optionsec").html('<span class="glyphicon glyphicon-collapse-down"></span> + Options');
		    });
		   $("#collapseAdSearch").on("show.bs.collapse", function(){
		     $("#optionsec").html('<span class="glyphicon glyphicon-collapse-up"></span> - Options');
		    });
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
		 	 return this.carmakeService.getCarLabels(label);
		  }

		 getBodyTypeLabel(label:string){
			 return this.carmakeService.getBodyTypeLabels(label);
				 }

		 getFuelTypeLabel(label:string){
				 return this.carmakeService.getFuelTypeLabels(label);
		  }

			getAreaLabel(label:string){
				console.log('area ---> '+ label)
				return this.labelService.getAreaCodeLabels(label);
			}

}
