import { Component, OnInit } from '@angular/core';
import { Zapatilla } from 'src/app/models/zapatilla';
import { ZapatillaService} from 'src/app/services/zapatillas.service';


@Component({
    selector: 'Zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]

})
export class Zapatillas {
    public titulo: String = "Componente Zapatillas";
    public zapatillas: Array<Zapatilla>;
    // esto significa que es un array de string
    public marcas: String[];
    public color: String;
    public miMarca: String;

    constructor( 
        private _zapaillasService: ZapatillaService
        ) {
            this.color= "negras";
            this.marcas= new Array();
            this.miMarca=""
    }

    ngOnInit() {
        this.zapatillas = this._zapaillasService.getZapatillas();
        this.getMarcas();                                            
        console.log( this.zapatillas)
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla)=>{
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
            
        });
        console.log(this.marcas)

    }

    addMarca(){
        if(this.marcas.indexOf(this.miMarca) < 0){
            this.marcas.push(this.miMarca);
        }
        this.miMarca=""
    }

    deleteMarca(indice){
        // delete this.marcas[indice]
        this.marcas.splice(indice, 1)
    }

    onBlur(){
        console.log("has salido del input")
    }
    mostrarPalabra(){
        alert(this.miMarca);
        this.addMarca();
    }

}