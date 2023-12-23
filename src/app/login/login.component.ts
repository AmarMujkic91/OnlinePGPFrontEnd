import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "../moj-config";
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  txtLozinka: any;
  txtKorisnickoIme: any;
  noviToken: any;

  constructor(private httpKlient : HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  btnLogin() {
    let podaci={
      KorisnickoIme:this.txtKorisnickoIme,
      Lozinka:this.txtLozinka
    };
      this.httpKlient.post(MojConfig.adresa_servera + '/Autentifikacija/Login/', podaci).subscribe((token:any)=>{
        if(token!=null){
          alert("Token je : " + token.vrijednost);
          localStorage.setItem("autentifikacija-tokenTest",token.vrijednost);
          this.router.navigateByUrl("/home")
        }
        else
        {
          alert("Neispravan Login")
        }
    })
  }
}
