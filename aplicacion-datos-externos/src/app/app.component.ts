import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
//import { ColaReproduccion } from './cola-reproduccion';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected title = 'hola-mundo';
  descripcion = 'esta es mi pagina inicial';

  // constructor(public colaReproduccionService: ColaReproduccion){}
   
  
}