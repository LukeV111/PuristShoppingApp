webpackJsonp([21],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPageModule", function() { return TabPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabPageModule = (function () {
    function TabPageModule() {
    }
    TabPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__tab__["a" /* TabPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__tab__["a" /* TabPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__tab__["a" /* TabPage */]
            ]
        })
    ], TabPageModule);
    return TabPageModule;
}());

//# sourceMappingURL=tab.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPage; });
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


/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TabPage = (function () {
    function TabPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.lists = [];
        this.shownDetail = null;
        this.lists = [
            { company: 'Microsoft', detail: 'Microsoft is an American multinational technology company headquartered in Redmond, Washington, that develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services' },
            { company: 'Oracle', detail: 'Oracle Corporation is a multinational computer technology corporation, headquartered in Redwood Shores, California.' },
            { company: 'sap', detail: 'SAP SE is a German multinational software corporation that makes enterprise software to manage business operations and customer relations. SAP is headquartered in Walldorf, Baden-Württemberg, with regional offices in 130 countries.' },
            { company: 'Google', detail: 'Google is an American multinational technology company specializing in Internet-related services and products. These include online advertising technologies, search, cloud computing, software, and hardware.' },
            { company: 'Uber', detail: 'Uber Technologies Inc. is a transportation network company headquartered in San Francisco, California, United States, operating in 570 cities worldwide. It develops, markets and operates the Uber car transportation and food delivery mobile apps.' },
            { company: 'Apple', detail: 'Apple is an American multinational technology company headquartered in Cupertino, California that designs, develops, and sells consumer electronics, computer software, and online services.' }
        ];
    }
    TabPage.prototype.toggleDetail = function (group) {
        if (this.isDetailShown(group)) {
            this.shownDetail = null;
        }
        else {
            this.shownDetail = group;
        }
    };
    ;
    TabPage.prototype.isDetailShown = function (group) {
        return this.shownDetail === group;
    };
    ;
    TabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tab',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/components/tab/tab.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tabs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- Text -->ฟหกฟหกฟหกฟห\n    <ion-tabs>\n    <ion-tab tabIcon="water" tabTitle="Water" [root]="tab1"></ion-tab>\n    <ion-tab tabIcon="leaf" tabTitle="Life" [root]="tab2"></ion-tab>\n    <ion-tab tabIcon="flame" tabTitle="Fire" [root]="tab3"></ion-tab>\n    <ion-tab tabIcon="magnet" tabTitle="Force" [root]="tab4"></ion-tab>\n  </ion-tabs>`\n  <ion-tabs >\n    <ion-tab tabTitle="Recents" ></ion-tab>\n    <ion-tab tabTitle="Favorites"  tabBadge="23"></ion-tab>\n    <ion-tab tabTitle="Settings" ></ion-tab>\n  </ion-tabs>\n\n\n  <!-- Icons -->\n  <ion-tabs  selectedIndex="1" color="primary">\n    <ion-tab tabIcon="call" ></ion-tab>\n    <ion-tab tabIcon="heart" ></ion-tab>\n    <ion-tab tabIcon="settings"  tabBadge="2" tabBadgeStyle="danger"></ion-tab>\n  </ion-tabs>\n\n\n  <!-- Icons on top of text -->\n  <ion-tabs  selectedIndex="2" color="secondary">\n    <ion-tab tabTitle="Location" tabIcon="navigate" ></ion-tab>\n    <ion-tab tabTitle="Favorites" tabIcon="star"  tabBadge="12" tabBadgeStyle="dark"></ion-tab>\n    <ion-tab tabTitle="Radio" tabIcon="musical-notes" ></ion-tab>\n  </ion-tabs>\n\n\n  <!-- Icons below text -->\n  <ion-tabs  tabsLayout="icon-bottom" selectedIndex="1" color="danger">\n    <ion-tab tabTitle="Recents" tabIcon="call"  tabBadge="47" tabBadgeStyle="light"></ion-tab>\n    <ion-tab tabTitle="Favorites" tabIcon="heart" ></ion-tab>\n    <ion-tab tabTitle="Settings" tabIcon="settings" ></ion-tab>\n  </ion-tabs>\n\n\n  <!-- Icons right of text -->\n  <ion-tabs  tabsLayout="icon-right" selectedIndex="0" color="light">\n    <ion-tab tabTitle="Recents" tabIcon="call" ></ion-tab>\n    <ion-tab tabTitle="Favorites" tabIcon="heart" ></ion-tab>\n    <ion-tab tabTitle="Settings" tabIcon="settings"  tabBadge="4" tabBadgeStyle="secondary"></ion-tab>\n  </ion-tabs>\n\n\n  <!-- Icons left of text -->\n  <ion-tabs  tabsLayout="icon-left" color="dark">\n    <ion-tab tabTitle="Recents" tabIcon="call"  tabBadge="1" tabBadgeStyle="danger"></ion-tab>\n    <ion-tab tabTitle="Favorites" tabIcon="heart" ></ion-tab>\n    <ion-tab tabTitle="Settings" tabIcon="settings" ></ion-tab>\n  </ion-tabs>\n\n\n  <!-- No icons -->\n  <ion-tabs  tabsLayout="icon-hide">\n    <ion-tab tabTitle="Recents" tabIcon="call" ></ion-tab>\n    <ion-tab tabTitle="Favorites" tabIcon="heart"  tabBadge="61" tabBadgeStyle="dark"></ion-tab>\n    <ion-tab tabTitle="Settings" tabIcon="settings" ></ion-tab>\n  </ion-tabs>\n\n\n  <!-- No overflow text -->\n  <ion-tabs  color="primary">\n    <ion-tab tabTitle="Indiana Jones and the Raiders of the Lost Ark" ></ion-tab>\n    <ion-tab tabTitle="Indiana Jones and the Temple of Doom" ></ion-tab>\n    <ion-tab tabTitle="Indiana Jones and the Last Crusade" ></ion-tab>\n  </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/components/tab/tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], TabPage);
    return TabPage;
}());

//# sourceMappingURL=tab.js.map

/***/ })

});
//# sourceMappingURL=21.js.map