webpackJsonp([4],{

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePageModule", function() { return ThemePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThemePageModule = (function () {
    function ThemePageModule() {
    }
    ThemePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* ThemePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__theme__["a" /* ThemePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* ThemePage */]
            ]
        })
    ], ThemePageModule);
    return ThemePageModule;
}());

//# sourceMappingURL=theme.module.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemePage; });
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


var ThemePage = (function () {
    function ThemePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mdColor = [];
        this.iosColor = [];
        this.flatColor = [];
        this.solarColor = [];
        this.tangoColor = [];
        this.miscColor = [];
        this.themeView = "tango";
        this.color = 'solar-base01';
        this.mdColor = [
            { colorName: 'red', colorCode: '#f44336' },
            { colorName: 'pink', colorCode: '#EA1E63' },
            { colorName: 'purple', colorCode: '#f44336' },
            { colorName: 'deeppurple', colorCode: '#673ab7' },
            { colorName: 'indigo', colorCode: '#3f51b5' },
            { colorName: 'blue', colorCode: '#2196f3' },
            { colorName: 'blue2', colorCode: '#0034a7' },
            { colorName: 'lightblue', colorCode: '#03a9f4' },
            { colorName: 'cyan', colorCode: '#00bcd4' },
            { colorName: 'teal', colorCode: '#009688' },
            { colorName: 'green', colorCode: '#4caf50' },
            { colorName: 'lightgreen', colorCode: '#8dc34b' },
            { colorName: 'lime', colorCode: '#cddc39' },
            { colorName: 'yellow', colorCode: '#ffeb3b' },
            { colorName: 'amber', colorCode: '#ffc107' },
            { colorName: 'orange', colorCode: '#ff9800' },
            { colorName: 'deeporange', colorCode: '#ff5722' },
            { colorName: 'brown', colorCode: '#795548' },
            { colorName: 'gray', colorCode: '#F2F2F2' },
            { colorName: 'bluegray', colorCode: '#607D8B' },
            { colorName: 'black', colorCode: '#000000' },
            { colorName: 'white', colorCode: '#ffffff' }
        ];
        this.iosColor = [
            { colorName: 'ios-gray', colorCode: '#8e8e93' },
            { colorName: 'ios-lightblue', colorCode: '#5ac8fa' },
            { colorName: 'ios-blue', colorCode: '#007aff' },
            { colorName: 'ios-yellow', colorCode: '#ffcc00' },
            { colorName: 'ios-orange', colorCode: '#ff9500' },
            { colorName: 'ios-pink', colorCode: '#ff2d55' },
            { colorName: 'ios-green', colorCode: '#4cd964' },
            { colorName: 'ios-red', colorCode: '#ff3b30' }
        ];
        this.flatColor = [
            { colorName: 'flat-turquoise', colorCode: '#1abc9c' },
            { colorName: 'flat-green-sea', colorCode: '#16a085' },
            { colorName: 'flat-emerald', colorCode: '#2ecc71' },
            { colorName: 'flat-peter-river', colorCode: '#3498db' },
            { colorName: 'flat-belize-hole', colorCode: '#2980b9' },
            { colorName: 'flat-amethyst', colorCode: '#9b59b6' },
            { colorName: 'flat-wisteria', colorCode: '#8e44ad' },
            { colorName: 'flat-wet-asphalt', colorCode: '#34495e' },
            { colorName: 'black', colorCode: '#000000' },
            { colorName: 'flat-midnight-blue', colorCode: '#2c3e50' },
            { colorName: 'flat-sun-flower', colorCode: '#f1c40f' },
            { colorName: 'flat-orange', colorCode: '#f39c12' },
            { colorName: 'flat-carrot', colorCode: '#e67e22' },
            { colorName: 'flat-pumpkin', colorCode: '#d35400' },
            { colorName: 'flat-alizarin', colorCode: '#e74c3c' },
            { colorName: 'flat-pomegrenade', colorCode: '#c0392b' },
            { colorName: 'flat-clouds', colorCode: '#e67e22' },
            { colorName: 'flat-silver', colorCode: '#bdc3c7' },
            { colorName: 'flat-concrete', colorCode: '#95a5a6' },
            { colorName: 'flat-asbesthos', colorCode: '#7f8c8d' }
        ];
        this.solarColor = [
            { colorName: 'solar-yellow', colorCode: '#b58900' },
            { colorName: 'solar-orange', colorCode: '#cb4b16' },
            { colorName: 'solar-red', colorCode: '#dc322f' },
            { colorName: 'solar-magenta', colorCode: '#d33682' },
            { colorName: 'solar-violet', colorCode: '#6c71c4' },
            { colorName: 'solar-blue', colorCode: '#268bd2' },
            { colorName: 'solar-base03', colorCode: '#002b36' },
            { colorName: 'solar-base02', colorCode: '#073642' },
            { colorName: 'solar-base01', colorCode: '#586e75' },
            { colorName: 'solar-base00', colorCode: '#657b83' },
            { colorName: 'solar-base0', colorCode: '#839496' },
            { colorName: 'solar-base1', colorCode: '#93a1a1' },
            { colorName: 'solar-base2', colorCode: '#eee8d5' },
            { colorName: 'solar-base3', colorCode: '#fdf6e3' }
        ];
        this.tangoColor = [
            { colorName: 'tango-aluminium', colorCode: '#d3d7cf' },
            { colorName: 'tango-butter', colorCode: '#edd400' },
            { colorName: 'tango-chameleon', colorCode: '#73d216' },
            { colorName: 'tango-orange', colorCode: '#f57900' },
            { colorName: 'tango-chocolate', colorCode: '#c17d11' },
            { colorName: 'tango-sky-blue', colorCode: '#3465a4' },
            { colorName: 'tango-plum', colorCode: '#75507b' },
            { colorName: 'tango-slate', colorCode: '#555753' },
            { colorName: 'tango-scarlet-red', colorCode: '#cc0000' }
        ];
    }
    ThemePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThemePage');
    };
    ThemePage.prototype.changeColor = function (color) {
        this.color = color;
    };
    ThemePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-theme',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/theme/theme.html"*/'<ion-header>\n  <ion-navbar   [color]="color" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Theme</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only >\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n</ion-navbar>\n\n  <ion-toolbar no-border-top  [color]="color">\n    <ion-segment [(ngModel)]="themeView" color="light" padding-left padding-right>\n      <ion-segment-button value="md">\n        md\n      </ion-segment-button>\n      <ion-segment-button value="ios">\n        ios\n      </ion-segment-button>\n      <ion-segment-button value="flat">\n        flat\n      </ion-segment-button>\n\n      <ion-segment-button value="solar">\n        solarized\n      </ion-segment-button>\n      <ion-segment-button value="tango">\n        tango\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n<div *ngIf="themeView===\'md\'">\n    <ion-list>\n      <ion-item tappable  *ngFor="let mdColor of mdColor " (click)="changeColor(mdColor.colorName)" >\n        <button ion-button color="{{mdColor.colorName}}" mode="ios"   item-left >{{mdColor.colorCode}}</button>\n        <h2>Usage: color="{{mdColor.colorName}}"</h2>\n      </ion-item>\n    </ion-list>\n</div>\n\n<div *ngIf="themeView===\'ios\'">\n    <ion-list>\n      <ion-item tappable  *ngFor="let iosColor of iosColor" (click)="changeColor(iosColor.colorName)">\n        <button ion-button color="{{iosColor.colorName}}" mode="ios"   item-left >{{iosColor.colorCode}}</button>\n        <h2>Usage: color="{{iosColor.colorName}}"</h2>\n      </ion-item>\n    </ion-list>\n</div>\n\n\n<div *ngIf="themeView===\'flat\'">\n  <ion-list>\n    <ion-item tappable  *ngFor="let flatColor of flatColor" (click)="changeColor(flatColor.colorName)">\n      <button ion-button color="{{flatColor.colorName}}" mode="ios"   item-left >{{flatColor.colorCode}}</button>\n      <h2>Usage: color="{{flatColor.colorName}}"</h2>\n    </ion-item>\n  </ion-list>\n</div>\n\n\n<div *ngIf="themeView===\'solar\'">\n  <ion-list>\n    <ion-item tappable *ngFor="let solarColor of solarColor" (click)="changeColor(solarColor.colorName)">\n      <button ion-button color="{{solarColor.colorName}}" mode="ios"   item-left >{{solarColor.colorCode}}</button>\n      <h2>Usage: color="{{solarColor.colorName}}"</h2>\n    </ion-item>\n  </ion-list>\n</div>\n\n\n<div *ngIf="themeView===\'tango\'">\n  <ion-list>\n    <ion-item tappable *ngFor="let tangoColor of tangoColor" (click)="changeColor(tangoColor.colorName)">\n      <button ion-button color="{{tangoColor.colorName}}" mode="ios"   item-left >{{tangoColor.colorCode}}</button>\n      <h2>Usage: color="{{tangoColor.colorName}}"</h2>\n    </ion-item>\n  </ion-list>\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/theme/theme.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ThemePage);
    return ThemePage;
}());

//# sourceMappingURL=theme.js.map

/***/ })

});
//# sourceMappingURL=4.js.map