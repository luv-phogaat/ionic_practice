import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html'
})
export class DemoPage {

  constructor(public navCtrl: NavController, menu: MenuController) {
    menu.enable(true);
  }

}
