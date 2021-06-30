import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthApi } from 'src/core/apis/auth.api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  err = '';
  constructor(private fb: FormBuilder, private AuthApi: AuthApi) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  afterClose(): void {}

  submitForm(): void {
    if (this.validateForm.invalid) {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      return;
    }

    const validateForm = this.validateForm.controls;
    this.AuthApi.signin(
      validateForm.username.value,
      validateForm.password.value
    ).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        this.err = err.message;
      }
    );
  }
}
