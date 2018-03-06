webpackJsonp([34],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPageModule", function() { return ButtonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ButtonPageModule = (function () {
    function ButtonPageModule() {
    }
    ButtonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__button__["a" /* ButtonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__button__["a" /* ButtonPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__button__["a" /* ButtonPage */]
            ]
        })
    ], ButtonPageModule);
    return ButtonPageModule;
}());

//# sourceMappingURL=button.module.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonPage = (function () {
    function ButtonPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ButtonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-button',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/components/button/button.html"*/'<ion-header>\n  <ion-navbar color="lightblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Button</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  text-center>\n\n  <h2>Shapes</h2>\n\n  <button ion-button full color="bluegray">Full Button</button>\n\n  <button ion-button block color="bluegray">Block Button</button>\n\n  <button ion-button round color="bluegray">Round Button</button>\n\n\n  <h2>Outlines</h2>\n\n  <button ion-button color="secondary" full outline color="bluegray">Outline + Full</button>\n\n  <button ion-button color="secondary" block outline color="bluegray">Outline + Block</button>\n\n  <button ion-button color="secondary" round outline color="bluegray">Outline + Round</button>\n\n  <h2>Icons</h2>\n\n  <button ion-button icon-left color="bluegray">\n    <ion-icon name="star"></ion-icon>\n    Left Icon\n  </button>\n\n  <button ion-button icon-right color="bluegray">\n    Right Icon\n    <ion-icon name="star"></ion-icon>\n  </button>\n\n  <button ion-button icon-only color="bluegray">\n    <ion-icon name="star"></ion-icon>\n  </button>\n\n  <button ion-button color="dark" clear icon-only>\n      <ion-icon name=\'hammer\' is-active="false"></ion-icon>\n    </button>\n\n  <h2>Sizes</h2>\n\n  <button ion-button color="bluegray" large>Large</button>\n\n  <button ion-button color="bluegray">Default</button>\n\n  <button ion-button color="bluegray" small>Small</button>\n\n\n\n\n  <h2>Colors</h2>\n\n  <button ion-button color="red">Red </button>\n\n  <button ion-button color="pink">Pink</button>\n\n  <button ion-button color="deeppurple">Deeppurple</button>\n\n  <button ion-button color="lightgreen">Lightgreen</button>\n\n  <button ion-button color="amber">Amber</button>\n\n  <button ion-button color="ios-blue">ios-blue</button>\n\n  <button ion-button color="ios-pink">ios-pink</button>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/components/button/button.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ButtonPage);
    return ButtonPage;
}());

//# sourceMappingURL=button.js.map

/***/ })

});
//# sourceMappingURL=34.js.map