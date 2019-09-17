(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/history/history.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/history/history.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='col-md-12' style='height: 96.5%;'>\n    <h2 style='color: #4a4a4a;'>\n        <span>MY HISTORY</span>&nbsp;&nbsp;\n        <small><app-share></app-share></small>\n        <div class='btn btn-primary' style='float: right;font-weight: bold;' (click)='goback()'> 뒤로가기</div>\n    </h2>    \n\n    <div class='col-md-12' style='height: 93%;background-color: rgba(109, 202, 230, 0.45);border-radius: 5px;overflow-y: auto;'>\n        \n        <div class=\"timeline\">\n            <div *ngFor=\"let item of new_history;let i = index\">\n                <div  *ngIf=\"item.name\" class=\"container_cn\" [ngClass]=\"{'left': i%2 == 0, 'right': i%2 != 0 }\" >\n                    <div class=\"content_ss\">\n                        <table class='table table-responsive'>                      \n                            <tr>\n                                <td width='30%' style='padding: 2.5%;width: 30'>\n                                    <span *ngIf=\"item.name.includes('future') \">\n                                            <img src='assets/his/9999.png' class='img-thumbnail img-responsive' style='display: inline-block;border-radius: 2%;'> \n                                    </span>\n                                    <span *ngIf=\"!item.name.includes('future') \">\n                                            <img src='assets/his/{{i}}.png' class='img-thumbnail img-responsive' style='display: inline-block;border-radius: 2%;'> \n                                    </span>\n                                </td>\n                                <td>\n                                    <h4>\n                                        <span>{{item.name}}</span>\n                                        &nbsp;&nbsp;<small>{{item.day}}</small>\n                                    </h4>\n                                    <div>{{item.desc}}</div>\n                                    <div *ngIf=\"item.name.includes('future') \">{{item.desc2}}</div>\n                                    <div *ngIf=\"item.name.includes('future') \">{{item.desc3}}</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td colspan=\"2\">\n                                    <div *ngIf=\"!item.name.includes('future') \" style='text-align: left; color: #0000bf'>주요기술 : {{item.desc2}}</div>\n                                </td>\n                            </tr>\n                        </table>\n\n                        \n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/intro/intro.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/intro/intro.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.1.3/css/ol.css\" type=\"text/css\">\n\n<div style='height: 96.5%;width: 100%;padding: 1%;background-color: rgba(109, 202, 230, 0.45);'>\n    <div style='height: 100%;width: 100%;padding: 1%;background: white;border-radius: 1%;overflow-y: auto'>\n        <div class='col-md-3 heighter' style='height: 95%;border-right: 5px double rgba(109, 202, 230, 0.45);'>\n                <h2 style='color: #4a4a4a;font-weight: bold;'>\n                    <span>PROFILE</span>&nbsp;&nbsp;\n                    <small><app-share></app-share></small>\n                </h2>    \n                <table class='table table-responsive' id='table-row' >\n                    <tr>\n                        <td colspan=\"2\" style='vertical-align:middle;text-align: center'>\n                            <img id='doUWantKnowMe' src='{{info.cat}}' class='img-thumbnail img-responsive' style='display: inline-block;border-radius: 50%;'>\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let item of new_first;let i = index\" >\n                        <td style='min-width: 100px;'>\n                            <span class='{{item.icon}}'></span>&nbsp;\n                            {{item.desc}}\n                        </td>\n                        <td>\n                            <a *ngIf=\"item.desc =='Web' \" style='cursor: pointer;' href='{{item.name}}'>{{item.name}}</a>\n                            <span  *ngIf=\"item.desc !='Web' \">{{item.name}}</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <span class='glyphicon glyphicon-home'></span> Address</td>\n                        <td>\n                            <div id=\"map\" class=\"map\" #map style='max-height: 150px;padding:1%;'></div>    \n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div class='col-md-1' ></div>\n            <div class='col-md-4 heighter' >\n                <br><br><br> \n                <div style='width: 100%; height: 200px;position: relative;' >\n                    <h4 style='color: #4a4a4a;font-weight: bold;'>EDUCATION</h4> \n                    <table class='table table-responsive' id='table-row2'>\n                        <tr *ngFor=\"let item of new_second;let i = index\" >\n                            <td *ngIf=\" item.type =='A' \"  style='padding: 2%;'>\n                                <span style='margin-right: 9%;'> - {{item.desc}}</span>\n                                <span>{{item.name}} </span>\n                            </td>\n                        </tr>            \n                    </table>\n                </div>\n                <br><br><br><br><br>\n                <div style='width: 100%; height: 300px;position: relative;'>\n                    <h4 style='color: #4a4a4a;font-weight: bold;'>EXPERIENCE</h4>\n                    <table class='table table-responsive' id='table-row2' >\n                        <tr *ngFor=\"let item of new_second;let i = index\">\n                            <td *ngIf=\" item.type =='B' \" style='padding: 2%;'>\n                                <span style='margin-right: 9%;'> - {{item.desc}} <small *ngIf=\"item.devel\" style='color: rgb(59, 59, 235)'>({{item.devel}})</small></span>\n                                <span>{{item.name}} </span> \n                                <div style='padding-left: 3%;padding-top: 1%; color: gray;'><small>{{item.detail}}</small></div>\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div class='col-md-4 heighter'>\n                    <br><br><br>\n                    <div style='width: 100%; height: auto;'>\n                        <h4 style='color: #4a4a4a;font-weight: bold;'>SKILL</h4> \n                        <br>\n                        <div>\n                            <div *ngFor=\"let item of new_third;let i = index\" class='skillbox' tooltip=\"{{item.hover}}\" placement=\"bottom\" show-delay=\"1\" hide-delay='1' theme='light' offset='-15'>\n                                <div class=\"c100 p{{item.value}} {{item.cls}}\" style='display: inline-block;'>\n                                    <span>{{item.value}}%</span>\n                                    <div class=\"slice\">\n                                        <div class=\"bar\"></div>\n                                        <div class=\"fill\"></div>\n                                    </div>\n                                </div>\n                                <div >\n                                    <div style='color: #6767ff'>{{item.name}}</div>\n                                    <div>{{item.desc}}</div>                                    \n                                </div>\n                            </div>            \n                            <div class='skillbox' >\n                                <div class='circle'>\n                                    <div>&nbsp;</div>\n                                    <div>언제든</div>\n                                    <div>연락주세요!</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <br><br>\n                    <div style='width: 100%; height: 30px;position: relative;'>\n                        <h4 [ngStyle]=\"{'color': useColorCode}\" style='cursor: pointer' (click)='goHisPage()' tooltip=\"클릭시 히스토리 페이지로 이동합니다.\" placement=\"left\" show-delay=\"10\" hide-delay='1' >\n                            <span class='glyphicon glyphicon-share-alt'></span> &nbsp;\n                            <span>Ryu's Achievement Page. <strong>Click!!</strong></span>\n                        </h4>\n                    </div>                \n            </div>\n    </div>            \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/share/share.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/share/share.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span style='font-size: 13px;'>total access page : {{total}}</span>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style='height: 100%;width: 100%;background: rgba(109, 202, 230, 0.45);padding : 3%;' @fade> \n    <div style='padding : 2%;height: 97%;width: 100%;border-radius: 5px;background: white;'> \n        <div style='height: 5%;width: 100%;padding: 3%;'>\n           <div style='height: 42px;width: 200px;border-bottom: 4px solid rgba(109, 202, 230, 0.55);font-size: 26px'>Tae Seung Ryu</div>\n        </div>\n        <h1 style='width: 100%;padding-left: 2.6%;font-size: 90px;color: #aaa;'>Portfolio</h1>\n        <div style='height: 30%;width: 100%;padding-left: 3%;color : gray'>\n            <span> build : 2019.09 </span>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _dbcon_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dbcon.service */ "./src/app/dbcon.service.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _share_share_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./share/share.component */ "./src/app/share/share.component.ts");





 //라우터
//파이어베이스





//서비스


//툴팁


//애니메이션 모듈


var router = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"] },
    { path: 'history', component: _history_history_component__WEBPACK_IMPORTED_MODULE_11__["HistoryComponent"] },
    { path: 'intro', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_9__["IntroComponent"] },
    { path: '**', redirectTo: '' }
];
var fireEnvironment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyAT59Nm90cVxZFa5HXCZl_OsWOgPrKNDS8",
        authDomain: "introduce-e531e.firebaseapp.com",
        databaseURL: "https://introduce-e531e.firebaseio.com",
        projectId: "introduce-e531e",
        storageBucket: "introduce-e531e.appspot.com",
        messagingSenderId: "737120364618",
        appId: "1:737120364618:web:12799a3be6ee76b3"
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_9__["IntroComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_11__["HistoryComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"],
                _share_share_component__WEBPACK_IMPORTED_MODULE_15__["ShareComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(fireEnvironment.firebase, '/'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(router, { enableTracing: false, useHash: true }),
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]
            ],
            providers: [
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
                { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["FirestoreSettingsToken"], useValue: {} },
                { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["StorageBucket"], useValue: fireEnvironment.firebase.storageBucket },
                _dbcon_service__WEBPACK_IMPORTED_MODULE_10__["DbconService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

//npm install ol    -> openlayers (Es6 style not angular module style)


/***/ }),

/***/ "./src/app/dbcon.service.ts":
/*!**********************************!*\
  !*** ./src/app/dbcon.service.ts ***!
  \**********************************/
