import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { New1Component } from './new1/new1.component';
import { New2Component } from './new2/new2.component';
import { HomeComponent } from './home/home.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DirectiveComponent } from './directive/directive.component'
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'link1',component:New1Component},
  {path:'link2',component:New2Component},
  {path:'multiply',component:MultiplicationComponent},
  {path:'directive',component:DirectiveComponent },
  {path:'users',component:UsersComponent },
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
