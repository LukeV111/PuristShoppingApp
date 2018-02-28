webpackJsonp([27],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPageModule", function() { return ItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemPageModule = (function () {
    function ItemPageModule() {
    }
    ItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__item__["a" /* ItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__item__["a" /* ItemPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__item__["a" /* ItemPage */]
            ]
        })
    ], ItemPageModule);
    return ItemPageModule;
}());

//# sourceMappingURL=item.module.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ItemPage = (function () {
    function ItemPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.lists = [];
        this.shownDetail = null;
    }
    ItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-item',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/item/item.html"*/'<ion-header>\n  <ion-navbar  color="lightblue" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>\n      Settings\n      <button ion-button icon-only item-right  clear>\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-list-header>\n\n    <ion-item-group>\n      <ion-item>\n        <ion-icon name="plane" item-left color="danger"></ion-icon>\n        <ion-label>Airplane Mode</ion-label>\n        <ion-toggle color="secondary"></ion-toggle>\n      </ion-item>\n\n      <button ion-item>\n        <ion-icon name="wifi" item-left color="primary"></ion-icon>\n        <ion-label>Wi-Fi</ion-label>\n        <ion-note item-right >The Interwebz</ion-note>\n      </button>\n\n      <button ion-item>\n        <ion-icon name="bluetooth" item-left color="primary"></ion-icon>\n        <ion-label>Bluetooth</ion-label>\n        <ion-note item-right >Off</ion-note>\n      </button>\n    </ion-item-group>\n\n    <ion-item-divider color="primary">\n      Other Settings\n      <button ion-button item-right  outline color="light">Clear</button>\n    </ion-item-divider>\n\n    <button ion-item>\n      <ion-icon name="call" item-left color="secondary"></ion-icon>\n      <ion-label>Cellular</ion-label>\n    </button>\n\n    <button ion-item>\n      <ion-icon name="link" item-left color="secondary"></ion-icon>\n      <ion-label>Personal Hotspot</ion-label>\n      <ion-note item-right >Off</ion-note>\n    </button>\n  </ion-list>\n\n  <ion-list radio-group>\n    <ion-list-header>\n      <ion-icon item-left name="phone-portrait"></ion-icon>\n      Silence Phone\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label color="dark">Always</ion-label>\n      <ion-radio value="always" checked></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark">Only while phone is locked</ion-label>\n      <ion-radio value="locked"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Apps Installed\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name="ionic" item-left color="primary"></ion-icon>\n      <ion-label>Ionic View</ion-label>\n      <button ion-button outline item-right >Uninstall</button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="brush" item-left color="primary"></ion-icon>\n      <ion-label>Ionic Creator</ion-label>\n      <button ion-button outline item-right >Uninstall</button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="logo-octocat" item-left color="dark"></ion-icon>\n      <ion-label>Hubstruck</ion-label>\n      <button ion-button outline item-right >Uninstall</button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="paw" item-left color="danger"></ion-icon>\n      <ion-label>Barkpark</ion-label>\n      <button ion-button outline item-right >Uninstall</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/item/item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ItemPage);
    return ItemPage;
}());

//# sourceMappingURL=item.js.map

/***/ })

});
//# sourceMappingURL=27.js.map