import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilsAtualizarPage } from './perfils-atualizar.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilsAtualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilsAtualizarPageRoutingModule {}
