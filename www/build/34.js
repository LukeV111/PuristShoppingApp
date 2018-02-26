webpackJsonp([34],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabPageModule", function() { return FabPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fab__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FabPageModule = (function () {
    function FabPageModule() {
    }
    FabPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__fab__["a" /* FabPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__fab__["a" /* FabPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__fab__["a" /* FabPage */]
            ]
        })
    ], FabPageModule);
    return FabPageModule;
}());

//# sourceMappingURL=fab.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabPage; });
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

var FabPage = (function () {
    function FabPage() {
    }
    FabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-fab',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/src/pages/components/fab/fab.html"*/'\n<ion-header>\n  <ion-navbar  color="lightblue" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>FABs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab top right edge>\n    <button ion-fab color="gray" mini><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list>\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab left top>\n    <button ion-fab color="secondary"><ion-icon name="arrow-dropright"></ion-icon></button>\n    <ion-fab-list side="right">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab left bottom>\n    <button ion-fab color="dark"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab center middle>\n    <button ion-fab color="danger"><ion-icon name="md-share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="primary"><ion-icon name="logo-vimeo"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="bottom">\n      <button ion-fab color="secondary"><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab color="light"><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button ion-fab color="dark"><ion-icon name="logo-twitter"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab right middle>\n    <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/src/pages/components/fab/fab.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FabPage);
    return FabPage;
}());

//# sourceMappingURL=fab.js.map

/***/ })

});
//# sourceMappingURL=34.js.map