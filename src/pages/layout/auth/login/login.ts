import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { FormBuilder, Validators } from '@angular/forms';
import { Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


//***********  Facebook **************/
import { Facebook } from '@ionic-native/facebook';

//***********  Google plus **************/
import { GooglePlus } from '@ionic-native/google-plus';


import { AuthData } from '../../../../providers/auth-data';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public uid: any;
  public profile: FirebaseObjectObservable<any>;
  public profileArray: any = [];
  public loginForm: any;
  public backgroundImage: any = "./assets/bg1.jpg";
  public imgLogo: any = "./assets/medium_150.70391061453px_1202562_easyicon.net.png";

  constructor(public navCtrl: NavController, public authData: AuthData, public fb: FormBuilder, public alertCtrl: AlertController, public afAuth: AngularFireAuth, public loadingCtrl: LoadingController,private facebook: Facebook,
    private googleplus: GooglePlus,
    private platform: Platform,) {
      let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
            password: ['', Validators.compose([Validators.minLength(0), Validators.required])]
      });
  }


  ionViewDidLoad() {
    this.afAuth.authState.subscribe(userAuth => {

      if (userAuth) {
        console.log("auth true!")
        this.navCtrl.setRoot('Category2Page')
      }else {
        console.log("auth false");
      }

    });
  }


  login(){
      if (!this.loginForm.valid){
          this.presentAlert('There was an error. Have you ordered here before?')
          console.log("error");
      } else {
        let loadingPopup = this.loadingCtrl.create({
          spinner: 'crescent', 
          content: ''
        });
        loadingPopup.present();

        this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then( authData => {
          console.log("Auth pass");
          loadingPopup.dismiss();
          this.navCtrl.setRoot('Category2Page');
        }, error => {
          var errorMessage: string = error.message;
          loadingPopup.dismiss().then( () => {
              this.presentAlert(errorMessage)
          });
        });
      }
  }

  forgot(){
    this.navCtrl.push('ForgotPage');
  }

  createAccount(){
    this.navCtrl.push('RegisterPage');
  }
  presentAlert(title) {
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }

}
