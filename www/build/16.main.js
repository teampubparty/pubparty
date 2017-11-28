webpackJsonp([16],{

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__profile__["a" /* ProfilePage */]),
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */]
        ],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, auth, loading, database, alert, translate, modalCtrl, eventsApi, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loading = loading;
        this.database = database;
        this.alert = alert;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.eventsApi = eventsApi;
        this.app = app;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.auth.getUser().then(function (user) {
            var userId = user.uid;
            _this.subscription = _this.database.getUserById(userId).subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    ProfilePage.prototype.ionViewWillLeave = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ProfilePage.prototype.showUpdateProfile = function () {
        var modal = this.modalCtrl.create('UpdateProfilePage');
        modal.present();
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.alert.showConfirm(this.translate.get('CONFIRM_LOGOUT'), this.translate.get('CONFIRM_LOGOUT_MESSAGE'), this.translate.get('CANCEL'), this.translate.get('LOGOUT')).then(function (confirm) {
            if (confirm) {
                _this.loading.show();
                _this.eventsApi.destroy().then(function () {
                    _this.auth.logout().then(function () {
                        _this.loading.hide();
                        _this.app.getRootNav().setRoot('LoginPage');
                    });
                });
            }
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\profile\profile.html"*/'<ion-content>\n\n  <!-- Avatar -->\n\n  <div class="profile" *ngIf="user" text-center>\n\n    <img-loader src="{{user.profilePic}}"></img-loader>\n\n    <h5 no-margin no-padding margin-top><b>{{user.firstName}} {{user.lastName}}</b></h5>\n\n    <h6 no-margin no-padding margin-bottom>@{{user.userName}}</h6>\n\n  </div>\n\n  <!-- Menu -->\n\n  <ion-list *ngIf="user">\n\n    <ion-list-header>\n\n      <b>{{ \'PROFILE\' | translate }}</b>\n\n    </ion-list-header>\n\n    <button ion-item (click)="showUpdateProfile()">\n\n      {{ \'UPDATE_PROFILE\' | translate }}\n\n    </button>\n\n    <button ion-item (click)="logout()">\n\n      {{ \'SIGNOUT\' | translate }}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["h" /* DatabaseProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["g" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["j" /* TranslateProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["l" /* EventsApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* App */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=16.main.js.map