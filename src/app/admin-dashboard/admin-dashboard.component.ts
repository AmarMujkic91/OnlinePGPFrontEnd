import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "../moj-config";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  eventVisiblity: boolean = false;
  tok:any;
  logedUserData:any;

  constructor(private httpKlijent: HttpClient) {
  }

  testirajWebApi(): void {
    // let mojtoken = localStorage.getItem("autentifikacija-tokenTest");
    // @ts-ignore
    this.httpKlijent.get(MojConfig.adresa_servera+"/Admin/Index", MojConfig.http_opcije()).subscribe(x => {
      this.tok = MojConfig.http_opcije()
      if(x!=null &&  this.tok!='BadToken') {
        this.eventVisiblity=true;
        this.logedUserData=x;
      }
      else {
        alert("Da bi ste pristupili Administrativnom djelu aplikacije morate se logirati kao Admin, Hvala");
        this.eventVisiblity=false;
      }
    });
  }
//{headers: {"autentifikacija-tokenTest": mojtoken}}

  ngOnInit(): void {
    this.testirajWebApi();
  }
}
