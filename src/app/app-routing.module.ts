import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CompleteComponent } from './complete/complete.component';
import { TotalOrdComponent } from './total-ord/total-ord.component';
import { TempComponent } from './temp/temp.component';
import { RemainingOrdComponent } from './remaining-ord/remaining-ord.component';

const routes: Routes = [

  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent}, 
  {path:'kot',component:HomeComponent,children:[
    {path:'complete',component:CompleteComponent},
    {path:'total',component:TotalOrdComponent},
    {path:'',component:RemainingOrdComponent}
  ]},
  {path:'temp',component:TempComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
