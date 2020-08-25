// imporar modulos de router de angulas 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar los componentes
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { Videojuegos } from './components/videojuegos/videojuegos.component';
import { Zapatillas } from './components/zapatillas/zapatillas.component'
import { ExternoComponent } from  './components/externo/externo.component'
import { ContactoComponent } from  './components/contacto/contacto.component'
//Array de rutas

const appRoutes: Routes = [
   
    {path:'mi-componente', component: MiComponente},
    {path:'zapatillas', component: Zapatillas},
    {path:'videojuegos', component: Videojuegos},
    {path:'videojuegos/:nombre', component: Videojuegos},
    {path:'peliculas', component: PeliculasComponent},
    {path:'externo', component: ExternoComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'**', component: MiComponente},
];

//Exportar el  modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)