/*! exports provided: DbconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbconService", function() { return DbconService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




 // map이다.
var DbconService = /** @class */ (function () {
    function DbconService(db) {
        //컬렉션을 담아두는 배열
        this.collections = new Array();
        this.DataBase = db;
    }
    //컬렉션이 있는지 조사해서 해당 내용을 리턴하는 함수
    DbconService.prototype.getCollections = function (db_name) {
        var result = this.collections[db_name]; //배열에 값을 확인
        if (result == undefined || result == null) { //배열에 값이 비어있다면
            this.collections[db_name] = this.DataBase.collection(db_name, function (ref) { return ref; }); //새로 만들어준다.
            result = this.collections[db_name];
        }
        return result;
    };
    DbconService.prototype.getItem = function (db_name) {
        var items = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.getCollections(db_name).valueChanges().forEach(function (val) {
            items.next(val);
        });
        return items;
    };
    DbconService.prototype.updatItem = function (db_name, param, key) {
        var _this = this;
        var subscription = this.getCollections(db_name).stateChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var ID = a.payload.doc.id; //고유 아이디 값
                if (data.key == key) {
                    _this.getCollections(db_name).doc(ID).update(param); //id 값을 통해 수정한다.
                }
                return data;
            });
        })).subscribe(function (oo) {
            subscription.unsubscribe(); //getItem 함수를 통해 구독을 하고 있기 때문에 여기서 수정한 구독행위는 바로 종료시킨다.
            //만약 해당 구독행위를 종료하지 않으면 구독행위가 다중 발생하여 무한loop 수정 행위가 발생한다.
        });
    };
    DbconService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    DbconService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], DbconService);
    return DbconService;
}());



/***/ }),

