import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthData } from '../../../../providers/auth-data';
import * as firebase from 'firebase';
import { EditProductInCartPage } from '../edit-product-in-cart/edit-product-in-cart';


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
  items: any[] = [];
  itemId: any;
  cartTotal: any = 0;
  profile: FirebaseListObservable<any>;
  profile2: FirebaseListObservable<any>;
  uid: any;
  key: any;
  profileArray: any = [];
  Quantity: any;
  orderId: any;
  dynamicPrice: any;
  compliedPrice: any[] = [];
  name: any;
  public address: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public afDb: AngularFireDatabase, public afAuth: AngularFireAuth, private toastCtrl: ToastController, public authData: AuthData,) {
    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });

    this.itemId = this.navParams.get('itemId');

    this.afDb.list( '/ userProfile / ' + this.uid + ' / currentOrder', { //Ok so here needs to be the list in the currentOrder thing.
      query: {
        orderByChild: "Quantity",
        equalTo: this.Quantity
      }
    }).subscribe(listItems => {
        loadingPopup.dismiss()
    });




  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(userAuth => {

      if (userAuth) {
        console.log("auth true!")
        this.uid = userAuth.uid;
        //this.email = userAuth.email;
        //this.profilePicture = "https://www.gravatar.com/avatar/" + md5(this.email.toLowerCase(), 'hex');

        let loadingPopup = this.loadingCtrl.create({
          spinner: 'crescent',
          content: '',
          duration: 3000
        });
        loadingPopup.present();


        this.profile = this.afDb.list('/userProfile/' + this.uid + '/currentOrder/');

        this.profile2 = this.afDb.list('/userProfile/' + this.uid + '/completedOrders/');

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
          console.log("Cart things", this.items, "Cart Total", this.cartTotal);

          loadingPopup.dismiss()
        });

      } else {
        console.log("auth false");
        this.navCtrl.setRoot('LoginPage');
      };

    });
  }

  goToHome() {
    this.navCtrl.setRoot('Category2Page');
  }

  editProduct() {
    this.navCtrl.push('EditProductInCartPage');
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

  completeOrder(items) {
    
    this.profile2.push(items).then(() => {
      const toast = this.toastCtrl.create({
        message: 'Order Placed - We will be in touch with an invoice shortly.',
        position: 'bottom',
        duration: 3000
      });
      //toast.onDidDismiss(this.dismissHandler);
      toast.present();
    });
  }

  private increment() { //Here is where you need to do the wholesale option.
    this.Quantity++;
  }
  private decrement() { //Here is where you need to do the wholesale option.
    this.Quantity--;
  }

  }
