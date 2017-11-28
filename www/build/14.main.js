webpackJsonp([14],{

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEventPageModule", function() { return UpdateEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_event__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_image_loader__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UpdateEventPageModule = (function () {
    function UpdateEventPageModule() {
    }
    return UpdateEventPageModule;
}());
UpdateEventPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__update_event__["a" /* UpdateEventPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_event__["a" /* UpdateEventPage */]),
            __WEBPACK_IMPORTED_MODULE_3_ionic_image_loader__["a" /* IonicImageLoader */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__update_event__["a" /* UpdateEventPage */]
        ]
    })
], UpdateEventPageModule);

//# sourceMappingURL=update-event.module.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configs_toast_config__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateEventPage = (function () {
    function UpdateEventPage(navCtrl, navParams, formBuilder, modalCtrl, actionSheetCtrl, storage, camera, auth, keyboard, database, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.camera = camera;
        this.auth = auth;
        this.keyboard = keyboard;
        this.database = database;
        this.toast = toast;
        this.requiredValidator = __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required
        ]);
        var localISOString = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString();
        this.eventForm = this.formBuilder.group({
            title: ['', this.requiredValidator],
            description: ['', this.requiredValidator],
            rules: ['', this.requiredValidator],
            date: [localISOString, this.requiredValidator],
            direction: ['', this.requiredValidator],
            notes: ['']
        });
    }
    UpdateEventPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.event = this.navParams.get('event');
        this.images = this.event.images;
        this.location = this.event.location;
        var localISOString = new Date(new Date(this.event.date).getTime() - (new Date(this.event.date).getTimezoneOffset() * 60000)).toISOString();
        this.auth.getUser().then(function (user) {
            _this.userId = user.uid;
            _this.eventForm = _this.formBuilder.group({
                title: [_this.event.title, _this.requiredValidator],
                description: [_this.event.description, _this.requiredValidator],
                rules: [_this.event.rules, _this.requiredValidator],
                date: [localISOString, _this.requiredValidator],
                direction: [_this.event.description, _this.requiredValidator],
                notes: [_this.event.notes]
            });
        });
    };
    UpdateEventPage.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.keyboard.close();
            if (this.eventForm.valid && this.images.length > 0 && this.location)
                this.done();
        }
    };
    UpdateEventPage.prototype.done = function () {
        var _this = this;
        var title = this.eventForm.value['title'];
        var description = this.eventForm.value['description'];
        var rules = this.eventForm.value['rules'];
        var date = this.eventForm.value['date'];
        var direction = this.eventForm.value['direction'];
        var notes = this.eventForm.value['notes'];
        var localISOString = new Date(new Date(date).getTime() + (new Date(date).getTimezoneOffset() * 60000)).toString();
        // let event = new Event('', this.userId, title, this.images, description, rules, date, this.location, direction, notes, [this.userId]);
        this.event.title = title;
        this.event.description = description;
        this.event.rules = rules;
        this.event.date = localISOString;
        this.event.direction = direction;
        this.event.notes = notes;
        this.event.images = this.images;
        this.event.location = this.location;
        this.database.setEvent(this.event).then(function () {
            _this.toast.showWithDuration('Event has been successfully updated.', __WEBPACK_IMPORTED_MODULE_6__configs_toast_config__["a" /* ToastConfig */].duration);
            _this.navCtrl.pop();
        });
    };
    UpdateEventPage.prototype.setLocation = function () {
        var _this = this;
        var modal = this.modalCtrl.create('SetMapPage');
        modal.present();
        modal.onDidDismiss(function (location) {
            _this.location = location;
        });
    };
    UpdateEventPage.prototype.getLocationImage = function () {
        return 'https://maps.googleapis.com/maps/api/staticmap?center=' + this.location.lat + ',' + this.location.lng + '&zoom=17&size=400x400&markers=' + this.location.lat + ',' + this.location.lng + '&key=AIzaSyBVqbZ2Mh5xyYyj_mXPWCd9v4xFgkhvlTw';
    };
    UpdateEventPage.prototype.addPhoto = function () {
        var _this = this;
        this.actionSheetCtrl.create({
            title: 'Add Photo',
            buttons: [
                {
                    text: 'Take a Photo',
                    role: 'destructive',
                    handler: function () {
                        _this.storage.uploadEventPic(_this.userId, _this.camera.PictureSourceType.CAMERA).then(function (eventPic) {
                            _this.images.push(eventPic);
                        });
                    }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        _this.storage.uploadEventPic(_this.userId, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (eventPic) {
                            _this.images.push(eventPic);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        }).present();
    };
    return UpdateEventPage;
}());
UpdateEventPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-update-event',template:/*ion-inline-start:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\update-event\update-event.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true" color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="navCtrl.pop()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title>Update Event</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="done()" [disabled]="!eventForm.valid || (!images || !images.length >= 1) || !location">Done</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-slides no-padding no-margin pager="true">\n\n    <ion-slide *ngFor="let image of images">\n\n      <div class="overlay-image">\n\n        <img-loader src="{{ image }}"></img-loader>\n\n      </div>\n\n    </ion-slide>\n\n    <ion-slide tappable (click)="addPhoto()">\n\n      <div class="overlay-image">\n\n        <img-loader src="assets/images/image.png"></img-loader>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <p *ngIf="images && images.length == 0">An event must have atleast 1 photo.</p>\n\n  <form [formGroup]="eventForm" (keydown)="keyDownFunction($event)" padding>\n\n    <ion-list no-margin no-padding>\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="title" placeholder="Name of event"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="eventForm.controls.title.hasError(\'required\') && eventForm.controls.title.touched">Please enter title of the event.</p>\n\n      <ion-item>\n\n        <ion-textarea placeholder="What you\'ll do..." rows="4" formControlName="description"></ion-textarea>\n\n      </ion-item>\n\n      <p *ngIf="eventForm.controls.description.hasError(\'required\') && eventForm.controls.description.touched">Please describe what you\'ll do.</p>\n\n      <ion-item>\n\n        <ion-textarea placeholder="Your party rules..." rows="4" formControlName="rules"></ion-textarea>\n\n      </ion-item>\n\n      <p *ngIf="eventForm.controls.rules.hasError(\'required\') && eventForm.controls.rules.touched">Please specify your party rules.</p>\n\n      <ion-item no-lines>\n\n        <ion-datetime displayFormat="MMMM DD, YYYY @ hh:mm A" formControlName="date" pickerFormat="MMM DD YY hh mm A" placeholder="Date of the event" no-padding></ion-datetime>\n\n      </ion-item>\n\n      <button class="location" ion-button full (click)="setLocation()">Set Location</button>\n\n      <p *ngIf="!location">An event must have a location.</p>\n\n      <img-loader *ngIf="location" class="map" src="{{ getLocationImage() }}"></img-loader>\n\n      <ion-item style="margin-top: 0.8rem;">\n\n        <ion-textarea placeholder="How to get there..." rows="4" formControlName="direction"></ion-textarea>\n\n      </ion-item>\n\n      <p *ngIf="eventForm.controls.direction.hasError(\'required\') && eventForm.controls.direction.touched">Please specify direction to the location.</p>\n\n      <ion-item>\n\n        <ion-textarea placeholder="Additional notes" rows="4" formControlName="notes"></ion-textarea>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\update-event\update-event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__providers__["i" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_3__providers__["h" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* ToastProvider */]])
], UpdateEventPage);

//# sourceMappingURL=update-event.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map