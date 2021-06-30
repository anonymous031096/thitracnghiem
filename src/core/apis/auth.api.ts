import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpAbstract } from './http.abstract';

@Injectable({ providedIn: 'root' })
export class AuthApi extends HttpAbstract {
  private prefixUrl = '/auth';

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  signin(username: string, password: string): Observable<any> {
    return this.post(`${this.prefixUrl}/signin`, { username, password });
  }

  signup(email: string, username: string, password: string): Observable<any> {
    return this.post(`${this.prefixUrl}/signup`, {
      email,
      username,
      password,
    });
  }
}
