webpackJsonp([13],{

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfilePageModule", function() { return UpdateProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_profile__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UpdateProfilePageModule = (function () {
    function UpdateProfilePageModule() {
    }
    return UpdateProfilePageModule;
}());
UpdateProfilePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__update_profile__["a" /* UpdateProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__update_profile__["a" /* UpdateProfilePage */]),
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__update_profile__["a" /* UpdateProfilePage */]
        ]
    })
], UpdateProfilePageModule);

//# sourceMappingURL=update-profile.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(132);
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







var UpdateProfilePage = (function () {
    function UpdateProfilePage(navCtrl, navParams, formBuilder, auth, database, loading, storage, keyboard, camera, actionSheetCtrl, toast, translate, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.database = database;
        this.loading = loading;
        this.storage = storage;
        this.keyboard = keyboard;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toast = toast;
        this.translate = translate;
        this.viewCtrl = viewCtrl;
        this.requiredValidator = __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required
        ]);
        this.emailValidator = __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].email
        ]);
        this.numberValidator = __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[ ]*([0-9][ ]*){10}$')
        ]);
        this.profileForm = this.formBuilder.group({
            userName: [''],
            firstName: ['', this.requiredValidator],
            lastName: ['', this.requiredValidator],
            email: ['', this.emailValidator],
            number: ['', this.numberValidator],
            about: ['', this.requiredValidator]
        });
        this.profileForm.get('userName').disable();
    }
    UpdateProfilePage.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.keyboard.close();
            if (this.profileForm.valid)
                this.updateProfile();
        }
    };
    UpdateProfilePage.prototype.ionViewWillLeave = function () {
        var _this = this;
        this.database.exists('users/' + this.user.userId).then(function (exists) {
            if (!exists) {
                _this.storage.deleteProfilePic(_this.user.userId, _this.user.profilePic).then(function () {
                });
            }
        });
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    UpdateProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.auth.getUser().then(function (user) {
            _this.subscription = _this.database.getUserById(user.uid).subscribe(function (user) {
                _this.user = user;
                _this.profileForm.setValue({
                    userName: _this.user.userName,
                    firstName: _this.user.firstName,
                    lastName: _this.user.lastName,
                    email: _this.user.email,
                    number: _this.user.number,
                    about: _this.user.about
                });
            });
        });
    };
    UpdateProfilePage.prototype.updateProfile = function () {
        var _this = this;
        this.loading.show();
        this.user.firstName = this.profileForm.value['firstName'];
        this.user.lastName = this.profileForm.value['lastName'];
        this.user.number = this.profileForm.value['number'];
        this.user.about = this.profileForm.value['about'];
        this.database.setUser(this.user).then(function () {
            _this.toast.showWithDuration(_this.translate.get('PROFILE_UPDATED_MESSAGE'), __WEBPACK_IMPORTED_MODULE_6__configs_toast_config__["a" /* ToastConfig */].duration);
            _this.loading.hide();
            _this.viewCtrl.dismiss();
        });
    };
    UpdateProfilePage.prototype.setProfilePic = function () {
        var _this = this;
        this.actionSheetCtrl.create({
            title: 'Set Profile Picture',
            buttons: [
                {
                    text: 'Take a Photo',
                    role: 'destructive',
                    handler: function () {
                        _this.storage.uploadProfilePic(_this.user.userId, _this.camera.PictureSourceType.CAMERA).then(function (profilePic) {
                            _this.storage.deleteProfilePic(_this.user.userId, _this.user.profilePic).then(function () {
                                _this.user.profilePic = profilePic;
                            });
                        });
                    }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        _this.storage.uploadProfilePic(_this.user.userId, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (profilePic) {
                            _this.storage.deleteProfilePic(_this.user.userId, _this.user.profilePic).then(function () {
                                _this.user.profilePic = profilePic;
                            });
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
    return UpdateProfilePage;
}());
UpdateProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-update-profile',template:/*ion-inline-start:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\update-profile\update-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="profileForm" (keydown)="keyDownFunction($event)" *ngIf="user">\n\n    <img-loader src="{{user.profilePic}}" tappable (click)="setProfilePic()"></img-loader>\n\n    <ion-list no-margin no-padding margin-top>\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="userName" placeholder="{{ \'CREATE_USERNAME\' | translate }}"></ion-input>\n\n      </ion-item>\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="firstName" placeholder="{{ \'YOUR_FIRST_NAME\' | translate }}"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="profileForm.controls.firstName.hasError(\'required\') && profileForm.controls.firstName.touched">{{ \'PLEASE_ENTER_FIRST_NAME\' | translate }}</p>\n\n      <p *ngIf="!profileForm.controls.firstName.valid && !profileForm.controls.firstName.hasError(\'required\') && profileForm.controls.firstName.touched">{{ \'PLEASE_ENTER_FIRST_NAME\' | translate }}</p>\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="lastName" placeholder="{{ \'YOUR_LAST_NAME\' | translate }}"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="profileForm.controls.lastName.hasError(\'required\') && profileForm.controls.lastName.touched">{{ \'PLEASE_ENTER_LAST_NAME\' | translate }}</p>\n\n      <p *ngIf="!profileForm.controls.lastName.valid && !profileForm.controls.lastName.hasError(\'required\') && profileForm.controls.lastName.touched">{{ \'PLEASE_ENTER_LAST_NAME\' | translate }}</p>\n\n      <ion-item no-lines>\n\n        <ion-input type="email" formControlName="email" placeholder="{{ \'YOUR_EMAIL\' | translate }}"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="profileForm.controls.email.hasError(\'required\') && profileForm.controls.email.touched">{{ \'PLEASE_ENTER_EMAIL\' | translate }}</p>\n\n      <p *ngIf="!profileForm.controls.email.valid && !profileForm.controls.email.hasError(\'required\') && profileForm.controls.email.touched">{{ \'PLEASE_ENTER_VALID_EMAIL\' | translate }}</p>\n\n      <ion-item no-lines>\n\n        <ion-input type="number" formControlName="number" placeholder="{{ \'YOUR_CONTACT_NUMBER\' | translate }}"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="(profileForm.controls.number.hasError(\'required\') || profileForm.controls.number.hasError(\'pattern\')) && profileForm.controls.number.touched">{{ \'PLEASE_ENTER_VALID_NUMBER\' | translate }}<br>{{ \'FORMAT\' | translate }} XXXXXXXXXX</p>\n\n      <ion-item no-lines>\n\n        <ion-textarea placeholder="{{ \'TELL_US_ABOUT_YOURSELF\' | translate }}" rows="4" formControlName="about"></ion-textarea>\n\n      </ion-item>\n\n      <p *ngIf="profileForm.controls.about.hasError(\'required\') && profileForm.controls.about.touched">{{ \'PLEASE_TELL_US_ABOUT_YOURSELF\' | translate }}</p>\n\n      <button ion-button color="primary" (click)="updateProfile()" no-margin no-padding margin-top [disabled]="!profileForm.valid">{{ \'UPDATE_PROFILE\' | translate }}</button>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\update-profile\update-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["h" /* DatabaseProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["f" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["i" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* ToastProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["j" /* TranslateProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
], UpdateProfilePage);

//# sourceMappingURL=update-profile.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map