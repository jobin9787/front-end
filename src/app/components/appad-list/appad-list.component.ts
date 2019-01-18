import { Component, OnInit } from '@angular/core';
import {Appad} from '../../models/appad';
import {AppAdService} from '../../services/app-ad.service';
import {CarAdService} from '../../services/car-ad.service';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import {AppConst} from '../../const/app-const';
import {Search} from '../../models/search';
declare var $: any;
@Component({
  selector: 'app-appad-list',
  templateUrl: './appad-list.component.html',
  styleUrls: ['./appad-list.component.css']
})
export class AppadListComponent implements OnInit {
selectedAppad : Appad;

 public search:Search = new Search();
public serverPath: string = AppConst.serverPath;
public config:any;
appadList : Appad[];
appList =[{value:1,name:'1 1/2'},
{value:2,name:'2 1/2'}, {value:3,name:'3 1/2'},{value:4,name:'4 1/2'}, {value:5,name:'5 1/2'},
{value:6,name:'6 1/2'}
]

areaList=[{value:1, name:'Pointe-aux-Trembles'},
{value:2, name:'Saint-Michel'},
{value:3, name:'Downtown Montreal'},
{value:4, name:'Notre-Dame-de-Grâce'},
{value:5, name:'Montréal-Nord'}]
  constructor(private appAdservice:AppAdService,
    private router: Router,
    private http:Http,
    private route: ActivatedRoute) {

  		let currentPage = localStorage.getItem('currentPage');
  		this.config = {
  				currentPage: currentPage ? currentPage : 1 ,
  						};

    let lappadList : Appad[];
  	 lappadList = JSON.parse(localStorage.getItem("appadList"));
  				if (lappadList){
  					this.appadList=lappadList;
  						}

  	 }

  ngOnInit() {
               this.appAdservice.getAll().subscribe(
                  res=>{
                         this.appadList =res.json();
                         console.log(this.appadList);
                        },
                  err=>{
                         console.log(err)
                        }
                 );

               $(document).ready(function(){
                       $("#collapseAdSearch").on("hide.bs.collapse", function(){
                         $("#optionsec").html('<span class="glyphicon glyphicon-collapse-down"></span> + Options');
                       });
                       $("#collapseAdSearch").on("show.bs.collapse", function(){
                         $("#optionsec").html('<span class="glyphicon glyphicon-collapse-up"></span> - Options');
                       });
                     });
        }


   getAppLabel(label: number){
       return this.appList[label];
     }


  onSelect(appad:Appad){
      this.selectedAppad=appad;
    	localStorage.setItem('caradList', JSON.stringify(this.appadList));
     this.router.navigate(['/appadDetail',this.selectedAppad.id]);
   }

   pageChange(newPage: string) {
       localStorage.setItem('currentPage', newPage);
       this.config.currentPage = newPage;
   }


  onKeywordSearch(){
          	      localStorage.setItem('currentPage', '1');
       		        this.config.currentPage = 1;
       		  		  this.appAdservice.sendAdSearch(this.search).subscribe(
       		       	 res=>{
             		  		console.log('Succes' + JSON.stringify(res));
             		  		this.appadList=res.json();
       		  		    },
             		  	error=>{
             		  	 console.log('Error '+ error);
             		  	 }
             		  	);
       	            }

}
