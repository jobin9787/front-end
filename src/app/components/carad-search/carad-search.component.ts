  import { Component, OnInit } from '@angular/core';
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
    selector: 'app-carad-search',
    templateUrl: './carad-search.component.html',
    styleUrls: ['./carad-search.component.css']
  })
  export class CaradSearchComponent implements  OnInit {
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
    	let lcaradList : Carad[];
     lcaradList = JSON.parse(localStorage.getItem("caradList"));
     console.log("got the following lsit --->" + JSON.stringify(lcaradList));

    if (lcaradList){
      this.caradList=lcaradList;
    }
     }


  	onSelect(carad:Carad){
      console.log("la liste  a enregistrer--->" + JSON.stringify(this.caradList));
       localStorage.setItem('caradList', JSON.stringify(this.caradList));
  	 this.selectedCarad=carad;
  	 this.router.navigate(['/caradDetail',this.selectedCarad.id]);
  	 }


  	 pageChange(newPage: string) {
  			 localStorage.setItem('currentPage', newPage);
  			 this.config.currentPage = newPage;

  	 }

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
