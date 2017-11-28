webpackJsonp([11],{

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMapPageModule", function() { return ViewMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_map__ = __webpack_require__(537);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewMapPageModule = (function () {
    function ViewMapPageModule() {
    }
    return ViewMapPageModule;
}());
ViewMapPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__view_map__["a" /* ViewMapPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_map__["a" /* ViewMapPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__view_map__["a" /* ViewMapPage */]
        ]
    })
], ViewMapPageModule);

//# sourceMappingURL=view-map.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewMapPage = (function () {
    function ViewMapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zoom = 14;
    }
    ViewMapPage.prototype.ionViewDidLoad = function () {
        var infowindow = new google.maps.InfoWindow();
        this.location = this.navParams.get('location');
        var latLng = new google.maps.LatLng(this.location.lat, this.location.lng);
        var mapOptions = {
            center: latLng,
            zoom: this.zoom
        };
        var marker = new google.maps.Marker({
            position: latLng,
            title: this.location.title
        });
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        marker.setMap(this.map);
        var title = this.location.title;
        var self = this;
        marker.addListener('click', function () {
            infowindow.setContent('<div><strong>' + title + '</strong>');
            infowindow.open(this.map, this);
        });
    };
    return ViewMapPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
], ViewMapPage.prototype, "mapElement", void 0);
ViewMapPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-view-map',template:/*ion-inline-start:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\view-map\view-map.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true" color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="navCtrl.pop()">\n\n        Back\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title *ngIf="location">{{ location.title }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div #map id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Adiontae.Gerron\Ionic\pubparty\src\pages\view-map\view-map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ViewMapPage);

//# sourceMappingURL=view-map.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map