import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Student } from 'src/app/models/Student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})

export class TableStudentsComponent implements OnInit {
  @Output()
  env: EventEmitter<Student> = new EventEmitter<Student>();
  student: any = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentsService.getAllStudents()
      .subscribe(res => {
        this.student = res;
      }, err => {
        console.log(err);
      });
  }

  handleUpdate(student: Student): void {
    console.log('Metodo Update:', student);
    this.env.emit(student);
  }

  handleDelete(id: string): void {
    this.studentsService.deleteStudent(id)
      .subscribe(res => {
        console.log(res);
      }, err => console.log(err));

    this.getStudents();
  }
}
