import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../../../providers/auth-data';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-admin-orders',
  templateUrl: 'admin-orders.html',
})
export class AdminOrdersPage {

  itemId: any; 
  email: any;
  profilePicture: any = "https://www.gravatar.com/avatar/"
  profileArray: any = [];
  profile: FirebaseObjectObservable<any[]>;
  uid: any;
  public customerOrders: Array<any> = [];
  public customerOrdersRef: firebase.database.Reference = firebase.database().ref('/userProfile/icfbF0f63QV8bjJUYKwnOwYPCMf2/placedOrders/'); //Path to orders.


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authData: AuthData,
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase,
  ) {
    this.itemId = this.navParams.get('itemId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminOrdersPage');
    console.log(this.itemId)
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

    this.customerOrdersRef.on('value', itemSnapshot => {
      this.customerOrders = [];
      itemSnapshot.forEach(itemSnap => {
        let item = itemSnap.val();
        item.key = itemSnap.key
        this.customerOrders.push(item);
        return false;
      });
    });

  }
  }

