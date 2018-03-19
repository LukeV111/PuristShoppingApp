webpackJsonp([11],{

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forgot__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPageModule = (function () {
    function ForgotPageModule() {
    }
    ForgotPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__forgot__["a" /* ForgotPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__forgot__["a" /* ForgotPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__forgot__["a" /* ForgotPage */]
            ]
        })
    ], ForgotPageModule);
    return ForgotPageModule;
}());

//# sourceMappingURL=forgot.module.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_data__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPage = (function () {
    function ForgotPage(authData, fb, nav, loadingCtrl, alertCtrl) {
        this.authData = authData;
        this.fb = fb;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.backgroundImage = "./assets/bg3.jpg";
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.resetPasswordForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])],
        });
    }
    ForgotPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log("form is invalid = " + this.resetPasswordForm.value);
        }
        else {
            var loadingPopup_1 = this.loadingCtrl.create({
                spinner: 'crescent',
                content: ''
            });
            loadingPopup_1.present();
            this.authData.resetPassword(this.resetPasswordForm.value.email)
                .then(function (user) {
                loadingPopup_1.dismiss();
                _this.presentAlert("We just sent you a reset link to your email");
                _this.nav.setRoot('LoginPage');
            }, function (error) {
                loadingPopup_1.dismiss();
                var errorMessage = error.message;
                _this.presentAlert(errorMessage);
            });
        }
    };
    ForgotPage.prototype.presentAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: title,
            buttons: ['OK']
        });
        alert.present();
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-forgot',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/layout/auth/forgot/forgot.html"*/'<ion-header no-border>\n    <ion-navbar transparent color="light">\n        <button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="masters">\n    <div class="login-container">\n        <img class="logo" src="./assets/1Artboard 7.png" />\n        <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n\n            <ion-item>\n                <ion-label stacked>Email</ion-label>\n                <ion-input tappable formControlName="email" type="email" placeholder="Your email address" [class.invalid]="!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.dirty"></ion-input>\n            </ion-item>\n\n            <ion-item class="error-message">\n                <p *ngIf="!resetPasswordForm.controls.email.valid  && resetPasswordForm.controls.email.dirty">Please enter a valid email.</p>\n            </ion-item>\n\n            <button ion-button block icon-left color="light" outline type="submit" mode="ios" color="white">\n        Reset your Password\n      </button>\n\n        </form>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/layout/auth/forgot/forgot.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_data__["a" /* AuthData */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ })

});
//# sourceMappingURL=11.js.map