import { Component } from '@angular/core';
import {Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aprendiendo Angular';
  public descripcion: string;
  public config;

  constructor(){
    this.config = Configuracion;
    this.title= Configuracion.titulo;
    this.descripcion =Configuracion.descripcion
  }
}
