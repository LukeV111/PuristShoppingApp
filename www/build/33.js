webpackJsonp([33],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePageModule", function() { return DatetimePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datetime__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DatetimePageModule = (function () {
    function DatetimePageModule() {
    }
    DatetimePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__datetime__["a" /* DatetimePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__datetime__["a" /* DatetimePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__datetime__["a" /* DatetimePage */]
            ]
        })
    ], DatetimePageModule);
    return DatetimePageModule;
}());

//# sourceMappingURL=datetime.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatetimePage = (function () {
    function DatetimePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20',
            time: '07:00'
        };
    }
    DatetimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-datetime',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/components/datetime/datetime.html"*/'<!--https://github.com/driftyco/ionic/blob/master/demos/src/item-sliding/pages/page-one/page-one.ts-->\n\n\n<ion-header>\n  <ion-navbar  color="lightblue" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>DateTime</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="outer-content">\n\n    <ion-item>\n      <ion-label stacked>Stacked</ion-label>\n      <ion-datetime ></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Floating</ion-label>\n      <ion-datetime  displayFormat="MMMM YY"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Floating</ion-label>\n      <ion-datetime  displayFormat="MMMM YY"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Fixed</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Inline</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY"></ion-datetime>\n    </ion-item>\n\n\n  <ion-item>\n    <ion-label floating>Floating outside form</ion-label>\n    <ion-datetime displayFormat="MMMM YY"></ion-datetime>\n  </ion-item>\n  \n  <ion-list>\n  <ion-list-header>\n    Action\n  </ion-list-header>    \n    <ion-item>\n      <ion-label color="green">Start Date</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label color="green">Start Time</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="green">Ends</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.timeEnds"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="green">Day</ion-label>\n      <ion-datetime displayFormat="YYYY"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="green">Time</ion-label>\n      <ion-datetime displayFormat="HH"></ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n      <ion-list-header>\n        Date picker\n      </ion-list-header>   \n      <ion-item>\n        <ion-label color="dark">pickerFormat 1</ion-label>\n        <ion-datetime displayFormat="MM/YYYY" pickerFormat="MMMM YYYY" ></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark">pickerFormat 2</ion-label>\n        <ion-datetime displayFormat="HH" pickerFormat="HH" ></ion-datetime>\n      </ion-item>\n  \n  </ion-list>\n\n</ion-content>\n<style>\n\n</style>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/components/datetime/datetime.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], DatetimePage);
    return DatetimePage;
}());

//# sourceMappingURL=datetime.js.map

/***/ })

});
//# sourceMappingURL=33.js.map