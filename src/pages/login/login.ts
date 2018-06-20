 import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { IonicPage, NavController, NavParams , LoadingController, ToastController } from 'ionic-angular';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { TabsPage } from '../tabs/tabs';
import { GooglePlus } from '@ionic-native/google-plus';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
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
  providers: [GooglePlus]
})
export class LoginPage {
user: Observable<firebase.User>;
 public counter = 0;
 private username: string;
 private password: string;
 private error: any;
 displayName:any;
 email:any;
 userId:any;
 imageUrl:any;
 //imgurl:any;
 isLoggedIn:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private gPlus: GooglePlus, public toastCtrl: ToastController, private afAuth: AngularFireAuth, private platform: Platform, private androidFingerprintAuth: AndroidFingerprintAuth ) {
    this.user = this.afAuth.authState;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    //this.imgurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/2000px-Ionic_Logo.svg.png";
    
 }
 
 fingerlogin(){
    this.androidFingerprintAuth.isAvailable()
  .then((result)=> {
    if(result.isAvailable){
      // it is available

      this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
        .then(result => {
           if (result.withFingerprint) {
               console.log('Successfully encrypted credentials.');
               console.log('Encrypted credentials: ' + result.token);
           } else if (result.withBackup) {
             console.log('Successfully authenticated with backup password!');
           } else console.log('Didn\'t authenticate!');
        })
        .catch(error => {
           if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
             console.log('Fingerprint authentication cancelled');
           } else console.error(error)
        });

    } else {
      // fingerprint auth isn't available
    }
  })
  .catch(error => console.error(error));
 }
 
 
 glogin(){
    if(this.platform.is('cordova')){
            this.nativeGoogleLogin();
    }
    else{
        this.WebGoogleLogin();
    }
  }
  async nativeGoogleLogin(): Promise<void>{
    try{
        const gplusUser = await this.gPlus.login({
            'webClientId': '48035609206-ft8u5251jj4lqdouqnuqo0kr76sga5q0.apps.googleusercontent.com', 
            'offline' : true,
            'scopes' : 'profile email'
        })
        return await this.afAuth.auth.signInWithCredential(
            firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
        )
        
    }catch(err){
        console.log(err);
    }
  }
   async WebGoogleLogin():Promise<void>{
    try{
        const provider = new firebase.auth.GoogleAuthProvider();
        const credential = await this.afAuth.auth.signInWithPopup(provider);
        
    } catch(err){
        console.log(err);
    }
    }
  
  signOut(){
    this.afAuth.auth.signOut();
    if(this.platform.is('cordova')){
        this.gPlus.logout();
    }
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
