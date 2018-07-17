import { Component, OnInit } from '@angular/core';
import {Appad} from '../../models/appad';
import {AppAdService} from '../../services/app-ad.service';
import {CarAdService} from '../../services/car-ad.service';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import {AppConst} from '../../const/app-const';

@Component({
  selector: 'app-appad-list',
  templateUrl: './appad-list.component.html',
  styleUrls: ['./appad-list.component.css']
})
export class AppadListComponent implements OnInit {
selectedAppad : Appad;
appadList : Appad[];
 applist: string[] = ['','1 1/2', '2 1/2','3 1/2', '4 1/2','5 1/2','6 1/2','7 1/2'];
  constructor(private appAdservice:AppAdService,
    private router: Router,
    private http:Http,
    private route: ActivatedRoute) { }

  ngOnInit() {
     this.appAdservice.getAll().subscribe(
     res=>{
       this.appadList =res.json();
     },
     err=>{
       console.log(err)
     }


     );
  }

 getAppLabel(label: number){
  return this.applist[label];
}


onSelect(appad:Appad){
 this.selectedAppad=appad;
   console.log(this.selectedAppad.id);
 this.router.navigate(['/appadDetail',this.selectedAppad.id]);
 }


}
