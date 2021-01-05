import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-agendar-exame',
  templateUrl: './agendar-exame.page.html',
  styleUrls: ['./agendar-exame.page.scss'],
})
export class AgendarExamePage implements OnInit {

  constructor(
    private menuCtrl : MenuController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

}