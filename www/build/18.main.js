webpackJsonp([18],{

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderPageModule", function() { return LoaderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader__ = __webpack_require__(527);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoaderPageModule = (function () {
    function LoaderPageModule() {
    }
    return LoaderPageModule;
}());
LoaderPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__loader__["a" /* LoaderPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loader__["a" /* LoaderPage */]),
        ],
    })
], LoaderPageModule);

//# sourceMappingURL=loader.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoaderPage = (function () {
    function LoaderPage(navCtrl, navParams, storage, auth, database, eventsApi, usersApi, zone, notification) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.auth = auth;
        this.database = database;
        this.eventsApi = eventsApi;
        this.usersApi = usersApi;
        this.zone = zone;
        this.notification = notification;
    }
    LoaderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('introShown').then(function (result) {
            if (!result) {
                _this.storage.set('introShown', true);
                _this.navCtrl.setRoot('IntroPage');
            }
            else {
                _this.auth.getUser().then(function (user) {
                    if (user) {
                        _this.database.exists('users/' + user.uid).then(function (exists) {
                            if (exists) {
                                _this.usersApi.init().then(function () {
                                    _this.eventsApi.init().then(function () {
                                        _this.notification.init();
                                        _this.zone.run(function () {
                                            _this.navCtrl.setRoot('TabsPage');
                                        });
                                    });
                                });
                            }
                            else {
                                _this.navCtrl.setRoot('CompleteProfilePage');
                            }
                        });
                    }
                    else {
                        _this.navCtrl.setRoot('LoginPage');
                    }
                });
            }
        });
    };
    return LoaderPage;
}());
LoaderPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-loader',template:/*ion-inline-start:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\loader\loader.html"*/'<ion-content></ion-content>\n\n'/*ion-inline-end:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\loader\loader.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["h" /* DatabaseProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["l" /* EventsApi */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["k" /* UsersApi */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* NotificationProvider */]])
], LoaderPage);

//# sourceMappingURL=loader.js.map

/***/ })

});
//# sourceMappingURL=18.main.js.map