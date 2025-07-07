import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-form-docente-new',
  imports: [RouterModule, FormsModule],
  templateUrl: './form-docente-new.html',
  styleUrl: './form-docente-new.css'
})

export class FormDocenteNew {

  http = inject(HttpClient)
  router = inject(Router)

  new_docente_nome = "";
  new_docente_cognome = "";

  // go back
  goBack() {
    this.router.navigate(['/docente']);
  }

  // Post
  nuovoDocente(nome: string, cognome: string) {

    const nuovoDocente = {
      nome: nome,
      cognome: cognome,
    }

    this.http.post<void>('http://localhost:8081/docenti/new', nuovoDocente).subscribe({
      next: () => {
        console.log('✅ Docente created successfully.');
        this.router.navigate(['/docente']);
      },
      error: err => {
        console.error('❌ Error creating docente:', err);
      }
    });
  }
}
