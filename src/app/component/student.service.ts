import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentInterface } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }
  private _url="../assets/data/students.json";
  getStudents():Observable<studentInterface[]>{//we need to register this in angular if we cant register then this is trited as regular
    // return[{"id":1,"name":"vijay","course":"Angular"},
    //   {"id":2,"name":"sai krishna","course":"Reactjs"},
    //   {"id":3,"name":"sri krishna","course":"Reactjs"},
    //   {"id":4,"name":"Rajitha","course":"Reactjs"},
    //   {"id":5,"name":"Hema","course":"Angular & Reactjs"},
    //   {"id":6,"name":"Anusha","course":"Reactjs"}]
    return this._http.get<studentInterface[]>(this._url);
  }
}
