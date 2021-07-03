import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageUrl, storageManager } from '../utils/constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private readonly router: Router) {}

  isAuthenticated(): boolean {
    const token = this.getAccessToken();

    return !!token;
  }

  logout() {
    localStorage.removeItem(storageManager.REFRESH_TOKEN);
    this.router.navigate([PageUrl.LOGIN]);
  }

  setToken(accessToken: string, refreshToken: string): void {
    localStorage.setItem(storageManager.ACCESS_TOKEN, accessToken);
    localStorage.setItem(storageManager.REFRESH_TOKEN, refreshToken);
  }

  getUserInfo() {
    return JSON.parse(atob(this.getAccessToken().split('.')[1]));
  }

  getAccessToken(): string {
    let token = localStorage.getItem(storageManager.ACCESS_TOKEN);
    if (!token) token = '';
    return token;
  }

  getRefreshToken(): string {
    let token = localStorage.getItem(storageManager.REFRESH_TOKEN);
    if (!token) token = '';
    return token;
  }
}
