webpackJsonp([43],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(157);
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

var AuthData = (function () {
    function AuthData(afAuth, facebook, googleplus) {
        this.afAuth = afAuth;
        this.facebook = facebook;
        this.googleplus = googleplus;
    }
    AuthData.prototype.signInWithPopupFacebook = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider())
            .then(function (res) { return console.log(res); });
    };
    AuthData.prototype.signInWithFacebook = function () {
        return this.facebook.login(['email', 'public_profile']).then(function (res) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
            return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithCredential(facebookCredential);
        });
    };
    AuthData.prototype.signInWithGoogle = function () {
        return this.googleplus.login({
            // ***** Don't forgot to change webClientId ******//
            'webClientId': '134053776757-rj2vajjm340t2bilpencqq4hh1j76sv5.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) {
            return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithCredential(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider.credential(res.idToken));
        });
    };
    AuthData.prototype.updateUserProfile = function (uid, displayName, email, photo, phone) {
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('/userProfile').child(uid).once('value', function (snapshot) {
            var exists = (snapshot.val() !== null);
            if (exists) {
                console.log('user ' + uid + ' exists!');
                __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('userProfile/' + uid).update({
                    name: displayName,
                    email: email,
                    photo: photo,
                    phone: phone,
                });
            }
            else {
                console.log('user ' + uid + ' does not exist!');
                __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('/userProfile').child(uid).set({
                    name: displayName,
                    email: email,
                    photo: photo,
                    phone: phone,
                });
            }
        });
    };
    AuthData.prototype.loginUser = function (newEmail, newPassword) {
        return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
    };
    AuthData.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthData.prototype.logoutUser = function () {
        return this.afAuth.auth.signOut();
    };
    AuthData.prototype.registerUser = function (name, email, password, phone) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('/userProfile').child(newUser.uid).set({
                email: email,
                name: name,
                phone: phone,
            });
        });
    };
    AuthData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], AuthData);
    return AuthData;
}());

