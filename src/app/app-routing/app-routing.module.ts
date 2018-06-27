import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CultureComponent } from '../culture/culture.component';

const routes: Routes = [
 { path: '', component: CultureComponent },
 { path: ':culture/welcome', component: CultureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
