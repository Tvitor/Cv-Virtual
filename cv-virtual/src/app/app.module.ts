import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobremimComponent } from './sobremim/sobremim.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {HttpClientModule} from  '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SobremimComponent,
    NavbarComponent,
    PortfolioComponent,
    ContatoComponent,
    HomeComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
