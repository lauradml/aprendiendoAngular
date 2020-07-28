import  { Component } from '@angular/core' 

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente{
    public titulo: String;
    public comentario: string;
    public year: number;
    public identificado: boolean;

    constructor(){
        this.titulo= 'Hola gente, soy mi Componente';
        this.comentario= 'Este es mi primer componente';
        this.year= 2020;
        this.identificado = false;
        
    }
    setIdentificado(){
        this.identificado=true;
    }
    unSetIdentificado(){
        this.identificado=false;
    }
}