webpackJsonp([2],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPageModule", function() { return RatingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(651);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Import ionic2-rating module

var RatingPageModule = (function () {
    function RatingPageModule() {
    }
    RatingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__rating__["a" /* RatingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__rating__["a" /* RatingPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */] // Put ionic2-rating module here
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__rating__["a" /* RatingPage */]
            ]
        })
    ], RatingPageModule);
    return RatingPageModule;
}());

//# sourceMappingURL=rating.module.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);


var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return Ionic2Rating; }),
    multi: true
};
var Ionic2Rating = (function () {
    function Ionic2Rating() {
        this._max = 5;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(Ionic2Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            this._max = this.getNumberPropertyValue(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.ngOnInit = function () {
        // ngFor needs an array
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    Ionic2Rating.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(Ionic2Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Ionic2Rating.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    Ionic2Rating.prototype.registerOnTouched = function (fn) {
    };
    Ionic2Rating.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    Ionic2Rating.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    Ionic2Rating.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    Ionic2Rating.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    Ionic2Rating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'rating',
                    styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],
                    template: "\n    <ul class=\"rating\" (keydown)=\"onKeyDown($event)\">\n      <li *ngFor=\"let starIndex of starIndexes\" tappable (click)=\"rate(starIndex + 1)\">\n        <ion-icon [name]=\"getStarIconName(starIndex)\">\n        </ion-icon>\n      </li>\n    </ul>",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Ionic2Rating.ctorParameters = [];
    Ionic2Rating.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'emptyStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'halfStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'starIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'nullable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return Ionic2Rating;
}());
//# sourceMappingURL=ionic2-rating.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingPage; });
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


var RatingPage = (function () {
    function RatingPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rate = 3;
    }
    RatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rating',template:/*ion-inline-start:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/rating/rating.html"*/'<ion-header>\n  <ion-navbar color="lightblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Rating</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  text-center>\n\n  <h2>Rating</h2>\n    <rating [(ngModel)]="rate" \n      readOnly="true" \n      max="2" \n      emptyStarIconName="star-outline" \n      halfStarIconName="star-half" \n      starIconName="star"\n      nullable="false"\n      (ngModelChange)="onModelChange($event)"> <!--use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.-->\n</rating>  \n\n<rating [(ngModel)]="rate" \n      readOnly="true" \n      max="5" \n      emptyStarIconName="star-outline" \n      halfStarIconName="star-half" \n      starIconName="star"\n      nullable="false"\n      (ngModelChange)="onModelChange($event)"> <!--use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.-->\n</rating>  \n\n<rating [(ngModel)]="rate" \n      readOnly="true" \n      max="7" \n      emptyStarIconName="star-outline" \n      halfStarIconName="star-half" \n      starIconName="star"\n      nullable="false"\n      (ngModelChange)="onModelChange($event)"> <!--use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.-->\n</rating>  \n\n  <h2>Custom icons</h2>\n<rating [(ngModel)]="rate" \n      readOnly="true" \n      max="5" \n      emptyStarIconName="ios-cafe-outline" \n      halfStarIconName="ios-cafe-outline" \n      starIconName="ios-cafe"\n      nullable="false"\n      (ngModelChange)="onModelChange($event)"> <!--use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.-->\n</rating>  \n<rating [(ngModel)]="rate" \n      readOnly="true" \n      max="5" \n      emptyStarIconName="ios-woman-outline" \n      halfStarIconName="ios-woman-outline" \n      starIconName="ios-woman"\n      nullable="false"\n      (ngModelChange)="onModelChange($event)"> <!--use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.-->\n</rating>  \n<rating [(ngModel)]="rate" \n      readOnly="true" \n      max="5" \n      emptyStarIconName="ios-thumbs-up-outline" \n      halfStarIconName="ios-thumbs-up-outline" \n      starIconName="ios-thumbs-up"\n      nullable="false"\n      (ngModelChange)="onModelChange($event)"> <!--use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.-->\n</rating>  \n</ion-content>'/*ion-inline-end:"/Users/LukeVenter/Desktop/PuristShoppingApp/PuristShoppingApp/PuristShoppingApp/src/pages/components/rating/rating.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], RatingPage);
    return RatingPage;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__ = __webpack_require__(652);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic2_rating__ = __webpack_require__(632);
/* unused harmony reexport Ionic2Rating */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2RatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__ = __webpack_require__(632);




var Ionic2RatingModule = (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */]
                    ],
                    schemas: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ionic2RatingModule.ctorParameters = [];
    return Ionic2RatingModule;
}());
//# sourceMappingURL=ionic2-rating.module.js.map

/***/ })

});
//# sourceMappingURL=2.js.map