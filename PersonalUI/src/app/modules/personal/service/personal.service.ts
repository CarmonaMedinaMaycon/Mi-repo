import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs";
import { APP_URL } from "src/app/services/base-url";
import { Personal } from '../types/personal';

@Injectable({
  providedIn: "root",
})
export class PersonalService {
loading:Boolean = false;
private people:Personal[]= [];
get personal(){
return[...this.people];

}
  constructor(private http:HttpClient) {




  }


  findAll(){
    this.loading=true;
    return this.http.get<Personal[]>(`${APP_URL}api/personal/`)
  }
}
