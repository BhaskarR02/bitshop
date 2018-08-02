import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThisComponent} from "./this/this.component";
import {HomeComponent} from "./home/home.component";
import {EventsComponent} from "./events/events.component";

const routes: Routes = [{
  path:'home',
  component:HomeComponent,
  children:[{
    path:'this',
    component:ThisComponent
  },{
    path:'event',
    component:EventsComponent
  }]
},{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
