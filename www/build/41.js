webpackJsonp([41],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPageModule", function() { return AccordionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccordionPageModule = (function () {
    function AccordionPageModule() {
    }
    AccordionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__accordion__["a" /* AccordionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__accordion__["a" /* AccordionPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__accordion__["a" /* AccordionPage */]
            ]
        })
    ], AccordionPageModule);
    return AccordionPageModule;
}());

//# sourceMappingURL=accordion.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionPage; });
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


var AccordionPage = (function () {
    function AccordionPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.lists = [];
        this.shownDetail = null;
        this.lists = [
            {
                name: 'Finn',
                img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-finn.png',
                detail: 'Finn, designation number FN-2187, is a fictional character in the Star Wars franchise. He first appeared in the 2015 film Star Wars: The Force Awakens in which he is a stormtrooper for the First Order who flees and turns against it after being shocked by their cruelty in his first combat mission. He is played by British actor John Boyega, who will reprise the role in Star Wars: The Last Jedi.'
            },
            { name: 'Han',
                img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-han.png',
                detail: 'Han Solo is a character in the Star Wars franchise. In the original film trilogy, Han and his co-pilot, Chewbacca, become involved in the Rebel Alliances struggle against the Galactic Empire. During the course of the Star Wars story, he becomes a chief figure in the Alliance and succeeding galactic governments. Star Wars creator George Lucas described the character as "a loner who realizes the importance of being part of a group and helping for the common good".[1] Harrison Ford portrayed the character in the original Star Wars trilogy as well as Star Wars: The Force Awakens. Alden Ehrenreich will portray a young Han Solo in an upcoming, as yet untitled spinoff film.'
            },
            {
                name: 'Rey',
                img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-rey.png',
                detail: 'Rey is a fictional character in the Star Wars franchise, portrayed by English actress Daisy Ridley. First appearing as the central character in Star Wars: The Force Awakens, Rey is a scavenger who was left behind on the planet Jakku when she was a child, and later becomes involved with the Resistances conflict with the First Order when her solitary life is interrupted by BB-8, the droid of ace Resistance pilot Poe Dameron, and a runaway Stormtrooper named Finn.'
            },
            {
                name: 'Luke',
                img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-luke.png',
                detail: 'Luke Skywalker is a fictional character and the main protagonist of the original film trilogy of the Star Wars franchise created by George Lucas. The character, portrayed by Mark Hamill, is an important figure in the Rebel Alliance s struggle against the Galactic Empire. He is the twin brother of Rebellion leader Princess Leia Organa of Alderaan, a friend and brother-in-law of smuggler Han Solo, an apprentice to Jedi Masters Obi-Wan "Ben" Kenobi and Yoda, the son of fallen Jedi Anakin Skywalker (Darth Vader) and Queen of Naboo/Republic Senator Padmé Amidala and maternal uncle of Kylo Ren / Ben Solo. The now non-canon Star Wars expanded universe depicts him as a powerful Jedi Master, husband of Mara Jade, the father of Ben Skywalker and maternal uncle of Jaina, Jacen and Anakin Solo.'
            },
            {
                name: 'Yoda',
                img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-yoda.png',
                detail: 'Yoda, a male member of a mysterious species, was a revered Jedi Master who served as the Grand Master of the Jedi Order in the waning days of the Galactic Republic. He was renowned within the Order for his wisdom, powers of the Force, and lightsaber combat, and he lived for nearly 900 years. His time during the last days of the Jedi Order and beyond made him a consequential figure in galactic history.'
            },
            {
                name: 'Leia',
                img: 'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-leia.png',
                detail: 'Princess Leia Organa of Alderaan, later known as General Leia Organa, is a fictional character in the Star Wars franchise, portrayed in films by Carrie Fisher. Introduced in the original Star Wars film in 1977, Leia is princess of the planet Alderaan, a member of the Imperial Senate and an agent of the Rebel Alliance.'
            }
        ];
    }
    AccordionPage.prototype.toggleDetail = function (group) {
        if (this.isDetailShown(group)) {
            this.shownDetail = null;
        }
        else {
            this.shownDetail = group;
        }
    };
    ;
    AccordionPage.prototype.isDetailShown = function (group) {
        return this.shownDetail === group;
    };
    ;
    AccordionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-accordion',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/components/accordion/accordion.html"*/'<ion-header>\n  <ion-navbar  color="lightblue" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Accordion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n\n\n  <ion-list>\n    <ion-list-header>\n      Our customers \n    </ion-list-header>\n    <ion-item class="item-align" tappable *ngFor="let list of lists; let i=index" text-wrap (click)="toggleDetail(i)" [ngClass]="{active: isDetailShown(i)}">\n      <ion-avatar item-left>\n          <img src={{list.img}} >\n      </ion-avatar>\n    <!--<ion-thumbnail item-left>\n      <ion-img src="{{list.img}} " padding-bottom></ion-img>\n    </ion-thumbnail>-->\n      <h2> {{list.name}} </h2>\n      <p *ngIf="isDetailShown(i)" margin-top>{{list.detail}}</p>\n       <ion-icon color="gray" item-right [name]="isDetailShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/LukeVenter/Desktop/Shopping_App/src/pages/components/accordion/accordion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], AccordionPage);
    return AccordionPage;
}());

//# sourceMappingURL=accordion.js.map

/***/ })

});
//# sourceMappingURL=41.js.map