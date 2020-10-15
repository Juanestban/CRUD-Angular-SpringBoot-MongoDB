import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableStudentsComponent } from './components/table-students/table-students.component';
import { FormStudentsComponent } from './components/form-students/form-students.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardStudentComponent } from './components/card-student/card-student.component';
import { StudentsService } from './services/students.service';

@NgModule({
  declarations: [
    AppComponent,
    TableStudentsComponent,
    FormStudentsComponent,
    NavbarComponent,
    CardStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
