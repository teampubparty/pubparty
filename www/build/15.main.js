webpackJsonp([15],{

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs__ = __webpack_require__(533);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    return TabsPageModule;
}());
TabsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]),
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]
        ]
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
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



var TabsPage = (function () {
    function TabsPage(app, usersApi, auth, notification) {
        this.app = app;
        this.usersApi = usersApi;
        this.auth = auth;
        this.notification = notification;
        this.tab1Root = 'HomePage';
        this.tab2Root = 'MyEventsPage';
        this.tab3Root = 'ProfilePage';
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.auth.getUser().then(function (user) {
            if (!_this.usersApi.subscriptions.get(user.uid)) {
                _this.app.getRootNav().setRoot('LoaderPage');
            }
        });
        this.notificationSubscription = this.notification.subscription.subscribe(function (res) {
            var data = JSON.parse(JSON.stringify(res));
            if (data.eventId) {
                _this.app.getRootNav().popToRoot().then(function () {
                    _this.tabs.select(1);
                    _this.app.getRootNav().push('EventPage', { eventId: data.eventId });
                });
            }
        });
    };
    TabsPage.prototype.ionViewWillLeave = function () {
        if (this.notificationSubscription)
            this.notificationSubscription.unsubscribe();
    };
    return TabsPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("tabs"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Tabs */])
], TabsPage.prototype, "tabs", void 0);
TabsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\tabs\tabs.html"*/'<ion-tabs #tabs color="primary">\n\n  <ion-tab [root]="tab1Root" tabIcon="md-apps"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabIcon="md-beer" tabBadgeStyle="danger" tabBadge="{{notification.getUnread()}}"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabIcon="md-contact"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers__["k" /* UsersApi */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* NotificationProvider */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=15.main.js.map