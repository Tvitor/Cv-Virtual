
import { HABILIDADES } from './../mock-habilidades';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  habilidade = HABILIDADES;

  constructor() { }

  ngOnInit() {
  }



}
