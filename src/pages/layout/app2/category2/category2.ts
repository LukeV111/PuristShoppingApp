import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { CartPage } from '../cart/cart';



@IonicPage()
@Component({
  selector: 'page-category2',
  templateUrl: 'category2.html'
})
export class Category2Page {
  public category: any[] = [];
  public profileArray: any = [];
  public profile: FirebaseObjectObservable<any[]>
  public currentOrder: FirebaseListObservable<any[]>
  public uid: any;
  public item: FirebaseObjectObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public afDb: AngularFireDatabase, public afAuth: AngularFireAuth,) {

      let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent',
        content: ''
      });
      loadingPopup.present();

      this.afDb.list('/category', {query: {
          orderByChild: "type",
          equalTo: "puristcoffee" //You need to make the category 'puristcoffee' if you want it to be displayed
      }}).subscribe(categoryItems => {
        this.category = categoryItems;
        loadingPopup.dismiss()
      });
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(userAuth => {

      if (userAuth) {
        console.log("auth true!")
        this.uid = userAuth.uid;

        let loadingPopup = this.loadingCtrl.create({
          spinner: 'crescent',
          content: '',
          duration: 3000
        });
        loadingPopup.present();

        this.profile = this.afDb.object('/userProfile/' + this.uid);
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

  openList(categoryId){
      this.navCtrl.push('List2Page',{categoryId:categoryId}); 
  }

  openCart(){
    this.navCtrl.push('CartPage');
  }

  toProfile() {
    this.navCtrl.push('ProfilePage');
  }
}
