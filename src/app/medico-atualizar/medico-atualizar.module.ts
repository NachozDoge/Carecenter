import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoAtualizarPageRoutingModule } from './medico-atualizar-routing.module';

import { MedicoAtualizarPage } from './medico-atualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoAtualizarPageRoutingModule
  ],
  declarations: [MedicoAtualizarPage]
})
export class MedicoAtualizarPageModule {}
