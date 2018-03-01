webpackJsonp([8],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__register__["a" /* RegisterPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__register__["a" /* RegisterPage */]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_data__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(nav, authData, fb, loadingCtrl, alertCtrl) {
        this.nav = nav;
        this.authData = authData;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.backgroundImage = "./assets/bg2.jpg";
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.registerForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])],
            profileName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        console.log("call signopUser");
        if (!this.registerForm.valid) {
            console.log(this.registerForm.value);
            this.presentAlert("invalid form");
        }
        else {
            var loadingPopup_1 = this.loadingCtrl.create({
                spinner: 'crescent',
                content: 'Creating..'
            });
            loadingPopup_1.present();
            this.authData.registerUser(this.registerForm.value.profileName, this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.phone)
                .then(function () {
                loadingPopup_1.dismiss();
                _this.nav.setRoot('Category2Page');
            }, function (error) {
                var errorMessage = error.message;
                loadingPopup_1.dismiss();
                _this.presentAlert(errorMessage);
            });
        }
    };
    RegisterPage.prototype.presentAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: title,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/auth/register/register.html"*/'<ion-header no-border>\n    <ion-navbar transparent color="light">\n        <button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="masters">\n    <div class=" login-container">\n        <img class="logo" src="./assets/1Artboard 7.png" />\n        <!--*********** Form ***********-->\n\n        <form [formGroup]="registerForm" (submit)="registerUser()" novalidate>\n\n            <ion-item>\n                <ion-label stacked>Name</ion-label>\n                <ion-input tappable formControlName="profileName" type="text" placeholder="Your name" [class.invalid]="!registerForm.controls.profileName.valid && registerForm.controls.profileName.dirty"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Email</ion-label>\n                <ion-input tappable formControlName="email" type="email" placeholder="Your email address" [class.invalid]="!registerForm.controls.email.valid && registerForm.controls.email.dirty"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Phone</ion-label>\n                <ion-input tappable formControlName="phone" type="tel" placeholder="Phone number" [class.invalid]="!registerForm.controls.phone.valid && registerForm.controls.phone.dirty"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Password</ion-label>\n                <ion-input tappable formControlName="password" type="password" placeholder="Your password" [class.invalid]="!registerForm.controls.password.valid && registerForm.controls.password.dirty"></ion-input>\n            </ion-item>\n\n\n\n            <ion-item class="error-message">\n                <p *ngIf="!registerForm.controls.profileName.valid && registerForm.controls.profileName.dirty">*Please enter your name.</p>\n                <p *ngIf="!registerForm.controls.email.valid && registerForm.controls.email.dirty">*Please enter a valid email.</p>\n                <p *ngIf="!registerForm.controls.phone.valid && registerForm.controls.phone.dirty">*Please enter phone number.</p>\n                <p *ngIf="!registerForm.controls.password.valid && registerForm.controls.password.dirty">*Password needs more than 6 characters.</p>\n            </ion-item>\n            <button ion-button block color="light" outline type="submit" mode="ios" color="white">\n            Create an Account\n        </button>\n        </form>\n    </div>\n</ion-content>\n<ion-footer color="blue2">\n\n</ion-footer>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/auth/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_data__["a" /* AuthData */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=8.js.map