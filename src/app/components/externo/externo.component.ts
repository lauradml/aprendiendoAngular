import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userId = 4;
  }

  ngOnInit(): void {
    this.cargarUsuario();
    this.fecha = new Date();
  }

  cargarUsuario() {
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
