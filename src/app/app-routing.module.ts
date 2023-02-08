import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./practice/home.component";

const routes : Routes = [
  {
    path: 'home', component: HomeComponent ,
    children: []
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}