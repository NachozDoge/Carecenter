import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  constructor(
    private menuCtrl : MenuController,
  ) {
    this.ionViewWillEnter();
   }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}
