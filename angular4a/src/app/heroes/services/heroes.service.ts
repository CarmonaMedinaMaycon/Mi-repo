import { Injectable } from '@angular/core';
import { Heroes } from '../types/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesServices {

private  _heroes:Heroes[]=[]; //Heroes viene de types

get heroes(){
  return [...this._heroes]; //solo esto tiene acceso y el metodo pasa a ser un atributo
}

saveHeroes(heroe:Heroes){
  //aqui validamos las cosas
  this.heroes.push(heroe) //aqui se guarda en la plantilla heroe
}

}
