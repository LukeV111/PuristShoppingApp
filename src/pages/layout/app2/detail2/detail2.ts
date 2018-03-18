import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthData } from '../../../../providers/auth-data';
import * as firebase from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/map'; // you might need to import this, or not depends on your setup

@IonicPage()
@Component({
  selector: 'page-detail2',
  templateUrl: 'detail2.html'
})
export class Detail2Page {
  private currentNumber = 1;
  public orderForm: FormGroup;
  public itemId: any;
  public item: FirebaseObjectObservable<any[]>;
  public profile: FirebaseListObservable<any[]>;
  public profile3: FirebaseObjectObservable<any[]>;
  public profile4: FirebaseObjectObservable<any[]>;
  public userProfile: FirebaseListObservable<any>;
  public profileArray: any = [];
  public profileArray3: any = [];
  public profileArray4: any = [];
  public CurrentOrder: FirebaseListObservable<any>;
  public name: any; //ProductName
  public price: FirebaseListObservable<any>; //ProductPrice
  public retailOne: FirebaseObjectObservable<any[]>; //Retail 1kg price
  //otherObject: FirebaseObjectObservable<any[]>;
  public wholesaleOne: any ={}; //Wholesale 1kg Price
  public twofifty: any ={}; //250g Price
  public Quantity: number;
  public grindType: any = {};
  public dripFilterCoffee: any = {};
  public bagSize: any = {};
  public coffeeIndicator: any = false;
  public coffee: any = {}; 
  public singleOrigin: any = {};
  public dynamicPrice: any;
  public uid: any;
  public cartPrice: any;
  public uPrice: any;
  public BuPrice: any;
  public SOuPrice: any;
  public DEuPrice: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public loadingCtrl: LoadingController, public afDb: AngularFireDatabase, public afAuth: AngularFireAuth, private toastCtrl: ToastController, public authData: AuthData) {
    this.userProfile = afDb.list('/userProfile/');
      this.orderForm = fb.group({
        'name': [''],
        'price': [''],
        'grindType': ['Whole Beans'],
        'bagSize': ['1kg'],
        'Quantity': ['1'],
        'coffeeIndicator': ['true'],
        'item': [''],
        'coffee': [''],
        'singleOrigin': [''],
        'decaf': [''],
        'retailOne': [''],
        'wholesaleOne': [''],
        'twofifty': [''],
        'dripFilterCoffee': ['Estandar'],
        'dripFilterCustom': [''],
        'emptyDripFilters': ['Pack of 25'],
        'emptyDripFiltersCustom': [''],
    });    
      this.itemId = this.navParams.get('itemId');
      console.log("Test");
      console.log("++++++itemId="+this.navParams.get('itemId'));

    //this.otherObject = afDb.object('/list/' + this.itemId + '/retailOne/'); //Trying to get the retail price to load it at the start.

      let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent',
        content: ''
      });
      loadingPopup.present();
      this.item = afDb.object('/list/'+this.itemId);
      loadingPopup.dismiss();

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
        this.profile3 = this.afDb.object('/userProfile/' + this.uid + '/cartIcon');
        this.profile3.subscribe(profile3 => {
          this.profileArray3 = profile3;
        });
        this.profile4 = this.afDb.object('/userProfile/' + this.uid);
        this.profile4.subscribe(profile4 => {
          this.profileArray4 = profile4;
        });
        this.profile = this.afDb.list('/userProfile/' + this.uid + '/currentOrder/');
        this.profile.subscribe(profile => {
        this.profileArray = profile;
        loadingPopup.dismiss();
        })

      } else {
        console.log("auth false");
        this.navCtrl.setRoot('LoginPage');
      }
      this.BuPrice = 275
      this.SOuPrice = 350
      this.DEuPrice = 295
    });
    
    //this.dynamicPrice = this.otherObject //So this does effect some change. You just need to get it right here now.

  }

   //*********** Add to cart**************/
  addToCart(position: string) {
    if (this.dynamicPrice) {
      this.orderForm.value.dynamicPrice = this.dynamicPrice;
    }else{
      this.orderForm.value.dynamicPrice = this.orderForm.value.price;
    }
    if (this.uPrice) {
      this.orderForm.value.uPrice = this.uPrice;
    }else{
      this.orderForm.value.uPrice = this.orderForm.value.price;
    }
    this.profile.push(this.orderForm.value).then(() => {
      const toast = this.toastCtrl.create({
          message: 'Item was added',
          position: 'bottom',
          duration: 3000
      });
      toast.onDidDismiss(this.dismissHandler);
      toast.present();
    });
    this.profile3.set("true")
  }
  private dismissHandler() {
    console.info('Toast onDidDismiss()');
  }


  //Here is where you need to switch the value of dynamicPrice

  // priceChangeAll(bag, type, quantity) {
  //   console.log("priceChangeAll = ", bag, type, quantity);
  //   if (bag == "1kg" && type == "blend" && quantity <= "3") {
  //     this.uPrice = 275;
  //     this.dynamicPrice = this.uPrice * this.currentNumber;
  //   } else if (bag == "1kg" && type == "blend" && quantity >= "4"){
  //     this.uPrice = 215;
  //     this.dynamicPrice = this.uPrice * this.currentNumber;
  //   }else if (bag == "250g" && type == "blend" && quantity <= "1000") {
  //     this.uPrice = 90;
  //     this.dynamicPrice = this.uPrice * this.currentNumber;
  //   } else if (bag == "1kg" && type == "Single Origin" && quantity <= "3") {
  //     this.uPrice = 350;
  //     this.dynamicPrice = this.uPrice * this.currentNumber;
  //   } else if (bag == "1kg" && type == "Single Origin" && quantity >= "4") {
  //     this.uPrice = 245;
  //     this.dynamicPrice = this.uPrice * this.currentNumber;
  //   }else if (bag == "250g" && type == "Single Origin" && quantity <= "1000") {
  //     this.uPrice = 105;
  //     this.dynamicPrice = this.uPrice * this.currentNumber;
  //   }
  // }

  priceChangeAll(bag, type) { //Coffee Bags Only
    console.log("priceChangeAll = ", bag, type);
    if (bag == "1kg" && type == "blend") {
      this.BuPrice = 275;
      this.dynamicPrice = this.BuPrice * this.currentNumber;
    } else if (bag == "250g" && type == "blend") {
      this.BuPrice = 90;
      this.dynamicPrice = this.BuPrice * this.currentNumber;
    } else if (bag == "1kg" && type == "Single Origin") {
      this.SOuPrice = 350;
      this.dynamicPrice = this.SOuPrice * this.currentNumber;
    } else if (bag == "250g" && type == "Single Origin") {
      this.SOuPrice = 105;
      this.dynamicPrice = this.SOuPrice * this.currentNumber;
    } else if (bag == "1kg" && type == "Decaf") {
      this.DEuPrice = 295;
      this.dynamicPrice = this.DEuPrice * this.currentNumber;
    } else if (bag == "250g" && type == "Decaf") {
      this.DEuPrice = 105;
      this.dynamicPrice = this.DEuPrice * this.currentNumber;
    }
  }

  priceChangedripFilters(type) {
    console.log("priceChangeAll = ", type);
    if (type == "Estandar") {
      this.uPrice = 75;
      this.dynamicPrice = this.uPrice * this.currentNumber;
    } else if (type == "Minimo") {
      this.uPrice = 75;
      this.dynamicPrice = this.uPrice * this.currentNumber;
    } else if (type == "Tanzania") {
      this.uPrice = 85;
      this.dynamicPrice = this.uPrice * this.currentNumber;
    } else if (type == "Columbia") {
      this.uPrice = 85;
      this.dynamicPrice = this.uPrice * this.currentNumber;
    }
  }

  priceChangeEmptyFilters(type) {
    console.log("priceChangeAll = ", type);
    if (type == "Pack of 25") {
      this.uPrice = 120;
      this.dynamicPrice = this.uPrice * this.currentNumber;
    } else if (type == "Pack of 50") {
      this.uPrice = 220;
      this.dynamicPrice = this.uPrice * this.currentNumber;
    } else if (type == "Pack of 100") {
      this.uPrice = 400;
      this.dynamicPrice = this.uPrice * this.currentNumber;
    }
  }

