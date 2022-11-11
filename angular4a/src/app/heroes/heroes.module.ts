import { NgModule } from '@angular/core';
import { HeroesMainPageComponent } from './main-page/main-page.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations:[HeroesMainPageComponent, AddComponent, ListComponent],//todos los componentes del modulo
  imports:[FormsModule, CommonModule],//solo se agregan otros modulos
  providers:[],//se agregan los servicios
  exports:[HeroesMainPageComponent],
})
export class HeroesModule{}
