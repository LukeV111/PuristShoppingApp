webpackJsonp([22],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarPageModule", function() { return SearchBarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_bar__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchBarPageModule = (function () {
    function SearchBarPageModule() {
    }
    SearchBarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__search_bar__["a" /* SearchBarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__search_bar__["a" /* SearchBarPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__search_bar__["a" /* SearchBarPage */]
            ]
        })
    ], SearchBarPageModule);
    return SearchBarPageModule;
}());

//# sourceMappingURL=search-bar.module.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarPage; });
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


/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SearchBarPage = (function () {
    function SearchBarPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SearchBarPage.prototype.ngOnInit = function () {
        this.setItems();
    };
    SearchBarPage.prototype.setItems = function () {
        this.items = ['Orange', 'Banana', 'Pear', 'Tomato', 'Grape', 'Apple', 'Cherries', 'Cranberries', 'Raspberries', 'Strawberries', 'Watermelon'];
    };
    SearchBarPage.prototype.filterItems = function (ev) {
        this.setItems();
        var val = ev.value;
        if (val && val.trim() !== '') {
            this.items = this.items.filter(function (item) {
                return item.toLowerCase().includes(val.toLowerCase());
            });
        }
    };
    SearchBarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-bar',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/search-bar/search-bar.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom color="lightblue">\n    <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Searchbar</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top color="lightblue">\n    <ion-searchbar placeholder="Filter Items" (ionInput)="filterItems($event)"></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar placeholder="Filter Items with Cancel" showCancelButton color="danger" (ionInput)="filterItems($event)"></ion-searchbar>\n\n  <p padding-left padding-right>Searchbars can be placed in a toolbar or anywhere in the content.</p>\n\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n\n<ion-footer>\n\n  <ion-toolbar color="danger">\n    <ion-searchbar placeholder="Search" (ionInput)="filterItems($event)"></ion-searchbar>\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/search-bar/search-bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], SearchBarPage);
    return SearchBarPage;
}());

//# sourceMappingURL=search-bar.js.map

/***/ })

});
//# sourceMappingURL=22.js.map