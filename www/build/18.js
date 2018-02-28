webpackJsonp([18],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagPageModule", function() { return TagPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tag__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TagPageModule = (function () {
    function TagPageModule() {
    }
    TagPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__tag__["a" /* TagPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__tag__["a" /* TagPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__tag__["a" /* TagPage */]
            ]
        })
    ], TagPageModule);
    return TagPageModule;
}());

//# sourceMappingURL=tag.module.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagPage; });
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


var TagPage = (function () {
    function TagPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TagPage.prototype.delete = function (group) {
        alert("Deleted");
    };
    ;
    TagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tag',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/tag/tag.html"*/'\n<ion-header>\n  <ion-navbar  color="lightblue" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chips</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding text-center>\n\n  <h2>Text Chips</h2>\n\n  <ion-chip>\n    <ion-label>Default</ion-label>\n  </ion-chip>\n\n  <ion-chip>\n    <ion-label color="secondary">Secondary Label</ion-label>\n  </ion-chip>\n\n  <ion-chip>\n    <ion-label>Another With Longer Text</ion-label>\n  </ion-chip>\n\n  <h2>Color Chips</h2>\n\n  <ion-chip color="primary">\n    <ion-icon name="heart" color="dark"></ion-icon>\n    <ion-label>Primary</ion-label>\n  </ion-chip>\n\n  <ion-chip color="secondary">\n    <ion-label color="dark">Secondary w/ Dark label</ion-label>\n  </ion-chip>\n\n  <ion-chip color="danger">\n    <ion-label>Danger</ion-label>\n  </ion-chip>\n\n  <h2>Icon Chips</h2>\n\n  <ion-chip>\n    <ion-icon name="pin"></ion-icon>\n   <ion-label>Default</ion-label>\n  </ion-chip>\n\n  <ion-chip>\n    <ion-label>Secondary</ion-label>\n    <ion-icon name="pin" color="secondary"></ion-icon>\n  </ion-chip>\n\n  <h2>Avatar Chips</h2>\n\n  <ion-chip>\n    <ion-avatar>\n      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\n    </ion-avatar>\n    <ion-label>Default</ion-label>\n  </ion-chip>\n\n  <ion-chip>\n    <ion-label>Right Avatar</ion-label>\n    <ion-avatar>\n      <img src="https://gravatar.com/avatar/d249a09fecac4da036d26c5002af2c94?d=identicon&f=y">\n    </ion-avatar>\n  </ion-chip>\n\n  <h2>Delete Chips</h2>\n\n  <ion-chip #chip1>\n    <ion-label>Default</ion-label>\n    <button ion-button clear (click)="delete(chip1)">\n      <ion-icon name="close-circle"></ion-icon>\n    </button>\n  </ion-chip>\n\n  <ion-chip #chip2>\n    <ion-icon name="pin" color="primary"></ion-icon>\n    <ion-label>With Icon</ion-label>\n    <button ion-button clear (click)="delete(chip2)">\n      <ion-icon name="close-circle"></ion-icon>\n    </button>\n  </ion-chip>\n\n  <ion-chip #chip3>\n    <ion-avatar>\n      <img src="https://gravatar.com/avatar/83b4748bf7e821165ecccd4c090d96e1?d=identicon&f=y">\n    </ion-avatar>\n    <ion-label>With Avatar</ion-label>\n    <button ion-button clear color="dark" (click)="delete(chip3)">\n      <ion-icon name="close-circle"></ion-icon>\n    </button>\n  </ion-chip>\n\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/tag/tag.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], TagPage);
    return TagPage;
}());

//# sourceMappingURL=tag.js.map

/***/ })

});
//# sourceMappingURL=18.js.map