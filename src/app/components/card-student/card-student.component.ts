import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-card-student',
  templateUrl: './card-student.component.html',
  styleUrls: ['./card-student.component.css']
})

// implements OnInit
export class CardStudentComponent {
  @Input() name: string;
  @Input() description: string;
  @Input() viewList: boolean;

  constructor() { }

  // ngOnInit(): void {
  // }

}
