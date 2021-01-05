import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-exames-marcados',
  templateUrl: './exames-marcados.page.html',
  styleUrls: ['./exames-marcados.page.scss'],
})
export class ExamesMarcadosPage implements OnInit {

  constructor(
    private menuCtrl : MenuController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

}