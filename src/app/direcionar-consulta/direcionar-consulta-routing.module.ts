import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirecionarConsultaPage } from './direcionar-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: DirecionarConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirecionarConsultaPageRoutingModule {}
