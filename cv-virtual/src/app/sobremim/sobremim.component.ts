import { Component, OnInit } from '@angular/core';
import { HABILIDADES } from './../mock-habilidades';

@Component({
  selector: 'app-sobremim',
  templateUrl: './sobremim.component.html',
  styleUrls: ['./sobremim.component.css']
})
export class SobremimComponent implements OnInit {
  habilidade = HABILIDADES;
  constructor() { }

  ngOnInit() {
  }

}