/***/ "./src/app/history/history.component.css":
/*!***********************************************!*\
  !*** ./src/app/history/history.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The actual timeline (the vertical ruler) */\n.timeline {\n    position: relative;\n    max-width: 1500px;\n    margin: 0 auto;\n  }\n/* The actual timeline (the vertical ruler) */\n.timeline::after {\n    content: '';\n    position: absolute;\n    width: 6px;\n    background-color: white;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    margin: 0px;\n  }\n/* container_cn around content */\n.container_cn {\n    padding: 10px 40px;\n    position: relative;\n    background-color: inherit;\n    width: 50%;\n  }\n/* The circles on the timeline */\n.container_cn::after {\n    content: '';\n    position: absolute;\n    width: 35px;\n    height: 35px;\n    right: -21px;\n    background-color: white;\n    border: 4px solid #FF9F55;\n    top: 15px;\n    border-radius: 50%;\n    z-index: 1;\n  }\n/* Place the container_cn to the left */\n.left {\n    left: 0;\n  }\n/* Place the container_cn to the right */\n.right {\n    left: 50%;\n  }\n/* Add arrows to the left container_cn (pointing right) */\n.left::before {\n    content: \" \";\n    height: 0;\n    position: absolute;\n    top: 22px;\n    width: 0;\n    z-index: 1;\n    right: 30px;\n    border: medium solid white;\n    border-width: 10px 0 10px 10px;\n    border-color: transparent transparent transparent white;\n  }\n/* Add arrows to the right container_cn (pointing left) */\n.right::before {\n    content: \" \";\n    height: 0;\n    position: absolute;\n    top: 22px;\n    width: 0;\n    z-index: 1;\n    left: 30px;\n    border: medium solid white;\n    border-width: 10px 10px 10px 0;\n    border-color: transparent white transparent transparent;\n  }\n/* Fix the circle for container_cns on the right side */\n.right::after {\n    left: -16px;\n  }\n/* The actual content */\n.content_ss {\n    padding: 20px 30px;\n    background-color: white;\n    position: relative;\n    border-radius: 6px;\n  }\n/* Media queries - Responsive timeline on screens less than 600px wide */\n@media screen and (max-width: 600px) {\n  /* Place the timelime to the left */\n    .timeline::after {\n      left: 31px;\n    }\n  \n  /* Full-width container_cns */\n    .container_cn {\n      width: 100%;\n      padding-left: 70px;\n      padding-right: 25px;\n    }\n  \n  /* Make sure that all arrows are pointing leftwards */\n    .container_cn::before {\n      left: 60px;\n      border: medium solid white;\n      border-width: 10px 10px 10px 0;\n      border-color: transparent white transparent transparent;\n    }\n  \n  /* Make sure all circles are at the same spot */\n    .left::after, .right::after {\n      left: 15px;\n    }\n  \n  /* Make all right container_cns behave like the left ones */\n    .right {\n      left: 0%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBRUEsNkNBQTZDO0FBQzdDO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixTQUFTO0lBQ1QsU0FBUztJQUNULFdBQVc7RUFDYjtBQUVBLGdDQUFnQztBQUNoQztJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjtBQUVBLGdDQUFnQztBQUNoQztJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjtBQUVBLHVDQUF1QztBQUN2QztJQUNFLE9BQU87RUFDVDtBQUVBLHdDQUF3QztBQUN4QztJQUNFLFNBQVM7RUFDWDtBQUVBLHlEQUF5RDtBQUN6RDtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHVEQUF1RDtFQUN6RDtBQUVBLHlEQUF5RDtBQUN6RDtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHVEQUF1RDtFQUN6RDtBQUVBLHVEQUF1RDtBQUN2RDtJQUNFLFdBQVc7RUFDYjtBQUVBLHVCQUF1QjtBQUN2QjtJQUNFLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtBQUVBLHdFQUF3RTtBQUN4RTtFQUNBLG1DQUFtQztJQUNqQztNQUNFLFVBQVU7SUFDWjs7RUFFRiw2QkFBNkI7SUFDM0I7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLG1CQUFtQjtJQUNyQjs7RUFFRixxREFBcUQ7SUFDbkQ7TUFDRSxVQUFVO01BQ1YsMEJBQTBCO01BQzFCLDhCQUE4QjtNQUM5Qix1REFBdUQ7SUFDekQ7O0VBRUYsK0NBQStDO0lBQzdDO01BQ0UsVUFBVTtJQUNaOztFQUVGLDJEQUEyRDtJQUN6RDtNQUNFLFFBQVE7SUFDVjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXG4udGltZWxpbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDE1MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuICAudGltZWxpbmU6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICBcbiAgLyogY29udGFpbmVyX2NuIGFyb3VuZCBjb250ZW50ICovXG4gIC5jb250YWluZXJfY24ge1xuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuICAvKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbiAgLmNvbnRhaW5lcl9jbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcmlnaHQ6IC0yMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICNGRjlGNTU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAvKiBQbGFjZSB0aGUgY29udGFpbmVyX2NuIHRvIHRoZSBsZWZ0ICovXG4gIC5sZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIFxuICAvKiBQbGFjZSB0aGUgY29udGFpbmVyX2NuIHRvIHRoZSByaWdodCAqL1xuICAucmlnaHQge1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuICBcbiAgLyogQWRkIGFycm93cyB0byB0aGUgbGVmdCBjb250YWluZXJfY24gKHBvaW50aW5nIHJpZ2h0KSAqL1xuICAubGVmdDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICB3aWR0aDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTBweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlO1xuICB9XG4gIFxuICAvKiBBZGQgYXJyb3dzIHRvIHRoZSByaWdodCBjb250YWluZXJfY24gKHBvaW50aW5nIGxlZnQpICovXG4gIC5yaWdodDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICB3aWR0aDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC8qIEZpeCB0aGUgY2lyY2xlIGZvciBjb250YWluZXJfY25zIG9uIHRoZSByaWdodCBzaWRlICovXG4gIC5yaWdodDo6YWZ0ZXIge1xuICAgIGxlZnQ6IC0xNnB4O1xuICB9XG4gIFxuICAvKiBUaGUgYWN0dWFsIGNvbnRlbnQgKi9cbiAgLmNvbnRlbnRfc3Mge1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG4gIFxuICAvKiBNZWRpYSBxdWVyaWVzIC0gUmVzcG9uc2l2ZSB0aW1lbGluZSBvbiBzY3JlZW5zIGxlc3MgdGhhbiA2MDBweCB3aWRlICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuICAgIC50aW1lbGluZTo6YWZ0ZXIge1xuICAgICAgbGVmdDogMzFweDtcbiAgICB9XG4gIFxuICAvKiBGdWxsLXdpZHRoIGNvbnRhaW5lcl9jbnMgKi9cbiAgICAuY29udGFpbmVyX2NuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICB9XG4gIFxuICAvKiBNYWtlIHN1cmUgdGhhdCBhbGwgYXJyb3dzIGFyZSBwb2ludGluZyBsZWZ0d2FyZHMgKi9cbiAgICAuY29udGFpbmVyX2NuOjpiZWZvcmUge1xuICAgICAgbGVmdDogNjBweDtcbiAgICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICB9XG4gIFxuICAvKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbiAgICAubGVmdDo6YWZ0ZXIsIC5yaWdodDo6YWZ0ZXIge1xuICAgICAgbGVmdDogMTVweDtcbiAgICB9XG4gIFxuICAvKiBNYWtlIGFsbCByaWdodCBjb250YWluZXJfY25zIGJlaGF2ZSBsaWtlIHRoZSBsZWZ0IG9uZXMgKi9cbiAgICAucmlnaHQge1xuICAgICAgbGVmdDogMCU7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dbcon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dbcon.service */ "./src/app/dbcon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(service, rout) {
        this.service = service;
        this.rout = rout;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getItem('new_history').subscribe(function (res) {
            _this.new_history = res;
            _this.new_history.map(function (res) {
                return res;
            });
            console.log(res);
        });
    };
    HistoryComponent.prototype.goback = function () {
        this.rout.navigateByUrl('intro');
    };
    HistoryComponent.ctorParameters = function () { return [
        { type: _dbcon_service__WEBPACK_IMPORTED_MODULE_2__["DbconService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/index.js!./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/history/history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dbcon_service__WEBPACK_IMPORTED_MODULE_2__["DbconService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#table-row tr td {font-size: 15px;color: #4a4a4a;font-weight: bold; padding:2px;}\n.rect-auto, .c100.p51 .slice, .c100.p52 .slice, .c100.p53 .slice, .c100.p54 .slice, .c100.p55 .slice, .c100.p56 .slice, .c100.p57 .slice, .c100.p58 .slice, .c100.p59 .slice, .c100.p60 .slice, .c100.p61 .slice, .c100.p62 .slice, .c100.p63 .slice, .c100.p64 .slice, .c100.p65 .slice, .c100.p66 .slice, .c100.p67 .slice, .c100.p68 .slice, .c100.p69 .slice, .c100.p70 .slice, .c100.p71 .slice, .c100.p72 .slice, .c100.p73 .slice, .c100.p74 .slice, .c100.p75 .slice, .c100.p76 .slice, .c100.p77 .slice, .c100.p78 .slice, .c100.p79 .slice, .c100.p80 .slice, .c100.p81 .slice, .c100.p82 .slice, .c100.p83 .slice, .c100.p84 .slice, .c100.p85 .slice, .c100.p86 .slice, .c100.p87 .slice, .c100.p88 .slice, .c100.p89 .slice, .c100.p90 .slice, .c100.p91 .slice, .c100.p92 .slice, .c100.p93 .slice, .c100.p94 .slice, .c100.p95 .slice, .c100.p96 .slice, .c100.p97 .slice, .c100.p98 .slice, .c100.p99 .slice, .c100.p100 .slice {\n    clip: rect(auto, auto, auto, auto);\n  }\n.pie, .c100 .bar, .c100.p51 .fill, .c100.p52 .fill, .c100.p53 .fill, .c100.p54 .fill, .c100.p55 .fill, .c100.p56 .fill, .c100.p57 .fill, .c100.p58 .fill, .c100.p59 .fill, .c100.p60 .fill, .c100.p61 .fill, .c100.p62 .fill, .c100.p63 .fill, .c100.p64 .fill, .c100.p65 .fill, .c100.p66 .fill, .c100.p67 .fill, .c100.p68 .fill, .c100.p69 .fill, .c100.p70 .fill, .c100.p71 .fill, .c100.p72 .fill, .c100.p73 .fill, .c100.p74 .fill, .c100.p75 .fill, .c100.p76 .fill, .c100.p77 .fill, .c100.p78 .fill, .c100.p79 .fill, .c100.p80 .fill, .c100.p81 .fill, .c100.p82 .fill, .c100.p83 .fill, .c100.p84 .fill, .c100.p85 .fill, .c100.p86 .fill, .c100.p87 .fill, .c100.p88 .fill, .c100.p89 .fill, .c100.p90 .fill, .c100.p91 .fill, .c100.p92 .fill, .c100.p93 .fill, .c100.p94 .fill, .c100.p95 .fill, .c100.p96 .fill, .c100.p97 .fill, .c100.p98 .fill, .c100.p99 .fill, .c100.p100 .fill {\n    position: absolute;\n    border: 0.08em solid #307bbb;\n    width: 0.84em;\n    height: 0.84em;\n    clip: rect(0em, 0.5em, 1em, 0em);\n    border-radius: 50%;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    \n  }\n.pie-fill, .c100.p51 .bar:after, .c100.p51 .fill, .c100.p52 .bar:after, .c100.p52 .fill, .c100.p53 .bar:after, .c100.p53 .fill, .c100.p54 .bar:after, .c100.p54 .fill, .c100.p55 .bar:after, .c100.p55 .fill, .c100.p56 .bar:after, .c100.p56 .fill, .c100.p57 .bar:after, .c100.p57 .fill, .c100.p58 .bar:after, .c100.p58 .fill, .c100.p59 .bar:after, .c100.p59 .fill, .c100.p60 .bar:after, .c100.p60 .fill, .c100.p61 .bar:after, .c100.p61 .fill, .c100.p62 .bar:after, .c100.p62 .fill, .c100.p63 .bar:after, .c100.p63 .fill, .c100.p64 .bar:after, .c100.p64 .fill, .c100.p65 .bar:after, .c100.p65 .fill, .c100.p66 .bar:after, .c100.p66 .fill, .c100.p67 .bar:after, .c100.p67 .fill, .c100.p68 .bar:after, .c100.p68 .fill, .c100.p69 .bar:after, .c100.p69 .fill, .c100.p70 .bar:after, .c100.p70 .fill, .c100.p71 .bar:after, .c100.p71 .fill, .c100.p72 .bar:after, .c100.p72 .fill, .c100.p73 .bar:after, .c100.p73 .fill, .c100.p74 .bar:after, .c100.p74 .fill, .c100.p75 .bar:after, .c100.p75 .fill, .c100.p76 .bar:after, .c100.p76 .fill, .c100.p77 .bar:after, .c100.p77 .fill, .c100.p78 .bar:after, .c100.p78 .fill, .c100.p79 .bar:after, .c100.p79 .fill, .c100.p80 .bar:after, .c100.p80 .fill, .c100.p81 .bar:after, .c100.p81 .fill, .c100.p82 .bar:after, .c100.p82 .fill, .c100.p83 .bar:after, .c100.p83 .fill, .c100.p84 .bar:after, .c100.p84 .fill, .c100.p85 .bar:after, .c100.p85 .fill, .c100.p86 .bar:after, .c100.p86 .fill, .c100.p87 .bar:after, .c100.p87 .fill, .c100.p88 .bar:after, .c100.p88 .fill, .c100.p89 .bar:after, .c100.p89 .fill, .c100.p90 .bar:after, .c100.p90 .fill, .c100.p91 .bar:after, .c100.p91 .fill, .c100.p92 .bar:after, .c100.p92 .fill, .c100.p93 .bar:after, .c100.p93 .fill, .c100.p94 .bar:after, .c100.p94 .fill, .c100.p95 .bar:after, .c100.p95 .fill, .c100.p96 .bar:after, .c100.p96 .fill, .c100.p97 .bar:after, .c100.p97 .fill, .c100.p98 .bar:after, .c100.p98 .fill, .c100.p99 .bar:after, .c100.p99 .fill, .c100.p100 .bar:after, .c100.p100 .fill {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n.c100 {\n    position: relative;\n    font-size: 100px;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    margin: 0 0.1em 0.1em 0;\n    background-color: #cccccc;\n  }\n.c100 *, .c100 *:before, .c100 *:after {\n    box-sizing: content-box;\n  }\n.c100.center {\n    float: none;\n    margin: 0 auto;\n  }\n.c100.big {\n    font-size: 240px;\n  }\n.c100.small {\n    font-size: 80px;\n  }\n.c100 > span {\n    position: absolute;\n    width: 100%;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 5em;\n    line-height: 5em;\n    font-size: 0.2em;\n    color: #cccccc;\n    display: block;\n    text-align: center;\n    white-space: nowrap;\n    transition-property: all;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-out;\n  }\n.c100:after {\n    position: absolute;\n    top: 0.08em;\n    left: 0.08em;\n    display: block;\n    content: \" \";\n    border-radius: 50%;\n    background-color: whitesmoke;\n    width: 0.84em;\n    height: 0.84em;\n    transition-property: all;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in;\n  }\n.c100 .slice {\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    clip: rect(0em, 1em, 1em, 0.5em);\n  }\n.c100.p1 .bar {\n    -webkit-transform: rotate(3.6deg);\n    transform: rotate(3.6deg);\n  }\n.c100.p2 .bar {\n    -webkit-transform: rotate(7.2deg);\n    transform: rotate(7.2deg);\n  }\n.c100.p3 .bar {\n    -webkit-transform: rotate(10.8deg);\n    transform: rotate(10.8deg);\n  }\n.c100.p4 .bar {\n    -webkit-transform: rotate(14.4deg);\n    transform: rotate(14.4deg);\n  }\n.c100.p5 .bar {\n    -webkit-transform: rotate(18deg);\n    transform: rotate(18deg);\n  }\n.c100.p6 .bar {\n    -webkit-transform: rotate(21.6deg);\n    transform: rotate(21.6deg);\n  }\n.c100.p7 .bar {\n    -webkit-transform: rotate(25.2deg);\n    transform: rotate(25.2deg);\n  }\n.c100.p8 .bar {\n    -webkit-transform: rotate(28.8deg);\n    transform: rotate(28.8deg);\n  }\n.c100.p9 .bar {\n    -webkit-transform: rotate(32.4deg);\n    transform: rotate(32.4deg);\n  }\n.c100.p10 .bar {\n    -webkit-transform: rotate(36deg);\n    transform: rotate(36deg);\n  }\n.c100.p11 .bar {\n    -webkit-transform: rotate(39.6deg);\n    transform: rotate(39.6deg);\n  }\n.c100.p12 .bar {\n    -webkit-transform: rotate(43.2deg);\n    transform: rotate(43.2deg);\n  }\n.c100.p13 .bar {\n    -webkit-transform: rotate(46.8deg);\n    transform: rotate(46.8deg);\n  }\n.c100.p14 .bar {\n    -webkit-transform: rotate(50.4deg);\n    transform: rotate(50.4deg);\n  }\n.c100.p15 .bar {\n    -webkit-transform: rotate(54deg);\n    transform: rotate(54deg);\n  }\n.c100.p16 .bar {\n    -webkit-transform: rotate(57.6deg);\n    transform: rotate(57.6deg);\n  }\n.c100.p17 .bar {\n    -webkit-transform: rotate(61.2deg);\n    transform: rotate(61.2deg);\n  }\n.c100.p18 .bar {\n    -webkit-transform: rotate(64.8deg);\n    transform: rotate(64.8deg);\n  }\n.c100.p19 .bar {\n    -webkit-transform: rotate(68.4deg);\n    transform: rotate(68.4deg);\n  }\n.c100.p20 .bar {\n    -webkit-transform: rotate(72deg);\n    transform: rotate(72deg);\n  }\n.c100.p21 .bar {\n    -webkit-transform: rotate(75.6deg);\n    transform: rotate(75.6deg);\n  }\n.c100.p22 .bar {\n    -webkit-transform: rotate(79.2deg);\n    transform: rotate(79.2deg);\n  }\n.c100.p23 .bar {\n    -webkit-transform: rotate(82.8deg);\n    transform: rotate(82.8deg);\n  }\n.c100.p24 .bar {\n    -webkit-transform: rotate(86.4deg);\n    transform: rotate(86.4deg);\n  }\n.c100.p25 .bar {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n  }\n.c100.p26 .bar {\n    -webkit-transform: rotate(93.6deg);\n    transform: rotate(93.6deg);\n  }\n.c100.p27 .bar {\n    -webkit-transform: rotate(97.2deg);\n    transform: rotate(97.2deg);\n  }\n.c100.p28 .bar {\n    -webkit-transform: rotate(100.8deg);\n    transform: rotate(100.8deg);\n  }\n.c100.p29 .bar {\n    -webkit-transform: rotate(104.4deg);\n    transform: rotate(104.4deg);\n  }\n.c100.p30 .bar {\n    -webkit-transform: rotate(108deg);\n    transform: rotate(108deg);\n  }\n.c100.p31 .bar {\n    -webkit-transform: rotate(111.6deg);\n    transform: rotate(111.6deg);\n  }\n.c100.p32 .bar {\n    -webkit-transform: rotate(115.2deg);\n    transform: rotate(115.2deg);\n  }\n.c100.p33 .bar {\n    -webkit-transform: rotate(118.8deg);\n    transform: rotate(118.8deg);\n  }\n.c100.p34 .bar {\n    -webkit-transform: rotate(122.4deg);\n    transform: rotate(122.4deg);\n  }\n.c100.p35 .bar {\n    -webkit-transform: rotate(126deg);\n    transform: rotate(126deg);\n  }\n.c100.p36 .bar {\n    -webkit-transform: rotate(129.6deg);\n    transform: rotate(129.6deg);\n  }\n.c100.p37 .bar {\n    -webkit-transform: rotate(133.2deg);\n    transform: rotate(133.2deg);\n  }\n.c100.p38 .bar {\n    -webkit-transform: rotate(136.8deg);\n    transform: rotate(136.8deg);\n  }\n.c100.p39 .bar {\n    -webkit-transform: rotate(140.4deg);\n    transform: rotate(140.4deg);\n  }\n.c100.p40 .bar {\n    -webkit-transform: rotate(144deg);\n    transform: rotate(144deg);\n  }\n.c100.p41 .bar {\n    -webkit-transform: rotate(147.6deg);\n    transform: rotate(147.6deg);\n  }\n.c100.p42 .bar {\n    -webkit-transform: rotate(151.2deg);\n    transform: rotate(151.2deg);\n  }\n.c100.p43 .bar {\n    -webkit-transform: rotate(154.8deg);\n    transform: rotate(154.8deg);\n  }\n.c100.p44 .bar {\n    -webkit-transform: rotate(158.4deg);\n    transform: rotate(158.4deg);\n  }\n.c100.p45 .bar {\n    -webkit-transform: rotate(162deg);\n    transform: rotate(162deg);\n  }\n.c100.p46 .bar {\n    -webkit-transform: rotate(165.6deg);\n    transform: rotate(165.6deg);\n  }\n.c100.p47 .bar {\n    -webkit-transform: rotate(169.2deg);\n    transform: rotate(169.2deg);\n  }\n.c100.p48 .bar {\n    -webkit-transform: rotate(172.8deg);\n    transform: rotate(172.8deg);\n  }\n.c100.p49 .bar {\n    -webkit-transform: rotate(176.4deg);\n    transform: rotate(176.4deg);\n  }\n.c100.p50 .bar {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n.c100.p51 .bar {\n    -webkit-transform: rotate(183.6deg);\n    transform: rotate(183.6deg);\n  }\n.c100.p52 .bar {\n    -webkit-transform: rotate(187.2deg);\n    transform: rotate(187.2deg);\n  }\n.c100.p53 .bar {\n    -webkit-transform: rotate(190.8deg);\n    transform: rotate(190.8deg);\n  }\n.c100.p54 .bar {\n    -webkit-transform: rotate(194.4deg);\n    transform: rotate(194.4deg);\n  }\n.c100.p55 .bar {\n    -webkit-transform: rotate(198deg);\n    transform: rotate(198deg);\n  }\n.c100.p56 .bar {\n    -webkit-transform: rotate(201.6deg);\n    transform: rotate(201.6deg);\n  }\n.c100.p57 .bar {\n    -webkit-transform: rotate(205.2deg);\n    transform: rotate(205.2deg);\n  }\n.c100.p58 .bar {\n    -webkit-transform: rotate(208.8deg);\n    transform: rotate(208.8deg);\n  }\n.c100.p59 .bar {\n    -webkit-transform: rotate(212.4deg);\n    transform: rotate(212.4deg);\n  }\n.c100.p60 .bar {\n    -webkit-transform: rotate(216deg);\n    transform: rotate(216deg);\n  }\n.c100.p61 .bar {\n    -webkit-transform: rotate(219.6deg);\n    transform: rotate(219.6deg);\n  }\n.c100.p62 .bar {\n    -webkit-transform: rotate(223.2deg);\n    transform: rotate(223.2deg);\n  }\n.c100.p63 .bar {\n    -webkit-transform: rotate(226.8deg);\n    transform: rotate(226.8deg);\n  }\n.c100.p64 .bar {\n    -webkit-transform: rotate(230.4deg);\n    transform: rotate(230.4deg);\n  }\n.c100.p65 .bar {\n    -webkit-transform: rotate(234deg);\n    transform: rotate(234deg);\n  }\n.c100.p66 .bar {\n    -webkit-transform: rotate(237.6deg);\n    transform: rotate(237.6deg);\n  }\n.c100.p67 .bar {\n    -webkit-transform: rotate(241.2deg);\n    transform: rotate(241.2deg);\n  }\n.c100.p68 .bar {\n    -webkit-transform: rotate(244.8deg);\n    transform: rotate(244.8deg);\n  }\n.c100.p69 .bar {\n    -webkit-transform: rotate(248.4deg);\n    transform: rotate(248.4deg);\n  }\n.c100.p70 .bar {\n    -webkit-transform: rotate(252deg);\n    transform: rotate(252deg);\n  }\n.c100.p71 .bar {\n    -webkit-transform: rotate(255.6deg);\n    transform: rotate(255.6deg);\n  }\n.c100.p72 .bar {\n    -webkit-transform: rotate(259.2deg);\n    transform: rotate(259.2deg);\n  }\n.c100.p73 .bar {\n    -webkit-transform: rotate(262.8deg);\n    transform: rotate(262.8deg);\n  }\n.c100.p74 .bar {\n    -webkit-transform: rotate(266.4deg);\n    transform: rotate(266.4deg);\n  }\n.c100.p75 .bar {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n  }\n.c100.p76 .bar {\n    -webkit-transform: rotate(273.6deg);\n    transform: rotate(273.6deg);\n  }\n.c100.p77 .bar {\n    -webkit-transform: rotate(277.2deg);\n    transform: rotate(277.2deg);\n  }\n.c100.p78 .bar {\n    -webkit-transform: rotate(280.8deg);\n    transform: rotate(280.8deg);\n  }\n.c100.p79 .bar {\n    -webkit-transform: rotate(284.4deg);\n    transform: rotate(284.4deg);\n  }\n.c100.p80 .bar {\n    -webkit-transform: rotate(288deg);\n    transform: rotate(288deg);\n  }\n.c100.p81 .bar {\n    -webkit-transform: rotate(291.6deg);\n    transform: rotate(291.6deg);\n  }\n.c100.p82 .bar {\n    -webkit-transform: rotate(295.2deg);\n    transform: rotate(295.2deg);\n  }\n.c100.p83 .bar {\n    -webkit-transform: rotate(298.8deg);\n    transform: rotate(298.8deg);\n  }\n.c100.p84 .bar {\n    -webkit-transform: rotate(302.4deg);\n    transform: rotate(302.4deg);\n  }\n.c100.p85 .bar {\n    -webkit-transform: rotate(306deg);\n    transform: rotate(306deg);\n  }\n.c100.p86 .bar {\n    -webkit-transform: rotate(309.6deg);\n    transform: rotate(309.6deg);\n  }\n.c100.p87 .bar {\n    -webkit-transform: rotate(313.2deg);\n    transform: rotate(313.2deg);\n  }\n.c100.p88 .bar {\n    -webkit-transform: rotate(316.8deg);\n    transform: rotate(316.8deg);\n  }\n.c100.p89 .bar {\n    -webkit-transform: rotate(320.4deg);\n    transform: rotate(320.4deg);\n  }\n.c100.p90 .bar {\n    -webkit-transform: rotate(324deg);\n    transform: rotate(324deg);\n  }\n.c100.p91 .bar {\n    -webkit-transform: rotate(327.6deg);\n    transform: rotate(327.6deg);\n  }\n.c100.p92 .bar {\n    -webkit-transform: rotate(331.2deg);\n    transform: rotate(331.2deg);\n  }\n.c100.p93 .bar {\n    -webkit-transform: rotate(334.8deg);\n    transform: rotate(334.8deg);\n  }\n.c100.p94 .bar {\n    -webkit-transform: rotate(338.4deg);\n    transform: rotate(338.4deg);\n  }\n.c100.p95 .bar {\n    -webkit-transform: rotate(342deg);\n    transform: rotate(342deg);\n  }\n.c100.p96 .bar {\n    -webkit-transform: rotate(345.6deg);\n    transform: rotate(345.6deg);\n  }\n.c100.p97 .bar {\n    -webkit-transform: rotate(349.2deg);\n    transform: rotate(349.2deg);\n  }\n.c100.p98 .bar {\n    -webkit-transform: rotate(352.8deg);\n    transform: rotate(352.8deg);\n  }\n.c100.p99 .bar {\n    -webkit-transform: rotate(356.4deg);\n    transform: rotate(356.4deg);\n  }\n.c100.p100 .bar {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n.c100:hover {\n    cursor: default;\n  }\n.c100:hover > span {\n    width: 3.33em;\n    line-height: 3.33em;\n    font-size: 0.3em;\n    color: #307bbb;\n  }\n.c100:hover:after {\n    top: 0.04em;\n    left: 0.04em;\n    width: 0.92em;\n    height: 0.92em;\n  }\n.c100.dark {\n    background-color: #777777;\n  }\n.c100.dark .bar,\n  .c100.dark .fill {\n    border-color: #c6ff00 !important;\n  }\n.c100.dark > span {\n    color: #777777;\n  }\n.c100.dark:after {\n    background-color: #666666;\n  }\n.c100.dark:hover > span {\n    color: #c6ff00;\n  }\n.c100.green .bar, .c100.green .fill {\n    border-color: #4db53c !important;\n  }\n.c100.green:hover > span {\n    color: #4db53c;\n  }\n.c100.green.dark .bar, .c100.green.dark .fill {\n    border-color: #5fd400 !important;\n  }\n.c100.green.dark:hover > span {\n    color: #5fd400;\n  }\n.c100.orange .bar, .c100.orange .fill {\n    border-color: #dd9d22 !important;\n  }\n.c100.orange:hover > span {\n    color: #dd9d22;\n  }\n.c100.orange.dark .bar, .c100.orange.dark .fill {\n    border-color: #e08833 !important;\n  }\n.c100.orange.dark:hover > span {\n    color: #e08833;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IsZUFBZSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUM7QUFDaEY7SUFDSSxrQ0FBa0M7RUFDcEM7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQ0FBZ0M7SUFLaEMsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUkvQix1QkFBdUI7O0VBRXpCO0FBRUE7SUFDRSxpQ0FBaUM7SUFJakMseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBS1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7QUFDQTtJQUdFLHVCQUF1QjtFQUN6QjtBQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFJbkIsd0JBQXdCO0lBSXhCLHlCQUF5QjtJQUl6QixvQ0FBb0M7RUFDdEM7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBS1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsY0FBYztJQUlkLHdCQUF3QjtJQUl4Qix5QkFBeUI7SUFJekIsbUNBQW1DO0VBQ3JDO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQ0FBZ0M7RUFDbEM7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGdDQUFnQztJQUloQyx3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGdDQUFnQztJQUloQyx3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGdDQUFnQztJQUloQyx3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGdDQUFnQztJQUloQyx3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGdDQUFnQztJQUloQyx3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGtDQUFrQztJQUlsQywwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLG1DQUFtQztJQUluQywyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7RUFDaEI7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBOztJQUVFLGdDQUFnQztFQUNsQztBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGdDQUFnQztFQUNsQztBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0FBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9pbnRyby9pbnRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RhYmxlLXJvdyB0ciB0ZCB7Zm9udC1zaXplOiAxNXB4O2NvbG9yOiAjNGE0YTRhO2ZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOjJweDt9XG4ucmVjdC1hdXRvLCAuYzEwMC5wNTEgLnNsaWNlLCAuYzEwMC5wNTIgLnNsaWNlLCAuYzEwMC5wNTMgLnNsaWNlLCAuYzEwMC5wNTQgLnNsaWNlLCAuYzEwMC5wNTUgLnNsaWNlLCAuYzEwMC5wNTYgLnNsaWNlLCAuYzEwMC5wNTcgLnNsaWNlLCAuYzEwMC5wNTggLnNsaWNlLCAuYzEwMC5wNTkgLnNsaWNlLCAuYzEwMC5wNjAgLnNsaWNlLCAuYzEwMC5wNjEgLnNsaWNlLCAuYzEwMC5wNjIgLnNsaWNlLCAuYzEwMC5wNjMgLnNsaWNlLCAuYzEwMC5wNjQgLnNsaWNlLCAuYzEwMC5wNjUgLnNsaWNlLCAuYzEwMC5wNjYgLnNsaWNlLCAuYzEwMC5wNjcgLnNsaWNlLCAuYzEwMC5wNjggLnNsaWNlLCAuYzEwMC5wNjkgLnNsaWNlLCAuYzEwMC5wNzAgLnNsaWNlLCAuYzEwMC5wNzEgLnNsaWNlLCAuYzEwMC5wNzIgLnNsaWNlLCAuYzEwMC5wNzMgLnNsaWNlLCAuYzEwMC5wNzQgLnNsaWNlLCAuYzEwMC5wNzUgLnNsaWNlLCAuYzEwMC5wNzYgLnNsaWNlLCAuYzEwMC5wNzcgLnNsaWNlLCAuYzEwMC5wNzggLnNsaWNlLCAuYzEwMC5wNzkgLnNsaWNlLCAuYzEwMC5wODAgLnNsaWNlLCAuYzEwMC5wODEgLnNsaWNlLCAuYzEwMC5wODIgLnNsaWNlLCAuYzEwMC5wODMgLnNsaWNlLCAuYzEwMC5wODQgLnNsaWNlLCAuYzEwMC5wODUgLnNsaWNlLCAuYzEwMC5wODYgLnNsaWNlLCAuYzEwMC5wODcgLnNsaWNlLCAuYzEwMC5wODggLnNsaWNlLCAuYzEwMC5wODkgLnNsaWNlLCAuYzEwMC5wOTAgLnNsaWNlLCAuYzEwMC5wOTEgLnNsaWNlLCAuYzEwMC5wOTIgLnNsaWNlLCAuYzEwMC5wOTMgLnNsaWNlLCAuYzEwMC5wOTQgLnNsaWNlLCAuYzEwMC5wOTUgLnNsaWNlLCAuYzEwMC5wOTYgLnNsaWNlLCAuYzEwMC5wOTcgLnNsaWNlLCAuYzEwMC5wOTggLnNsaWNlLCAuYzEwMC5wOTkgLnNsaWNlLCAuYzEwMC5wMTAwIC5zbGljZSB7XG4gICAgY2xpcDogcmVjdChhdXRvLCBhdXRvLCBhdXRvLCBhdXRvKTtcbiAgfVxuICBcbiAgLnBpZSwgLmMxMDAgLmJhciwgLmMxMDAucDUxIC5maWxsLCAuYzEwMC5wNTIgLmZpbGwsIC5jMTAwLnA1MyAuZmlsbCwgLmMxMDAucDU0IC5maWxsLCAuYzEwMC5wNTUgLmZpbGwsIC5jMTAwLnA1NiAuZmlsbCwgLmMxMDAucDU3IC5maWxsLCAuYzEwMC5wNTggLmZpbGwsIC5jMTAwLnA1OSAuZmlsbCwgLmMxMDAucDYwIC5maWxsLCAuYzEwMC5wNjEgLmZpbGwsIC5jMTAwLnA2MiAuZmlsbCwgLmMxMDAucDYzIC5maWxsLCAuYzEwMC5wNjQgLmZpbGwsIC5jMTAwLnA2NSAuZmlsbCwgLmMxMDAucDY2IC5maWxsLCAuYzEwMC5wNjcgLmZpbGwsIC5jMTAwLnA2OCAuZmlsbCwgLmMxMDAucDY5IC5maWxsLCAuYzEwMC5wNzAgLmZpbGwsIC5jMTAwLnA3MSAuZmlsbCwgLmMxMDAucDcyIC5maWxsLCAuYzEwMC5wNzMgLmZpbGwsIC5jMTAwLnA3NCAuZmlsbCwgLmMxMDAucDc1IC5maWxsLCAuYzEwMC5wNzYgLmZpbGwsIC5jMTAwLnA3NyAuZmlsbCwgLmMxMDAucDc4IC5maWxsLCAuYzEwMC5wNzkgLmZpbGwsIC5jMTAwLnA4MCAuZmlsbCwgLmMxMDAucDgxIC5maWxsLCAuYzEwMC5wODIgLmZpbGwsIC5jMTAwLnA4MyAuZmlsbCwgLmMxMDAucDg0IC5maWxsLCAuYzEwMC5wODUgLmZpbGwsIC5jMTAwLnA4NiAuZmlsbCwgLmMxMDAucDg3IC5maWxsLCAuYzEwMC5wODggLmZpbGwsIC5jMTAwLnA4OSAuZmlsbCwgLmMxMDAucDkwIC5maWxsLCAuYzEwMC5wOTEgLmZpbGwsIC5jMTAwLnA5MiAuZmlsbCwgLmMxMDAucDkzIC5maWxsLCAuYzEwMC5wOTQgLmZpbGwsIC5jMTAwLnA5NSAuZmlsbCwgLmMxMDAucDk2IC5maWxsLCAuYzEwMC5wOTcgLmZpbGwsIC5jMTAwLnA5OCAuZmlsbCwgLmMxMDAucDk5IC5maWxsLCAuYzEwMC5wMTAwIC5maWxsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAwLjA4ZW0gc29saWQgIzMwN2JiYjtcbiAgICB3aWR0aDogMC44NGVtO1xuICAgIGhlaWdodDogMC44NGVtO1xuICAgIGNsaXA6IHJlY3QoMGVtLCAwLjVlbSwgMWVtLCAwZW0pO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIFxuICB9XG4gIFxuICAucGllLWZpbGwsIC5jMTAwLnA1MSAuYmFyOmFmdGVyLCAuYzEwMC5wNTEgLmZpbGwsIC5jMTAwLnA1MiAuYmFyOmFmdGVyLCAuYzEwMC5wNTIgLmZpbGwsIC5jMTAwLnA1MyAuYmFyOmFmdGVyLCAuYzEwMC5wNTMgLmZpbGwsIC5jMTAwLnA1NCAuYmFyOmFmdGVyLCAuYzEwMC5wNTQgLmZpbGwsIC5jMTAwLnA1NSAuYmFyOmFmdGVyLCAuYzEwMC5wNTUgLmZpbGwsIC5jMTAwLnA1NiAuYmFyOmFmdGVyLCAuYzEwMC5wNTYgLmZpbGwsIC5jMTAwLnA1NyAuYmFyOmFmdGVyLCAuYzEwMC5wNTcgLmZpbGwsIC5jMTAwLnA1OCAuYmFyOmFmdGVyLCAuYzEwMC5wNTggLmZpbGwsIC5jMTAwLnA1OSAuYmFyOmFmdGVyLCAuYzEwMC5wNTkgLmZpbGwsIC5jMTAwLnA2MCAuYmFyOmFmdGVyLCAuYzEwMC5wNjAgLmZpbGwsIC5jMTAwLnA2MSAuYmFyOmFmdGVyLCAuYzEwMC5wNjEgLmZpbGwsIC5jMTAwLnA2MiAuYmFyOmFmdGVyLCAuYzEwMC5wNjIgLmZpbGwsIC5jMTAwLnA2MyAuYmFyOmFmdGVyLCAuYzEwMC5wNjMgLmZpbGwsIC5jMTAwLnA2NCAuYmFyOmFmdGVyLCAuYzEwMC5wNjQgLmZpbGwsIC5jMTAwLnA2NSAuYmFyOmFmdGVyLCAuYzEwMC5wNjUgLmZpbGwsIC5jMTAwLnA2NiAuYmFyOmFmdGVyLCAuYzEwMC5wNjYgLmZpbGwsIC5jMTAwLnA2NyAuYmFyOmFmdGVyLCAuYzEwMC5wNjcgLmZpbGwsIC5jMTAwLnA2OCAuYmFyOmFmdGVyLCAuYzEwMC5wNjggLmZpbGwsIC5jMTAwLnA2OSAuYmFyOmFmdGVyLCAuYzEwMC5wNjkgLmZpbGwsIC5jMTAwLnA3MCAuYmFyOmFmdGVyLCAuYzEwMC5wNzAgLmZpbGwsIC5jMTAwLnA3MSAuYmFyOmFmdGVyLCAuYzEwMC5wNzEgLmZpbGwsIC5jMTAwLnA3MiAuYmFyOmFmdGVyLCAuYzEwMC5wNzIgLmZpbGwsIC5jMTAwLnA3MyAuYmFyOmFmdGVyLCAuYzEwMC5wNzMgLmZpbGwsIC5jMTAwLnA3NCAuYmFyOmFmdGVyLCAuYzEwMC5wNzQgLmZpbGwsIC5jMTAwLnA3NSAuYmFyOmFmdGVyLCAuYzEwMC5wNzUgLmZpbGwsIC5jMTAwLnA3NiAuYmFyOmFmdGVyLCAuYzEwMC5wNzYgLmZpbGwsIC5jMTAwLnA3NyAuYmFyOmFmdGVyLCAuYzEwMC5wNzcgLmZpbGwsIC5jMTAwLnA3OCAuYmFyOmFmdGVyLCAuYzEwMC5wNzggLmZpbGwsIC5jMTAwLnA3OSAuYmFyOmFmdGVyLCAuYzEwMC5wNzkgLmZpbGwsIC5jMTAwLnA4MCAuYmFyOmFmdGVyLCAuYzEwMC5wODAgLmZpbGwsIC5jMTAwLnA4MSAuYmFyOmFmdGVyLCAuYzEwMC5wODEgLmZpbGwsIC5jMTAwLnA4MiAuYmFyOmFmdGVyLCAuYzEwMC5wODIgLmZpbGwsIC5jMTAwLnA4MyAuYmFyOmFmdGVyLCAuYzEwMC5wODMgLmZpbGwsIC5jMTAwLnA4NCAuYmFyOmFmdGVyLCAuYzEwMC5wODQgLmZpbGwsIC5jMTAwLnA4NSAuYmFyOmFmdGVyLCAuYzEwMC5wODUgLmZpbGwsIC5jMTAwLnA4NiAuYmFyOmFmdGVyLCAuYzEwMC5wODYgLmZpbGwsIC5jMTAwLnA4NyAuYmFyOmFmdGVyLCAuYzEwMC5wODcgLmZpbGwsIC5jMTAwLnA4OCAuYmFyOmFmdGVyLCAuYzEwMC5wODggLmZpbGwsIC5jMTAwLnA4OSAuYmFyOmFmdGVyLCAuYzEwMC5wODkgLmZpbGwsIC5jMTAwLnA5MCAuYmFyOmFmdGVyLCAuYzEwMC5wOTAgLmZpbGwsIC5jMTAwLnA5MSAuYmFyOmFmdGVyLCAuYzEwMC5wOTEgLmZpbGwsIC5jMTAwLnA5MiAuYmFyOmFmdGVyLCAuYzEwMC5wOTIgLmZpbGwsIC5jMTAwLnA5MyAuYmFyOmFmdGVyLCAuYzEwMC5wOTMgLmZpbGwsIC5jMTAwLnA5NCAuYmFyOmFmdGVyLCAuYzEwMC5wOTQgLmZpbGwsIC5jMTAwLnA5NSAuYmFyOmFmdGVyLCAuYzEwMC5wOTUgLmZpbGwsIC5jMTAwLnA5NiAuYmFyOmFmdGVyLCAuYzEwMC5wOTYgLmZpbGwsIC5jMTAwLnA5NyAuYmFyOmFmdGVyLCAuYzEwMC5wOTcgLmZpbGwsIC5jMTAwLnA5OCAuYmFyOmFmdGVyLCAuYzEwMC5wOTggLmZpbGwsIC5jMTAwLnA5OSAuYmFyOmFmdGVyLCAuYzEwMC5wOTkgLmZpbGwsIC5jMTAwLnAxMDAgLmJhcjphZnRlciwgLmMxMDAucDEwMCAuZmlsbCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgXG4gIC5jMTAwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDAgMC4xZW0gMC4xZW0gMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICB9XG4gIC5jMTAwICosIC5jMTAwICo6YmVmb3JlLCAuYzEwMCAqOmFmdGVyIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIH1cbiAgLmMxMDAuY2VudGVyIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuYzEwMC5iaWcge1xuICAgIGZvbnQtc2l6ZTogMjQwcHg7XG4gIH1cbiAgLmMxMDAuc21hbGwge1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgfVxuICAuYzEwMCA+IHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiA1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDVlbTtcbiAgICBmb250LXNpemU6IDAuMmVtO1xuICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICAuYzEwMDphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMC4wOGVtO1xuICAgIGxlZnQ6IDAuMDhlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICB3aWR0aDogMC44NGVtO1xuICAgIGhlaWdodDogMC44NGVtO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIC5jMTAwIC5zbGljZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgY2xpcDogcmVjdCgwZW0sIDFlbSwgMWVtLCAwLjVlbSk7XG4gIH1cbiAgLmMxMDAucDEgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzLjZkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMy42ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMy42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzLjZkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMuNmRlZyk7XG4gIH1cbiAgLmMxMDAucDIgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3LjJkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNy4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNy4yZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3LjJkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDcuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDMgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMC44ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEwLjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMC44ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMC44ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMC44ZGVnKTtcbiAgfVxuICAuYzEwMC5wNCAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0LjRkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTQuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE0LjRkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDE0LjRkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE0LjRkZWcpO1xuICB9XG4gIC5jMTAwLnA1IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4ZGVnKTtcbiAgfVxuICAuYzEwMC5wNiAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxLjZkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjEuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxLjZkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDIxLjZkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIxLjZkZWcpO1xuICB9XG4gIC5jMTAwLnA3IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjUuMmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNS4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjUuMmRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjUuMmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjUuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDggLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyOC44ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI4LjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyOC44ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyOC44ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyOC44ZGVnKTtcbiAgfVxuICAuYzEwMC5wOSAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMyLjRkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzIuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMyLjRkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDMyLjRkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMyLjRkZWcpO1xuICB9XG4gIC5jMTAwLnAxMCAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XG4gIH1cbiAgLmMxMDAucDExIC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzkuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzOS42ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzkuNmRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzkuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzkuNmRlZyk7XG4gIH1cbiAgLmMxMDAucDEyIC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDMuMmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0My4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDMuMmRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDMuMmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDMuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDEzIC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDYuOGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0Ni44ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDYuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDYuOGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDYuOGRlZyk7XG4gIH1cbiAgLmMxMDAucDE0IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTAuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg1MC40ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNTAuNGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNTAuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNTAuNGRlZyk7XG4gIH1cbiAgLmMxMDAucDE1IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTRkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNTRkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg1NGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNTRkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDU0ZGVnKTtcbiAgfVxuICAuYzEwMC5wMTYgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1Ny42ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDU3LjZkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg1Ny42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg1Ny42ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1Ny42ZGVnKTtcbiAgfVxuICAuYzEwMC5wMTcgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MS4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDYxLjJkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MS4yZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg2MS4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MS4yZGVnKTtcbiAgfVxuICAuYzEwMC5wMTggLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2NC44ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDY0LjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2NC44ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg2NC44ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2NC44ZGVnKTtcbiAgfVxuICAuYzEwMC5wMTkgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2OC40ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDY4LjRkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2OC40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg2OC40ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2OC40ZGVnKTtcbiAgfVxuICAuYzEwMC5wMjAgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3MmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3MmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3MmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzJkZWcpO1xuICB9XG4gIC5jMTAwLnAyMSAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDc1LjZkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNzUuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDc1LjZkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDc1LjZkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDc1LjZkZWcpO1xuICB9XG4gIC5jMTAwLnAyMiAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDc5LjJkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNzkuMmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDc5LjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDc5LjJkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDc5LjJkZWcpO1xuICB9XG4gIC5jMTAwLnAyMyAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDgyLjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoODIuOGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDgyLjhkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDgyLjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyLjhkZWcpO1xuICB9XG4gIC5jMTAwLnAyNCAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDg2LjRkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoODYuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDg2LjRkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDg2LjRkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDg2LjRkZWcpO1xuICB9XG4gIC5jMTAwLnAyNSAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cbiAgLmMxMDAucDI2IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTMuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5My42ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTMuNmRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTMuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTMuNmRlZyk7XG4gIH1cbiAgLmMxMDAucDI3IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTcuMmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5Ny4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTcuMmRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTcuMmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTcuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDI4IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTAwLjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTAwLjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMDAuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTAwLjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwMC44ZGVnKTtcbiAgfVxuICAuYzEwMC5wMjkgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMDQuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMDQuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEwNC40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMDQuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTA0LjRkZWcpO1xuICB9XG4gIC5jMTAwLnAzMCAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwOGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMDhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMDhkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDEwOGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTA4ZGVnKTtcbiAgfVxuICAuYzEwMC5wMzEgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMTEuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMTEuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDExMS42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMTEuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTExLjZkZWcpO1xuICB9XG4gIC5jMTAwLnAzMiAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExNS4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDExNS4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTE1LjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDExNS4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTUuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDMzIC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTE4LjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTE4LjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMTguOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTE4LjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDExOC44ZGVnKTtcbiAgfVxuICAuYzEwMC5wMzQgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjIuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMjIuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMi40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMjIuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTIyLjRkZWcpO1xuICB9XG4gIC5jMTAwLnAzNSAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMjZkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMjZkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcbiAgfVxuICAuYzEwMC5wMzYgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjkuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMjkuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyOS42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMjkuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTI5LjZkZWcpO1xuICB9XG4gIC5jMTAwLnAzNyAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMy4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEzMy4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTMzLjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDEzMy4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzMuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDM4IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM2LjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTM2LjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMzYuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTM2LjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNi44ZGVnKTtcbiAgfVxuICAuYzEwMC5wMzkgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNDAuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNDAuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE0MC40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxNDAuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTQwLjRkZWcpO1xuICB9XG4gIC5jMTAwLnA0MCAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNDRkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNDRkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcbiAgfVxuICAuYzEwMC5wNDEgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNDcuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNDcuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE0Ny42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxNDcuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTQ3LjZkZWcpO1xuICB9XG4gIC5jMTAwLnA0MiAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1MS4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE1MS4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUxLjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDE1MS4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTEuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDQzIC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTU0LjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTU0LjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTQuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTU0LjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1NC44ZGVnKTtcbiAgfVxuICAuYzEwMC5wNDQgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTguNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNTguNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE1OC40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxNTguNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTU4LjRkZWcpO1xuICB9XG4gIC5jMTAwLnA0NSAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE2MmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNjJkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDE2MmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTYyZGVnKTtcbiAgfVxuICAuYzEwMC5wNDYgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNjUuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNjUuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE2NS42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxNjUuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTY1LjZkZWcpO1xuICB9XG4gIC5jMTAwLnA0NyAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE2OS4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE2OS4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTY5LjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDE2OS4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjkuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDQ4IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTcyLjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTcyLjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNzIuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTcyLjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE3Mi44ZGVnKTtcbiAgfVxuICAuYzEwMC5wNDkgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNzYuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNzYuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE3Ni40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxNzYuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTc2LjRkZWcpO1xuICB9XG4gIC5jMTAwLnA1MCAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICAuYzEwMC5wNTEgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODMuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODMuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4My42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODMuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgzLjZkZWcpO1xuICB9XG4gIC5jMTAwLnA1MiAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4Ny4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4Ny4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTg3LjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4Ny4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODcuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDUzIC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTkwLjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTkwLjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxOTAuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTkwLjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE5MC44ZGVnKTtcbiAgfVxuICAuYzEwMC5wNTQgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxOTQuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxOTQuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE5NC40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxOTQuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTk0LjRkZWcpO1xuICB9XG4gIC5jMTAwLnA1NSAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE5OGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxOThkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxOThkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDE5OGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTk4ZGVnKTtcbiAgfVxuICAuYzEwMC5wNTYgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMDEuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMDEuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIwMS42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMDEuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjAxLjZkZWcpO1xuICB9XG4gIC5jMTAwLnA1NyAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIwNS4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIwNS4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjA1LjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDIwNS4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMDUuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDU4IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjA4LjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjA4LjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMDguOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjA4LjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwOC44ZGVnKTtcbiAgfVxuICAuYzEwMC5wNTkgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTIuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMTIuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMi40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMTIuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjEyLjRkZWcpO1xuICB9XG4gIC5jMTAwLnA2MCAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMTZkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMTZkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjE2ZGVnKTtcbiAgfVxuICAuYzEwMC5wNjEgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTkuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMTkuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxOS42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMTkuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjE5LjZkZWcpO1xuICB9XG4gIC5jMTAwLnA2MiAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIyMy4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIyMy4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjIzLjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDIyMy4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjMuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDYzIC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjI2LjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjI2LjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjYuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjI2LjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNi44ZGVnKTtcbiAgfVxuICAuYzEwMC5wNjQgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMzAuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMzAuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIzMC40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMzAuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjMwLjRkZWcpO1xuICB9XG4gIC5jMTAwLnA2NSAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIzNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMzRkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMzRkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDIzNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjM0ZGVnKTtcbiAgfVxuICAuYzEwMC5wNjYgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMzcuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMzcuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIzNy42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMzcuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjM3LjZkZWcpO1xuICB9XG4gIC5jMTAwLnA2NyAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI0MS4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI0MS4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQxLjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDI0MS4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDEuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDY4IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQ0LjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjQ0LjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDQuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjQ0LjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI0NC44ZGVnKTtcbiAgfVxuICAuYzEwMC5wNjkgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDguNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNDguNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI0OC40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyNDguNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjQ4LjRkZWcpO1xuICB9XG4gIC5jMTAwLnA3MCAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI1MmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNTJkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNTJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDI1MmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjUyZGVnKTtcbiAgfVxuICAuYzEwMC5wNzEgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNTUuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNTUuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI1NS42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyNTUuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjU1LjZkZWcpO1xuICB9XG4gIC5jMTAwLnA3MiAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI1OS4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI1OS4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjU5LjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDI1OS4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNTkuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDczIC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjYyLjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjYyLjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNjIuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjYyLjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI2Mi44ZGVnKTtcbiAgfVxuICAuYzEwMC5wNzQgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNjYuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNjYuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI2Ni40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyNjYuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjY2LjRkZWcpO1xuICB9XG4gIC5jMTAwLnA3NSAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgfVxuICAuYzEwMC5wNzYgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzMuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNzMuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3My42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyNzMuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjczLjZkZWcpO1xuICB9XG4gIC5jMTAwLnA3NyAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3Ny4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI3Ny4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjc3LjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDI3Ny4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzcuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDc4IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjgwLjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjgwLjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyODAuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjgwLjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI4MC44ZGVnKTtcbiAgfVxuICAuYzEwMC5wNzkgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyODQuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyODQuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI4NC40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyODQuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjg0LjRkZWcpO1xuICB9XG4gIC5jMTAwLnA4MCAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI4OGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyODhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyODhkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDI4OGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjg4ZGVnKTtcbiAgfVxuICAuYzEwMC5wODEgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyOTEuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyOTEuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI5MS42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyOTEuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjkxLjZkZWcpO1xuICB9XG4gIC5jMTAwLnA4MiAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI5NS4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI5NS4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjk1LjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDI5NS4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyOTUuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDgzIC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjk4LjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjk4LjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyOTguOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjk4LjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI5OC44ZGVnKTtcbiAgfVxuICAuYzEwMC5wODQgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDIuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMDIuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwMi40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMDIuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzAyLjRkZWcpO1xuICB9XG4gIC5jMTAwLnA4NSAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMDZkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMDZkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDMwNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzA2ZGVnKTtcbiAgfVxuICAuYzEwMC5wODYgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDkuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMDkuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwOS42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMDkuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzA5LjZkZWcpO1xuICB9XG4gIC5jMTAwLnA4NyAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxMy4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMxMy4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzEzLjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDMxMy4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTMuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDg4IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzE2LjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzE2LjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMTYuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzE2LjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNi44ZGVnKTtcbiAgfVxuICAuYzEwMC5wODkgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMjAuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMjAuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMyMC40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMjAuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzIwLjRkZWcpO1xuICB9XG4gIC5jMTAwLnA5MCAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMyNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMjRkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMjRkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDMyNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzI0ZGVnKTtcbiAgfVxuICAuYzEwMC5wOTEgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMjcuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMjcuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMyNy42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMjcuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzI3LjZkZWcpO1xuICB9XG4gIC5jMTAwLnA5MiAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMzMS4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMzMS4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzMxLjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDMzMS4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzEuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDkzIC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzM0LjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzM0LjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzQuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzM0LjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMzNC44ZGVnKTtcbiAgfVxuICAuYzEwMC5wOTQgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzguNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMzguNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMzOC40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMzguNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzM4LjRkZWcpO1xuICB9XG4gIC5jMTAwLnA5NSAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM0MmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNDJkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNDJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM0MmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzQyZGVnKTtcbiAgfVxuICAuYzEwMC5wOTYgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNDUuNmRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNDUuNmRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM0NS42ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNDUuNmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzQ1LjZkZWcpO1xuICB9XG4gIC5jMTAwLnA5NyAuYmFyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM0OS4yZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM0OS4yZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzQ5LjJkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM0OS4yZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNDkuMmRlZyk7XG4gIH1cbiAgLmMxMDAucDk4IC5iYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzUyLjhkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzUyLjhkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNTIuOGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzUyLjhkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1Mi44ZGVnKTtcbiAgfVxuICAuYzEwMC5wOTkgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTYuNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNTYuNGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM1Ni40ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNTYuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU2LjRkZWcpO1xuICB9XG4gIC5jMTAwLnAxMDAgLmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbiAgLmMxMDA6aG92ZXIge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuICAuYzEwMDpob3ZlciA+IHNwYW4ge1xuICAgIHdpZHRoOiAzLjMzZW07XG4gICAgbGluZS1oZWlnaHQ6IDMuMzNlbTtcbiAgICBmb250LXNpemU6IDAuM2VtO1xuICAgIGNvbG9yOiAjMzA3YmJiO1xuICB9XG4gIC5jMTAwOmhvdmVyOmFmdGVyIHtcbiAgICB0b3A6IDAuMDRlbTtcbiAgICBsZWZ0OiAwLjA0ZW07XG4gICAgd2lkdGg6IDAuOTJlbTtcbiAgICBoZWlnaHQ6IDAuOTJlbTtcbiAgfVxuICAuYzEwMC5kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xuICB9XG4gIC5jMTAwLmRhcmsgLmJhcixcbiAgLmMxMDAuZGFyayAuZmlsbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYzZmZjAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmMxMDAuZGFyayA+IHNwYW4ge1xuICAgIGNvbG9yOiAjNzc3Nzc3O1xuICB9XG4gIC5jMTAwLmRhcms6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY7XG4gIH1cbiAgLmMxMDAuZGFyazpob3ZlciA+IHNwYW4ge1xuICAgIGNvbG9yOiAjYzZmZjAwO1xuICB9XG4gIC5jMTAwLmdyZWVuIC5iYXIsIC5jMTAwLmdyZWVuIC5maWxsIHtcbiAgICBib3JkZXItY29sb3I6ICM0ZGI1M2MgIWltcG9ydGFudDtcbiAgfVxuICAuYzEwMC5ncmVlbjpob3ZlciA+IHNwYW4ge1xuICAgIGNvbG9yOiAjNGRiNTNjO1xuICB9XG4gIC5jMTAwLmdyZWVuLmRhcmsgLmJhciwgLmMxMDAuZ3JlZW4uZGFyayAuZmlsbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjNWZkNDAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmMxMDAuZ3JlZW4uZGFyazpob3ZlciA+IHNwYW4ge1xuICAgIGNvbG9yOiAjNWZkNDAwO1xuICB9XG4gIC5jMTAwLm9yYW5nZSAuYmFyLCAuYzEwMC5vcmFuZ2UgLmZpbGwge1xuICAgIGJvcmRlci1jb2xvcjogI2RkOWQyMiAhaW1wb3J0YW50O1xuICB9XG4gIC5jMTAwLm9yYW5nZTpob3ZlciA+IHNwYW4ge1xuICAgIGNvbG9yOiAjZGQ5ZDIyO1xuICB9XG4gIC5jMTAwLm9yYW5nZS5kYXJrIC5iYXIsIC5jMTAwLm9yYW5nZS5kYXJrIC5maWxsIHtcbiAgICBib3JkZXItY29sb3I6ICNlMDg4MzMgIWltcG9ydGFudDtcbiAgfVxuICAuYzEwMC5vcmFuZ2UuZGFyazpob3ZlciA+IHNwYW4ge1xuICAgIGNvbG9yOiAjZTA4ODMzO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dbcon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dbcon.service */ "./src/app/dbcon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/source/Vector */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Vector */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");














var IntroComponent = /** @class */ (function () {
    function IntroComponent(service, rout) {
        var _this = this;
        this.service = service;
        this.rout = rout;
        this.info = { name: 'Ryu', birthDay: '06.06', Email: 'lts06069@naver.com', address: '인천', cat: 'assets/cat.PNG' };
        this.colorCode = ['rgba(30, 179, 199, 1)', '#dd9d22'];
        this.useColorCode = this.colorCode[0];
        this.integer = true;
        service.getItem('new_first').subscribe(function (res) {
            _this.new_first = res;
        });
        service.getItem('new_second').subscribe(function (res) {
            _this.new_second = res;
        });
        service.getItem('new_third').subscribe(function (res) {
            _this.new_third = res;
        });
    }
    IntroComponent.prototype.ngOnInit = function () {
        this.changeColor(); //색깔바꾸깅
        this.layer = new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_6__["default"]({
            source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__["default"]()
        });
        this.view = new ol_View__WEBPACK_IMPORTED_MODULE_7__["default"]({
            center: Object(ol_proj__WEBPACK_IMPORTED_MODULE_8__["fromLonLat"])([126.697233, 37.481529]),
            zoom: 10
        });
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_4__["default"]({
            target: 'map',
            layers: [this.layer],
            view: this.view
        });
        var vectorSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_9__["default"]({ projection: 'EPSG:4326' });
        var circle = new ol_geom__WEBPACK_IMPORTED_MODULE_11__["Circle"]([14103606.290725656, 4507770.553246718], 5000);
        var CircleFeature = new ol_Feature__WEBPACK_IMPORTED_MODULE_12__["default"](circle);
        vectorSource.addFeatures([CircleFeature]);
        var vectorLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_10__["default"]({
            source: vectorSource,
            style: [
                new ol_style__WEBPACK_IMPORTED_MODULE_13__["Style"]({
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_13__["Stroke"]({
                        color: 'rgba( 27, 214, 255 ,0.40)',
                        width: 2
                    }),
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_13__["Fill"]({
                        color: 'rgba( 27, 214, 255 ,0.40)'
                    }),
                    text: new ol_style__WEBPACK_IMPORTED_MODULE_13__["Text"]({
                        text: '인천 거주중',
                        textAlign: 'center',
                        font: '15px roboto,sans-serif'
                    })
                })
            ]
        });
        this.map.addLayer(vectorLayer);
    };
    IntroComponent.prototype.goHisPage = function () {
        this.rout.navigateByUrl('history');
    };
    IntroComponent.prototype.changeColor = function () {
        var _this = this;
        setInterval(function () {
            if (_this.integer) {
                _this.integer = false;
                _this.useColorCode = _this.colorCode[1];
            }
            else {
                _this.integer = true;
                _this.useColorCode = _this.colorCode[0];
            }
        }, 1500);
    };
    IntroComponent.ctorParameters = function () { return [
        { type: _dbcon_service__WEBPACK_IMPORTED_MODULE_2__["DbconService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dbcon_service__WEBPACK_IMPORTED_MODULE_2__["DbconService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/share/share.component.css":
/*!*******************************************!*\
  !*** ./src/app/share/share.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL3NoYXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/share/share.component.ts":
/*!******************************************!*\
  !*** ./src/app/share/share.component.ts ***!
  \******************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dbcon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dbcon.service */ "./src/app/dbcon.service.ts");



var ShareComponent = /** @class */ (function () {
    function ShareComponent(service) {
        var _this = this;
        this.service = service;
        var subscript = this.service.getItem('total_access').subscribe(function (res) {
            if (res[0]) {
                _this.total = res[0].number;
            }
        });
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    ShareComponent.ctorParameters = function () { return [
        { type: _dbcon_service__WEBPACK_IMPORTED_MODULE_2__["DbconService"] }
    ]; };
    ShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! raw-loader!./share.component.html */ "./node_modules/raw-loader/index.js!./src/app/share/share.component.html"),
            styles: [__webpack_require__(/*! ./share.component.css */ "./src/app/share/share.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dbcon_service__WEBPACK_IMPORTED_MODULE_2__["DbconService"]])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dbcon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dbcon.service */ "./src/app/dbcon.service.ts");





var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(rout, service) {
        this.rout = rout;
        this.service = service;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var subscript = _this.service.getItem('total_access').subscribe(function (res) {
                if (res[0]) {
                    var mm = Number(res[0].number);
                    mm = mm + 1;
                    _this.service.updatItem('total_access', { number: mm }, 'key');
                    subscript.unsubscribe();
                }
            });
            _this.rout.navigateByUrl('intro');
        }, 2550);
    };
    WelcomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _dbcon_service__WEBPACK_IMPORTED_MODULE_4__["DbconService"] }
    ]; };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1800ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1800ms ease-in')),
                ])
            ],
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _dbcon_service__WEBPACK_IMPORTED_MODULE_4__["DbconService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\04_NODE\newIntro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map