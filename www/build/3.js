webpackJsonp([3],{

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Detail2PageModule", function() { return Detail2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail2__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Detail2PageModule = (function () {
    function Detail2PageModule() {
    }
    Detail2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__detail2__["a" /* Detail2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__detail2__["a" /* Detail2Page */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__detail2__["a" /* Detail2Page */]
            ]
        })
    ], Detail2PageModule);
    return Detail2PageModule;
}());

//# sourceMappingURL=detail2.module.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_data__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






 // you might need to import this, or not depends on your setup
var Detail2Page = (function () {
    function Detail2Page(navCtrl, navParams, fb, loadingCtrl, afDb, afAuth, toastCtrl, authData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.afDb = afDb;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.authData = authData;
        this.currentNumber = 1;
        this.profileArray = [];
        this.profileArray3 = [];
        this.profileArray4 = [];
        //otherObject: FirebaseObjectObservable<any[]>;
        this.wholesaleOne = {}; //Wholesale 1kg Price
        this.twofifty = {}; //250g Price
        this.grindType = {};
        this.dripFilterCoffee = {};
        this.bagSize = {};
        this.coffeeIndicator = false;
        this.coffee = {};
        this.singleOrigin = {};
        this.userProfile = afDb.list('/userProfile/');
        this.orderForm = fb.group({
            'name': [''],
            'price': [''],
            'grindType': ['Whole Beans'],
            'bagSize': ['1kg'],
            'Quantity': ['1'],
            'coffeeIndicator': ['true'],
            'item': [''],
            'coffee': [''],
            'singleOrigin': [''],
            'decaf': [''],
            'retailOne': [''],
            'wholesaleOne': [''],
            'twofifty': [''],
            'dripFilterCoffee': ['Estandar'],
            'dripFilterCustom': [''],
            'emptyDripFilters': ['Pack of 25'],
            'emptyDripFiltersCustom': [''],
        });
        this.itemId = this.navParams.get('itemId');
        console.log("Test");
        console.log("++++++itemId=" + this.navParams.get('itemId'));
        //this.otherObject = afDb.object('/list/' + this.itemId + '/retailOne/'); //Trying to get the retail price to load it at the start.
        var loadingPopup = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        loadingPopup.present();
        this.item = afDb.object('/list/' + this.itemId);
        loadingPopup.dismiss();
    }
    Detail2Page.prototype.ionViewDidLoad = function () {
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
                _this.profile3 = _this.afDb.object('/userProfile/' + _this.uid + '/cartIcon');
                _this.profile3.subscribe(function (profile3) {
                    _this.profileArray3 = profile3;
                });
                _this.profile4 = _this.afDb.object('/userProfile/' + _this.uid);
                _this.profile4.subscribe(function (profile4) {
                    _this.profileArray4 = profile4;
                });
                _this.profile = _this.afDb.list('/userProfile/' + _this.uid + '/currentOrder/');
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
        //this.dynamicPrice = this.otherObject //So this does effect some change. You just need to get it right here now.
    };
    //*********** Add to cart**************/
    Detail2Page.prototype.addToCart = function (position) {
        var _this = this;
        if (this.dynamicPrice) {
            this.orderForm.value.dynamicPrice = this.dynamicPrice;
        }
        else {
            this.orderForm.value.dynamicPrice = this.orderForm.value.price;
        }
        if (this.uPrice) {
            this.orderForm.value.uPrice = this.uPrice;
        }
        else {
            this.orderForm.value.uPrice = this.orderForm.value.price;
        }
        this.profile.push(this.orderForm.value).then(function () {
            var toast = _this.toastCtrl.create({
                message: 'Item was added',
                position: 'bottom',
                duration: 3000
            });
            toast.onDidDismiss(_this.dismissHandler);
            toast.present();
        });
        this.profile3.set("true");
    };
    Detail2Page.prototype.dismissHandler = function () {
        console.info('Toast onDidDismiss()');
    };
    //Here is where you need to switch the value of dynamicPrice
    Detail2Page.prototype.priceChangeAll = function (bag, type) {
        console.log("priceChangeAll = ", bag, type);
        if (bag == "1kg" && type == "blend") {
            this.uPrice = 275;
            this.dynamicPrice = this.uPrice * this.currentNumber;
        }
        else if (bag == "250g" && type == "blend") {
            this.uPrice = 90;
            this.dynamicPrice = this.uPrice * this.currentNumber;
        }
        else if (bag == "1kg" && type == "Single Origin") {
            this.uPrice = 345;
            this.dynamicPrice = this.uPrice * this.currentNumber;
        }
        else if (bag == "250g" && type == "Single Origin") {
            this.uPrice = 105;
            this.dynamicPrice = this.uPrice * this.currentNumber;
        }
    };
    Detail2Page.prototype.priceChangedripFilters = function (type) {
        console.log("priceChangeAll = ", type);
        if (type == "Estandar") {
            this.uPrice = 75;
            this.dynamicPrice = this.uPrice * this.currentNumber;
        }
        else if (type == "Minimo") {
            this.uPrice = 75;
            this.dynamicPrice = this.uPrice * this.currentNumber;
        }
        else if (type == "Tanzania") {
            this.uPrice = 85;
            this.dynamicPrice = this.uPrice * this.currentNumber;
        }
        else if (type == "Columbia") {
            this.uPrice = 85;
            this.dynamicPrice = this.uPrice * this.currentNumber;
        }
    };
    Detail2Page.prototype.priceChangeEmptyFilters = function (type) {
        console.log("priceChangeAll = ", type);
        if (type == "Pack of 25") {
            this.uPrice = 120;
            this.dynamicPrice = this.uPrice * this.currentNumber;
        }
        else if (type == "Pack of 50") {
            this.uPrice = 220;
            this.dynamicPrice = this.uPrice * this.currentNumber;
        }
        else if (type == "Pack of 100") {
            this.uPrice = 400;
            this.dynamicPrice = this.uPrice * this.currentNumber;
        }
    };
    /*
    
    calculateTotal(){
      let cartValue = this.dynamicPrice * this.Quantity
        console.log(cartValue)
    };
    
    */
    // addToCart2(value: any):void{
    // }
    /*
      addToCart2(value: any): void {
        if (this.coffee) {
          this.userProfile.push({
            
            Quantity: this.Quantity,
            createdDate: firebase.database.ServerValue.TIMESTAMP,
            grindType: value.grindType,
            bagSize: value.bagSize,
          });
        }
        else {
          this.userProfile.push({
            name: value.name,
            Quantity: this.Quantity,
            createdDate: firebase.database.ServerValue.TIMESTAMP,
          })
        }
      }
    */
    Detail2Page.prototype.openCart = function () {
        this.navCtrl.push('CartPage');
    };
    Detail2Page.prototype.goToHome = function () {
        this.navCtrl.setRoot('Category2Page');
    };
    Detail2Page.prototype.increment = function () {
        this.currentNumber++;
        if (this.uPrice) {
            this.dynamicPrice = this.uPrice * this.currentNumber;
        }
        else {
            this.dynamicPrice = this.orderForm.value.price * this.currentNumber;
        }
    };
    Detail2Page.prototype.decrement = function () {
        if (this.currentNumber == 1) {
            // code...
        }
        else {
            this.currentNumber--;
            if (this.uPrice) {
                this.dynamicPrice = this.uPrice * this.currentNumber;
            }
            else {
                this.dynamicPrice = this.orderForm.value.price * this.currentNumber;
            }
        }
    };
    Detail2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-detail2',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/app2/detail2/detail2.html"*/'<ion-header>\n    <ion-navbar color="black">\n        <ion-title color="light">{{(item | async)?.name}}</ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="goToHome()">\n                <ion-icon name="home"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="openCart()">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge id="cart-badge" *ngIf="(profile4 | async)?.cartIcon" color="red">*</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n\n    <!--*********** Header with image background  *********** NEED TO CLEAN THIS UP A BIT-->\n\n    <div class="product-header" [ngStyle]="{\'background-image\': \'url(\' + (item | async)?.imgSmall + \')\'}">\n        <div *ngIf="(item | async)?.discount" class="ribbon">SALE</div>\n    </div>\n\n    <!--******** ************-->\n    <!--******** Start of the form ************-->\n    <form [formGroup]="orderForm" (ngSubmit)="addToCart()">\n\n        <!--<img scr="\'background-image\': \'url(\' + (item | async)?.imgSmall + \')\'}">-->\n        <!--Pricing!!! Here is where you need to do those price conditonals-->\n\n        <div text-center>\n            <h2 ion-text [formControl]=" orderForm.controls[\'name\']" ngDefaultControl>{{(item | async)?.name}}</h2>\n            <!--\n            <h2 *ngIf="!(item | async)?.coffee" ion-text color="special-blue">Price: R {{(item | async)?.price}}</h2>\n            <strong>\n            <p *ngIf="(item | async)?.coffee" ion-text color="special-blue">1kg Price: R {{(item | async)?.retailOne}}</p>\n            <p *ngIf="(item | async)?.coffee" ion-text color="special-blue">Wholesale (4kgs+) Price: R {{(item | async)?.wholesaleOne}}</p>\n            <p *ngIf="(item | async)?.coffee" ion-text color="special-blue">250g Price: R {{(item | async)?.twofifty}}</p>\n        </strong>\n    -->\n        </div>\n\n\n\n        <!--The below here is just for submission purposes-->\n        <!-- <ion-item hidden *ngIf="(item | async)?.coffee">\n            <ion-label floating>Dynamic Pricing:</ion-label>\n            <ion-input type="text" value="{{dynamicPrice}}" [formControl]="orderForm.controls[\'dynamicPrice\']">{{dynamicPrice}}</ion-input>\n            <hr>\n        </ion-item> -->\n        <div text-center>\n            <h3 padding>\n                Current Price (ZAR):\n                <ion-item *ngIf="dynamicPrice" no-lines text-center>\n                    <b>{{dynamicPrice}}</b>\n                </ion-item>\n                <!--This here is after you have already selcted the option-->\n                <ion-input type="text" value="{{(item | async)?.price}}" [formControl]="orderForm.controls[\'price\']" *ngIf="!dynamicPrice" text-center><b>{{(item | async)?.price}}</b></ion-input>\n            </h3>\n        </div>\n        <!-- So the standard price displayed is retailOne. Let\'s now try and make it change to twofifty. -->\n\n        <!--*********** Detail ( Description,Color,Size)  ***********-->\n        <ion-card>\n            <ion-card-content>\n                <div class="description" padding>\n                    <div [innerHTML]="(item | async)?.description"></div>\n                    <!--<p>{{(item | async)?.description}}</p> -->\n                </div>\n\n                <ion-list no-lines margin-top>\n\n                    <!--Coffee Options-->\n\n                    <ion-item hidden>\n                        <ion-label floating>Product Name:</ion-label>\n                        <ion-input type="text" value="{{(item | async)?.name}}" [formControl]="orderForm.controls[\'name\']">{{(item | async)?.name}}</ion-input>\n                        <hr>\n                    </ion-item>\n\n                    <hr>\n\n                    <ion-item hidden>\n                        <ion-label floating>Coffee True?</ion-label>\n                        <ion-input type="text" value="{{(item | async)?.coffee}}" [formControl]="orderForm.controls[\'coffee\']">{{(item | async)?.coffee}}</ion-input>\n                        <hr>\n                    </ion-item>\n\n                    <ion-item hidden>\n                        <ion-label floating>dripFilterCustom True?</ion-label>\n                        <ion-input type="text" value="{{(item | async)?.dripFilterCustom}}" [formControl]="orderForm.controls[\'dripFilterCustom\']">{{(item | async)?.dripFilterCustom}}</ion-input>\n                        <hr>\n                    </ion-item>\n\n                    <ion-item hidden>\n                        <ion-label floating>emptyDripFiltersCustom True?</ion-label>\n                        <ion-input type="text" value="{{(item | async)?.emptyDripFiltersCustom}}" [formControl]="orderForm.controls[\'emptyDripFiltersCustom\']">{{(item | async)?.emptyDripFiltersCustom}}</ion-input>\n                        <hr>\n                    </ion-item>\n\n                    <ion-item hidden>\n                        <ion-label floating>Quantity:</ion-label>\n                        <ion-input type="text" value="{{currentNumber}}" [formControl]="orderForm.controls[\'Quantity\']">\n                            {{currentNumber}}\n                        </ion-input>\n                        <hr>\n                    </ion-item>\n                    <ion-item>\n                        Quantity:&nbsp;&nbsp;\n                        <ion-icon name="remove" (click)="decrement()"></ion-icon>\n                        &nbsp;&nbsp;{{ currentNumber }}&nbsp;&nbsp;\n                        <ion-icon name="add" (click)="increment()"></ion-icon>\n                        <hr>\n                    </ion-item>\n\n                    <ion-list radio-group [formControl]="orderForm.controls[\'grindType\']" *ngIf="(item | async)?.coffee" ngDefaultControl>\n                        <ion-item>\n                            <ion-label>Whole Beans</ion-label>\n                            <ion-radio type="radio" value="Whole Beans"></ion-radio>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Ground</ion-label>\n                            <ion-radio value="Ground"></ion-radio>\n                        </ion-item>\n                        <hr>\n                    </ion-list>\n\n                    <ion-list radio-group [formControl]="orderForm.controls[\'dripFilterCoffee\']" *ngIf="(item | async)?.dripFilterCustom" ngDefaultControl>\n                        <ion-label><b>Coffee Type</b></ion-label>\n                        <ion-item>\n                            <ion-label>Estandar</ion-label>\n                            <ion-radio type="radio" value="Estandar" (click)=\'priceChangedripFilters(orderForm.value.dripFilterCoffee, "Estandar")\'></ion-radio>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Minimo</ion-label>\n                            <ion-radio value="Minimo" (click)=\'priceChangedripFilters(orderForm.value.dripFilterCoffee, "Minimo")\'></ion-radio>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Tanzania</ion-label>\n                            <ion-radio value="Tanzania" (click)=\'priceChangedripFilters(orderForm.value.dripFilterCoffee, "Tanzania")\'></ion-radio>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Columbia</ion-label>\n                            <ion-radio value="Columbia" (click)=\'priceChangedripFilters(orderForm.value.dripFilterCoffee, "Columbia")\'></ion-radio>\n                        </ion-item>\n                        <hr>\n                    </ion-list>\n\n                    <ion-list radio-group [formControl]="orderForm.controls[\'emptyDripFilters\']" *ngIf="(item | async)?.emptyDripFiltersCustom" ngDefaultControl>\n                        <ion-label><b>Coffee Type</b></ion-label>\n                        <ion-item>\n                            <ion-label>Pack of 25</ion-label>\n                            <ion-radio type="radio" value="Pack of 25" (click)=\'priceChangeEmptyFilters(orderForm.value.emptyDripFilters, "Pack of 25")\'></ion-radio>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Pack of 50</ion-label>\n                            <ion-radio value="Pack of 50" (click)=\'priceChangeEmptyFilters(orderForm.value.emptyDripFilters, "Pack of 50")\'></ion-radio>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Pack of 100</ion-label>\n                            <ion-radio value="Pack of 100" (click)=\'priceChangeEmptyFilters(orderForm.value.emptyDripFilters, "Pack of 100")\'></ion-radio>\n                        </ion-item>\n                        <hr>\n                    </ion-list>\n\n                    <ion-list radio-group [formControl]="orderForm.controls[\'bagSize\']" *ngIf="(item | async)?.coffee" ngDefaultControl>\n                        <ion-item *ngIf="!(item | async)?.singleOrigin">\n                            <ion-label>1kg Bag</ion-label>\n                            <ion-radio type="radio" value="1kg" checked (click)=\'priceChangeAll(orderForm.value.bagSize, "blend")\'></ion-radio>\n                        </ion-item>\n                        <ion-item *ngIf="!(item | async)?.singleOrigin">\n                            <ion-label>250g Bag</ion-label>\n                            <ion-radio value="250g" (click)=\'priceChangeAll(orderForm.value.bagSize, "blend")\'></ion-radio>\n                        </ion-item>\n                        <hr *ngIf="!(item | async)?.singleOrigin">\n                    </ion-list>\n\n                    <ion-list radio-group [formControl]="orderForm.controls[\'bagSize\']" *ngIf="(item | async)?.singleOrigin" ngDefaultControl>\n                        <ion-item>\n                            <ion-label>1kg Bag</ion-label>\n                            <ion-radio type="radio" value="1kg" checked (click)=\'priceChangeAll(orderForm.value.bagSize, "Single Origin")\'></ion-radio>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>250g Bag</ion-label>\n                            <ion-radio value="250g" (click)=\'priceChangeAll(orderForm.value.bagSize, "Single Origin")\'></ion-radio>\n                        </ion-item>\n                        <hr>\n                    </ion-list>\n                </ion-list>\n\n            </ion-card-content>\n\n        </ion-card>\n\n        <div>\n            <button full color="red" type="submit" ion-button>Add To Cart</button>\n        </div>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/app2/detail2/detail2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_data__["a" /* AuthData */]])
    ], Detail2Page);
    return Detail2Page;
}());

//# sourceMappingURL=detail2.js.map

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(8);
var map_1 = __webpack_require__(78);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=3.js.map