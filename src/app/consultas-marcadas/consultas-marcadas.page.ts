import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-consultas-marcadas',
  templateUrl: './consultas-marcadas.page.html',
  styleUrls: ['./consultas-marcadas.page.scss'],
})
export class ConsultasMarcadasPage implements OnInit {

  constructor(
    private menuCtrl : MenuController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

}