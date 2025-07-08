import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Corso } from './corso/corso';
import { Docente } from './docente/docente';
import { Discente } from './discente/discente';
import { FormDocenteNew } from './form-docente-new/form-docente-new';
import { Signup } from './auth/signup/signup';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'corso',
        component: Corso,
        canActivate: [authGuard]
    },
    { path: 'docente',
        component: Docente,
        canActivate: [authGuard]
    },
    { path: 'docente-new', component: FormDocenteNew },
    { path: 'discente', 
        component: Discente,
        canActivate: [authGuard]
    },
    { path: 'signup', component: Signup },
];
