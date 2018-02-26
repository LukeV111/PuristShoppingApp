webpackJsonp([38],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsPageModule", function() { return AnimationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AnimationsPageModule = (function () {
    function AnimationsPageModule() {
    }
    AnimationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* AnimationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* AnimationsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* AnimationsPage */]
            ]
        })
    ], AnimationsPageModule);
    return AnimationsPageModule;
}());

//# sourceMappingURL=animations.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationsPage; });
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


var AnimationsPage = (function () {
    function AnimationsPage(platform, actionsheetCtrl) {
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.viewMode = "set1";
    }
    AnimationsPage.prototype.openMenu = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Albums',
            cssClass: 'action-sheets',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AnimationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-animations',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/components/animations/animations.html"*/'<ion-header>\n  <ion-navbar  color="lightblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Animation</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only >\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n</ion-navbar>\n\n  <ion-toolbar no-border-top   color="lightblue">\n    <ion-segment [(ngModel)]="viewMode" color="light">\n      <ion-segment-button value="set1">\n        Set 1\n      </ion-segment-button>\n      <ion-segment-button value="set2">\n        Set 2\n      </ion-segment-button>\n      <ion-segment-button value="set3">\n        Set 3\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n\n<div *ngIf="viewMode===\'set1\'">\n  <!--********** Drop in *************-->\n    <ion-card color="darkGray" class="drop-in">\n      <ion-card-content text-center>   \n        <h3>Drop-In</h3>\n        <p>\n          Usage: class="drop-in"\n        </p>\n      </ion-card-content>\n    </ion-card>\n  <!--********** wobble*************-->\n    <ion-card color="darkGray" class="wobble">\n      <ion-card-content text-center>   \n        <h3>Wobble</h3>\n        <p>\n          Usage: class="wobble"\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n  <!--********** Fadein-down *************-->\n <ion-card color="darkGray" class="fadein-down">\n      <ion-card-content text-center>   \n        <h3>Fadein-down</h3>\n        <p>\n          Usage: class="fadein-down"\n        </p>\n      </ion-card-content>\n    </ion-card>\n  <!--********** Ta-da *************-->\n    <ion-card color="darkGray" class="ta-da">\n      <ion-card-content text-center>   \n        <h3>Ta-da</h3>\n        <p>\n          Usage: class="ta-da"\n        </p>\n      </ion-card-content>\n    </ion-card>   \n\n</div>\n\n\n\n\n<div *ngIf="viewMode===\'set2\'">\n \n\n  <!--********** Slide up *************-->\n <ion-card color="darkGray" class="slide-up">\n      <ion-card-content text-center margin-bottom>   \n        <h3>Slide-Up</h3>\n        <p>\n          Usage: class="slide-up"\n        </p>\n      </ion-card-content>\n    </ion-card>\n  <!--********** Wave *************-->\n    <ion-card color="darkGray" class="wave">\n      <ion-card-content text-center>   \n        <h3>Wave</h3>\n        <p>\n          Usage: class="wave"\n        </p>\n      </ion-card-content>\n    </ion-card>   \n  <!--********** Pop in *************-->\n    <ion-card color="darkGray" class="pop-in">\n      <ion-card-content text-center>   \n        <h3>Pop-In</h3>\n        <p>\n          Usage: class="pop-in"\n        </p>\n      </ion-card-content>\n    </ion-card>\n  <!--********** Pop put *************-->\n    <ion-card color="darkGray" class="pop-out">\n      <ion-card-content text-center>   \n        <h3>Pop-Out</h3>\n        <p>\n          Usage: class="pop-out"\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n\n</div>\n\n\n\n<div *ngIf="viewMode===\'set3\'">\n  <!--********** Swing *************-->\n    <ion-card color="darkGray" class="swing">\n      <ion-card-content text-center>   \n        <h3>Swing</h3>\n        <p>\n          Usage: class="swing"\n        </p>\n      </ion-card-content>\n    </ion-card>\n  <!--********** Shake*************-->\n    <ion-card color="darkGray" class="shake">\n      <ion-card-content text-center>   \n        <h3>Shake</h3>\n        <p>\n          Usage: class="shake"\n        </p>\n      </ion-card-content >\n    </ion-card>\n\n  <!--********** Bounce *************-->\n <ion-card color="darkGray" class="bounce">\n      <ion-card-content text-center>   \n        <h3>Bounce</h3>\n        <p>\n          Usage: class="bounce"\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/components/animations/animations.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], AnimationsPage);
    return AnimationsPage;
}());

//# sourceMappingURL=animations.js.map

/***/ })

});
//# sourceMappingURL=38.js.map