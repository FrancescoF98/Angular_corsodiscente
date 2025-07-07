import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-docente-modify',
  imports: [RouterModule, FormsModule],
  templateUrl: './form-docente-modify.html',
  styleUrl: './form-docente-modify.css'
})

export class FormDocenteModify {

   http = inject(HttpClient)
  router = inject(Router)

  new_docente_nome = "";
  new_docente_cognome = "";

  // go back
  goBack() {
    this.router.navigate(['/docente']);
  }

  // Post
  modificaDocente(id:number, nome: string, cognome: string) {

    const nuovoDocente = {
      nome: nome,
      cognome: cognome,
    }

    const url = 'http://localhost:8081/docenti/' + id.toString + '/edit'

    this.http.put<void>(url, nuovoDocente).subscribe({
      next: () => {
        console.log('✅ Docente modified successfully.');
        this.router.navigate(['/docente']);
      },
      error: err => {
        console.error('❌ Error modifying docente:', err);
      }
    });
  }

}
