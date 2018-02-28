webpackJsonp([9],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainPageModule = (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__main__["a" /* MainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__main__["a" /* MainPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__main__["a" /* MainPage */]
            ]
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_data__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//***********  Facebook **************/

//***********  Google plus **************/


var MainPage = (function () {
    function MainPage(navCtrl, authData, platform, fb, alertCtrl, loadingCtrl, facebook, googleplus) {
        this.navCtrl = navCtrl;
        this.authData = authData;
        this.platform = platform;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.facebook = facebook;
        this.googleplus = googleplus;
        this.backgroundImage = "./assets/bg11.jpg";
        this.imgLogo = "./assets/ionic.png";
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    MainPage.prototype.facebookLogin = function () {
        var _this = this;
        var loadingPopup = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '',
            duration: 15000
        });
        loadingPopup.present();
        // call signInWithFacebook in authData provider.
        if (this.platform.is('cordova')) {
            this.authData.signInWithFacebook()
                .then(function (authData) {
                var resJSON = JSON.stringify(authData);
                _this.authData.updateUserProfile(authData.uid, authData.displayName, authData.email, authData.photoURL, authData.phoneNumber);
                loadingPopup.dismiss();
                _this.navCtrl.setRoot('AfterLoginPage');
            }, function (error) {
                var errorMessage = error.message;
                loadingPopup.dismiss().then(function () {
                    alert("Error:" + errorMessage);
                });
            });
        }
        else {
            alert("Please install app in device.");
            loadingPopup.dismiss();
        }
    };
    MainPage.prototype.googleLogin = function () {
        var _this = this;
        var loadingPopup = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '',
            duration: 15000
        });
        loadingPopup.present();
        if (this.platform.is('cordova')) {
            this.authData.signInWithGoogle()
                .then(function (authData) {
                _this.authData.updateUserProfile(authData.uid, authData.displayName, authData.email, authData.photoURL, authData.phoneNumber);
                loadingPopup.dismiss();
                _this.navCtrl.setRoot('AfterLoginPage');
            }, function (error) {
                var errorMessage = error.message;
                loadingPopup.dismiss().then(function () {
                    alert("Error" + errorMessage);
                });
            });
        }
        else {
            alert("Please install app in device.");
            loadingPopup.dismiss();
        }
    };
    MainPage.prototype.loginWithEmail = function () {
        this.navCtrl.push('LoginPage');
    };
    MainPage.prototype.createAccount = function () {
        this.navCtrl.push('RegisterPage');
    };
    MainPage.prototype.presentAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: title,
            buttons: ['OK']
        });
        alert.present();
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/auth/main/main.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">\n  <div class="login-container">\n    <div margin-bottom >\n      <img class="logo"  src="./assets/ionic.png" />\n    </div>\n    <div margin-top >\n        <button ion-button mode="ios"  block margin-top margin-bottom   (click)="facebookLogin()" color="blue2"   icon-left > <ion-icon name="logo-facebook"></ion-icon>facebook login2</button>  \n        <button ion-button mode="ios" block margin-top  margin-bottom   (click)="googleLogin()" color="red"   icon-left> <ion-icon name="logo-google"></ion-icon>google login</button>  \n      <!-- <button ion-button mode="ios"  block margin-top margin-bottom   color="blue2"   icon-left > <ion-icon name="logo-facebook"></ion-icon>facebook login</button>  \n      <button ion-button mode="ios" block margin-top  margin-bottom   color="red"   icon-left> <ion-icon name="logo-google"></ion-icon>google login</button>   -->\n   \n      <button ion-button mode="ios" block margin-top  margin-top margin-bottom   (click)="loginWithEmail()" color="gray"  icon-left> <ion-icon name="ios-mail"></ion-icon>e-mail login</button>  \n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <button class="bottom" ion-button  type="button"  clear full color="light" (click)="createAccount()">Create new account</button>\n</ion-footer>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/auth/main/main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_data__["a" /* AuthData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ })

});
//# sourceMappingURL=9.js.map