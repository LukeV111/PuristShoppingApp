webpackJsonp([14],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category2PageModule", function() { return Category2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category2__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { ShrinkHeaderModule } from '../../../../components/shrink-header/shrink-header.module';
var Category2PageModule = (function () {
    function Category2PageModule() {
    }
    Category2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__category2__["a" /* Category2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__category2__["a" /* Category2Page */])
                //ShrinkHeaderModule 
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__category2__["a" /* Category2Page */]
            ]
        })
    ], Category2PageModule);
    return Category2PageModule;
}());

//# sourceMappingURL=category2.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Category2Page = (function () {
    function Category2Page(navCtrl, navParams, loadingCtrl, afDb, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.afDb = afDb;
        this.afAuth = afAuth;
        this.category = [];
        this.profileArray = [];
        var loadingPopup = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loadingPopup.present();
        this.afDb.list('/category', { query: {
                orderByChild: "type",
                equalTo: "puristcoffee" //You need to make the category 'puristcoffee' if you want it to be displayed
            } }).subscribe(function (categoryItems) {
            _this.category = categoryItems;
            loadingPopup.dismiss();
        });
    }
    Category2Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (userAuth) {
            if (userAuth) {
                console.log("auth true!");
                _this.uid = userAuth.uid;
                var loadingPopup_1 = _this.loadingCtrl.create({
                    spinner: 'crescent',
                    content: '',
                    duration: 3000
                });
                loadingPopup_1.present();
                _this.profile = _this.afDb.object('/userProfile/' + _this.uid);
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
    Category2Page.prototype.openList = function (categoryId) {
        this.navCtrl.push('List2Page', { categoryId: categoryId });
    };
    Category2Page.prototype.openCart = function () {
        this.navCtrl.push('CartPage');
    };
    Category2Page.prototype.toProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    Category2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-category2',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/app2/category2/category2.html"*/'<!--*********** Header ***********-->\n<ion-header no-border>\n    <ion-navbar color="black">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Purist Coffee</ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="openCart()">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge id="cart-badge" *ngIf="(profile | async)?.cartIcon" color="red">*</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card tappable *ngFor="let category of category" (click)="openList(category.$key)">\n        <div class="banner-bg" [ngStyle]="{\'background-image\': \'url(\' + category.imgBg+ \')\'}">\n            <h2 class="banner-title"> {{category.name}}</h2>\n            <p class="banner-description"> {{category.description}}</p>\n        </div>\n        <hr>\n    </ion-card>\n    <!--\n    <ion-fab right bottom>\n        <button ion-fab color="ios-orange"><ion-icon name="chatbubbles"></ion-icon></button>\n        <ion-fab-list side="left">\n            <button ion-fab><ion-icon name="call"></ion-icon></button>\n            <button ion-fab><ion-icon name="chatboxes"></ion-icon></button>\n            <button ion-fab><ion-icon name="images"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n-->\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/app2/category2/category2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], Category2Page);
    return Category2Page;
}());

//# sourceMappingURL=category2.js.map

/***/ })

});
//# sourceMappingURL=14.js.map