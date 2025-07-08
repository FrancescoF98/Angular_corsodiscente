import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class Auth {

  private apiURL = "http://localhost:8082/auth";

  private _token = signal<string | null>(sessionStorage.getItem('jwt_token'));

  constructor(private http: HttpClient, private router: Router) {}

  getToken(): string | null {
    return this._token();
  }

  login(credentials: { username: string; password: string}) {
    return this.http.post<{ token: string }>(`${this.apiURL}/login`, credentials) 
  }

  signup(user: {nome: string; cognome: string; email: string; password: string}) {
    return this.http.post(`${this.apiURL}/signup`, user);
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  
  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }

}
