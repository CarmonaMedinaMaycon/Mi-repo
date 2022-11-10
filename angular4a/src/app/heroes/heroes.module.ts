import { NgModule } from '@angular/core';
import { HeroesMainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations:[HeroesMainPageComponent],//todos los componentes del modulo
  imports:[],//solo se agregan otros modulos
  providers:[],//se agregan los servicios
  exports:[HeroesMainPageComponent],
})
export class HeroesModule{}
