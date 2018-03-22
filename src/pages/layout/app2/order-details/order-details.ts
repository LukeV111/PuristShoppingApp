import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthData } from '../../../../providers/auth-data';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase'
import { FirebaseListObservable } from 'angularfire2/database-deprecated'

/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {

  public customerOrder: FirebaseListObservable<any[]>;
  email: any;
  uid: any;
  profile: FirebaseObjectObservable<any[]>;
  profileArray: any = [];
  public specificOrders: Array<any> = [];
  public specificOrderRef: firebase.database.Reference = firebase.database().ref('/userProfile/icfbF0f63QV8bjJUYKwnOwYPCMf2/placedOrders/0/'); //Path to orders.

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public afAuth: AngularFireAuth, public afDb: AngularFireDatabase,

) {
    this.customerOrder = this.navParams.data;

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailsPage');
    this.afAuth.authState.subscribe(userAuth => {

      if (userAuth) {
        console.log("auth true!")
        this.uid = userAuth.uid;
        this.email = userAuth.email;

        this.profile = this.afDb.object('/userProfile/' + this.uid);
        this.profile.subscribe(profile => {
          this.profileArray = profile;
        })

      } else {
        console.log("auth false");
        this.navCtrl.setRoot('LoginPage');
      }
    });


    this.specificOrderRef.on('value', itemSnapshot => {
      this.specificOrders = [];
      itemSnapshot.forEach(specificOrder => {
        let item = specificOrder.val();
        item.key = specificOrder.key;
        this.specificOrders.push(item);
        return false;
      });
    });
  }

  closeModal() {
    this.navCtrl.pop();
  }
  
}
