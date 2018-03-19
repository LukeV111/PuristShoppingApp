webpackJsonp([21],{

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPageModule", function() { return SegmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__segment__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SegmentPageModule = (function () {
    function SegmentPageModule() {
    }
    SegmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__segment__["a" /* SegmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__segment__["a" /* SegmentPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__segment__["a" /* SegmentPage */]
            ]
        })
    ], SegmentPageModule);
    return SegmentPageModule;
}());

//# sourceMappingURL=segment.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentPage; });
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


/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SegmentPage = (function () {
    function SegmentPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.appType = 'Paid';
        this.safari = 'Shared Links';
        this.weather = 'sunny';
        this.apps = {
            'Paid': [
                {
                    name: 'Monopoly',
                    price: '$0.99'
                },
                {
                    name: 'Angry Birds',
                    price: '$2.99'
                }
            ],
            'Free': [
                {
                    name: 'Snapchat',
                    price: 'GET'
                },
                {
                    name: 'Instagram',
                    price: 'OPEN'
                }
            ],
            'Top': [
                {
                    name: 'Spotify',
                    price: 'OPEN'
                },
                {
                    name: 'Pandora',
                    price: 'GET'
                }
            ]
        };
        this.items = {
            'Bookmarks': [
                {
                    name: 'Favorites',
                    icon: 'ios-star-outline'
                },
                {
                    name: 'History',
                    icon: 'ios-clock-outline'
                }
            ],
            'Reading List': [
                {
                    name: 'Terms of Service',
                    icon: 'create'
                },
                {
                    name: 'User Guide',
                    icon: 'book'
                }
            ],
            'Shared Links': [
                {
                    name: 'Ionic Framework',
                    icon: 'ionic'
                },
                {
                    name: 'Learn Angular',
                    icon: 'logo-angular'
                }
            ]
        };
    }
    SegmentPage.prototype.getItems = function (type) {
        return this.apps[type];
    };
    SegmentPage.prototype.getSafariItems = function (type) {
        return this.items[type];
    };
    SegmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-segment',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/components/segment/segment.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom color="lightblue">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Segment</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top color="lightblue">\n    <ion-segment [(ngModel)]="appType" color="light">\n      <ion-segment-button value="Paid">\n        Paid\n      </ion-segment-button>\n      <ion-segment-button value="Free">\n        Free\n      </ion-segment-button>\n      <ion-segment-button value="Top">\n        Top\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="outer-content">\n  <ion-list>\n    <ion-list-header>{{ appType }}</ion-list-header>\n    <ion-item *ngFor="let item of getItems(appType)">\n      {{ item.name }}\n      <button ion-button outline item-end>{{ item.price }}</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-card>\n    <ion-card-header>\n      {{ safari }}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-segment [(ngModel)]="safari" color="dark">\n        <ion-segment-button value="Bookmarks">\n          <ion-icon name="book"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="Reading List">\n          <ion-icon ios="ios-glasses-outline" md="md-glasses"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="Shared Links">\n          <ion-icon ios="ios-at-outline" md="md-at"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n      <ion-list style="margin: 0" inset>\n        <button ion-item *ngFor="let sItem of getSafariItems(safari)">\n          <ion-icon item-start [name]="sItem.icon" color="primary"></ion-icon>\n          {{ sItem.name }}\n        </button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar no-border-bottom>\n    <ion-title>\n      Weather: {{ weather == \'sunny\' ? \'96\' : \'77\' }}°\n      <ion-icon [name]="weather" color="danger"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar no-border-top no-border-bottom>\n    <ion-segment [(ngModel)]="weather" color="danger">\n      <ion-segment-button value="sunny">\n        Sunny\n      </ion-segment-button>\n      <ion-segment-button value="rainy" checked>\n        Rainy\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/src/pages/components/segment/segment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], SegmentPage);
    return SegmentPage;
}());

//# sourceMappingURL=segment.js.map

/***/ })

});
//# sourceMappingURL=21.js.map