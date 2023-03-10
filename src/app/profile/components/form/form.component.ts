import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  base64: any = '';
  constructor(private fb: FormBuilder, private empService: EmployeeService) {}
  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(10)]],
    mobile: [
      '',
      [Validators.required, Validators.pattern('^((\\+20-?)|0)?[0-9]{10}$')],
    ],
    email: ['', [Validators.required, Validators.email]],
    experince: ['', [Validators.required]],
    status: ['', [Validators.required]],
    birthDay: ['', [Validators.required]],
    img: [''],
  });
  get name() {
    return this.profileForm.get('name');
  }
  get mobile() {
    return this.profileForm.get('mobile');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get experince() {
    return this.profileForm.get('experince');
  }
  get status() {
    return this.profileForm.get('status');
  }
  get birthDay() {
    return this.profileForm.get('birthDay');
  }
  get img() {
    return this.profileForm.get('img');
  }
  getImgPath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.profileForm.get('img')?.setValue(this.base64);
      console.log(this.base64);
    };
  }
  onSubmit() {
    Swal.fire('Are you sure you want to Send Your Data to This Company?');
    const emp = this.profileForm.value;
    this.empService.addEmployee(emp).subscribe((data) => {
      console.log('done');
    });
    console.warn(this.profileForm.value);
  }
  ngOnInit(): void {}
}
