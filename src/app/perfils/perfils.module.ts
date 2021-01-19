import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilsPageRoutingModule } from './perfils-routing.module';

import { PerfilsPage } from './perfils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilsPageRoutingModule
  ],
  declarations: [PerfilsPage]
})
export class PerfilsPageModule {}
