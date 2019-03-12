import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
   ]

@NgModule({
  imports: [RouterModule.forRoot(routes),
             CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
