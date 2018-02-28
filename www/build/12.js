webpackJsonp([12],{

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List2PageModule", function() { return List2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list2__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var List2PageModule = (function () {
    function List2PageModule() {
    }
    List2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__list2__["a" /* List2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__list2__["a" /* List2Page */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__list2__["a" /* List2Page */]
            ]
        })
    ], List2PageModule);
    return List2PageModule;
}());

//# sourceMappingURL=list2.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(277);
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




var List2Page = (function () {
    function List2Page(navCtrl, navParams, loadingCtrl, afDB, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.items = [];
        this.profileArray4 = [];
        var loadingPopup = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loadingPopup.present();
        this.userProfile = afDB.list('/userProfile');
        //this.categoryId = parseFloat(this.navParams.get('categoryId').toString());  
        this.categoryId = parseInt(this.navParams.get('categoryId'));
        this.afDB.list('/list', { query: {
                orderByChild: "categoryId",
                equalTo: this.categoryId
            } }).subscribe(function (listItems) {
            _this.items = listItems;
            loadingPopup.dismiss();
        });
    }
    List2Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (userAuth) {
            if (userAuth) {
                console.log("auth true!");
                _this.uid = userAuth.uid;
                //this.email = userAuth.email;
                //this.profilePicture = "https://www.gravatar.com/avatar/" + md5(this.email.toLowerCase(), 'hex');
                var loadingPopup_1 = _this.loadingCtrl.create({
                    spinner: 'crescent',
                    content: '',
                    duration: 3000
                });
                loadingPopup_1.present();
                _this.profile4 = _this.afDB.object('/userProfile/' + _this.uid);
                _this.profile4.subscribe(function (profile4) {
                    _this.profileArray4 = profile4;
                    loadingPopup_1.dismiss();
                });
            }
            else {
                console.log("auth false");
                _this.navCtrl.setRoot('LoginPage');
            }
        });
        //this.dynamicPrice = this.otherObject //So this does effect some change. You just need to get it right here now.
    };
    List2Page.prototype.goToDetail = function (itemId) {
        this.navCtrl.push('Detail2Page', { itemId: itemId });
    };
    List2Page.prototype.openCart = function () {
        this.navCtrl.push('CartPage');
    };
    List2Page.prototype.goToHome = function () {
        this.navCtrl.setRoot('Category2Page');
    };
    List2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list2',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/app2/list2/list2.html"*/'<ion-header>\n    <ion-navbar color="black">\n        <button ion-button menuToggle color="light">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title color="light">Products</ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="goToHome()">\n                <ion-icon name="home"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="openCart()">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge id="cart-badge" *ngIf="(profile4 | async)?.cartIcon" color="red">*</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <!--\n    <ion-toolbar color="Black">\n    </ion-toolbar>\n-->\n</ion-header>\n<!--\n<ion-content>\n    <ion-card class="cardList" *ngFor="let item of items" (click)="goToDetail(item.$key)" color="gray">\n        <div *ngIf="item.discount" class="ribbon pop-in">SALE</div>\n        <img class="pop-in" src={{item.imgSmall}} />\n        <hr>\n        <ion-card-header>\n            {{item.name}}\n        </ion-card-header>\n        <ion-card-content>\n            <p *ngIf="item.coffee" ion-text color="black"><strong>250g From R {{item.twofifty}}<br>1kg From R {{item.wholesaleOne}}</strong></p>\n            <p *ngIf="!item.coffee" ion-text color="black"><strong>R {{item.price}}</strong></p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n-->\n<!--\n<ion-content>\n    <ion-list>\n        <ion-item tappable *ngFor="let item of items" (click)="goToDetail(item.$key)">\n            <button>\n                <ion-item no-lines>\n            <ion-thumbnail class="-avatar" item-start>\n                <img src={{item.imgSmall}}>\n            </ion-thumbnail>\n            </ion-item>\n            <ion-item no-lines>\n            <p>{{item.name}}</p>\n            <p *ngIf="item.coffee" ion-text color="black"><strong>- 250g From R {{item.twofifty}}<br>- 1kg From R {{item.retailOne}}</strong></p>\n            <p *ngIf="item.dripFilterCustom" ion-text color="black"><strong>Starting at:</strong></p>\n            <p *ngIf="item.emptyDripFiltersCustom" ion-text color="black"><strong>Starting at:</strong></p>\n            <p *ngIf="!item.coffee" ion-text color="black"><strong>R {{item.price}}</strong></p>\n        </ion-item>\n        </button>\n        </ion-item>\n    </ion-list>\n</ion-content>\n-->\n<!--\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-4>\n                <ion-list *ngFor="let item of items">\n                    <ion-card tappable (click)="goToDetail(item.$key)">\n                        <img src={{item.imgSmall}}/>\n                        <ion-card-content>\n                            <ion-card-title>\n                                {{item.name}}\n                                <hr>\n                            </ion-card-title>\n                            <p *ngIf="item.coffee" ion-text color="black"><strong>- 250g From R {{item.twofifty}}<br>- 1kg From R {{item.retailOne}}</strong></p>\n                            <p *ngIf="item.dripFilterCustom" ion-text color="black"><strong>Starting at:</strong></p>\n                            <p *ngIf="item.emptyDripFiltersCustom" ion-text color="black"><strong>Starting at:</strong></p>\n                            <p *ngIf="!item.coffee" ion-text color="black"><strong>R {{item.price}}</strong></p>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n-->\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col tappable col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 *ngFor="let item of items" (click)="goToDetail(item.$key)" color="gray">\n                <ion-card class="cardList">\n                    <img class="pop-in" src={{item.imgSmall}} />\n                    <ion-card-header text-wrap>\n                        {{item.name}}\n                    </ion-card-header>\n                    <ion-card-content>\n                        <p *ngIf="item.coffee" ion-text color="black"><strong>- 250g From R {{item.twofifty}}<br>- 1kg From R {{item.retailOne}}</strong></p>\n                        <p *ngIf="item.dripFilterCustom" ion-text color="black"><strong>Starting at:</strong></p>\n                        <p *ngIf="item.emptyDripFiltersCustom" ion-text color="black"><strong>Starting at:</strong></p>\n                        <p *ngIf="!item.coffee" ion-text color="black"><strong>R {{item.price}}</strong></p>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n<!--\n<ion-content>\n    <ion-grid>\n        <ion-row wrap>\n            <ion-col tappable col-6 *ngFor="let item of items" (click)="goToDetail(item.$key)" color="gray">\n                <ion-card class="cardList">\n                    <div *ngIf="item.discount" class="ribbon pop-in">SALE</div>\n                    <img class="pop-in" src={{item.imgSmall}} />\n                    <hr>\n                    <ion-card-header>\n                        {{item.name}}\n                    </ion-card-header>\n                    <ion-card-content>\n                        <p *ngIf="item.coffee" ion-text color="black"><strong>250g From R {{item.twofifty}}<br>1kg From R {{item.wholesaleOne}}</strong></p>\n                        <p *ngIf="!item.coffee" ion-text color="black"><strong>R {{item.price}}</strong></p>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n-->'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/app2/list2/list2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], List2Page);
    return List2Page;
}());

//# sourceMappingURL=list2.js.map

/***/ })

});
//# sourceMappingURL=12.js.map