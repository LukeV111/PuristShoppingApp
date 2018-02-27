webpackJsonp([14],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(665);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_data__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = (function () {
    //public formItems: firebase.database.Reference = firebase.database().ref('/userProfile/' + this.uid + '/completedOrders2/');
    function CartPage(navCtrl, fb, navParams, loadingCtrl, afDb, afAuth, toastCtrl, authData) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.afDb = afDb;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.authData = authData;
        this.items = [];
        this.cartTotal = 0;
        this.profileArray = [];
        this.compliedPrice = [];
        var loadingPopup = this.loadingCtrl.create({
            spinner: 'crescent',
            content: ''
        });
        this.itemId = this.navParams.get('itemId');
        this.afDb.list('/ userProfile / ' + this.uid + ' / currentOrder', {
            query: {
                orderByChild: "Quantity",
                equalTo: this.Quantity
            }
        }).subscribe(function (listItems) {
            loadingPopup.dismiss();
        });
        this.cartForm = fb.group({
            'cartPrice': [''],
            'address': [''],
            'itemName': ['{{item.name}}'],
        });
    }
    CartPage.prototype.ionViewDidLoad = function () {
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
                _this.profile = _this.afDb.list('/userProfile/' + _this.uid + '/currentOrder/');
                _this.profile2 = _this.afDb.list('/userProfile/' + _this.uid + '/completedOrders/');
                _this.afDb.list('/userProfile/' + _this.uid + '/currentOrder', {
                    query: {
                        orderByChild: "Quantity",
                        equalTo: _this.Quantity
                    }
                }).subscribe(function (listItems) {
                    _this.cartTotal = 0;
                    _this.items = listItems;
                    _this.items.forEach(function (item) {
                        _this.cartTotal = _this.cartTotal + (item.uPrice * item.Quantity);
                    });
                    console.log("Cart things", _this.items, "Cart Total", _this.cartTotal);
                    loadingPopup_1.dismiss();
                });
            }
            else {
                console.log("auth false");
                _this.navCtrl.setRoot('LoginPage');
            }
            ;
        });
    };
    CartPage.prototype.goToHome = function () {
        this.navCtrl.setRoot('Category2Page');
    };
    CartPage.prototype.editProduct = function () {
        this.navCtrl.push('EditProductInCartPage');
    };
    CartPage.prototype.deleteProduct = function (item) {
        console.log("Item =>", item);
        this.afDb.list('/userProfile/' + this.uid + '/currentOrder/').remove(item);
    };
    CartPage.prototype.clearCart = function () {
        this.afDb.list('/userProfile/' + this.uid + '/currentOrder/').remove();
    };
    CartPage.prototype.clearIcon = function () {
        this.afDb.object('/userProfile/' + this.uid + '/cartIcon/').remove();
    };
    CartPage.prototype.addAddress = function () {
        this.profile2.push(this.address);
    };
    CartPage.prototype.toAfterCart = function () {
        this.navCtrl.push('AfterCartPage');
    };
    CartPage.prototype.completeOrder = function (items) {
        var _this = this;
        this.profile2.push(items).then(function () {
            var toast = _this.toastCtrl.create({
                message: 'Order Placed - We will be in touch with an invoice shortly.',
                position: 'bottom',
                duration: 6000
            });
            //toast.onDidDismiss(this.dismissHandler);
            toast.present();
        });
        this.profile2.push(this.cartForm.value);
    };
    CartPage.prototype.increment = function () {
        this.Quantity++;
    };
    CartPage.prototype.decrement = function () {
        this.Quantity--;
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/app2/cart/cart.html"*/'<ion-header>\n    <ion-navbar color="black">\n        <button ion-button menuToggle color="light">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title color="black">Your Cart</ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="goToHome()">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <!--\n    <ion-toolbar color="Black">\n    </ion-toolbar>\n-->\n</ion-header>\n\n<!--\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor="let item of items">\n            <ion-label>{{item.name}}</ion-label>\n            <ion-item *ngIf="item.coffee" ion-text color="black">Grind Type: {{item.grindType}}</ion-item>\n            <p *ngIf="item.coffee" ion-text color="black"><strong>Bag Size: {{item.bagSize}}</strong></p>\n            <p ion-text color="black"><strong>Quantity: {{item.Quantity}}</strong></p>\n        </ion-item>\n    </ion-list>\n    </ion-content>\n-->\n\n\n<ion-content padding>\n    <ion-label>\n        <h2>Review Your Cart</h2>\n    </ion-label>\n    <!--Name Input-->\n    <!--Name Display-->\n    <ion-card *ngFor="let item of items">\n        <ion-card-header>\n            <b>{{item.name}}</b><br>\n        </ion-card-header>\n        <hr>\n        <ion-card-content *ngIf="item.coffee">\n            Grind Type: {{item.grindType}}<br>Bag Size: {{item.bagSize}}\n        </ion-card-content>\n        <ion-card-content *ngIf="item.dripFilterCustom">\n            Coffee Type: {{item.dripFilterCoffee}}<br>\n        </ion-card-content>\n        <ion-card-content *ngIf="item.emptyDripFiltersCustom">\n            Pack Size: {{item.emptyDripFilters}}<br>\n        </ion-card-content>\n        <ion-card-content>\n            Quantity: {{item.Quantity}}\n            <br><b>Price: {{item.dynamicPrice}}</b> (R{{item.uPrice}} x {{item.Quantity}})\n        </ion-card-content>\n\n        <!--Buttons Below -->\n\n        <ion-row>\n            <ion-col>\n                <button ion-button block icon-centr (click)="deleteProduct(item)">\n                    Remove\n      </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-label>\n        <p><strong>Cart Total: R{{cartTotal}}</strong></p>\n    </ion-label>\n    <hr>\n\n    <label>New Items Test Below</label>\n    <form [formGroup]="cartForm">\n        <ion-list>\n            <ion-item>\n                <ion-input type="text" value="{{cartTotal}}" [formControl]="cartForm.controls[\'cartPrice\']"><b>{{cartTotal}}</b></ion-input>\n                <ion-item *ngFor="let item of items">\n                    <ion-input type="text" value="{{item.name}}" [formControl]="cartForm.controls[\'itemName\']">{{item.name}}</ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Delivery Address (Optional)</ion-label>\n                    <ion-textarea lines="4" type="text" value="{{address}}" [formControl]="cartForm.controls[\'address\']">Enter Your Address</ion-textarea>\n                </ion-item>\n            </ion-item>\n        </ion-list>\n    </form>\n    <label>New Items Above</label>\n\n    <button type="submit" color="red" ion-button full (click)="completeOrder(items)" (click)="clearCart()" (click)="clearIcon()" (click)="toAfterCart()">Complete Order</button><br>\n    <button type="submit" color="gray" ion-button full (click)="clearCart(bottom)" (click)="clearIcon()">Clear Cart</button>\n</ion-content>\n\n<!-- Instead of moving it from one DB to another, maybe it\'s better to submit is as a normal form?-->'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/app2/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_data__["a" /* AuthData */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=14.js.map