import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "ficha-medica.page.html",
  styleUrls: ["ficha-medica.page.scss"]
})
export class FichaMedicaPage {
  public items: any = []; 

  constructor(private menuCtrl : MenuController,) {
    
    this.items = [
      { expanded: false },
      { expanded: false }
    ];
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}