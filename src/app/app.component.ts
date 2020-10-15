import { Component } from '@angular/core';
import { Student } from './models/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'control-students';
  student: Student = {};
  studentUpload: Student = {};

  returnedStudent(event: Student): void {
    console.log('Soy el componente padre - <<:>> =>', event);
    this.student = event;
  }

  studentUpdate(event: Student): void {
    console.log('component to upload', event);
    this.studentUpload = event;
  }
}
