import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarMedicoPageRoutingModule } from './cadastrar-medico-routing.module';

import { CadastrarMedicoPage } from './cadastrar-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarMedicoPageRoutingModule
  ],
  declarations: [CadastrarMedicoPage]
})
export class CadastrarMedicoPageModule {}
