import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import { CartPage } from '../cart/cart';
import { AngularFireAuth } from 'angularfire2/auth';




@IonicPage()
@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html'
})
export class List2Page {
  public categoryId:any;
  public items: any[] = [];
  public userProfile: FirebaseListObservable<any>;
  public profile4: FirebaseObjectObservable<any[]>;
  public profileArray4: any = [];
  public uid: any;





  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public afDB: AngularFireDatabase, public afAuth: AngularFireAuth) {
      let loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent',
        content: ''
      });
      loadingPopup.present();
     this.userProfile = afDB.list('/userProfile');

      //this.categoryId = parseFloat(this.navParams.get('categoryId').toString());  
      this.categoryId =  parseInt(this.navParams.get('categoryId'));
      this.afDB.list('/list', {query: {
          orderByChild: "categoryId",
          equalTo: this.categoryId
      }}).subscribe(listItems => {
            this.items = listItems;
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
        this.profile4 = this.afDB.object('/userProfile/' + this.uid);
        this.profile4.subscribe(profile4 => {
          this.profileArray4 = profile4;
          loadingPopup.dismiss();
        })

      } else {
        console.log("auth false");
        this.navCtrl.setRoot('LoginPage');
      }

    });

    //this.dynamicPrice = this.otherObject //So this does effect some change. You just need to get it right here now.

  }

  goToDetail(itemId){
      this.navCtrl.push('Detail2Page',{itemId:itemId}); 
  }

  openCart() {
    this.navCtrl.push('CartPage');
  }

  goToHome() {
    this.navCtrl.setRoot('Category2Page');
  }

}
