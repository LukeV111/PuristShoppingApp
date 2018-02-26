import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { AuthData } from '../../../../providers/auth-data';

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


import md5 from 'crypto-md5'; // dependencies:"crypto-md5"

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  email: any;
  profilePicture: any = "https://www.gravatar.com/avatar/"
  profileArray: any = [];
  profile: FirebaseListObservable<any[]>;
  profile2: FirebaseListObservable<any[]>;
  uid: any;
  key: any;
  itemId: any;
  Quantity: any;
  items: any[] = [];
  name: any;
  orderId: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthData, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public afAuth: AngularFireAuth, public afDb: AngularFireDatabase) {
    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    this.itemId = this.navParams.get('itemId');
    console.log("Test")
    console.log("++++++itemId=" + this.navParams.get('itemId'));

    this.afDb.list('/ userProfile / ' + this.uid,  { //Ok so here needs to be the list in the completedOrders thing.
      query: {
        orderByChild: "Quantity",
        equalTo: this.Quantity
      }
    }).subscribe(listItems => {
      this.items = listItems;
      loadingPopup.dismiss()
    });
    
  }
  ionViewWillLoad() {
    this.afAuth.authState.subscribe(userAuth => {

      if (userAuth) {
        console.log("auth true!")
        this.uid = userAuth.uid;
        this.email = userAuth.email;
        //this.profilePicture = "https://www.gravatar.com/avatar/" + md5(this.email.toLowerCase(), 'hex');

        let loadingPopup = this.loadingCtrl.create({
          spinner: 'crescent',
          content: '',
          duration: 15000
        });
        loadingPopup.present();

        this.profile = this.afDb.list('/userProfile/' + this.uid);

        this.profile.subscribe(profile => {
          this.profileArray = profile;
          loadingPopup.dismiss();
        })

      } else {
        console.log("auth false");
        this.navCtrl.setRoot('LoginPage');
      }

    });
  }

  logout() {
    this.authData.logoutUser()
      .then(authData => {
        console.log("Logged out");
        // toast message
        this.presentToast('bottom', 'You are now logged out');
        this.navCtrl.setRoot('LoginPage');
      }, error => {
        var errorMessage: string = error.message;
        console.log(errorMessage);
        //this.presentAlert(errorMessage);
      });
    }

  presentAlert(title) {
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }

  presentToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      position: position,
      duration: 3000
    });
    toast.present();
  }

}