//# sourceMappingURL=auth-data.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
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
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetailsPage = (function () {
    function OrderDetailsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.customerOrder = this.navParams.data;
    }
    OrderDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailsPage');
    };
    OrderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-order-details',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/layout/app2/order-details/order-details.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Order Details</ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="closeModal()">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h2><u>Customer Details</u></h2>\n    <b>Customer Name: </b>{{ customerOrder.name }}<br><br>\n    <b>Deliver To: </b>{{ customerOrder.address }}<br><br>\n    <b>Collect at our offices?: </b>{{ customerOrder.collectionOption }}<br><br>\n    <b>Shipping Total:</b> {{ customerOrder.shippingTotal }}<br><br>\n    <b>Sub Total: </b>{{ customerOrder.subTotal }}<br><br>\n    <b>Grand Total: </b>{{ customerOrder.cartPrice }}<br><br>\n    <hr>\n    <h2><u>Ordered Items</u></h2>\n\n    <ion-list *ngFor="let item of specificOrder">\n        <ion-item>\n            {{ item.name }}\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/layout/app2/order-details/order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/components/accordion/accordion.module": [
		484,
		39
	],
	"../pages/components/actionsheet/actionsheet.module": [
		485,
		38
	],
	"../pages/components/alert/alert.module": [
		486,
		37
	],
	"../pages/components/animations/animations.module": [
		487,
		36
	],
	"../pages/components/badge/badge.module": [
		488,
		35
	],
	"../pages/components/button/button.module": [
		489,
		34
	],
	"../pages/components/datetime/datetime.module": [
		490,
		33
	],
	"../pages/components/fab/fab.module": [
		491,
		32
	],
	"../pages/components/fading-header/fading-header.module": [
		492,
		31
	],
	"../pages/components/grid/grid.module": [
		493,
		30
	],
	"../pages/components/header/header.module": [
		494,
		29
	],
	"../pages/components/input/input.module": [
		495,
		28
	],
	"../pages/components/item-sliding/item-sliding.module": [
		496,
		27
	],
	"../pages/components/item/item.module": [
		497,
		26
	],
	"../pages/components/label/label.module": [
		498,
		25
	],
	"../pages/components/radio-button/radio-button.module": [
		499,
		24
	],
	"../pages/components/range/range.module": [
		500,
		23
	],
	"../pages/components/rating/rating.module": [
		501,
		3
	],
	"../pages/components/search-bar/search-bar.module": [
		502,
		22
	],
	"../pages/components/segment/segment.module": [
		503,
		21
	],
	"../pages/components/select-option/select-option.module": [
		504,
		20
	],
	"../pages/components/shrinking/shrinking.module": [
		505,
		4
	],
	"../pages/components/tab/tab.module": [
		506,
		19
	],
	"../pages/components/table/table.module": [
		507,
		18
	],
	"../pages/components/tag/tag.module": [
		508,
		17
	],
	"../pages/components/toast/toast.module": [
		509,
		16
	],
	"../pages/components/transparent-header/transparent-header.module": [
		510,
		15
	],
	"../pages/layout/app2/admin-orders/admin-orders.module": [
		511,
		42
	],
	"../pages/layout/app2/after-cart/after-cart.module": [
		512,
		41
	],
	"../pages/layout/app2/cart/cart.module": [
		513,
		2
	],
	"../pages/layout/app2/category2/category2.module": [
		514,
		14
	],
	"../pages/layout/app2/contact-us/contact-us.module": [
		515,
		13
	],
	"../pages/layout/app2/detail2/detail2.module": [
		516,
		5
	],
	"../pages/layout/app2/list2/list2.module": [
		517,
		12
	],
	"../pages/layout/app2/order-details/order-details.module": [
		518,
		40
	],
	"../pages/layout/auth/after-login/after-login.module": [
		519,
		1
	],
	"../pages/layout/auth/forgot/forgot.module": [
		520,
		11
	],
	"../pages/layout/auth/login/login.module": [
		521,
		10
	],
	"../pages/layout/auth/main/main.module": [
		522,
		9
	],
	"../pages/layout/auth/register/register.module": [
		523,
		8
	],
	"../pages/layout/profile/profile/profile.module": [
		524,
		0
	],
	"../pages/layout/profile/profile2/profile2.module": [
		525,
		7
	],
	"../pages/theme/theme.module": [
		526,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_data__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_details_order_details__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminOrdersPage = (function () {
    function AdminOrdersPage(navCtrl, navParams, authData, afAuth, afDb, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authData = authData;
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.modalCtrl = modalCtrl;
        this.profilePicture = "https://www.gravatar.com/avatar/";
        this.profileArray = [];
        this.customerOrders = [];
        this.customerOrdersRef = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/userProfile/icfbF0f63QV8bjJUYKwnOwYPCMf2/placedOrders/'); //Path to orders.
        this.itemId = this.navParams.get('itemId');
    }
    AdminOrdersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AdminOrdersPage');
        console.log(this.itemId);
        this.afAuth.authState.subscribe(function (userAuth) {
            if (userAuth) {
                console.log("auth true!");
                _this.uid = userAuth.uid;
                _this.email = userAuth.email;
                _this.profile = _this.afDb.object('/userProfile/' + _this.uid);
                _this.profile.subscribe(function (profile) {
                    _this.profileArray = profile;
                });
            }
            else {
                console.log("auth false");
                _this.navCtrl.setRoot('LoginPage');
            }
        });
        this.customerOrdersRef.on('value', function (itemSnapshot) {
            _this.customerOrders = [];
            itemSnapshot.forEach(function (customerOrder) {
                var item = customerOrder.val();
                item.key = customerOrder.key;
                _this.customerOrders.push(item);
                return false;
            });
        });
    };
    // openOrderDetails(order) {
    //   let myModal = this.modalCtrl.create(OrderDetailsPage, order);
    //   myModal.present(order);
    // }
    AdminOrdersPage.prototype.openOrderDetails = function (customerOrder) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__order_details_order_details__["a" /* OrderDetailsPage */], customerOrder);
    };
    AdminOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-admin-orders',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/layout/app2/admin-orders/admin-orders.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Admin Order List</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item tappable *ngFor="let customerOrder of customerOrders" (click)="openOrderDetails(customerOrder)">\n            <b>Order:</b> {{ customerOrder.key }}<br>\n            <b>By:</b> {{ customerOrder.name }}\n        </ion-item>\n    </ion-list>\n\n    <!-- <button ion-button block (click)="openOrderDetails()">Open Details</button> -->\n\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/layout/app2/admin-orders/admin-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_data__["a" /* AuthData */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], AdminOrdersPage);
    return AdminOrdersPage;
}());

