import { Routes } from '@angular/router';
import { CultureComponent } from '../culture/culture.component';

export const ROUTES: Routes = [
 { path: '', component: CultureComponent },
 { path: ':culture/welcome', component: CultureComponent },
];
