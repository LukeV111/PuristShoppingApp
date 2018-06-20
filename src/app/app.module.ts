import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


//*********** ionic Native **************/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';

//***********  Angularfire2 v5 **************/

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

//***********  Facebook **************/
import { Facebook } from '@ionic-native/facebook';
//***********  Google plus **************/
import { GooglePlus } from '@ionic-native/google-plus';

//*********** Provider **************/
import { AuthData } from '../providers/auth-data';

//************** import image gallery *********************//

import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AfterCartPage } from '../../src/pages/layout/app2/after-cart/after-cart'
import { AdminOrdersPage } from '../../src/pages/layout/app2/admin-orders/admin-orders'
import { OrderDetailsPage } from '../../src/pages/layout/app2/order-details/order-details'


//********** firebase configuration  ************ */
export const config = { 
  apiKey: 'AIzaSyDRZqq3yfwt4es02BVVGEZIO5sgOlJ0fE0',
  authDomain: 'purist-coffee-shopping-app.firebaseapp.com', 
  databaseURL: 'https://purist-coffee-shopping-app.firebaseio.com', 
  projectId: 'purist-coffee-shopping-app', 
  storageBucket: 'purist-coffee-shopping-app.appspot.com', 
  messagingSenderId: '465756601376' 
};

//********** firebase SpAn configuration  ************ */
export const config2 = {
};
  
@NgModule({
  declarations: [
    MyApp,
    AfterCartPage,
    AdminOrdersPage,
    OrderDetailsPage,
  ],
  imports: [
    BrowserModule,
    ionicGalleryModal.GalleryModalModule,
    IonicModule.forRoot(MyApp),
  
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AfterCartPage,
    AdminOrdersPage,
    OrderDetailsPage,
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    Geolocation,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig,
    },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData,
    Facebook,
    Facebook,
    GooglePlus
  ]
})
export class AppModule {}
