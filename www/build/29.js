webpackJsonp([29],{

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPageModule", function() { return HeaderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderPageModule = (function () {
    function HeaderPageModule() {
    }
    HeaderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__header__["a" /* HeaderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__header__["a" /* HeaderPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__header__["a" /* HeaderPage */]
            ]
        })
    ], HeaderPageModule);
    return HeaderPageModule;
}());

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
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
var HeaderPage = (function () {
    function HeaderPage() {
    }
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-header',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/components/header/header.html"*/'<ion-header>\n\n  <!-- Header -->\n  <ion-navbar color="lightblue">\n    <ion-title>Header</ion-title>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n<!-- Sub header -->\n  <ion-toolbar color="lightblue">\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="contact"></ion-icon>\n      </button>\n\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Subheader</ion-title>\n  </ion-toolbar>\n \n</ion-header>\n\n\n\n\n<ion-content fullscreen="true">\n\n\n  <ion-card color="primary">\n    <ion-card-header>\n        Card header\n    </ion-card-header>\n    <ion-card-content>\n      <ion-card-title>\n        Title\n      </ion-card-title>\n      Some normal text in content.\n      <h3>h3 in content</h3>\n      <p>\n        Paragraph in content.\n      </p>\n      <p>\n        Another paragraph in content.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color="primary" class="rainbow-content">\n    <ion-card-header>\n      Card Header\n    </ion-card-header>\n    <ion-card-content>\n      <ion-card-title>\n        Title\n      </ion-card-title>\n      Some normal text in content.\n      <h3>h3 in content</h3>\n      <p>\n        Paragraph in content.\n      </p>\n      <p>\n        Another paragraph in content.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color="primary">\n    <ion-card-header>\n      Card Header\n    </ion-card-header>\n    <ion-card-content>\n      <ion-card-title>\n        Title\n      </ion-card-title>\n      Some normal text in content.\n      <h3>h3 in content</h3>\n      <p>\n        Paragraph in content.\n      </p>\n      <p>\n        Another paragraph in content.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n    <ion-item *ngFor="let item of [0,1,2,3,4,5,6,7,8,9]">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons end>\n      <button ion-button icon-only #button2>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-searchbar>\n    </ion-searchbar>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-title>\n      Footer\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-right color="royal">\n        Send\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=header.js.map

/***/ })

});
//# sourceMappingURL=29.js.map