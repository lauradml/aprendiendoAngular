
    import  { Component, OnInit, DoCheck,} from '@angular/core';
    import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'Videojuegos',
    templateUrl: './videojuegos.component.html'

})

// OnInit es del ciclo de cida de angular se ejecuta tras el contructor
//DoCheck se ejecuta cuando hay algún cambio en el componente o en la apligaciónangular
//OnDestroy se ejecuta antes de la destrucción de un componente

export class Videojuegos implements OnInit, DoCheck{
    public titulo: String;
    public comentario: String;
    public nombre: String;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
        ){
        this.titulo= 'Videojuegos';
        this.comentario= 'Componente sobre videojuegos';
        
    }
    ngOnInit(){
        console.log('OnInit ejecutaandose');
        this._route.params.subscribe((params: Params) =>{
            this.nombre= params.nombre
            console.log(this.nombre);
        });
    }
    ngDoCheck(){
        console.log(' DoCheck se ejecutó')
    }
    // NgOnDestroy(){
    //     console.log('OnDestroy  se ejecutó')
    // }

    cambiarTitulo(){
        if(this.titulo === "Videojuegos"){
            this.titulo= "Nuevo título de componente";
        }else{
            this.titulo= "Videojuegos"
        }
    }

    redirigir(){
        this._router.navigate(['/zapatillas'])
    }

}