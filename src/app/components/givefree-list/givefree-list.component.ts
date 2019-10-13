import { Component, OnInit } from '@angular/core';
import { Freead } from '../../models/freead';
import {GivefreeService} from '../../services/givefree.service';

@Component({
  selector: 'app-givefree-list',
  templateUrl: './givefree-list.component.html',
  styleUrls: ['./givefree-list.component.css']
})
export class GivefreeListComponent implements OnInit {

  public freeList : Freead[] ;

  constructor(private freeService:GivefreeService) {

   }

  ngOnInit() {
     this.freeService.getFreeList().subscribe(
       res=>{
        this.freeList =res.json();
       },
       err=>{
         console.log(err);
       }

     );
  }

  
}
