import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthData } from '../../../../providers/auth-data';
import * as firebase from 'firebase';
import { AfterCartPage } from '../after-cart/after-cart';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import * as moment from 'moment'

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',

})
export class CartPage {
  private collection: any = {};
  items: any[] = [];
  itemId: any;
  cartTotal: any = 0;
  subTotal: any = 0;
  shippingTotal: any;
  profile: FirebaseListObservable<any>;
  SpAn: FirebaseListObservable<any>;
  profile2: FirebaseListObservable<any>;
  profile3: FirebaseObjectObservable<any>;
  profile4: FirebaseListObservable<any>;
  adminProfile: FirebaseListObservable<any>;
  adminProfile2: FirebaseListObservable<any>;
  uid: any;
  userEmail: any;
  key: any;
  profileArray: any = [];
  Quantity: any;
  orderId: any;
  dynamicPrice: any;
  compliedPrice: any[] = [];
  name: any;
  public address: any[];
  public cartForm: FormGroup;
  public productForm: FormGroup;
  public itemName: any[];
  //dateTime: String = new Date().toISOString();
  dateTime = moment().format();
  serverTime: any;

  //public formItems: firebase.database.Reference = firebase.database().ref('/userProfile/' + this.uid + '/completedOrders2/');

  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams, public loadingCtrl: LoadingController, public afDb: AngularFireDatabase, public afAuth: AngularFireAuth, private toastCtrl: ToastController, public authData: AuthData,) {
    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    this.itemId = this.navParams.get('itemId');

    this.afDb.list( '/ userProfile / ' + this.uid + ' / currentOrder', {
      query: {
        orderByChild: "Quantity",
        equalTo: this.Quantity
      }
    }).subscribe(listItems => {
        loadingPopup.dismiss()
    });

    this.cartForm = fb.group({
      'subTotal': [''],
      'shippingTotal': [''],
      'cartPrice': [''],
      'address': [''],
      'collectionOption': ['No'],
      'name': [''],
      'dateTime': [''],
    });    
  
    this.productForm = fb.group({
      'itemName': [''],
    });
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(userAuth => {

      if (userAuth) {
        console.log("auth true!")
        this.uid = userAuth.uid;
        //this.userEmail = userAuth.email;
        //this.profilePicture = "https://www.gravatar.com/avatar/" + md5(this.email.toLowerCase(), 'hex');

        let loadingPopup = this.loadingCtrl.create({
          spinner: 'crescent',
          content: '',
          duration: 3000
        });
        loadingPopup.present();

        // this.SpAn = this.afDb.list('/users/0qHEeoVer6OfHIgjJbi4Z9bgfX02/CurrentOrders/');
        this.profile = this.afDb.list('/userProfile/' + this.uid + '/currentOrder/');

        this.profile2 = this.afDb.list('/userProfile/' + this.uid + '/completedOrders/');
        this.profile4 = this.afDb.list('/userProfile/' + this.uid + '/cartAmounts/');
        this.adminProfile = this.afDb.list('/userProfile/icfbF0f63QV8bjJUYKwnOwYPCMf2/placedOrders/' + this.dateTime)
        this.adminProfile2 = this.afDb.list('/userProfile/icfbF0f63QV8bjJUYKwnOwYPCMf2/placedOrders/')


        this.afDb.list('/userProfile/' + this.uid + '/currentOrder', {
          query: {
            orderByChild: "Quantity",
            equalTo: this.Quantity
          }
        }).subscribe(listItems => {
          this.subTotal = 0;
          this.items = listItems;
          this.items.forEach((item) => {
            this.subTotal = this.subTotal + (item.uPrice * item.Quantity);
            if (this.subTotal <= 699) {
              this.shippingTotal = 75
            } else {
              this.shippingTotal = 0
            }
            this.cartTotal = this.subTotal + this.shippingTotal
          });
          //this.profile4.push(this.subTotal)
          
          //this.profile4.push(this.subTotal)

/////////Submit cart total to Current Order before submitting all to completedOrders

        /*
        this.afDb.list('/userProfile/' + this.uid + '/currentOrder', {
          query: {
            orderByChild: "Quantity",
            equalTo: this.Quantity
          }
        }).subscribe(listItems => {
          this.cartTotal = 0;
          this.items = listItems;
          this.items.forEach((item) => {
            this.cartTotal = this.cartTotal + (item.uPrice * item.Quantity);
          });
*/

          console.log("Cart things", this.items, "Cart Total", this.cartTotal);

          loadingPopup.dismiss()
        });

        this.profile3 = this.afDb.object('/userProfile/' + this.uid);
        this.profile3.subscribe(profile => {
          this.profileArray = profile;
        })

      } else {
        console.log("auth false");
        this.navCtrl.setRoot('LoginPage');
      };

    });

  }

  goToHome() {
    this.navCtrl.setRoot('Category2Page');
  }

  deleteProduct(item) {
    console.log("Item =>", item);
    this.afDb.list('/userProfile/' + this.uid + '/currentOrder/').remove(item);
    }


  clearCart() {
    this.afDb.list('/userProfile/' + this.uid + '/currentOrder/').remove();
  }

  clearIcon() {
    this.afDb.object('/userProfile/' + this.uid + '/cartIcon/').remove();
  }

  addAddress() {
    this.profile2.push(this.address);
  }

  // toAfterCart() {
  //   //this.navCtrl.push('AfterCartPage');
  //   this.navCtrl.push(AfterCartPage, {
  //     param1: this.cartTotal
  //   });
  // }

  completeOrder(items) {
    //Admin Stuff
    this.adminProfile.push(items)
    this.adminProfile.push(this.cartForm.value)
    this.adminProfile.push(this.uid)
    //items.forEach(item => {
    //  this.adminProfile.push(items)
    //});
    this.adminProfile.push(firebase.database.ServerValue.TIMESTAMP)
  //User Stuff
    this.profile2.push(items).then(() => {
      const toast = this.toastCtrl.create({
        message: 'Order Placed! Please pick your payment option.',
        position: 'middle',
        duration: 6000
      });
      //toast.onDidDismiss(this.dismissHandler);
      toast.present();
    });
    this.profile2.push(this.cartForm.value)
    this.profile2.push(firebase.database.ServerValue.TIMESTAMP)
    this.navCtrl.push(AfterCartPage, {
      param1: this.cartTotal
    });
   //this.afDb.list('/userProfile/' + this.uid + '/currentOrder/').remove();
      }//
  //completeOrderTest(items) {
    //this.adminProfile2.push(this.productForm.value)
    // items.forEach(item => {
    //   this.adminProfile2.push(this.productForm.value)
    // });
  //}

  completeOrderTest(items) {
    this.adminProfile2.push(items);
  }    
  
  
  private decrement() { //Here is where you need to do the wholesale option.
    this.Quantity--;
  }

  collectionOption(collectionOption) {
    console.log("collectionOption = ", collectionOption);
    if (collectionOption == "Yes") {
      this.shippingTotal = 0;
      this.cartTotal = this.subTotal + this.shippingTotal
    } else if (collectionOption == "No" && this.subTotal >= 699) {
      this.shippingTotal = 0;
      this.cartTotal = this.subTotal + this.shippingTotal
    }
    else {
      this.shippingTotal = 75;
      this.cartTotal = this.subTotal + this.shippingTotal
    }
  }
}

//WhooHoo