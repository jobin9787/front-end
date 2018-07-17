import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
private loggedIn : boolean;
  constructor(private loginService : LoginService,
              private translate: TranslateService ) {
              translate.setDefaultLang('en'); }

useLanguage(language: string) {
                  this.translate.use(language);
              }

  logout(){
  this.loginService.logout().subscribe(
    res=>{
     location.reload();
    },
    err=>{
     console.log();

    }
  );
  }

  ngOnInit() {
   this.loginService.checkSession().subscribe(
    res => {
    this.loggedIn=true;

    },
    err=>{
     this.loggedIn=false;
     console.log(err);
    }

   );

  }

}
