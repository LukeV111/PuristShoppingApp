webpackJsonp([16],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterCartPageModule", function() { return AfterCartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__after_cart__ = __webpack_require__(578);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AfterCartPageModule = (function () {
    function AfterCartPageModule() {
    }
    AfterCartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__after_cart__["a" /* AfterCartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__after_cart__["a" /* AfterCartPage */]),
            ],
        })
    ], AfterCartPageModule);
    return AfterCartPageModule;
}());

//# sourceMappingURL=after-cart.module.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(278);
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
    }
    AfterCartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AfterCartPage');
    };
    //You're here
    AfterCartPage.prototype.openBrowser = function () {
        var browser = this.iab.create('https://ionic.io', '_system');
        browser.close();
    };
    AfterCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-after-cart',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/app2/after-cart/after-cart.html"*/'<ion-header>\n\n    <ion-navbar color="black">\n        <ion-title>Order Payment</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-label>\n        <h2>Thank you for your order!</h2>\n        <p><i>The total amount for your order is: <b><br><br>(CartValue)</b>.</i></p>\n    </ion-label>\n\n\n    <ion-label>\n        <u><b>Payment Methods:</b></u>\n    </ion-label>\n    <hr>\n    <ion-label>\n        <u><b>Pay By Card</b></u>\n    </ion-label>\n    <i>Payment is processed by PayFast</i>\n    <p></p>\n    <button ion-button outline color="black" (click)="openBrowser()">Click Here To Pay</button>\n    <p></p>\n    <!-- Insert reference href and interperlate amount here-->\n    <hr>\n    <ion-label>\n        <u><b>7 Day Account</b></u>\n    </ion-label>\n    <p> <i>Prior Arrangement Required. You may close the page if this applies to you.</i>\n    </p>\n    <hr>\n    <ion-label>\n        <u><b>Pay By Snapscan</b></u>\n    </ion-label>\n    <i>Enter the amount shown above and close the page when you are done. We will be notified of your payment.</i>\n    <p></p>\n    <img src="https://puristcoffee.com/wp-content/uploads/2018/02/Purist-Coffee-e1519653336313.png" align="middle">\n    <hr>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/layout/app2/after-cart/after-cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], AfterCartPage);
    return AfterCartPage;
}());

//# sourceMappingURL=after-cart.js.map

/***/ })

});
//# sourceMappingURL=16.js.map