import { Component } from '@angular/core';
import { HeroesServices } from '../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent {
get heroes(){
  return this.heroService.heroes;
}
  constructor(private readonly heroService:HeroesServices) {}

}
