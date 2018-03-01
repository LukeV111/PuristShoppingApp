import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the AfterCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-after-cart',
  templateUrl: 'after-cart.html',
})
export class AfterCartPage {
  parameter1: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.parameter1 = navParams.get('param1'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfterCartPage');
    
  }

//You're here
  openBrowser() {
    const browser = this.iab.create('https://www.payfast.co.za/eng/process?cmd=_paynow&amp;receiver=10867430&amp;item_name=Purist+Coffee+Order&amp;amount=1234567890.00&amp;return_url=https%3A%2F%2Fwww.puristcoffee.com&amp;cancel_url=https%3A%2F%2Fpuristcoffee.com', '_system');
    browser.close();
  }

  goToHome() {
    this.navCtrl.setRoot('Category2Page');
  }
}

