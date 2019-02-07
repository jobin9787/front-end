import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
public loggedIn : boolean;
public langcode:string='en';
  constructor(private loginService : LoginService,
              private translate: TranslateService ) {
              translate.setDefaultLang('en'); }

useLanguage(language: string) {
                  localStorage.setItem('language', language);
                  this.langcode=language;
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

     console.log('language --->  '+navigator.language);

     if (navigator.language != "fr") {
         useLanguage("en")
       }else{
            useLanguage("fr");
       }
  }

}
