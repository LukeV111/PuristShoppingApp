webpackJsonp([29],{

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSlidingPageModule", function() { return ItemSlidingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_sliding__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemSlidingPageModule = (function () {
    function ItemSlidingPageModule() {
    }
    ItemSlidingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__item_sliding__["a" /* ItemSlidingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__item_sliding__["a" /* ItemSlidingPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__item_sliding__["a" /* ItemSlidingPage */]
            ]
        })
    ], ItemSlidingPageModule);
    return ItemSlidingPageModule;
}());

//# sourceMappingURL=item-sliding.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemSlidingPage; });
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
var ItemSlidingPage = (function () {
    function ItemSlidingPage(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.chats = [
            {
                img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-rey.png',
                name: 'Cher',
                message: 'Ugh. As if.',
                time: '9:38 pm'
            }, {
                img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-luke.png',
                name: 'Dionne',
                message: 'Mr. Hall was way harsh.',
                time: '8:59 pm'
            }, {
                img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-yoda.png',
                name: 'Murray',
                message: 'Excuse me, "Ms. Dione."',
                time: 'Wed'
            }
        ];
        this.logins = [
            {
                icon: 'logo-twitter',
                name: 'Twitter',
                username: 'admin',
            }, {
                icon: 'logo-github',
                name: 'GitHub',
                username: 'admin37',
            }, {
                icon: 'logo-instagram',
                name: 'Instagram',
                username: 'imanadmin',
            }, {
                icon: 'logo-codepen',
                name: 'Codepen',
                username: 'administrator',
            }
        ];
    }
    ItemSlidingPage.prototype.more = function (item) {
        console.log('More');
        item.close();
    };
    ItemSlidingPage.prototype.delete = function (item) {
        console.log('Delete');
        item.close();
    };
    ItemSlidingPage.prototype.mute = function (item) {
        console.log('Mute');
        item.close();
    };
    ItemSlidingPage.prototype.archive = function (item) {
        this.expandAction(item, 'archiving', 'Chat was archived.');
    };
    ItemSlidingPage.prototype.download = function (item) {
        this.expandAction(item, 'downloading', 'Login was downloaded.');
    };
    ItemSlidingPage.prototype.expandAction = function (item, action, text) {
        // TODO item.setElementClass(action, true);
        var _this = this;
        setTimeout(function () {
            var toast = _this.toastCtrl.create({
                message: text
            });
            toast.present();
            // TODO item.setElementClass(action, false);
            item.close();
            setTimeout(function () { return toast.dismiss(); }, 2000);
        }, 1500);
    };
    ItemSlidingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-item-sliding',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/item-sliding/item-sliding.html"*/'<ion-header>\n  <ion-navbar  color="lightblue" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item sliding</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n  <ion-list class="chat-sliding-demo">\n    <ion-list-header>\n      Chats\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor="let chat of chats" #item>\n      <ion-item>\n        <ion-avatar  item-left>\n          <img [src]="chat.img">\n        </ion-avatar>\n        <h2>{{chat.name}}</h2>\n        <p>{{chat.message}}</p>\n        <ion-note item-right>\n          {{chat.time}}\n        </ion-note>\n      </ion-item>\n\n      <ion-item-options>\n        <button ion-button color="secondary" (click)="more(item)">\n          <ion-icon name="menu"></ion-icon>\n          More\n        </button>\n        <button ion-button color="dark" (click)="mute(item)">\n          <ion-icon name="volume-off"></ion-icon>\n          Mute\n        </button>\n        <button ion-button color="danger" (click)="delete(item)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="left" (ionSwipe)="archive(item)">\n        <button ion-button color="primary" expandable (click)="archive(item)">\n          <ion-icon name="archive" class="expand-hide"></ion-icon>\n          <div class="expand-hide">Archive</div>\n          <ion-spinner id="archive-spinner"></ion-spinner>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <ion-list class="login-sliding-demo">\n    <ion-list-header>\n      Logins\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor="let login of logins" #item>\n      <ion-item>\n        <ion-icon [name]="login.icon" item-left></ion-icon>\n        <h2>{{login.name}}</h2>\n        <p>{{login.username}}</p>\n      </ion-item>\n      \n      <ion-item-options side="left">\n        <button ion-button color="danger">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n      <ion-item-options (ionSwipe)="download(item)" icon-left>\n        <button ion-button color="dark" (click)="more(item)">\n          <ion-icon name="volume-off"></ion-icon>\n          Mute\n        </button>\n        <button ion-button color="light" expandable (click)="download(item)">\n          <ion-icon name="download" class="expand-hide"></ion-icon>\n          <div class="expand-hide">Download</div>\n          <ion-spinner id="download-spinner"></ion-spinner>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n<style>\n  /* TODO: spinner is dropping classes so we have to use ids: https://github.com/driftyco/ionic/issues/7087 */\n  #archive-spinner,\n  #download-spinner,\n  .archiving .expand-hide,\n  .downloading .expand-hide {\n    display: none;\n  }\n  /* TODO: spinner doesn\'t have a good way to do this yet: https://github.com/driftyco/ionic/issues/7087 */\n  #archive-spinner.spinner-ios line,\n  #archive-spinner.spinner-crescent circle {\n    stroke: #fff;\n  }\n  #archive-spinner.spinner-circles circle {\n    fill: #fff;\n  }\n  .archiving #archive-spinner,\n  .downloading #download-spinner {\n    display: block;\n  }\n  .chat-sliding-demo ion-note {\n    font-size: 13px;\n    margin-top: -8px;\n  }\n  .chat-sliding-demo img {\n    pointer-events: none;\n  }\n  .login-sliding-demo .ion-logo-twitter {\n    color: #53ACEB;\n  }\n  .login-sliding-demo .ion-logo-github {\n    color: #000000;\n  }\n  .login-sliding-demo .ion-logo-instagram {\n    color: #235D8D;\n  }\n</style>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/item-sliding/item-sliding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ItemSlidingPage);
    return ItemSlidingPage;
}());

//# sourceMappingURL=item-sliding.js.map

/***/ })

});
//# sourceMappingURL=29.js.map