webpackJsonp([27],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelPageModule", function() { return LabelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__label__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LabelPageModule = (function () {
    function LabelPageModule() {
    }
    LabelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__label__["a" /* LabelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__label__["a" /* LabelPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__label__["a" /* LabelPage */]
            ]
        })
    ], LabelPageModule);
    return LabelPageModule;
}());

//# sourceMappingURL=label.module.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
var LabelPage = (function () {
    function LabelPage() {
    }
    LabelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-label',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/components/label/label.html"*/'\n<ion-header>\n  <ion-navbar  color="lightblue" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Label</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="label-demo">\n\n  <ion-list>\n    <ion-item no-lines>\n      <ion-avatar item-start>\n        <img src="http://ionicframework.com/dist/preview-app/www/assets/img/avatar-leia.png">\n      </ion-avatar>\n      <ion-label>Ionic</ion-label>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label stacked color="primary">Mobile</ion-label>\n      <ion-input type="tel" value="+1 (555) 123-1234"></ion-input>\n      <ion-icon color="primary" item-right ios="ios-chatbubbles-outline" md="md-chatbubbles"></ion-icon>\n      <ion-icon color="primary" item-right ios="ios-call-outline" md="md-call"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Email</ion-label>\n      <ion-input type="email" value="hi@ionic.io"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Birthday</ion-label>\n      <ion-input type="text" value="November 21, 2013"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Address</ion-label>\n      <ion-textarea\n        value="121 S Pinckney St\nMadison WI 53703\nUnited States">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="dark">Notes</ion-label>\n      <ion-textarea></ion-textarea>\n    </ion-item>\n\n    <button ion-item detail-none>\n      <ion-label color="primary">Send Message</ion-label>\n    </button>\n    <button ion-item detail-none>\n      <ion-label color="primary">Share Contact</ion-label>\n    </button>\n    <button ion-item detail-none>\n      <ion-label color="primary">Add to Favorites</ion-label>\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/components/label/label.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LabelPage);
    return LabelPage;
}());

//# sourceMappingURL=label.js.map

/***/ })

});
//# sourceMappingURL=27.js.map