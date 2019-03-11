import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SobremimComponent} from './sobremim/sobremim.component';

const routes: Routes = [
  {path: '',
    redirectTo: 'sobremim', pathMatch: 'full'},
    { path: 'sobremim', component: SobremimComponent }
   ]

@NgModule({
  imports: [RouterModule.forRoot(routes),
             CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
