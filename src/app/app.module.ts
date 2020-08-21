import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {routing, appRoutingProviders} from './app.routing'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { Videojuegos } from './components/videojuegos/videojuegos.component';
import { Zapatillas } from './components/zapatillas/zapatillas.component';
import { ExternoComponent } from './components/externo/externo.component'

import { CalculadoraPipe } from './pipes/calculadora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent,
    Videojuegos,
    Zapatillas,
    ExternoComponent,
    CalculadoraPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
