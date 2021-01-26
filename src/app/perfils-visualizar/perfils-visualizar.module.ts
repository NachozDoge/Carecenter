import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilsVisualizarPageRoutingModule } from './perfils-visualizar-routing.module';

import { PerfilsVisualizarPage } from './perfils-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilsVisualizarPageRoutingModule
  ],
  declarations: [PerfilsVisualizarPage]
})
export class PerfilsVisualizarPageModule {}
