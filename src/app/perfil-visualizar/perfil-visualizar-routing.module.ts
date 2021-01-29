import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilVisualizarPage } from './perfil-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilVisualizarPageRoutingModule {}
