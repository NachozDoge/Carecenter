import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilsVisualizarPage } from './perfils-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilsVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilsVisualizarPageRoutingModule {}
