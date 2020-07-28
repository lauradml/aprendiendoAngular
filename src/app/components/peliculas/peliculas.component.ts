import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  
  public titulo : string;
  public mejor_peli : string;
  public mejor_peli_retro : string;
  public mostrar_retro : boolean;
  public color : string;
  public pelis : Array<string>;

  constructor() { 
    this.titulo="Películas";
    this.mejor_peli = "Requiem por un sueño";
    this.mejor_peli_retro = "Tras el laberinto";
    this.mostrar_retro = true;
    this.color = "green"; 
    this.pelis = [
      'Cazafantasmas',
      'Junglas de cristal',
      'Los inmortales',
      'La mosca'
    ]
  }

  ngOnInit(): void {
  }

}
