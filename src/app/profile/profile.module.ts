import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [FormComponent, EmployeeComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [FormComponent, EmployeeComponent],
})
export class ProfileModule {}
