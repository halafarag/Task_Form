import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './profile/components/employee/employee.component';
import { FormComponent } from './profile/components/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  { path: 'employees', component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