/*

calculateTotal(){
  let cartValue = this.dynamicPrice * this.Quantity
    console.log(cartValue)
};

*/
  // addToCart2(value: any):void{

  // }
 
/*
  addToCart2(value: any): void {
    if (this.coffee) {
      this.userProfile.push({
        
        Quantity: this.Quantity,
        createdDate: firebase.database.ServerValue.TIMESTAMP,
        grindType: value.grindType,
        bagSize: value.bagSize,
      });
    } 
    else {
      this.userProfile.push({
        name: value.name,
        Quantity: this.Quantity,
        createdDate: firebase.database.ServerValue.TIMESTAMP,
      })
    }
  }
*/
  openCart() {
    this.navCtrl.push('CartPage');
  }

  goToHome() {
    this.navCtrl.setRoot('Category2Page');
  }

//For other products

  private increment() {
    this.currentNumber++;
    if (this.uPrice) {
      console.log(this.currentNumber)
      this.dynamicPrice = this.uPrice * this.currentNumber;
    }else{
      console.log(this.currentNumber)
      this.dynamicPrice = this.orderForm.value.price * this.currentNumber;
    }
  }

  private decrement() {
    if (this.currentNumber == 1) {
    }else{
      this.currentNumber--;
      if (this.uPrice) {
        console.log(this.currentNumber)
        this.dynamicPrice = this.uPrice * this.currentNumber;
      }
      else{
        this.dynamicPrice = this.orderForm.value.price * this.currentNumber;
        console.log(this.currentNumber)
      }
    }
    
  }
  //For coffee blends - Getting somewhere now. Need to catch the 250g option though.

  private blendIncrement() {
    this.currentNumber++;
    if (this.BuPrice >= 91 && this.currentNumber <= 3) {
      console.log(this.currentNumber)
      console.log(this.BuPrice)
      this.dynamicPrice = this.BuPrice * this.currentNumber;
      this.dynamicPrice = Math.ceil(this.dynamicPrice);
    } else if (this.BuPrice >= 91 && this.currentNumber > 3) {
      console.log(this.currentNumber)
      console.log(this.BuPrice)
      this.dynamicPrice = (this.BuPrice * 0.78181818181818) * this.currentNumber;
      this.dynamicPrice = Math.ceil(this.dynamicPrice);
    } else {
      console.log(this.currentNumber)
      console.log(this.BuPrice)
      this.dynamicPrice = 90 * this.currentNumber;
      this.dynamicPrice = Math.ceil(this.dynamicPrice);
    }
  }

  private blendDecrement() {
    if (this.currentNumber == 1) {
    } else {
      this.currentNumber --;
      if (this.BuPrice >= 91 && this.currentNumber <= 3) {
        console.log(this.currentNumber)
        console.log(this.BuPrice)
        this.dynamicPrice = this.BuPrice * this.currentNumber;
        this.dynamicPrice = Math.ceil(this.dynamicPrice);
      } else if (this.BuPrice >= 91 && this.currentNumber > 3) {
        console.log(this.currentNumber)
        console.log(this.BuPrice)
        this.dynamicPrice = (this.BuPrice * 0.78181818181818) * this.currentNumber;
        this.dynamicPrice = Math.ceil(this.dynamicPrice);
      } else {
        this.dynamicPrice = 90 * this.currentNumber;
        console.log(this.currentNumber)
        console.log(this.BuPrice)
        this.dynamicPrice = Math.ceil(this.dynamicPrice);
      }
    }
  }	

  private SOIncrement() {
  this.currentNumber++;
    if (this.SOuPrice >= 106 && this.currentNumber <= 3) {
    console.log(this.currentNumber)
      this.dynamicPrice = this.SOuPrice * this.currentNumber;
    this.dynamicPrice = Math.ceil(this.dynamicPrice);
    } else if (this.SOuPrice >= 106 && this.currentNumber > 3) {
    console.log(this.currentNumber)
      this.dynamicPrice = (this.SOuPrice * 0.7) * this.currentNumber;
    this.dynamicPrice = Math.ceil(this.dynamicPrice);
  } else {
    console.log(this.currentNumber)
    this.dynamicPrice = 105 * this.currentNumber;
    this.dynamicPrice = Math.ceil(this.dynamicPrice);
}

}

  private SODecrement() {
  if (this.currentNumber == 1) {
  } else {
    this.currentNumber--;
    if (this.SOuPrice >= 106 && this.currentNumber <= 3) {
      console.log(this.currentNumber)
      this.dynamicPrice = this.SOuPrice * this.currentNumber;
      this.dynamicPrice = Math.ceil(this.dynamicPrice);
    } else if (this.SOuPrice >= 106 && this.currentNumber > 3) {
      console.log(this.currentNumber)
      this.dynamicPrice = (this.SOuPrice * 0.7) * this.currentNumber;
      this.dynamicPrice = Math.ceil(this.dynamicPrice);
    } else {
      this.dynamicPrice = 105 * this.currentNumber;
      console.log(this.currentNumber)
      this.dynamicPrice = Math.ceil(this.dynamicPrice);
    }
  }
}

  private DeIncrement() {
    this.currentNumber++;
    if (this.DEuPrice >= 106 && this.currentNumber <= 3) {
      console.log(this.currentNumber)
      this.dynamicPrice = this.DEuPrice * this.currentNumber;
      this.dynamicPrice = Math.ceil(this.dynamicPrice);
    } else if (this.DEuPrice >= 106 && this.currentNumber > 3) {
      console.log(this.currentNumber)
      this.dynamicPrice = (this.DEuPrice * 0.7966101694915254) * this.currentNumber;
      this.dynamicPrice = Math.ceil(this.dynamicPrice);
    } else {
      console.log(this.currentNumber)
      this.dynamicPrice = 105 * this.currentNumber;
      this.dynamicPrice = Math.ceil(this.dynamicPrice);
    }

  }

  private DeDecrement() {
    if (this.currentNumber == 1) {
    } else {
      this.currentNumber--;
      if (this.DEuPrice >= 106 && this.currentNumber <= 3) {
        console.log(this.currentNumber)
        this.dynamicPrice = this.DEuPrice * this.currentNumber;
        this.dynamicPrice = Math.ceil(this.dynamicPrice);
      } else if (this.DEuPrice >= 106 && this.currentNumber > 3) {
        console.log(this.currentNumber)
        this.dynamicPrice = (this.DEuPrice * 0.7966101694915254) * this.currentNumber;
        this.dynamicPrice = Math.ceil(this.dynamicPrice);
      } else {
        this.dynamicPrice = 105 * this.currentNumber;
        console.log(this.currentNumber)
        this.dynamicPrice = Math.ceil(this.dynamicPrice);
      }
    }
  }

}