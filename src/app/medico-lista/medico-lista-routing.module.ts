import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoListaPage } from './medico-lista.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoListaPageRoutingModule {}
