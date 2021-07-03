import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { get } from 'lodash';
import { AuthApi } from 'src/core/apis/auth.api';
import { AuthService } from 'src/core/services/auth.service';
import { PageUrl } from 'src/core/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  err = '';
  constructor(
    private fb: FormBuilder,
    private AuthApi: AuthApi,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  afterClose(): void {}

  submitForm(): void {
    if (this.loginForm.invalid) {
      for (const i in this.loginForm.controls) {
        this.loginForm.controls[i].markAsDirty();
        this.loginForm.controls[i].updateValueAndValidity();
      }
      return;
    }

    const { username, password, remember } = this.loginForm.value;
    this.AuthApi.signin(username, password, remember).subscribe(
      (res) => {
        if (get(res, 'accessToken') && get(res, 'refreshToken')) {
          this.authService.setToken(res.accessToken, res.refreshToken);
          this.router.navigate([PageUrl.URL_DEFAULT]);
        }
      },
      (err) => {
        this.err = err.message;
        err[username];
      }
    );
  }
}
