import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoListaPageRoutingModule } from './medico-lista-routing.module';

import { MedicoListaPage } from './medico-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoListaPageRoutingModule
  ],
  declarations: [MedicoListaPage]
})
export class MedicoListaPageModule {}
