webpackJsonp([10],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_data__ = __webpack_require__(277);
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


var LoginPage = (function () {
    function LoginPage(navCtrl, authData, fb, alertCtrl, afAuth, loadingCtrl, facebook, googleplus, platform) {
        this.navCtrl = navCtrl;
        this.authData = authData;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.facebook = facebook;
        this.googleplus = googleplus;
        this.platform = platform;
        this.profileArray = [];
        this.backgroundImage = "./assets/bg1.jpg";
        this.imgLogo = "./assets/medium_150.70391061453px_1202562_easyicon.net.png";
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(0), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (userAuth) {
            if (userAuth) {
                console.log("auth true!");
                _this.navCtrl.setRoot('Category2Page');
            }
            else {
                console.log("auth false");
            }
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            this.presentAlert('There was an error. Have you ordered here before?');
            console.log("error");
        }
        else {
            var loadingPopup_1 = this.loadingCtrl.create({
                spinner: 'crescent',
                content: ''
            });
            loadingPopup_1.present();
            this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (authData) {
                console.log("Auth pass");
                loadingPopup_1.dismiss();
                _this.navCtrl.setRoot('Category2Page');
            }, function (error) {
                var errorMessage = error.message;
                loadingPopup_1.dismiss().then(function () {
                    _this.presentAlert(errorMessage);
                });
            });
        }
    };
    LoginPage.prototype.forgot = function () {
        this.navCtrl.push('ForgotPage');
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage.prototype.presentAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: title,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/auth/login/login.html"*/'<ion-header no-border>\n    <ion-navbar transparent>\n        <!--<button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>-->\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="masters">\n    <div class="login-container">\n        <img class="logo" src="./assets/1Artboard 7.png" />\n\n        <!--*********** Form ***********-->\n        <form [formGroup]="loginForm" (submit)="login()" novalidate>\n            <ion-item>\n                <ion-label stacked>Email Address:</ion-label>\n                <ion-input tappable color="light" #email type="email" formControlName="email" [class.invalid]="!loginForm.controls.email.valid &&loginForm.controls.email.dirty">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>Password:</ion-label>\n                <ion-input tappable #password type="password" formControlName="password" [class.invalid]="!loginForm.controls.password.valid &&loginForm.controls.password.dirty">\n                </ion-input>\n            </ion-item>\n            <ion-item class="error-message">\n                <p *ngIf="!loginForm.controls.email.valid  &&\n                loginForm.controls.email.dirty">*Please enter a valid email.</p>\n                <p *ngIf="!loginForm.controls.password.valid  &&\n                loginForm.controls.password.dirty">*Password needs more than 6 characters.</p>\n            </ion-item>\n\n            <div class="submit-box">\n                <button ion-button mode="ios" block icon-left color="light" outline type="submit">Log In</button>\n                <button ion-button type="button" mode="ios" block icon-left color="light" outline (click)="createAccount()" margin-top>\n             Register Profile\n        </button>\n            </div>\n        </form>\n        <button class="bottom" ion-button mode="ios" type="button" block color="light" outline (click)="forgot()" margin-top>Forgot Password?</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/auth/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_data__["a" /* AuthData */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=10.js.map