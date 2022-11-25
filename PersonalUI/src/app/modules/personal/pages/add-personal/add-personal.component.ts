import { Component, OnInit } from '@angular/core';
import { Personal } from '../../types/personal';
import { PersonalService } from '../../service/personal.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-personal',
  templateUrl: './add-personal.component.html'
})
export class AddPersonalComponent implements OnInit {
personal:Personal={
  id:0,
  name:"",
  surname:"",
  lastname:"",
  birthday:"",
  salary:0.0,
  position:{
    id:0,
    position:"",
    description:""
  },
  user:undefined
};

positions:any[]=[];
  constructor(private personalService:PersonalService, public modalRef:DialogRef<AddPersonalComponent>) { }

  ngOnInit(): void {
    //crear en el back el servicio que obtenga las posiciones
    //realizar la peticion hacia su servicio de posiciones
    //luego asignar las posiciones a nuestras variables this.positions
  }

savePersonal(){
  
}

}
