import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { DemoPage } from '../pages/demo/demo';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { Splash } from '../pages/splash/splash';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { GooglePlus } from '@ionic-native/google-plus';

const firebaseConfig ={
    apiKey: "AIzaSyBwvJbTbOcQ2VooUiQRUw4NKvBFOJmGM30",
    authDomain: "zest-97579.firebaseapp.com",
    databaseURL: "https://zest-97579.firebaseio.com",
    projectId: "zest-97579",
    storageBucket: "zest-97579.appspot.com",
    messagingSenderId: "1076193118913"  
}

3
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DemoPage,
    TabsPage,
    Splash,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DemoPage,
    TabsPage,
    Splash,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    AndroidFingerprintAuth ,
    GooglePlus
  ]
})
export class AppModule {}

