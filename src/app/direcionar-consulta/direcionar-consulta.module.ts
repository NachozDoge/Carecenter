import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirecionarConsultaPageRoutingModule } from './direcionar-consulta-routing.module';

import { DirecionarConsultaPage } from './direcionar-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirecionarConsultaPageRoutingModule
  ],
  declarations: [DirecionarConsultaPage]
})
export class DirecionarConsultaPageModule {}
