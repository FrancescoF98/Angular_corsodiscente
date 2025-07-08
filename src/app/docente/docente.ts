import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


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
  router = inject(Router)

  docenti = signal<DocenteDTO[]>([])

  new_docente_nome = "";
  new_docente_cognome = "";

  // modifica
  modifica_attiva = false;
  id_docente_in_modifica = 0;

  modifica_nuovo_nome = "";
  modifica_nuovo_cognome = "";


  ngOnInit() {
    this.loadDocenti()
  }
  
  // Per cambiare pagina
  changePage(address: string) {
    this.router.navigate([address]);
  }

  // per attivare la modalità modifica
  attivaModifica(id: number, placeholder_nome: string, placeholder_cognome: string) {
    this.modifica_attiva = !this.modifica_attiva;
    this.id_docente_in_modifica = id;
    this.modifica_nuovo_nome = placeholder_nome;
    this.modifica_nuovo_cognome = placeholder_cognome;
  }

  
  //---------------------- CRUD ----------------------
  // Get
  loadDocenti() {
    this.http.get<DocenteDTO[]>('http://localhost:8082/docenti/lista')
            .subscribe(res => this.docenti.set(res))
  }
  
  // Post -- spostata in 'form-docente-new.ts'

  // Put
  modificaDocente(id:number, nome: string, cognome: string) {

    const nuovoDocente = {
      nome: nome,
      cognome: cognome,
    }

    const url = 'http://localhost:8082/docenti/' + id.toString() + '/edit'

    this.http.put<void>(url, nuovoDocente).subscribe({
      next: () => {
        console.log('✅ Docente modified successfully.');
        this.modifica_attiva = false;
        this.loadDocenti();
        this.modifica_nuovo_nome = "";
        this.modifica_nuovo_cognome = "";
        // window.location.reload();
      },
      error: err => {
        console.error('❌ Error modifying docente:', err);
      }
    });
    // this.modifica_attiva = false;
  }


  // Delete
  eliminaDocente(id: number) {
    let indirizzo = `http://localhost:8082/docenti/${id}/delete`;
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
