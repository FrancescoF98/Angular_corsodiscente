import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  username = "";
  password = "";
  successo = "";
  errore = "";

  constructor(private http: HttpClient, private router: Router) {}

  signup() {
    const user = {
      username: this.username,
      password: this.password,
    };

    this.http.post('http://localhost:8082/auth/signup', user).subscribe({
      next: () => {
        // alert('Registrazione avvenuta con successo.');
        this.successo = "Registrazione completata! Ora puoi accedere.";
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error: (err) => {
        console.error('Errore durante la registrazione:', err);
        this.errore = "Errore durante la registrazione.";
        // alert('Errore durante la registrazione. Riprova.');
      }
    })
    }
}
