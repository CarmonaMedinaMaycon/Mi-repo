import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPersonalComponent } from './pages/main-personal/main-personal.component';
import { AddPersonalComponent } from './pages/add-personal/add-personal.component';
import { FormsModule } from '@angular/forms';
import { materialModules } from 'src/app/types/material-modules';

@NgModule({
  declarations: [MainPersonalComponent, AddPersonalComponent],
  imports: [CommonModule,FormsModule,...materialModules ],
  exports: [MainPersonalComponent],
})
export class PersonalModule {}
