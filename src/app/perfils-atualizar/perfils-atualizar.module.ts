import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilsAtualizarPageRoutingModule } from './perfils-atualizar-routing.module';

import { PerfilsAtualizarPage } from './perfils-atualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilsAtualizarPageRoutingModule
  ],
  declarations: [PerfilsAtualizarPage]
})
export class PerfilsAtualizarPageModule {}