//# sourceMappingURL=admin-orders.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(260);
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
 * Generated class for the AfterCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AfterCartPage = (function () {
    function AfterCartPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.parameter1 = navParams.get('param1');
    }
    AfterCartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AfterCartPage');
    };
    //You're here
    AfterCartPage.prototype.openBrowser = function () {
        var browser = this.iab.create('https://www.payfast.co.za/eng/process?cmd=_paynow&amp;receiver=10867430&amp;item_name=Purist+Coffee+Order&amp;amount=1234567890.00&amp;return_url=https%3A%2F%2Fwww.puristcoffee.com&amp;cancel_url=https%3A%2F%2Fpuristcoffee.com', '_system');
        browser.close();
    };
    AfterCartPage.prototype.goToHome = function () {
        this.navCtrl.setRoot('Category2Page');
    };
    AfterCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-after-cart',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/layout/app2/after-cart/after-cart.html"*/'<ion-header>\n\n    <ion-navbar color="black">\n        <ion-title>Order Payment</ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="goToHome()">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-label>\n        <h2>Thank you for your order!</h2>\n        <p><i>The total amount for your order is: <b><br><br>R {{parameter1}}</b></i></p>\n    </ion-label>\n\n    <ion-label>\n        <u><b>Payment Methods:</b></u>\n    </ion-label>\n    <hr>\n    <ion-label>\n        <u><b>Pay By Card</b></u>\n    </ion-label>\n    <i>Payment is processed by PayFast</i>\n    <p>\n        <a href="https://www.payfast.co.za/eng/process?cmd=_paynow&amp;receiver=10867430&amp;item_name=Purist+Coffee+Order&amp;amount={{parameter1}}&amp;return_url=https%3A%2F%2Fwww.puristcoffee.com&amp;cancel_url=https%3A%2F%2Fpuristcoffee.com"><img src="https://www.payfast.co.za/images/buttons/light-small-paynow.png" width="165" height="36" alt="Pay" title="Pay Now with PayFast" /></a>\n    </p>\n    <!--\n    <button ion-button outline color="black" (click)="openBrowser()">Click Here To Pay</button>\n    -->\n    <p></p>\n    <!-- Insert reference href and interperlate amount here-->\n    <hr>\n    <ion-label>\n        <u><b>7 Day Account</b></u>\n    </ion-label>\n    <p> <i>Prior Arrangement Required. You may close the page if this applies to you.</i>\n    </p>\n    <hr>\n    <ion-label>\n        <u><b>Pay By Snapscan</b></u>\n    </ion-label>\n    <i>Enter the amount shown above and close the page when you are done. We will be notified of your payment.</i>\n    <p></p>\n    <img src="https://puristcoffee.com/wp-content/uploads/2018/02/Purist-Coffee-e1519653336313.png" align="middle">\n    <hr>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/layout/app2/after-cart/after-cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], AfterCartPage);
    return AfterCartPage;
}());

//# sourceMappingURL=after-cart.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(328);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* unused harmony export config2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database_deprecated__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_data__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_gallery_modal__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_pages_layout_app2_after_cart_after_cart__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_pages_layout_app2_admin_orders_admin_orders__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_pages_layout_app2_order_details_order_details__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//*********** ionic Native **************/




//***********  Angularfire2 v5 **************/

