import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MojConfig} from "../moj-config";

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent implements OnInit {
  ime:string='Amar';
  eventPodaci: any;
  eventVisiblity: boolean = false;
  tok:any;
  constructor(private httpKlijent: HttpClient) {
  }

  testirajWebApi(): void {
   // let mojtoken = localStorage.getItem("autentifikacija-tokenTest");
    // @ts-ignore
    this.httpKlijent.get(MojConfig.adresa_servera+"/Event/GetAllEvents", MojConfig.http_opcije()).subscribe(x => {
      this.tok = MojConfig.http_opcije()
      if(x!=null &&  this.tok!='BadToken') {
        this.eventPodaci = x;
        this.eventVisiblity=true;
      }
      else {
        alert("Da biste pristupili Eventima morate se logirati, Hvala");
        this.eventVisiblity=false;
      }
    });
  }
//{headers: {"autentifikacija-tokenTest": mojtoken}}

  ngOnInit(): void {
    this.testirajWebApi();
  }
}
