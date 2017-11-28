webpackJsonp([19],{

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intro__ = __webpack_require__(525);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IntroPageModule = (function () {
    function IntroPageModule() {
    }
    return IntroPageModule;
}());
IntroPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__intro__["a" /* IntroPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__intro__["a" /* IntroPage */]),
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__intro__["a" /* IntroPage */]
        ]
    })
], IntroPageModule);

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs_toast_config__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntroPage = (function () {
    function IntroPage(navCtrl, navParams, auth, loading, translate, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loading = loading;
        this.translate = translate;
        this.toast = toast;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        this.title = "PUBPARTY";
    };
    IntroPage.prototype.slideChanged = function () {
        if (this.slides.getActiveIndex() == 1) {
            this.title = this.translate.get('DISCOVER');
        }
        else if (this.slides.getActiveIndex() == 2) {
            this.title = this.translate.get('JOIN_NOW');
        }
        else {
            this.title = "PUBPARTY";
        }
    };
    IntroPage.prototype.loginFacebook = function () {
        var _this = this;
        this.loading.show();
        this.auth.loginWithFacebook().then(function (res) {
            _this.loading.hide();
            _this.navCtrl.setRoot('LoaderPage');
        }).catch(function (err) {
            if (err)
                _this.toast.showWithDuration(_this.translate.get('LOGIN_FACEBOOK_ERROR'), __WEBPACK_IMPORTED_MODULE_3__configs_toast_config__["a" /* ToastConfig */].duration);
            _this.loading.hide();
        });
    };
    IntroPage.prototype.loginGoogle = function () {
        var _this = this;
        this.loading.show();
        this.auth.loginWithGoogle().then(function (res) {
            _this.loading.hide();
            _this.navCtrl.setRoot('LoaderPage');
        }).catch(function (err) {
            if (err)
                _this.toast.showWithDuration(_this.translate.get('LOGIN_GOOGLE_ERROR'), __WEBPACK_IMPORTED_MODULE_3__configs_toast_config__["a" /* ToastConfig */].duration);
            _this.loading.hide();
        });
    };
    return IntroPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
], IntroPage.prototype, "slides", void 0);
IntroPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-intro',template:/*ion-inline-start:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\intro\intro.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="no-scroll">\n\n  <div class="welcome">\n\n    <p no-margin no-padding *ngIf="slides.isBeginning()">{{ \'WELCOME_TO\' | translate }}</p>\n\n    <p no-margin no-padding *ngIf="!slides.isBeginning()">&nbsp;</p>\n\n    <h1 no-margin no-padding><b>{{title}}</b></h1>\n\n    <img src="assets/images/logo.png" no-margin no-padding/>\n\n  </div>\n\n  <ion-slides no-padding pager (ionSlideDidChange)="slideChanged()">\n\n    <ion-slide>\n\n      <p><b>PubParty</b> {{ \'INTRO_1A\' | translate }}<br><br>{{ \'INTRO_1B\' | translate }}</p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <p>{{ \'INTRO_2A\' | translate }}<br><br>{{ \'INTRO_2B\' | translate }}</p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <p>{{ \'INTRO_3\' | translate }}</p>\n\n      <div padding-left padding-right>\n\n        <button ion-button block margin-bottom color="facebook" (click)="loginFacebook()">{{ \'CONTINUE_WITH_FACEBOOK\' | translate }}</button>\n\n        <button ion-button block color="google" (click)="loginGoogle()">{{ \'CONTINUE_WITH_GOOGLE\' | translate }}</button>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\intro\intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["j" /* TranslateProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* ToastProvider */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=19.main.js.map