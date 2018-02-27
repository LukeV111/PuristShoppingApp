webpackJsonp([31],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPageModule", function() { return GridPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GridPageModule = (function () {
    function GridPageModule() {
    }
    GridPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__grid__["a" /* GridPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__grid__["a" /* GridPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__grid__["a" /* GridPage */]
            ]
        })
    ], GridPageModule);
    return GridPageModule;
}());

//# sourceMappingURL=grid.module.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridPage; });
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
var GridPage = (function () {
    function GridPage() {
    }
    GridPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-grid',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/grid/grid.html"*/'\n<ion-header>\n  <ion-navbar  color="lightblue" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Grid</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="grid-basic-page">\n  <p padding>\n    Equal-width columns\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Setting one column width\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-6>\n        <div>2 of 3 (wider)</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <div>1 of 3 (wider)</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Variable-width columns\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-auto>\n        <div>Variable width content</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col col-auto>\n        <div><ion-icon name="globe"></ion-icon></div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Offsetting columns\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col offset-4>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col offset-4>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Push and pull\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-9 push-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3 pull-9>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6 push-3>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-3 push-3>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col col-3 pull-9>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Setting all column widths<br>\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col col-5>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Vertical alignment\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4 <br>#</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4 <br>#<br>#</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-start>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-end>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-start>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col align-self-center>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col align-self-end>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Horizontal Alignment\n  </p>\n  <ion-grid>\n    <ion-row justify-content-start>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-center>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-end>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-around>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-between>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/grid/grid.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GridPage);
    return GridPage;
}());

//# sourceMappingURL=grid.js.map

/***/ })

});
//# sourceMappingURL=31.js.map