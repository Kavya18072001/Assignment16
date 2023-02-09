import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserdetailsComponent} from './userdetails/userdetails.component'

const routes: Routes = [
  {path:'display' , component: UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
