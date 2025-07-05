import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface CorsoDTO {
  id: number,
  nome: string,
  anno_accademico: number,
  idDoc: number,
  docente_nome: string,
  docente_cognome: string
}

@Component({
  standalone: true,
  selector: 'app-corso',
  imports: [RouterModule],
  templateUrl: './corso.html',
  styleUrl: './corso.css'
})

export class Corso {
  http = inject(HttpClient)

  corsi = signal<CorsoDTO[]>([])

  loadCorsi() {
    this.http.get<CorsoDTO[]>('http://localhost:8080/corsi/lista')
            .subscribe(res => this.corsi.set(res))
  }

  ngOnInit() {
    this.loadCorsi()
  }

}
