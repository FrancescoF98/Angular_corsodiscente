import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


interface DocenteDTO {
  id: number,
  nome: string,
  cognome: string,
}

@Component({
  standalone: true,
  selector: 'app-docente',
  imports: [RouterModule, FormsModule],
  templateUrl: './docente.html',
  styleUrl: './docente.css'
})

export class Docente {
  http = inject(HttpClient)

  docenti = signal<DocenteDTO[]>([])

  new_docente_nome = "";
  new_docente_cognome = "";

  ngOnInit() {
    this.loadDocenti()
  }
  
  // Get
  loadDocenti() {
    this.http.get<DocenteDTO[]>('http://localhost:8081/docenti/lista')
            .subscribe(res => this.docenti.set(res))
  }
  
  // Post -- spostata in 'form-docente-new.ts'

  // Put
  
  // Delete
  eliminaDocente(id: number) {
    let indirizzo = 'http://localhost:8081/docenti/' + id.toString() + '/delete';
    this.http.delete<DocenteDTO[]>(indirizzo)
            .subscribe({
              next: () => {
                console.log(`✅ Docente con ID ${id} cancellato.`);
                this.loadDocenti();
              },
              error: err => {
                console.error('❌ Errore durante la cancellazione:', err);
              }
            });
  }
  
}
