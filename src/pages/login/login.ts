import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController} from 'ionic-angular';
//import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 private username: string;
 private password: string;
 private error: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
 }
 login():void{
    //username = this.username;
    this.error="";
    //console.log("Username -> "+this.username+" User Password -> "+this.password);
    //console.log("You have entered this username ->"+username);
    if(this.username == 'luv@gmail.com' && this.password == 'one'){
    let loader = this.loadingCtrl.create({
     content: "Please wait...",
     duration: 3000,
     dismissOnPageChange: true,
  });
  loader.present().then(()=>{
        this.navCtrl.push(TabsPage)
  })
        
        }
    else 
    {       let loader = this.loadingCtrl.create({
                content: "Please wait...",
                duration: 3000
            });
        loader.present().then(() =>{
            loader.dismiss();
            this.error = "Invalid Email and Password Combination";
        });
    }
    
 }
}
