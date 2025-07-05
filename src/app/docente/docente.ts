import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';


interface DocenteDTO {
  id: number,
  nome: string,
  cognome: string,
}

@Component({
  standalone: true,
  selector: 'app-docente',
  imports: [RouterModule],
  templateUrl: './docente.html',
  styleUrl: './docente.css'
})
export class Docente {
  http = inject(HttpClient)

  docenti = signal<DocenteDTO[]>([])

  loadDocenti() {
    this.http.get<DocenteDTO[]>('http://localhost:8081/docenti/lista')
            .subscribe(res => this.docenti.set(res))
  }

  ngOnInit() {
    this.loadDocenti()
  }
}
