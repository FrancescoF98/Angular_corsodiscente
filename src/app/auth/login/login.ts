import { Component } from '@angular/core';
import { Auth } from '../auth';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username = "";
  password = "";
  errore = "";

  constructor(private auth: Auth, private router: Router, private http:HttpClient) { }


  login() {
    const credenziali = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:4200/auth/login', credenziali).subscribe({
      next: (res) => {
        console.log(res.jwt)
        sessionStorage.setItem('token', res.jwt);
        this.router.navigate(['/docenti']);

      },
      error: () => {
        this.errore = 'Credenziali errate o utente inesistente';
      }
    });
  }
}
