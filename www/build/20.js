webpackJsonp([20],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePageModule", function() { return TablePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TablePageModule = (function () {
    function TablePageModule() {
    }
    TablePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__table__["a" /* TablePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__table__["a" /* TablePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__table__["a" /* TablePage */]
            ]
        })
    ], TablePageModule);
    return TablePageModule;
}());

//# sourceMappingURL=table.module.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablePage; });
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


var TablePage = (function () {
    function TablePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.products = [];
        this.products = [
            {
                name: 'Lady gaga black shirt',
                price: '$59.00',
                status: 'In stock'
            },
            {
                name: 'Maroon 5 rainbow color t-shirt',
                price: '$59.00',
                status: 'In stock'
            },
            {
                name: 'Red t-shirt',
                price: '$19.00',
                status: 'Out of stock'
            },
            {
                name: 'Dark blue t-shirt',
                price: '$9.00',
                status: 'Out of stock'
            },
            {
                name: 'Dark gray t-shirt',
                price: '$19.00',
                status: 'In stock'
            },
            {
                name: 'Pinky t-shirt',
                price: '$19.00',
                status: 'In stock'
            },
            {
                name: 'Yellow t-shirt',
                price: '$19.00',
                status: 'Out of stock'
            },
            {
                name: 'Ocean blue t-shirt',
                price: '$29.00',
                status: 'In stock'
            },
            {
                name: 'Rainbow t-shirt',
                price: '$39.00',
                status: 'In stock'
            },
            {
                name: 'Sunshine t-shirt',
                price: '$19.00',
                status: 'In stock'
            }
        ];
    }
    TablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-table',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/components/table/table.html"*/'<ion-header>\n  <ion-navbar  color="lightblue" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Table</ion-title>\n  </ion-navbar>\n  <!--<ion-toolbar color="ios-yellow">\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>-->\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row class="tableHeader">\n        <ion-col>\n          <strong>Product </strong>\n        </ion-col>\n        <ion-col>\n          <strong>Price</strong>\n        </ion-col>\n        <ion-col>\n          <strong>Status</strong>\n        </ion-col>\n        <ion-col class="actionCol">\n          <strong></strong>\n        </ion-col>\n      </ion-row>\n    <ion-row *ngFor="let product of products">\n        <ion-col>\n          <p>{{product.name}}</p>\n        </ion-col>\n        <ion-col>\n          <p>{{product.price}}</p>\n        </ion-col>\n        <ion-col>\n          <p>{{product.status}}</p>\n        </ion-col>\n        <ion-col class="actionCol">\n          <!--<button ion-button color="teal" small>Add</button>-->\n          <button ion-button icon-left color="teal" small>\n            <ion-icon name="ios-add"></ion-icon>\n            Add\n          </button>\n          <button ion-button icon-left color="green" small>\n            <ion-icon name="md-create"></ion-icon>\n            Edit\n          </button>\n          <!--<button ion-button color="green" small>Edit</button>-->\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n\n<!--  Ex 2 : ref> https://forum.ionicframework.com/t/ionic2-grid-example/48046/8 -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/components/table/table.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], TablePage);
    return TablePage;
}());

//# sourceMappingURL=table.js.map

/***/ })

});
//# sourceMappingURL=20.js.map