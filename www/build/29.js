webpackJsonp([29],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageModule", function() { return InputPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputPageModule = (function () {
    function InputPageModule() {
    }
    InputPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__input__["a" /* InputPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__input__["a" /* InputPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__input__["a" /* InputPage */]
            ]
        })
    ], InputPageModule);
    return InputPageModule;
}());

//# sourceMappingURL=input.module.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPage; });
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
var InputPage = (function () {
    function InputPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-input',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/input/input.html"*/'<ion-header>\n  <ion-navbar  color="lightblue" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Input</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n<ion-list>\n  <ion-item>\n    <ion-label color="primary">Inline Label</ion-label>\n    <ion-input placeholder="Text Input"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" fixed>Fixed Label</ion-label>\n    <ion-input type="tel" placeholder="Tel Input"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="number" placeholder="Number Input with no label, ex: 092032333"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" stacked>Stacked Label</ion-label>\n    <ion-input type="email" placeholder="Email Input"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" stacked>Stacked Label</ion-label>\n    <ion-input type="password" placeholder="Password Input"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" floating>Floating Label</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input placeholder="Clear Input" clearInput></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-textarea placeholder="Textarea"></ion-textarea>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/input/input.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], InputPage);
    return InputPage;
}());

//# sourceMappingURL=input.js.map

/***/ })

});
//# sourceMappingURL=29.js.map