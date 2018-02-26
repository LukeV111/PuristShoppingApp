webpackJsonp([18],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPageModule", function() { return ToastPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToastPageModule = (function () {
    function ToastPageModule() {
    }
    ToastPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__toast__["a" /* ToastPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__toast__["a" /* ToastPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__toast__["a" /* ToastPage */]
            ]
        })
    ], ToastPageModule);
    return ToastPageModule;
}());

//# sourceMappingURL=toast.module.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastPage; });
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


var ToastPage = (function () {
    function ToastPage(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastPage.prototype.showToast = function (position) {
        var toast = this.toastCtrl.create({
            message: 'User was created successfully',
            position: position,
            duration: 3000
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    ToastPage.prototype.showLongToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
            duration: 3000
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    ToastPage.prototype.showDismissDurationToast = function () {
        var toast = this.toastCtrl.create({
            message: 'I am dismissed after 1.5 seconds',
            duration: 1500
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    ToastPage.prototype.showToastWithCloseButton = function () {
        var toast = this.toastCtrl.create({
            message: 'Your internet connection appears to be offline. Data integrity is not guaranteed.',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    ToastPage.prototype.dismissHandler = function () {
        console.info('Toast onDidDismiss()');
    };
    ToastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-toast',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/toast/toast.html"*/'<ion-header>\n  <ion-navbar  color="lightblue" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Toast</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button block (click)="showToast(\'bottom\')" color="light">Show Toast Bottom Position</button>\n  <button ion-button block (click)="showToast(\'top\')" color="light">Show Toast Top Position</button>\n  <button ion-button block (click)="showToast(\'middle\')" color="light">Show Toast Middle Position</button>\n  <button ion-button block margin-bottom (click)="showLongToast()" color="light">Show Long Toast</button>\n\n  <button ion-button block (click)="showDismissDurationToast()" color="light">Show Custom Duration Toast</button>\n  <button ion-button block (click)="showToastWithCloseButton()" color="light">Show Close Button Toast</button>\n\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/toast/toast.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ToastPage);
    return ToastPage;
}());

//# sourceMappingURL=toast.js.map

/***/ })

});
//# sourceMappingURL=18.js.map