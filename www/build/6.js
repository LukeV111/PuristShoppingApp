webpackJsonp([6],{

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile2PageModule", function() { return Profile2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile2__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Profile2PageModule = (function () {
    function Profile2PageModule() {
    }
    Profile2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__profile2__["a" /* Profile2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__profile2__["a" /* Profile2Page */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__profile2__["a" /* Profile2Page */]
            ]
        })
    ], Profile2PageModule);
    return Profile2PageModule;
}());

//# sourceMappingURL=profile2.module.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Profile2Page = (function () {
    //****************************//
    function Profile2Page(navCtrl, navParams, toastCtrl, loadingCtrl, afDB, ref) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.afDB = afDB;
        this.ref = ref;
        this.following = false;
        //*********** Variables for fading header **************//
        this.showToolbar = false;
        this.transition = false;
        this.headerImgSize = '100%';
        this.headerImgUrl = '';
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loading.present();
        this.profile2 = afDB.object('/profile/0');
        this.profile2.subscribe(function () { return loading.dismiss(); });
    }
    //*********** Fading header  **************/
    Profile2Page.prototype.onScroll = function ($event) {
        var scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop >= 80;
        if (scrollTop < 0) {
            this.transition = false;
        }
        else {
            this.transition = true;
        }
        this.ref.detectChanges();
    };
    Profile2Page.prototype.follow = function () {
        this.following = !this.following;
        this.presentToast('bottom', 'Follow user clicked');
    };
    Profile2Page.prototype.presentToast = function (position, message) {
        var toast = this.toastCtrl.create({
            message: message,
            position: position,
            duration: 1000
        });
        toast.present();
    };
    Profile2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile2',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/profile/profile2/profile2.html"*/'<ion-header no-border>\n    <ion-navbar transparent>\n        <button ion-button menuToggle>\n          <ion-icon name="menu" color="light"  [hidden]="showToolbar"></ion-icon>\n        </button>\n        <ion-title color="light" [hidden]="showToolbar">Detail</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding class="content" (ionScroll)="onScroll($event)" [class.transition]="transition">\n\n    <div class="profile-header" [ngStyle]="{\'background-image\': \'url(\' + (profile2 | async)?.imgCover + \')\'}"></div>\n    <div class="profile">\n        <div class="profile-box">\n            <ion-img class="profile-image" src="{{(profile2 | async)?.imgProfile}}"></ion-img>\n            <h3 id="profile2-name" padding-top>{{(profile2 | async)?.name}}</h3>\n            <button ion-button *ngIf="!following" block color="green" (click)="follow()">Follow</button>\n            <button ion-button icon-left *ngIf="following" block color="gray" (click)="follow()">\n            <ion-icon name="checkmark"></ion-icon>\n            Following\n          </button>\n\n            <ion-list no-lines padding-top>\n                <ion-item class="icon-align">\n                    <ion-icon name="md-cafe" item-left></ion-icon>\n                    <h2>Opening time</h2>\n                    <div [innerHTML]="(profile2 | async)?.openingTime" class="opening-time"></div>\n                </ion-item>\n                <ion-item class="icon-align" text-wrap>\n                    <ion-icon name="ios-pin" item-left></ion-icon>\n                    <h2>About</h2>\n                    <p>{{(profile2 | async)?.aboutMe}}</p>\n                </ion-item>\n                <ion-item class="icon-align">\n                    <ion-icon name="ios-call" item-left></ion-icon>\n                    <h2>{{(profile2 | async)?.phone}}</h2>\n                    <p>Contact</p>\n                </ion-item>\n                <ion-item class="icon-align">\n                    <ion-icon name="logo-facebook" item-left></ion-icon>\n                    <h2>facebook.com/starbuck</h2>\n                    <p>facebook</p>\n                </ion-item>\n                <ion-item class="icon-align">\n                    <ion-icon name="logo-skype" item-left></ion-icon>\n                    <h2>starbuck@outlook.com</h2>\n                    <p>skype</p>\n                </ion-item>\n            </ion-list>\n\n        </div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/profile/profile2/profile2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], Profile2Page);
    return Profile2Page;
}());

//# sourceMappingURL=profile2.js.map

/***/ })

});
//# sourceMappingURL=6.js.map