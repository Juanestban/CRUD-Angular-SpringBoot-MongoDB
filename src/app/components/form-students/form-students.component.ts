import { StudentsService } from './../../services/students.service';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Student } from './../../models/Student';

@Component({
  selector: 'app-form-students',
  templateUrl: './form-students.component.html',
  styleUrls: ['./form-students.component.css']
})

// implements OnInit
export class FormStudentsComponent {
  @Output()
  env: EventEmitter<Student> = new EventEmitter<Student>();
  @Input() id: string;
  @Input() name: string;
  @Input() description: string;
  @Input() viewList: boolean;
  student: Student = {
    id: '',
    name: '',
    description: '',
    viewList: undefined
  };

  constructor(private studentService: StudentsService) { }

  // ngOnInit(): void {
  // }

  onChange(event: string): void {
    const { id }: any = event;

    if (this.id !== undefined) {
      this.student = {
        id: this.id,
        name: this.name,
        description: this.description,
        viewList: this.viewList
      };
    }

    console.log(id);

    if (id === 'Radios1') {
      this.student.viewList = true;
    } else {
      this.student.viewList = false;
    }
    console.log(this.student.viewList);
    this.env.emit(this.student);
  }

  // Falta por terminar esta funcion
  saveStudent(): void {
    this.studentService.createStudent(this.student)
      .subscribe(res => {
        console.log(res);
        location.reload();
      }, err => console.log(err));
  }

  uploadButton(): void {
    this.studentService.updateStudent(this.id, this.student)
      .subscribe(res => {
        console.log(res);
        location.reload();
      }, err => console.log(err));
  }
}
