import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilsPage } from './perfils.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilsPageRoutingModule {}
