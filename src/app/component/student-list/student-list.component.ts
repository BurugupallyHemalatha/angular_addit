import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
public students:any=[]
  constructor(private _stdService: StudentService) { }//we provide _(underscore) for private variable its not mandotary but its good way to declare

  ngOnInit(){
    this.students = this._stdService.getStudents()
    .subscribe(data =>this.students =data)
  }
 subscribe(data){
  
 }
}
