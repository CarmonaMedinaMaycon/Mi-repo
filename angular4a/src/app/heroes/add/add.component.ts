import { Component,  } from '@angular/core';
import { HeroesServices } from '../services/heroes.service';
import { Heroes } from '../types/heroes';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: [],
})
export class AddComponent  {
heroe:Heroes = {
  name:'',
  power: 0,
  abilities:[],
}
  constructor(private readonly heroeService:HeroesServices) { }

 saveHeroes(){
  this.heroeService.saveHeroes(this.heroe);
  
 }

}
