import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "./moj-config";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlinePGP';

  constructor(private httpKlient : HttpClient,private router:Router) { }

  LogOutFunction() {
    localStorage.clear();
    this.router.navigateByUrl("/login")
  }
}
