import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  constructor(
    private _peticionesService : PeticionesService
  ) { }

  ngOnInit(): void {
    this._peticionesService.getUser().subscribe(
      result =>{
        console.log(result);
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
