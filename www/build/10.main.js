webpackJsonp([10],{

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRequestsPageModule", function() { return ViewRequestsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_requests__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_image_loader__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViewRequestsPageModule = (function () {
    function ViewRequestsPageModule() {
    }
    return ViewRequestsPageModule;
}());
ViewRequestsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__view_requests__["a" /* ViewRequestsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_requests__["a" /* ViewRequestsPage */]),
            __WEBPACK_IMPORTED_MODULE_3_ionic_image_loader__["a" /* IonicImageLoader */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__view_requests__["a" /* ViewRequestsPage */]
        ]
    })
], ViewRequestsPageModule);

//# sourceMappingURL=view-requests.module.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRequestsPage; });
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



var ViewRequestsPage = (function () {
    function ViewRequestsPage(navCtrl, navParams, eventsApi, usersApi, modalCtrl, alert, database, toast, notification) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventsApi = eventsApi;
        this.usersApi = usersApi;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.database = database;
        this.toast = toast;
        this.notification = notification;
    }
    ViewRequestsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.eventId = this.navParams.get('eventId');
        this.eventSubscription = this.eventsApi.subscriptions.get(this.eventId).subscribe(function (event) {
            var self = _this;
            setTimeout(function () {
                self.event = _this.eventsApi.getEvent(_this.eventId);
            }, 0);
        });
        this.event = this.eventsApi.getEvent(this.eventId);
    };
    ViewRequestsPage.prototype.invite = function () {
        this.navCtrl.push('InvitePeoplePage', { eventId: this.eventId });
    };
    ViewRequestsPage.prototype.back = function () {
        if (this.eventSubscription)
            this.eventSubscription.unsubscribe();
        this.navCtrl.pop();
    };
    ViewRequestsPage.prototype.viewProfile = function (userId) {
        var _this = this;
        if (userId != this.usersApi.getCurrentUser().userId) {
            var modal = this.modalCtrl.create('ViewProfilePage', { userId: userId });
            modal.present();
            modal.onDidDismiss(function (eventId) {
                if (eventId) {
                    _this.navCtrl.push('EventPage', { eventId: eventId });
                }
            });
        }
    };
    ViewRequestsPage.prototype.acceptRequest = function (userId) {
        var _this = this;
        this.alert.showConfirm('Accept User', 'Are you sure you want to accept this user to the event?', 'Cancel', 'Accept').then(function (confirm) {
            if (confirm) {
                _this.database.acceptRequest(_this.eventId, userId).then(function () {
                    _this.toast.showWithDuration('User has been accepted to the event.', 3000);
                    _this.notification.sendPushNotification(_this.usersApi.getUser(userId), _this.usersApi.getUser(_this.event.hostId).firstName + ' ' + _this.usersApi.getUser(_this.event.hostId).lastName, 'has accepted your request to join ' + _this.event.title, { eventId: _this.eventId });
                });
            }
        });
    };
    ViewRequestsPage.prototype.rejectRequest = function (userId) {
        var _this = this;
        this.alert.showConfirm('Reject User', 'Are you sure you want to reject this user from the event?', 'Cancel', 'Reject').then(function (confirm) {
            if (confirm) {
                _this.database.cancelJoinRequest(_this.eventId, userId).then(function () {
                    _this.toast.showWithDuration('User has been rejected to join the event.', 3000);
                    _this.notification.sendPushNotification(_this.usersApi.getUser(userId), _this.usersApi.getUser(_this.event.hostId).firstName + ' ' + _this.usersApi.getUser(_this.event.hostId).lastName, 'has rejected your request to join ' + _this.event.title, { eventId: _this.eventId });
                });
            }
        });
    };
    ViewRequestsPage.prototype.cancelRequest = function (userId) {
        var _this = this;
        this.alert.showConfirm('Cancel Invitation', 'Are you sure you want to cancel your invitation for this user to the event?', 'Cancel', 'Yes').then(function (confirm) {
            if (confirm) {
                _this.database.cancelInvite(_this.eventId, userId).then(function () {
                    _this.toast.showWithDuration('User\'s invitation to this event has been cancelled.', 3000);
                });
            }
        });
    };
    return ViewRequestsPage;
}());
ViewRequestsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-view-requests',template:/*ion-inline-start:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\view-requests\view-requests.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true" color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title>Party Requests</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="invite()"><ion-icon name="md-add"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="event && !event.userRequests && !event.userInvites" text-center margin-top padding-top padding-bottom class="empty">\n\n    <ion-icon name="md-sad" no-margin no-padding></ion-icon>\n\n    <h5 no-margin no-padding><b>No Party Requests</b></h5>\n\n    <p no-margin no-padding>There are no pending party requests.</p>\n\n    <button ion-button color="dark" margin-top margin-bottom round (click)="invite()">Invite People</button>\n\n  </div>\n\n  <ion-list *ngIf="event && event.userRequests && event.userRequests.length > 0">\n\n    <ion-list-header>\n\n      <b>REQUESTS</b>\n\n    </ion-list-header>\n\n    <ion-item tappable (click)="viewProfile(userId)" *ngFor="let userId of event.userRequests">\n\n      <ion-avatar item-start>\n\n        <div class="avatar">\n\n          <img-loader src="{{usersApi.getUser(userId).profilePic}}"></img-loader>\n\n        </div>\n\n      </ion-avatar>\n\n      <h2><b>{{usersApi.getUser(userId).firstName}} {{usersApi.getUser(userId).lastName}}</b></h2>\n\n      <h3>requests to join this party</h3>\n\n      <ion-icon name="checkmark-circle" item-end color="primary" tappable (click)="acceptRequest(userId); $event.stopPropagation();" margin-right></ion-icon>\n\n      <ion-icon name="close-circle" item-end color="danger" tappable (click)="rejectRequest(userId); $event.stopPropagation();"></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n  <!-- Sent -->\n\n  <ion-list *ngIf="event && event.userInvites && event.userInvites.length > 0">\n\n    <ion-list-header>\n\n      <b>SENT</b>\n\n    </ion-list-header>\n\n    <ion-item tappable (click)="viewProfile(userId)" *ngFor="let userId of event.userInvites">\n\n      <ion-avatar item-start>\n\n        <div class="avatar">\n\n          <img-loader src="{{usersApi.getUser(userId).profilePic}}"></img-loader>\n\n        </div>\n\n      </ion-avatar>\n\n      <h2><b>{{usersApi.getUser(userId).firstName}} {{usersApi.getUser(userId).lastName}}</b></h2>\n\n      <h3>party request sent</h3>\n\n      <ion-icon name="remove-circle" item-end color="danger" tappable (click)="cancelRequest(userId); $event.stopPropagation();"></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\view-requests\view-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["l" /* EventsApi */], __WEBPACK_IMPORTED_MODULE_2__providers__["k" /* UsersApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers__["g" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_2__providers__["h" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* NotificationProvider */]])
], ViewRequestsPage);

//# sourceMappingURL=view-requests.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map