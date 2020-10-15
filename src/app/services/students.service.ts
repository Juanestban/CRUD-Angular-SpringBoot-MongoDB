import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  // http://localhost:8080
  API_URI = '/api';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student> {
    return this.http.get(`${this.API_URI}/students`);
  }

  getOneStudentByName(name: string): Observable<Student> {
    return this.http.get(`${this.API_URI}/students/${name}`);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post(`${this.API_URI}/students/`, student);
  }

  deleteStudent(id: string): Observable<Student> {
    return this.http.delete(`${this.API_URI}/students/${id}`);
  }

  updateStudent(id: string, updateStudent: Student): Observable<Student> {
    return this.http.put(`${this.API_URI}/students/${id}`, updateStudent);
  }
}
