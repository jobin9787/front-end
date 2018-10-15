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
	) {
		let currentPage = localStorage.getItem('currentPage');
		this.config = {
				currentPage: currentPage ? currentPage : 1 ,
						};

	 }


	onSelect(carad:Carad){
	 this.selectedCarad=carad;
	 this.router.navigate(['/caradDetail',this.selectedCarad.id]);
	 }


	 pageChange(newPage: string) {
			 localStorage.setItem('currentPage', newPage);
			 this.config.currentPage = newPage;
	 }

	 onKeywordSearch(){
		this.carAdService.sendAdSearch(this.search).subscribe(
	res=>{
		console.log('Succes get------->' + JSON.stringify(res));
		this.caradList=res.json();

			 this.router.navigate(['/caradSearch',{ caradList:JSON.stringify(this.caradList)}]);
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
		console.log("Filtred car ad list---> "+ params['caradList']);
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



		 $(document).ready(function(){
		   $("#collapseAdSearch").on("hide.bs.collapse", function(){
		     $(".btn").html('<span class="glyphicon glyphicon-collapse-down"></span> + Options');
		   });
		   $("#collapseAdSearch").on("show.bs.collapse", function(){
		     $(".btn").html('<span class="glyphicon glyphicon-collapse-up"></span> - Options');
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
