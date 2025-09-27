import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListadoPokemon } from '../interface/Ilistapokemon';


@Injectable({
  providedIn: 'root'
})

export class Pokeapi {
  private urlBase = 'https://pokeapi.co/api/v2/'

  constructor(private cliente: HttpClient){}

  getPokemons(limite: number = 20): Observable<IListadoPokemon>{
    const resultado = this.cliente.get<IListadoPokemon>(`${this.urlBase}pokemon=${limite}`)
    return resultado
  }

  getPokemon(url: string){
    //Por hacer: Obtener los resultados de este pokemon
  }
}