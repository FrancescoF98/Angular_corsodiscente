import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Docente } from '../docente/docente';


export interface DiscenteDTO {
  id: number;
  nome: string;
  cognome: string;
  matricola: number;
  eta: number;
  citta_residenza: string;
}

@Component({
  standalone: true,
  selector: 'app-discente',
  imports: [RouterModule],
  templateUrl: './discente.html',
  styleUrl: './discente.css'
})

export class Discente {
  http = inject(HttpClient)

  discenti = signal<DiscenteDTO[]>([])

  loadDiscenti() {
    this.http.get<DiscenteDTO[]>('http://localhost:8081/discenti/lista')
            .subscribe(res => this.discenti.set(res))
  }

  ngOnInit() {
    this.loadDiscenti()
  }
}
