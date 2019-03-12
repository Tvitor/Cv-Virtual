import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'sobremim', redirectTo: 'home'},
  {path:'portfolio', component: PortfolioComponent},
  {path:'contato', component: ContatoComponent}
   ]

@NgModule({
  imports: [RouterModule.forRoot(routes),
             CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
