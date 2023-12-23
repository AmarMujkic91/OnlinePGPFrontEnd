import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventiComponent } from './eventi/eventi.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { JobsComponent } from './jobs/jobs.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditEventComponent } from './eventi/edit-event/edit-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventiComponent,
    LoginComponent,
    HomeComponent,
    NewsComponent,
    JobsComponent,
    AdminDashboardComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'eventi',component:EventiComponent},
      {path:'news',component:NewsComponent},
      {path:'login',component:LoginComponent},
      {path:'jobs',component:JobsComponent},
      {path:'adminDashboard',component:AdminDashboardComponent}
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
