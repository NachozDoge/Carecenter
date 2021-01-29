import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoAtualizarPage } from './medico-atualizar.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoAtualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoAtualizarPageRoutingModule {}
