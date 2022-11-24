import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MathTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PersonalService } from '../../service/personal.service';
import { MatPaginator } from '@angular/material/paginator';
import { Personal } from '../../types/personal';

@Component({
  selector: 'app-main-personal',
  templateUrl: './main-personal.component.html'
})
export class MainPersonalComponent implements OnInit {
displayedColums: String[]=[
  "#",
  "name",
  "surname",
  "lastname",
  "birthday",
  "salary",
  "action"
]; 
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
personal!:MathTableDataSource<Personal>;
  constructor(private personalService:PersonalService,
    private _liveAnnouncer:LiveAnnouncer,
    public dialog:MatDialog) { }

  ngOnInit(): void {
    this.personalService.findAll().subscribe((Personal[])=>{
      this.personal = new MathDataSource<Personal>(response);
      this.personalService.loading=false;
      this.personal.sort=this.sort;
    });
  }
  announceSortChange(sort:Sort){
    if(sort.direction){
    this._liveAnnouncer.announce(`Sorted ${sort.direction} ending`);
    }else{
      this._liveAnnouncer.announce(`Sort cleared`);
    }

  }
  //Modal

}
