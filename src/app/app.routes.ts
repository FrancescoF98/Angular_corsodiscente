import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Corso } from './corso/corso';
import { Docente } from './docente/docente';
import { Discente } from './discente/discente';
import { FormDocenteNew } from './form-docente-new/form-docente-new';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'corso', component: Corso },
    { path: 'docente', component: Docente },
    { path: 'docente-new', component: FormDocenteNew },
    { path: 'discente', component: Discente }
];
