import { Component, OnInit } from '@angular/core';
import { IListadoPokemon } from '../interface/Ilistapokemon';
import { Pokeapi } from './pokeapi';

@Component({
  selector: 'app-pokedex',
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class Pokedex implements OnInit {
  pokemons : IListadoPokemon = {
    count: 0,
    next: '',
    previous: null,
    results: []
  }

  constructor(public pokeapiService: Pokeapi){}

  ngOnInit(): void {
    this.pokeapiService.getPokemons(1000).subscribe(resultado =>{
      console.log(resultado)
      this.pokemons = resultado
    })
    console.log(this.pokemons)
  }
  //Completar
  obtenerDetalle(url: string){
    this.pokeapiService.getPokemon(url)
  }
}