// New imports to update based on AngularFire2 version 4


//***********  Facebook **************/

//***********  Google plus **************/

//*********** Provider **************/

//************** import image gallery *********************//





//********** firebase configuration  ************ */
var config = {
    apiKey: 'AIzaSyDRZqq3yfwt4es02BVVGEZIO5sgOlJ0fE0',
    authDomain: 'purist-coffee-shopping-app.firebaseapp.com',
    databaseURL: 'https://purist-coffee-shopping-app.firebaseio.com',
    projectId: 'purist-coffee-shopping-app',
    storageBucket: 'purist-coffee-shopping-app.appspot.com',
    messagingSenderId: '465756601376'
};
//********** firebase SpAn configuration  ************ */
var config2 = {
    apiKey: 'AIzaSyC7htrI1a0PAxNAD9vr61VW7WHd2q9u0c4',
    authDomain: 'span-order-tracking-app.firebaseapp.com',
    databaseURL: 'https://span-order-tracking-app.firebaseio.com',
    projectId: 'span-order-tracking-app',
    storageBucket: 'span-order-tracking-app.appspot.com',
    messagingSenderId: '600260179957'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__src_pages_layout_app2_after_cart_after_cart__["a" /* AfterCartPage */],
                __WEBPACK_IMPORTED_MODULE_16__src_pages_layout_app2_admin_orders_admin_orders__["a" /* AdminOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_17__src_pages_layout_app2_order_details_order_details__["a" /* OrderDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14_ionic_gallery_modal__["b" /* GalleryModalModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/components/accordion/accordion.module#AccordionPageModule', name: 'AccordionPage', segment: 'accordion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/actionsheet/actionsheet.module#ActionsheetPageModule', name: 'ActionsheetPage', segment: 'actionsheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/alert/alert.module#AlertPageModule', name: 'AlertPage', segment: 'alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/animations/animations.module#AnimationsPageModule', name: 'AnimationsPage', segment: 'animations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/badge/badge.module#BadgePageModule', name: 'BadgePage', segment: 'badge', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/button/button.module#ButtonPageModule', name: 'ButtonPage', segment: 'button', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/datetime/datetime.module#DatetimePageModule', name: 'DatetimePage', segment: 'datetime', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/fab/fab.module#FabPageModule', name: 'FabPage', segment: 'fab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/fading-header/fading-header.module#FadingHeaderPageModule', name: 'FadingHeaderPage', segment: 'fading-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/grid/grid.module#GridPageModule', name: 'GridPage', segment: 'grid', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/header/header.module#HeaderPageModule', name: 'HeaderPage', segment: 'header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/input/input.module#InputPageModule', name: 'InputPage', segment: 'input', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/item-sliding/item-sliding.module#ItemSlidingPageModule', name: 'ItemSlidingPage', segment: 'item-sliding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/item/item.module#ItemPageModule', name: 'ItemPage', segment: 'item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/label/label.module#LabelPageModule', name: 'LabelPage', segment: 'label', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/radio-button/radio-button.module#RadioButtonPageModule', name: 'RadioButtonPage', segment: 'radio-button', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/range/range.module#RangePageModule', name: 'RangePage', segment: 'range', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/rating/rating.module#RatingPageModule', name: 'RatingPage', segment: 'rating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/search-bar/search-bar.module#SearchBarPageModule', name: 'SearchBarPage', segment: 'search-bar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/segment/segment.module#SegmentPageModule', name: 'SegmentPage', segment: 'segment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/select-option/select-option.module#SelectOptionPageModule', name: 'SelectOptionPage', segment: 'select-option', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/shrinking/shrinking.module#ShrinkingPageModule', name: 'ShrinkingPage', segment: 'shrinking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/tab/tab.module#TabPageModule', name: 'TabPage', segment: 'tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/table/table.module#TablePageModule', name: 'TablePage', segment: 'table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/tag/tag.module#TagPageModule', name: 'TagPage', segment: 'tag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/toast/toast.module#ToastPageModule', name: 'ToastPage', segment: 'toast', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/components/transparent-header/transparent-header.module#TransparentHeaderPageModule', name: 'TransparentHeaderPage', segment: 'transparent-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/app2/admin-orders/admin-orders.module#AdminOrdersPageModule', name: 'AdminOrdersPage', segment: 'admin-orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/app2/after-cart/after-cart.module#AfterCartPageModule', name: 'AfterCartPage', segment: 'after-cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/app2/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/app2/category2/category2.module#Category2PageModule', name: 'Category2Page', segment: 'category2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/app2/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/app2/detail2/detail2.module#Detail2PageModule', name: 'Detail2Page', segment: 'detail2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/app2/list2/list2.module#List2PageModule', name: 'List2Page', segment: 'list2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/app2/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/auth/after-login/after-login.module#AfterLoginPageModule', name: 'AfterLoginPage', segment: 'after-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/auth/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/auth/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/auth/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/auth/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/profile/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/profile/profile2/profile2.module#Profile2PageModule', name: 'Profile2Page', segment: 'profile2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/theme/theme.module#ThemePageModule', name: 'ThemePage', segment: 'theme', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__src_pages_layout_app2_after_cart_after_cart__["a" /* AfterCartPage */],
                __WEBPACK_IMPORTED_MODULE_16__src_pages_layout_app2_admin_orders_admin_orders__["a" /* AdminOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_17__src_pages_layout_app2_order_details_order_details__["a" /* OrderDetailsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */],
                    useClass: __WEBPACK_IMPORTED_MODULE_14_ionic_gallery_modal__["a" /* GalleryModalHammerConfig */],
                },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_data__["a" /* AuthData */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__["a" /* GooglePlus */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//***********  ionic-native **************/


var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'LoginPage';
        this.menu = [];
        this.initializeApp();
        this.menu = [
            {
                title: 'Menu:',
                //myicon:'ion-ios-home-outline',
                //iconLeft: 'ios-home',
                icon: 'ios-remove-outline',
                showDetails: true,
                items: [
                    //{name:'Authentication(Login)',component:'MainPage'},
                    //{name:'Authentication(Register)',component:'RegisterPage'},
                    //{name:'Authentication(Forgot)',component:'ForgotPage'},
                    //{name:'Authentication(Profile)',component:'AfterLoginPage'},
                    //{name:'Chart',component:'ChartPage'},
                    //{name:'City guide', component: 'Category1Page'},// app1 folder
                    { name: 'Home', component: 'Category2Page' },
                    //{name:'Restaurant',component:'Category3Page'}, // app3 folder
                    //{name:'Google map',component: 'MapPage'},
                    //{name:'Image gallery',component: 'GalleryPage'},
                    //{name:'Feed',component: 'FeedPage'},
                    //{name:'Form',component: 'FormResultPage'},
                    //{name:'Intro', component:'IntroPage'},
                    //{name:'Pinterest(Masonry)',component: 'MasonryPage'},
                    { name: 'View Profile', component: 'ProfilePage' },
                ]
            },
        ];
        this.pages = [
            { /*icon:'call',*/ title: 'Contact us', component: 'ContactUsPage' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.toggleDetails = function (menu) {
        if (menu.showDetails) {
            menu.showDetails = false;
            menu.icon = 'ios-add-outline';
        }
        else {
            menu.showDetails = true;
            menu.icon = 'ios-remove-outline';
        }
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // page.component = item array.component --> 
        //this.nav.setRoot(page.component);
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-content>\n\n        <!--***********  Side menu for android ***********-->\n        <div id="menu-material" showWhen="android">\n            <!-- <ion-header class="menu-header">\n                 <img class="user-avatar round" src="https://pbs.twimg.com/profile_images/834457277830541312/bYMCvtHD.jpg" />\n                <p class="name">ionic3fullapp</p>\n                <p class="email">with firebase backend</p>\n             \n            </ion-header>  -->\n            <!--***********  Menu for android  ***********-->\n            <div class="list-box">\n                <ion-list no-lines>\n\n                    <div *ngFor="let d of menu">\n                        <ion-item tappable (click)="toggleDetails(d)">\n                            <ion-icon color="gray" [name]="d.iconLeft" item-left></ion-icon>\n                            {{d.title}}\n                            <ion-icon item-right [name]="d.icon"></ion-icon>\n                        </ion-item>\n                        <div class="sub-menu" *ngIf="d.showDetails">\n                            <ion-item tappable menuClose item-right *ngFor="let item of d.items" (click)="openPage(item)">\n                                <div>{{item.name}}</div>\n                            </ion-item>\n                        </div>\n                    </div>\n\n                    <div *ngFor="let p of pages">\n                        <ion-item menuClose (click)="openPage(p)">\n                            <ion-icon [name]="p.icon" color="gray" item-left></ion-icon>\n                            {{p.title}}\n                        </ion-item>\n                    </div>\n\n                </ion-list>\n            </div>\n        </div>\n\n\n\n\n\n        <!--***********  Header for ios ***********-->\n\n        <div id="menu-ios" showWhen="ios" class="sideMenu-header" color="gray">\n            <div class="menu-header">\n                <!--\n                <img class="user-avatar round" src="https://pbs.twimg.com/profile_images/834457277830541312/bYMCvtHD.jpg" />\n                <p class="name">ionic3fullapp</p>\n                <p class="email">with firebase backend</p>\n-->\n\n            </div>\n            <!--\n            ***********  menu ***********-->\n            <ion-list no-lines>\n                <div *ngFor="let d of menu">\n                    <ion-item tappable (click)="toggleDetails(d)">\n                        <ion-icon color="gray" [name]="d.iconLeft" item-left></ion-icon>\n                        {{d.title}}\n                        <ion-icon item-right [name]="d.icon"></ion-icon>\n                    </ion-item>\n                    <div class="sub-menu" *ngIf="d.showDetails">\n                        <ion-item tappable menuClose item-right *ngFor="let item of d.items" (click)="openPage(item)">\n                            <div>{{item.name}}</div>\n                        </ion-item>\n                    </div>\n                </div>\n                <div *ngFor="let p of pages">\n                    <ion-item menuClose (click)="openPage(p)">\n                        <ion-icon [name]="p.icon" color="gray" item-left></ion-icon>\n                        {{p.title}}\n                    </ion-item>\n                </div>\n            </ion-list>\n        </div>\n\n\n\n        <!--***********  Side menu for PWA ***********-->\n        <div id="menu-pwa" hideWhen="android,ios">\n            <!-- <div class="menu-header">\n                \n                <img class="user-avatar round" src = "https://pbs.twimg.com/profile_images/834457277830541312/bYMCvtHD.jpg"/>\n                <p class="name">Purist Coffee</p>\n                <p class="email">with firebase backend</p>             \n        </div>-->\n            <div class="list-box">\n                <ion-list no-lines>\n\n                    <div *ngFor="let d of menu">\n                        <ion-item tappable (click)="toggleDetails(d)">\n                            <ion-icon color="gray" [name]="d.iconLeft" item-left></ion-icon>\n                            <b>{{d.title}}</b>\n                            <ion-icon item-right [name]="d.icon"></ion-icon>\n                        </ion-item>\n                        <div class="sub-menu" *ngIf="d.showDetails">\n                            <ion-item tappable menuClose item-right *ngFor="let item of d.items" (click)="openPage(item)">\n                                <div>{{item.name}}</div>\n                            </ion-item>\n                        </div>\n                    </div>\n\n                    <div *ngFor="let p of pages">\n                        <ion-item menuClose (click)="openPage(p)">\n                            <ion-icon [name]="p.icon" color="gray" item-left></ion-icon>\n                            {{p.title}}\n                        </ion-item>\n                    </div>\n\n                </ion-list>\n            </div>\n        </div>\n\n\n\n    </ion-content>\n\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[306]);
//# sourceMappingURL=main.js.map