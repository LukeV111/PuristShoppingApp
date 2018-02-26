webpackJsonp([6],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__profile__["a" /* ProfilePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__profile__["a" /* ProfilePage */]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_data__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, authData, alertCtrl, loadingCtrl, toastCtrl, afAuth, afDb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authData = authData;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.profilePicture = "https://www.gravatar.com/avatar/";
        this.profileArray = [];
        this.items = [];
        var loadingPopup = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        this.itemId = this.navParams.get('itemId');
        console.log("Test");
        console.log("++++++itemId=" + this.navParams.get('itemId'));
        this.afDb.list('/ userProfile / ' + this.uid, {
            query: {
                orderByChild: "Quantity",
                equalTo: this.Quantity
            }
        }).subscribe(function (listItems) {
            _this.items = listItems;
            loadingPopup.dismiss();
        });
    }
    ProfilePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (userAuth) {
            if (userAuth) {
                console.log("auth true!");
                _this.uid = userAuth.uid;
                _this.email = userAuth.email;
                //this.profilePicture = "https://www.gravatar.com/avatar/" + md5(this.email.toLowerCase(), 'hex');
                var loadingPopup_1 = _this.loadingCtrl.create({
                    spinner: 'crescent',
                    content: '',
                    duration: 15000
                });
                loadingPopup_1.present();
                _this.profile = _this.afDb.list('/userProfile/' + _this.uid);
                _this.profile.subscribe(function (profile) {
                    _this.profileArray = profile;
                    loadingPopup_1.dismiss();
                });
            }
            else {
                console.log("auth false");
                _this.navCtrl.setRoot('LoginPage');
            }
        });
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.authData.logoutUser()
            .then(function (authData) {
            console.log("Logged out");
            // toast message
            _this.presentToast('bottom', 'You are now logged out');
            _this.navCtrl.setRoot('LoginPage');
        }, function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
            //this.presentAlert(errorMessage);
        });
    };
    ProfilePage.prototype.presentAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: title,
            buttons: ['OK']
        });
        alert.present();
    };
    ProfilePage.prototype.presentToast = function (position, message) {
        var toast = this.toastCtrl.create({
            message: message,
            position: position,
            duration: 3000
        });
        toast.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/layout/profile/profile/profile.html"*/'<ion-header no-border>\n    <ion-navbar transparent color="white">\n        <button ion-button menuToggle>\n      <ion-icon name="menu" color="black"></ion-icon>\n    </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen="true" no-padding>\n\n    <div class="profile-box">\n        <div text-center>\n            <!-- <img *ngIf="(profile | async)?.photo" src="{{(profile | async)?.photo}}" class="edit-avatar pop-in" alt="">-->\n            <!--<img *ngIf="!(profile | async)?.photo" src="https://pbs.twimg.com/profile_images/834457277830541312/bYMCvtHD.jpg" class="edit-avatar pop-in" alt="">-->\n            <h3 class="name-text">{{(profile | async)?.name}}</h3>\n            <hr>\n        </div>\n    </div>\n\n    <div padding>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-icon name="ios-person" item-left></ion-icon>\n                <p>Name</p>\n                <h2>{{(profile | async)?.name}}</h2>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="ios-mail" item-left></ion-icon>\n                <p>E-mail</p>\n                <h2>{{(profile | async)?.email}}</h2>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="ios-call" item-left></ion-icon>\n                <p>Contact Number</p>\n                <h2>{{(profile | async)?.phone}}</h2>\n            </ion-item>\n        </ion-list>\n\n        <ion-item>\n            <h3>Your Orders</h3>\n        </ion-item>\n\n        <ion-list *ngFor="let item of items">\n            <ion-item>\n                Items\n            </ion-item>\n        </ion-list>\n        <button ion-button block mode="ios" color="black" (click)="logout()">\n          Logout\n        </button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/layout/profile/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_data__["a" /* AuthData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=6.js.map