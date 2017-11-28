webpackJsonp([7],{

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMapPageModule", function() { return SetMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_map__ = __webpack_require__(532);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetMapPageModule = (function () {
    function SetMapPageModule() {
    }
    return SetMapPageModule;
}());
SetMapPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__set_map__["a" /* SetMapPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__set_map__["a" /* SetMapPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__set_map__["a" /* SetMapPage */]
        ]
    })
], SetMapPageModule);

//# sourceMappingURL=set-map.module.js.map

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

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(503);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetMapPage = (function () {
    function SetMapPage(navCtrl, navParams, geolocation, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.viewCtrl = viewCtrl;
        this.zoom = 14;
        this.geolocationOptions = { timeout: 10000, enableHighAccuracy: true };
        this.autoCompleteService = new google.maps.places.AutocompleteService();
        this.placesService = new google.maps.places.PlacesService(document.createElement('div'));
        this.geocoderService = new google.maps.Geocoder();
    }
    SetMapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geolocation.getCurrentPosition(this.geolocationOptions).then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: _this.zoom
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }).catch(function (error) {
            console.log("Error: " + error.code);
            console.log("Error: " + error.message);
        });
    };
    SetMapPage.prototype.done = function () {
        this.viewCtrl.dismiss(this.location);
    };
    SetMapPage.prototype.queryChanged = function (event) {
        this.updateSearch();
    };
    SetMapPage.prototype.updateSearch = function () {
        var _this = this;
        this.getQueryPredictions(this.searchPlace).then(function (result) {
            _this.searchResults = result;
        }).catch(function (error) {
            _this.searchResults = [];
        });
    };
    SetMapPage.prototype.setQuery = function (result) {
        var _this = this;
        this.searchPlace = '';
        this.searchResults = [];
        var infowindow = new google.maps.InfoWindow();
        var place = result.description;
        var placeId = result.place_id;
        this.getLocation(placeId).then(function (location) {
            _this.location = new __WEBPACK_IMPORTED_MODULE_3__models__["a" /* Location */](place, location.lat(), location.lng());
            var latLng = new google.maps.LatLng(location.lat(), location.lng());
            var marker = new google.maps.Marker({
                position: latLng,
                title: "'" + place + "'"
            });
            var mapOptions = {
                center: latLng,
                zoom: _this.zoom
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            marker.setMap(_this.map);
            marker.addListener('click', function () {
                infowindow.setContent('<div><strong>' + place + '</strong>');
                infowindow.open(this.map, this);
            });
        });
    };
    SetMapPage.prototype.getLocation = function (placeId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.geocoderService.geocode({ 'placeId': placeId }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var result = results[0];
                    console.log(JSON.stringify(result));
                    resolve(result.geometry.location);
                }
                else {
                    console.log("ERROR GEOCODER");
                    reject(status);
                }
            });
        });
    };
    SetMapPage.prototype.getQueryPredictions = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var self = _this;
            var request = {
                location: new google.maps.LatLng(56.105364, 10.118408),
                radius: 50000,
                input: query
            };
            _this.autoCompleteService.getQueryPredictions(request, function (results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    self.searchResults = [];
                    results.forEach(function (result) {
                        self.searchResults.push(result);
                    });
                    resolve(self.searchResults);
                }
                else if (status == google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                    reject(status);
                }
                else {
                    reject(status);
                }
            });
        });
    };
    return SetMapPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
], SetMapPage.prototype, "mapElement", void 0);
SetMapPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-set-map',template:/*ion-inline-start:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\set-map\set-map.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true" color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="navCtrl.pop()">\n\n        Back\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Set Location</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="done()" [disabled]="!location">\n\n        Done\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="search">\n\n    <ion-searchbar placeholder="Search for place" [(ngModel)]="searchPlace" (ngModelChange)="queryChanged($event)"></ion-searchbar>\n\n    <div class="results" *ngIf="searchResults && searchResults.length > 0 && query != \'\'">\n\n      <p *ngFor="let result of searchResults" no-margin no-padding text-left tappable (click)="setQuery(result)"><b>{{result.structured_formatting.main_text}}</b> {{result.structured_formatting.secondary_text}}</p>\n\n    </div>\n\n  </div>\n\n  <div #map id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\set-map\set-map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
], SetMapPage);

//# sourceMappingURL=set-map.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map