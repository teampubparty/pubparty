webpackJsonp([8],{

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteProfileModule", function() { return CompleteProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complete_profile__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CompleteProfileModule = (function () {
    function CompleteProfileModule() {
    }
    return CompleteProfileModule;
}());
CompleteProfileModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__complete_profile__["a" /* CompleteProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__complete_profile__["a" /* CompleteProfilePage */]),
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__complete_profile__["a" /* CompleteProfilePage */]
        ]
    })
], CompleteProfileModule);

//# sourceMappingURL=complete-profile.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(507);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(505);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__(506);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__location__["a"]; });
//Add your models here for easy indexing.



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = (function () {
    function Event(eventId, hostId, title, images, description, rules, date, location, direction, notes, participants, userRequests, //userIds of user who requested to join
        userInvites //userIds of users who are invited
    ) {
        this.eventId = eventId;
        this.hostId = hostId;
        this.title = title;
        this.images = images;
        this.description = description;
        this.rules = rules;
        this.date = date;
        this.location = location;
        this.direction = direction;
        this.notes = notes;
        this.participants = participants;
        this.userRequests = userRequests;
        this.userInvites = userInvites; //userIds of users who are invited
    }
    return Event;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = (function () {
    function Location(title, lat, lng) {
        this.title = title;
        this.lat = lat;
        this.lng = lng;
    }
    return Location;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userId, userName, firstName, lastName, profilePic, email, number, about, favorites, pushToken, eventInvites, eventRequests) {
        this.userId = userId;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePic = profilePic;
        this.email = email;
        this.number = number;
        this.about = about;
        this.favorites = favorites;
        this.pushToken = pushToken;
        this.eventInvites = eventInvites;
        this.eventRequests = eventRequests;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompleteProfilePage = (function () {
    function CompleteProfilePage(navCtrl, navParams, formBuilder, auth, database, loading, storage, keyboard, camera, actionSheetCtrl) {
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
        this.userNameValidator = __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[0-z.]{4,20}$'),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required
        ]);
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
            userName: ['', this.userNameValidator],
            firstName: ['', this.requiredValidator],
            lastName: ['', this.requiredValidator],
            email: ['', this.emailValidator],
            number: ['', this.numberValidator],
            about: ['', this.requiredValidator]
        });
    }
    CompleteProfilePage.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.keyboard.close();
            if (this.profileForm.valid)
                this.completeProfile();
        }
    };
    CompleteProfilePage.prototype.onInputUsername = function (userName) {
        var _this = this;
        if (this.profileForm.controls.userName.valid && !this.profileForm.controls.userName.hasError('required')) {
            this.database.getUserByUserName(userName.toLowerCase()).take(1).subscribe(function (users) {
                _this.uniqueUserName = true;
                if (users && users.length > 0) {
                    _this.uniqueUserName = false;
                }
            });
        }
    };
    CompleteProfilePage.prototype.ionViewWillLeave = function () {
        var _this = this;
        this.database.exists('users/' + this.user.userId).then(function (exists) {
            if (!exists) {
                _this.storage.deleteProfilePic(_this.user.userId, _this.user.profilePic).then(function () {
                });
            }
        });
    };
    CompleteProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.auth.getUser().then(function (user) {
            var userId, firstName, lastName, profilePic, email;
            userId = user.uid;
            var providerData = user.providerData[0];
            if (providerData) {
                if (providerData.displayName) {
                    if (providerData.displayName.indexOf(' ') > -1) {
                        firstName = providerData.displayName.substr(0, providerData.displayName.indexOf(' '));
                        lastName = providerData.displayName.substr(providerData.displayName.indexOf(' ') + 1, providerData.displayName.length);
                    }
                }
                else {
                    firstName = providerData.displayName;
                    lastName = '';
                }
                email = providerData.email;
                if (providerData.photoURL) {
                    profilePic = providerData.photoURL;
                }
                else {
                    profilePic = 'assets/images/profile.png';
                }
            }
            else {
                if (user.displayName) {
                    if (user.displayName.indexOf(' ') > -1) {
                        firstName = user.displayName.substr(0, user.displayName.indexOf(' '));
                        lastName = user.displayName.substr(user.displayName.indexOf(' ') + 1, user.displayName.length);
                    }
                }
                else {
                    firstName = user.displayName;
                    lastName = '';
                }
                email = user.email;
                if (user.photoURL) {
                    profilePic = user.photoURL;
                }
                else {
                    profilePic = 'assets/images/profile.png';
                }
            }
            //Create user object based on User model.
            _this.user = new __WEBPACK_IMPORTED_MODULE_3__models__["c" /* User */](userId, '', firstName, lastName, profilePic, email, '', '', null, '', null, null);
            _this.profileForm.setValue({
                userName: '',
                firstName: firstName,
                lastName: lastName,
                email: email,
                number: '',
                about: ''
            });
        });
    };
    CompleteProfilePage.prototype.completeProfile = function () {
        var _this = this;
        this.loading.show();
        this.user.userName = this.profileForm.value['userName'].toLowerCase();
        this.user.firstName = this.profileForm.value['firstName'];
        this.user.lastName = this.profileForm.value['lastName'];
        this.user.number = this.profileForm.value['number'];
        this.user.about = this.profileForm.value['about'];
        this.database.setUser(this.user).then(function () {
            _this.loading.hide();
            _this.navCtrl.setRoot('LoaderPage');
        });
    };
    CompleteProfilePage.prototype.setProfilePic = function () {
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
    return CompleteProfilePage;
}());
CompleteProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-complete-profile',template:/*ion-inline-start:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\complete-profile\complete-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="profileForm" (keydown)="keyDownFunction($event)">\n\n    <img-loader src="{{user.profilePic}}" *ngIf="user" tappable (click)="setProfilePic()"></img-loader>\n\n    <ion-list no-margin no-padding margin-top>\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="userName" placeholder="{{ \'CREATE_USERNAME\' | translate }}" (input)=\'onInputUsername($event.target.value)\'></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="profileForm.controls.userName.hasError(\'required\') && profileForm.controls.userName.touched">{{ \'PLEASE_ENTER_USERNAME\' | translate }}</p>\n\n      <p *ngIf="!profileForm.controls.userName.valid && !profileForm.controls.userName.hasError(\'required\') && profileForm.controls.userName.touched">{{ \'USERNAME_INVALID\' | translate }}</p>\n\n      <p *ngIf="profileForm.controls.userName.valid && !uniqueUserName">{{ \'USERNAME_TAKEN\' | translate }}</p>\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="firstName" placeholder="{{ \'YOUR_FIRST_NAME\' | translate }}"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="profileForm.controls.firstName.hasError(\'required\') && profileForm.controls.firstName.touched">{{ \'PLEASE_ENTER_FIRST_NAME\' | translate }}</p>\n\n      <p *ngIf="!profileForm.controls.firstName.valid && !profileForm.controls.firstName.hasError(\'required\') && profileForm.controls.firstName.touched">{{ \'PLEASE_ENTER_FIRST_NAME\' | translate }}</p>\n\n      <ion-item no-lines>\n\n        <ion-input type="text" formControlName="lastName" placeholder="{{ \'YOUR_LAST_NAME\' | translate }}"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="profileForm.controls.lastName.hasError(\'required\') && profileForm.controls.lastName.touched">{{ \'PLEASE_ENTER_LAST_NAME\' | translate }}</p>\n\n      <p *ngIf="!profileForm.controls.lastName.valid && !profileForm.controls.lastName.hasError(\'required\') && profileForm.controls.lastName.touched">{{ \'PLEASE_ENTER_LAST_NAME\' | translate }}</p>\n\n      <ion-item no-lines>\n\n        <ion-input type="email" formControlName="email" placeholder="{{ \'YOUR_EMAIL\' | translate }}"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="profileForm.controls.email.hasError(\'required\') && profileForm.controls.email.touched">{{ \'PLEASE_ENTER_EMAIL\' | translate }}</p>\n\n      <p *ngIf="!profileForm.controls.email.valid && !profileForm.controls.email.hasError(\'required\') && profileForm.controls.email.touched">{{ \'PLEASE_ENTER_VALID_EMAIL\' | translate }}</p>\n\n      <ion-item no-lines>\n\n        <ion-input type="number" formControlName="number" placeholder="{{ \'YOUR_CONTACT_NUMBER\' | translate }}"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="(profileForm.controls.number.hasError(\'required\') || profileForm.controls.number.hasError(\'pattern\')) && profileForm.controls.number.touched">{{ \'PLEASE_ENTER_VALID_NUMBER\' | translate }}<br>{{ \'FORMAT\' | translate }} XXXXXXXXXX</p>\n\n      <ion-item no-lines>\n\n        <ion-textarea placeholder="{{ \'TELL_US_ABOUT_YOURSELF\' | translate }}" rows="4" formControlName="about"></ion-textarea>\n\n      </ion-item>\n\n      <p *ngIf="profileForm.controls.about.hasError(\'required\') && profileForm.controls.about.touched">{{ \'PLEASE_TELL_US_ABOUT_YOURSELF\' | translate }}</p>\n\n      <p text-left no-margin no-padding>{{ \'TELL_US_MEET_PEOPLE\' | translate }}</p>\n\n      <button ion-button color="primary" (click)="completeProfile()" no-margin no-padding margin-top [disabled]="!profileForm.valid || !uniqueUserName">{{ \'COMPLETE_PROFILE\' | translate }}</button>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\complete-profile\complete-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers__["h" /* DatabaseProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers__["f" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers__["i" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ActionSheetController */]])
], CompleteProfilePage);

//# sourceMappingURL=complete-profile.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map