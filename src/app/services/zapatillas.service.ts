import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';


@Injectable()
    export class ZapatillaService{
        public zapatillas: Array<Zapatilla>

        constructor(){  
            this.zapatillas = [
                new Zapatilla('Samba', 'Adidas', 'negras', '66', true),
                new Zapatilla('Gacela', 'Adidas', 'azules', '33', false),
                new Zapatilla('Jordan', 'Nike', 'negras', '80', true),
                new Zapatilla('clasic', 'Rebook', 'blancas', '82', true),
            ];

        }
        getTexto(){
            return "hola desde servicio";
        }

        getZapatillas(): Array<Zapatilla>{
            return this.zapatillas;
        }

    }
