import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries() {
  let loader = this.loadingCtrl.create({
    content: "Please wait..."
  });
  loader.present();
    this.rest.getCountries()
       .subscribe(
         countries =>{ 
            this.countries = countries;
            loader.dismiss();
         },
         error =>  {
            this.errorMessage = <any>error;
            
         });
  }

}