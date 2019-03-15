import { SkillComponent } from './skill/skill.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SobremimComponent } from './sobremim/sobremim.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sobremim', component:SobremimComponent},
  {path: 'contato', component:ContatoComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'skills', component:SkillComponent}
   ]

@NgModule({
  imports: [RouterModule.forRoot(routes),
             CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
