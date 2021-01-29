import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilVisualizarPageRoutingModule } from './perfil-visualizar-routing.module';

import { PerfilVisualizarPage } from './perfil-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilVisualizarPageRoutingModule
  ],
  declarations: [PerfilVisualizarPage]
})
export class PerfilVisualizarPageModule {}
