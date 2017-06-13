(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(0);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(64);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var BackendService = (function () {
    function BackendService() {
    }
    return BackendService;
}());
BackendService = __decorate([
    core_1.Injectable()
], BackendService);
exports.BackendService = BackendService;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var backend_service_1 = __webpack_require__(3);
var ClientService = (function () {
    function ClientService(backend) {
        this.backend = backend;
    }
    ClientService.prototype.getAllClients = function () {
        return this.backend.getClients([]);
    };
    ClientService.prototype.getClient = function (id) {
        return this.backend.getClient(id);
    };
    ClientService.prototype.saveClient = function (clientToSave) {
        this.backend.saveClient(clientToSave);
    };
    ClientService.prototype.addClient = function (clientToAdd) {
        return this.backend.addClient(clientToAdd);
    };
    ClientService.prototype.saveSite = function (siteToSave) {
        return this.backend.saveSite(siteToSave);
    };
    ClientService.prototype.addSiteToClient = function (clientId, siteToAdd) {
        return this.backend.addSite(clientId, siteToAdd);
    };
    ClientService.prototype.addProductToSite = function (siteId, productToAdd) {
        return Promise.resolve();
    };
    ClientService.prototype.removeProductFromSite = function (siteId, productToRemove) {
        return Promise.resolve();
    };
    return ClientService;
}());
ClientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [backend_service_1.BackendService])
], ClientService);
exports.ClientService = ClientService;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CurrentDataService = (function () {
    function CurrentDataService() {
    }
    Object.defineProperty(CurrentDataService.prototype, "currentClient", {
        get: function () {
            return this._currentClient;
        },
        set: function (value) {
            this._currentClient = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentDataService.prototype, "setup", {
        get: function () {
            return this._setup;
        },
        set: function (value) {
            this._setup = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentDataService;
}());
exports.CurrentDataService = CurrentDataService;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Case = (function () {
    function Case(id, site, description, creationDate) {
        this.id = id;
        this.site = site;
        this.description = description;
        this.creationDate = creationDate;
    }
    return Case;
}());
exports.Case = Case;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(66);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var case_1 = __webpack_require__(6);
var CaseDetailsComponent = (function () {
    function CaseDetailsComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    CaseDetailsComponent.prototype.ngOnInit = function () {
        this.case = null;
        this.case = new case_1.Case("TNA123209", "www.bombeltestuje.intuition.com", "This is description", "12/12/12");
        //this.route.params.switchMap((params: Params) => {
        //    let ret: Promise<Case>;
        //    let caseId: string = params['id'];
        //    try {
        //        //ret = this.clientService.getClient(clientId);
        //    }
        //    catch (e) {
        //        //ret = Promise.reject("Unable to get client " + clientId + " " + e.Message);
        //    }
        //    return ret;
        //}
        //).subscribe(c => this._case = c, e => this.error = e);
    };
    return CaseDetailsComponent;
}());
CaseDetailsComponent = __decorate([
    core_1.Component({
        //selector: 'case-details',
        template: __webpack_require__(40),
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], CaseDetailsComponent);
exports.CaseDetailsComponent = CaseDetailsComponent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var backend_service_1 = __webpack_require__(3);
var CasesComponent = (function () {
    function CasesComponent(backend, router) {
        this.backend = backend;
        this.router = router;
    }
    CasesComponent.prototype.ngOnInit = function () {
        this.getCases();
    };
    CasesComponent.prototype.getCases = function () {
        var _this = this;
        return this.backend.getCases([])
            .then(function (value) { return _this.cases = value; })
            .catch(function (reason) { return _this.status = reason; });
    };
    CasesComponent.prototype.caseDetails = function (id) {
        this.router.navigate(['./cases/case-details', id]);
    };
    CasesComponent.prototype.newCase = function () {
        this.router.navigate(['./cases/new-case']);
    };
    return CasesComponent;
}());
CasesComponent = __decorate([
    core_1.Component({
        //selector: 'hero-form',
        template: __webpack_require__(41),
    }),
    __metadata("design:paramtypes", [backend_service_1.BackendService,
        router_1.Router])
], CasesComponent);
exports.CasesComponent = CasesComponent;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var case_1 = __webpack_require__(6);
var NewCaseComponent = (function () {
    function NewCaseComponent(route, router) {
        this.route = route;
        this.router = router;
        this.submitted = false;
    }
    NewCaseComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(NewCaseComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.case); },
        enumerable: true,
        configurable: true
    });
    NewCaseComponent.prototype.ngOnInit = function () {
        this.case = new case_1.Case("", "", "", "");
        //this.route.params.switchMap((params: Params) => {
        //    let ret: Promise<Case>;
        //    let caseId: string = params['id'];
        //    try {
        //        //ret = this.clientService.getClient(clientId);
        //    }
        //    catch (e) {
        //        //ret = Promise.reject("Unable to get client " + clientId + " " + e.Message);
        //    }
        //    return ret;
        //}
        //).subscribe(c => this._case = c, e => this.error = e);
    };
    return NewCaseComponent;
}());
NewCaseComponent = __decorate([
    core_1.Component({
        //selector: 'case-details',
        template: __webpack_require__(42),
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], NewCaseComponent);
exports.NewCaseComponent = NewCaseComponent;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(21);
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var common_1 = __webpack_require__(23);
var client_1 = __webpack_require__(13);
var client_service_1 = __webpack_require__(4);
var current_data_service_1 = __webpack_require__(5);
var base_component_1 = __webpack_require__(19);
var ClientDetailsComponent = (function (_super) {
    __extends(ClientDetailsComponent, _super);
    function ClientDetailsComponent(clientService, currentDataService, location, route, router) {
        var _this = _super.call(this) || this;
        _this.clientService = clientService;
        _this.currentDataService = currentDataService;
        _this.location = location;
        _this.route = route;
        _this.router = router;
        return _this;
    }
    Object.defineProperty(ClientDetailsComponent.prototype, "client", {
        get: function () {
            return this._client;
        },
        set: function (value) {
            this._client = value;
            this.isNewClient = this._client.id == -1;
            this.currentDataService.currentClient = this._client;
        },
        enumerable: true,
        configurable: true
    });
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._client = null;
        this.route.params.switchMap(function (params) {
            var ret;
            var clientId = params['id'];
            //if negative client id was provided it means new client should be created for component
            if (clientId < 0) {
                _this.isNewClient = true;
                ret = Promise.resolve(new client_1.Client("", "", ""));
            }
            else {
                _this.isNewClient = false;
                try {
                    ret = _this.clientService.getClient(clientId);
                }
                catch (e) {
                    ret = Promise.reject("Unable to get client " + clientId + " " + e.Message);
                }
            }
            return ret;
        }).subscribe(function (client) { return _this.client = client; }, function (error) { return _this.error = error; });
    };
    ClientDetailsComponent.prototype.onSaveClient = function () {
        var _this = this;
        //TODO handle all failures and creating new client in more elegant way
        if (this.isNewClient) {
            this.clientService.addClient(this.client).then(function (createdClientId) { return _this.client = new client_1.Client(_this.client.code, _this.client.name, _this.client.comment, createdClientId); });
        }
        else {
            this.clientService.saveClient(this.client);
        }
    };
    ClientDetailsComponent.prototype.addSite = function (selectedSiteId) {
        this.router.navigate(['./clients/client-details/site-details', -1]);
    };
    ClientDetailsComponent.prototype.siteDetails = function (selectedSiteId) {
        this.router.navigate(['./clients/client-details/site-details', selectedSiteId]);
    };
    ClientDetailsComponent.prototype.onGoBack = function () {
        this.location.back();
    };
    return ClientDetailsComponent;
}(base_component_1.BaseComponent));
ClientDetailsComponent = __decorate([
    core_1.Component({
        selector: 'client-details',
        template: __webpack_require__(43),
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        current_data_service_1.CurrentDataService,
        common_1.Location,
        router_1.ActivatedRoute,
        router_1.Router])
], ClientDetailsComponent);
exports.ClientDetailsComponent = ClientDetailsComponent;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var client_service_1 = __webpack_require__(4);
var ClientsComponent = (function () {
    function ClientsComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getAllClients().then(function (value) { return _this.clients = value; }).catch(function (reason) { return _this.status = reason; });
    };
    ClientsComponent.prototype.onSelect = function (selectedClient) {
        this.currentClient = selectedClient;
    };
    ClientsComponent.prototype.addClient = function () {
        this.router.navigate(['./clients/client-details', -1]);
    };
    ClientsComponent.prototype.clientDetails = function (selectedClientId) {
        this.router.navigate(['./clients/client-details', selectedClientId]);
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    core_1.Component({
        selector: 'clients',
        template: __webpack_require__(44),
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        router_1.Router])
], ClientsComponent);
exports.ClientsComponent = ClientsComponent;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Client = (function () {
    function Client(code, name, comment, id) {
        if (id === void 0) { id = -1; }
        this.code = code;
        this.name = name;
        this.comment = comment;
        this.sites = new Array();
        this.id = id;
    }
    Client.prototype.getSite = function (id) {
        return this.sites.find(function (value, index, obj) { return value.id == id; });
    };
    return Client;
}());
exports.Client = Client;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Site = (function () {
    function Site(integrationType, comment, url, id) {
        if (id === void 0) { id = -1; }
        this.integrationType = integrationType;
        this.comment = comment;
        this.url = url;
        this.lmses = new Array();
        this.products = new Array();
        this.id = id;
    }
    return Site;
}());
exports.Site = Site;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(21);
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var common_1 = __webpack_require__(23);
var site_1 = __webpack_require__(14);
var base_component_1 = __webpack_require__(19);
var current_data_service_1 = __webpack_require__(5);
var client_service_1 = __webpack_require__(4);
var SiteDetailsComponent = (function (_super) {
    __extends(SiteDetailsComponent, _super);
    function SiteDetailsComponent(currentDataService, clientService, location, route) {
        var _this = _super.call(this) || this;
        _this.currentDataService = currentDataService;
        _this.clientService = clientService;
        _this.location = location;
        _this.route = route;
        _this.siteTypes = ["AICC", "Hosted", "SCORM"];
        return _this;
    }
    Object.defineProperty(SiteDetailsComponent.prototype, "site", {
        get: function () {
            return this._site;
        },
        set: function (value) {
            this._site = value;
        },
        enumerable: true,
        configurable: true
    });
    SiteDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            var ret;
            var siteId = params['id'];
            //if site id is negative it means new site is being created
            if (siteId < 0) {
                _this.site = new site_1.Site('', '', '');
                _this.isNewSite = true;
                ret = Promise.resolve(_this.site);
            }
            else {
                _this.isNewSite = false;
                if (_this.currentDataService.currentClient === undefined || _this.currentDataService.currentClient === null) {
                    ret = Promise.reject("No current client");
                }
                else if (_this.currentDataService.currentClient.getSite(siteId) === undefined) {
                    ret = Promise.reject("Site not found");
                }
                else {
                    ret = Promise.resolve(_this.currentDataService.currentClient.getSite(siteId));
                }
            }
            return ret;
        }).subscribe(function (site) { return _this.site = site; }, function (error) { return _this.error = error; });
    };
    SiteDetailsComponent.prototype.saveSite = function () {
        var _this = this;
        if (this.isNewSite) {
            this.clientService.addSiteToClient(this.currentDataService.currentClient.id, this.site).
                then(function (createdSiteId) {
                _this.site = new site_1.Site(_this.site.integrationType, _this.site.comment, _this.site.url, createdSiteId);
                _this.isNewSite = false;
            }).catch(function (error) { return _this.error = error; });
        }
        else {
            this.clientService.saveSite(this.site).catch(function (error) { return _this.error = error; });
        }
    };
    SiteDetailsComponent.prototype.addProduct = function () {
        this.productToAdd = undefined;
        this.isAddingNewProduct = true;
    };
    SiteDetailsComponent.prototype.cancelAddingProduct = function () {
        this.productToAdd = undefined;
        this.isAddingNewProduct = false;
    };
    SiteDetailsComponent.prototype.saveProductToAdd = function () {
        var _this = this;
        if (this.isAddingNewProduct && this.productToAdd !== undefined && this.productToAdd !== null) {
            this.clientService.addProductToSite(this.site.id, this.productToAdd).then(function () {
                _this.site.products.push(_this.productToAdd);
                _this.productToAdd = undefined;
                _this.isAddingNewProduct = false;
            }).catch(function (error) { return _this.error = error; });
        }
    };
    SiteDetailsComponent.prototype.removeProduct = function (prodToRemove) {
        var _this = this;
        if (prodToRemove !== undefined && prodToRemove !== null) {
            var prodIndex_1 = this.site.products.indexOf(prodToRemove);
            if (prodIndex_1 >= 0) {
                this.clientService.removeProductFromSite(this.site.id, prodToRemove).
                    then(function () { return _this.site.products.splice(prodIndex_1); }).
                    catch(function (error) { return _this.error = error; });
            }
        }
    };
    SiteDetailsComponent.prototype.onGoBack = function () {
        this.location.back();
    };
    return SiteDetailsComponent;
}(base_component_1.BaseComponent));
SiteDetailsComponent = __decorate([
    core_1.Component({
        selector: 'site-details',
        template: __webpack_require__(45)
    }),
    __metadata("design:paramtypes", [current_data_service_1.CurrentDataService,
        client_service_1.ClientService,
        common_1.Location,
        router_1.ActivatedRoute])
], SiteDetailsComponent);
exports.SiteDetailsComponent = SiteDetailsComponent;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var CounterComponent = (function () {
    function CounterComponent() {
        this.currentCount = 0;
    }
    CounterComponent.prototype.incrementCounter = function () {
        this.currentCount++;
    };
    return CounterComponent;
}());
CounterComponent = __decorate([
    core_1.Component({
        selector: 'counter',
        template: __webpack_require__(46)
    })
], CounterComponent);
exports.CounterComponent = CounterComponent;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(53);
var FetchDataComponent = (function () {
    function FetchDataComponent(http) {
        var _this = this;
        http.get('/api/SampleData/WeatherForecasts').subscribe(function (result) {
            _this.forecasts = result.json();
        });
    }
    return FetchDataComponent;
}());
FetchDataComponent = __decorate([
    core_1.Component({
        selector: 'fetchdata',
        template: __webpack_require__(47)
    }),
    __metadata("design:paramtypes", [http_1.Http])
], FetchDataComponent);
exports.FetchDataComponent = FetchDataComponent;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: __webpack_require__(48)
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent = (function () {
    function BaseComponent() {
    }
    Object.defineProperty(BaseComponent.prototype, "error", {
        get: function () {
            return this._error;
        },
        set: function (value) {
            this._error = value;
            this.isError = value !== undefined && value !== null && value != "";
        },
        enumerable: true,
        configurable: true
    });
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Setup = (function () {
    function Setup(allProducts) {
        this.allProducts = allProducts;
    }
    return Setup;
}());
exports.Setup = Setup;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(22);
var switchMap_1 = __webpack_require__(50);
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(4);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angular2_universal_1 = __webpack_require__(7);
var forms_1 = __webpack_require__(28);
var app_component_1 = __webpack_require__(30);
var navmenu_component_1 = __webpack_require__(32);
var home_component_1 = __webpack_require__(18);
var fetchdata_component_1 = __webpack_require__(17);
var counter_component_1 = __webpack_require__(16);
var clients_component_1 = __webpack_require__(12);
var client_details_component_1 = __webpack_require__(11);
var site_details_component_1 = __webpack_require__(15);
var client_service_1 = __webpack_require__(4);
var backend_service_1 = __webpack_require__(3);
var mock_backend_service_1 = __webpack_require__(33);
var current_data_service_1 = __webpack_require__(5);
var app_routing_module_1 = __webpack_require__(29);
var cases_component_1 = __webpack_require__(9);
var case_details_component_1 = __webpack_require__(8);
var new_case_component_1 = __webpack_require__(10);
/*CSSes*/
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            navmenu_component_1.NavMenuComponent,
            counter_component_1.CounterComponent,
            fetchdata_component_1.FetchDataComponent,
            home_component_1.HomeComponent,
            clients_component_1.ClientsComponent,
            client_details_component_1.ClientDetailsComponent,
            cases_component_1.CasesComponent,
            case_details_component_1.CaseDetailsComponent,
            new_case_component_1.NewCaseComponent,
            site_details_component_1.SiteDetailsComponent
        ],
        imports: [
            angular2_universal_1.UniversalModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule
        ],
        providers: [
            client_service_1.ClientService,
            { provide: backend_service_1.BackendService, useClass: mock_backend_service_1.MockBackendService },
            current_data_service_1.CurrentDataService
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(38);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(65);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(67);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @license Angular v2.0.2
 * (c) 2010-2016 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
     true ? factory(exports, __webpack_require__(0), __webpack_require__(51), __webpack_require__(55), __webpack_require__(22), __webpack_require__(52)) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';

    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    function isBlank(obj) {
        return obj === undefined || obj === null;
    }
    function isString(obj) {
        return typeof obj === 'string';
    }
    function isStringMap(obj) {
        return typeof obj === 'object' && obj !== null;
    }
    function isArray(obj) {
        return Array.isArray(obj);
    }
    var StringWrapper = (function () {
        function StringWrapper() {
        }
        StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
        StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
        StringWrapper.split = function (s, regExp) { return s.split(regExp); };
        StringWrapper.equals = function (s, s2) { return s === s2; };
        StringWrapper.stripLeft = function (s, charVal) {
            if (s && s.length) {
                var pos = 0;
                for (var i = 0; i < s.length; i++) {
                    if (s[i] != charVal)
                        break;
                    pos++;
                }
                s = s.substring(pos);
            }
            return s;
        };
        StringWrapper.stripRight = function (s, charVal) {
            if (s && s.length) {
                var pos = s.length;
                for (var i = s.length - 1; i >= 0; i--) {
                    if (s[i] != charVal)
                        break;
                    pos--;
                }
                s = s.substring(0, pos);
            }
            return s;
        };
        StringWrapper.replace = function (s, from, replace) {
            return s.replace(from, replace);
        };
        StringWrapper.replaceAll = function (s, from, replace) {
            return s.replace(from, replace);
        };
        StringWrapper.slice = function (s, from, to) {
            if (from === void 0) { from = 0; }
            if (to === void 0) { to = null; }
            return s.slice(from, to === null ? undefined : to);
        };
        StringWrapper.replaceAllMapped = function (s, from, cb) {
            return s.replace(from, function () {
                var matches = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    matches[_i - 0] = arguments[_i];
                }
                // Remove offset & string from the result array
                matches.splice(-2, 2);
                // The callback receives match, p1, ..., pn
                return cb(matches);
            });
        };
        StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
        StringWrapper.compare = function (a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        };
        return StringWrapper;
    }());
    var NumberWrapper = (function () {
        function NumberWrapper() {
        }
        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
        NumberWrapper.equal = function (a, b) { return a === b; };
        NumberWrapper.parseIntAutoRadix = function (text) {
            var result = parseInt(text);
            if (isNaN(result)) {
                throw new Error('Invalid integer literal when parsing ' + text);
            }
            return result;
        };
        NumberWrapper.parseInt = function (text, radix) {
            if (radix == 10) {
                if (/^(\-|\+)?[0-9]+$/.test(text)) {
                    return parseInt(text, radix);
                }
            }
            else if (radix == 16) {
                if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
                    return parseInt(text, radix);
                }
            }
            else {
                var result = parseInt(text, radix);
                if (!isNaN(result)) {
                    return result;
                }
            }
            throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
        };
        Object.defineProperty(NumberWrapper, "NaN", {
            get: function () { return NaN; },
            enumerable: true,
            configurable: true
        });
        NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
        NumberWrapper.isNaN = function (value) { return isNaN(value); };
        NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
        return NumberWrapper;
    }());
    // JS has NaN !== NaN
    function looseIdentical(a, b) {
        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
    }
    function normalizeBool(obj) {
        return isBlank(obj) ? false : obj;
    }
    function isJsObject(o) {
        return o !== null && (typeof o === 'function' || typeof o === 'object');
    }
    function isPrimitive(obj) {
        return !isJsObject(obj);
    }
    function hasConstructor(value, type) {
        return value.constructor === type;
    }

    /**
     * Base class for control directives.
     *
     * Only used internally in the forms module.
     *
     * @stable
     */
    var AbstractControlDirective = (function () {
        function AbstractControlDirective() {
        }
        Object.defineProperty(AbstractControlDirective.prototype, "control", {
            get: function () { throw new Error('unimplemented'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "value", {
            get: function () { return isPresent(this.control) ? this.control.value : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
            get: function () { return isPresent(this.control) ? this.control.valid : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
            get: function () { return isPresent(this.control) ? this.control.invalid : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
            get: function () { return isPresent(this.control) ? this.control.pending : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
            get: function () {
                return isPresent(this.control) ? this.control.errors : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
            get: function () { return isPresent(this.control) ? this.control.pristine : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
            get: function () { return isPresent(this.control) ? this.control.dirty : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
            get: function () { return isPresent(this.control) ? this.control.touched : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
            get: function () { return isPresent(this.control) ? this.control.untouched : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
            get: function () { return isPresent(this.control) ? this.control.disabled : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
            get: function () { return isPresent(this.control) ? this.control.enabled : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
            get: function () {
                return isPresent(this.control) ? this.control.statusChanges : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
            get: function () {
                return isPresent(this.control) ? this.control.valueChanges : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "path", {
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        AbstractControlDirective.prototype.reset = function (value) {
            if (value === void 0) { value = undefined; }
            if (isPresent(this.control))
                this.control.reset(value);
        };
        return AbstractControlDirective;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$1 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * A directive that contains multiple {@link NgControl}s.
     *
     * Only used by the forms module.
     *
     * @stable
     */
    var ControlContainer = (function (_super) {
        __extends$1(ControlContainer, _super);
        function ControlContainer() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(ControlContainer.prototype, "formDirective", {
            /**
             * Get the form to which this container belongs.
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlContainer.prototype, "path", {
            /**
             * Get the path to this container.
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        return ControlContainer;
    }(AbstractControlDirective));

    // Safari and Internet Explorer do not support the iterable parameter to the
    // Map constructor.  We work around that by manually adding the items.
    var createMapFromPairs = (function () {
        try {
            if (new Map([[1, 2]]).size === 1) {
                return function createMapFromPairs(pairs) { return new Map(pairs); };
            }
        }
        catch (e) {
        }
        return function createMapAndPopulateFromPairs(pairs) {
            var map = new Map();
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                map.set(pair[0], pair[1]);
            }
            return map;
        };
    })();
    var _clearValues = (function () {
        if ((new Map()).keys().next) {
            return function _clearValues(m) {
                var keyIterator = m.keys();
                var k;
                while (!((k = keyIterator.next()).done)) {
                    m.set(k.value, null);
                }
            };
        }
        else {
            return function _clearValuesWithForeEach(m) {
                m.forEach(function (v, k) { m.set(k, null); });
            };
        }
    })();
    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
    var _arrayFromMap = (function () {
        try {
            if ((new Map()).values().next) {
                return function createArrayFromMap(m, getValues) {
                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
                };
            }
        }
        catch (e) {
        }
        return function createArrayFromMapWithForeach(m, getValues) {
            var res = new Array(m.size), i = 0;
            m.forEach(function (v, k) {
                res[i] = getValues ? v : k;
                i++;
            });
            return res;
        };
    })();
    var MapWrapper = (function () {
        function MapWrapper() {
        }
        MapWrapper.createFromStringMap = function (stringMap) {
            var result = new Map();
            for (var prop in stringMap) {
                result.set(prop, stringMap[prop]);
            }
            return result;
        };
        MapWrapper.toStringMap = function (m) {
            var r = {};
            m.forEach(function (v, k) { return r[k] = v; });
            return r;
        };
        MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
        MapWrapper.iterable = function (m) { return m; };
        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
        return MapWrapper;
    }());
    /**
     * Wraps Javascript Objects
     */
    var StringMapWrapper = (function () {
        function StringMapWrapper() {
        }
        StringMapWrapper.merge = function (m1, m2) {
            var m = {};
            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
                var k = _a[_i];
                m[k] = m1[k];
            }
            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
                var k = _c[_b];
                m[k] = m2[k];
            }
            return m;
        };
        StringMapWrapper.equals = function (m1, m2) {
            var k1 = Object.keys(m1);
            var k2 = Object.keys(m2);
            if (k1.length != k2.length) {
                return false;
            }
            for (var i = 0; i < k1.length; i++) {
                var key = k1[i];
                if (m1[key] !== m2[key]) {
                    return false;
                }
            }
            return true;
        };
        return StringMapWrapper;
    }());
    var ListWrapper = (function () {
        function ListWrapper() {
        }
        // JS has no way to express a statically fixed size list, but dart does so we
        // keep both methods.
        ListWrapper.createFixedSize = function (size) { return new Array(size); };
        ListWrapper.createGrowableSize = function (size) { return new Array(size); };
        ListWrapper.clone = function (array) { return array.slice(0); };
        ListWrapper.forEachWithIndex = function (array, fn) {
            for (var i = 0; i < array.length; i++) {
                fn(array[i], i);
            }
        };
        ListWrapper.first = function (array) {
            if (!array)
                return null;
            return array[0];
        };
        ListWrapper.last = function (array) {
            if (!array || array.length == 0)
                return null;
            return array[array.length - 1];
        };
        ListWrapper.indexOf = function (array, value, startIndex) {
            if (startIndex === void 0) { startIndex = 0; }
            return array.indexOf(value, startIndex);
        };
        ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
        ListWrapper.reversed = function (array) {
            var a = ListWrapper.clone(array);
            return a.reverse();
        };
        ListWrapper.concat = function (a, b) { return a.concat(b); };
        ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
        ListWrapper.removeAt = function (list, index) {
            var res = list[index];
            list.splice(index, 1);
            return res;
        };
        ListWrapper.removeAll = function (list, items) {
            for (var i = 0; i < items.length; ++i) {
                var index = list.indexOf(items[i]);
                list.splice(index, 1);
            }
        };
        ListWrapper.remove = function (list, el) {
            var index = list.indexOf(el);
            if (index > -1) {
                list.splice(index, 1);
                return true;
            }
            return false;
        };
        ListWrapper.clear = function (list) { list.length = 0; };
        ListWrapper.isEmpty = function (list) { return list.length == 0; };
        ListWrapper.fill = function (list, value, start, end) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = null; }
            list.fill(value, start, end === null ? list.length : end);
        };
        ListWrapper.equals = function (a, b) {
            if (a.length != b.length)
                return false;
            for (var i = 0; i < a.length; ++i) {
                if (a[i] !== b[i])
                    return false;
            }
            return true;
        };
        ListWrapper.slice = function (l, from, to) {
            if (from === void 0) { from = 0; }
            if (to === void 0) { to = null; }
            return l.slice(from, to === null ? undefined : to);
        };
        ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
        ListWrapper.sort = function (l, compareFn) {
            if (isPresent(compareFn)) {
                l.sort(compareFn);
            }
            else {
                l.sort();
            }
        };
        ListWrapper.toString = function (l) { return l.toString(); };
        ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
        ListWrapper.maximum = function (list, predicate) {
            if (list.length == 0) {
                return null;
            }
            var solution = null;
            var maxValue = -Infinity;
            for (var index = 0; index < list.length; index++) {
                var candidate = list[index];
                if (isBlank(candidate)) {
                    continue;
                }
                var candidateValue = predicate(candidate);
                if (candidateValue > maxValue) {
                    solution = candidate;
                    maxValue = candidateValue;
                }
            }
            return solution;
        };
        ListWrapper.flatten = function (list) {
            var target = [];
            _flattenArray(list, target);
            return target;
        };
        ListWrapper.addAll = function (list, source) {
            for (var i = 0; i < source.length; i++) {
                list.push(source[i]);
            }
        };
        return ListWrapper;
    }());
    function _flattenArray(source, target) {
        if (isPresent(source)) {
            for (var i = 0; i < source.length; i++) {
                var item = source[i];
                if (isArray(item)) {
                    _flattenArray(item, target);
                }
                else {
                    target.push(item);
                }
            }
        }
        return target;
    }

    var isPromise = _angular_core.__core_private__.isPromise;

    /**
     * Providers for validators to be used for {@link FormControl}s in a form.
     *
     * Provide this using `multi: true` to add validators.
     *
     * ### Example
     *
     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
     * @stable
     */
    var NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
    /**
     * Providers for asynchronous validators to be used for {@link FormControl}s
     * in a form.
     *
     * Provide this using `multi: true` to add validators.
     *
     * See {@link NG_VALIDATORS} for more details.
     *
     * @stable
     */
    var NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
    /**
     * Provides a set of validators used by form controls.
     *
     * A validator is a function that processes a {@link FormControl} or collection of
     * controls and returns a map of errors. A null map means that validation has passed.
     *
     * ### Example
     *
     * ```typescript
     * var loginControl = new FormControl("", Validators.required)
     * ```
     *
     * @stable
     */
    var Validators = (function () {
        function Validators() {
        }
        /**
         * Validator that requires controls to have a non-empty value.
         */
        Validators.required = function (control) {
            return isBlank(control.value) || (isString(control.value) && control.value == '') ?
                { 'required': true } :
                null;
        };
        /**
         * Validator that requires controls to have a value of a minimum length.
         */
        Validators.minLength = function (minLength) {
            return function (control) {
                if (isPresent(Validators.required(control)))
                    return null;
                var v = control.value;
                return v.length < minLength ?
                    { 'minlength': { 'requiredLength': minLength, 'actualLength': v.length } } :
                    null;
            };
        };
        /**
         * Validator that requires controls to have a value of a maximum length.
         */
        Validators.maxLength = function (maxLength) {
            return function (control) {
                if (isPresent(Validators.required(control)))
                    return null;
                var v = control.value;
                return v.length > maxLength ?
                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': v.length } } :
                    null;
            };
        };
        /**
         * Validator that requires a control to match a regex to its value.
         */
        Validators.pattern = function (pattern) {
            return function (control) {
                var regex = new RegExp("^" + pattern + "$");
                var v = control.value;
                return regex.test(v) ? null :
                    { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': v } };
            };
        };
        /**
         * No-op validator.
         */
        Validators.nullValidator = function (c) { return null; };
        /**
         * Compose multiple validators into a single function that returns the union
         * of the individual error maps.
         */
        Validators.compose = function (validators) {
            if (!validators)
                return null;
            var presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0)
                return null;
            return function (control) {
                return _mergeErrors(_executeValidators(control, presentValidators));
            };
        };
        Validators.composeAsync = function (validators) {
            if (!validators)
                return null;
            var presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0)
                return null;
            return function (control) {
                var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
                return Promise.all(promises).then(_mergeErrors);
            };
        };
        return Validators;
    }());
    function _convertToPromise(obj) {
        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
    }
    function _executeValidators(control, validators) {
        return validators.map(function (v) { return v(control); });
    }
    function _executeAsyncValidators(control, validators) {
        return validators.map(function (v) { return v(control); });
    }
    function _mergeErrors(arrayOfErrors) {
        var res = arrayOfErrors.reduce(function (res, errors) {
            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
        }, {});
        return Object.keys(res).length === 0 ? null : res;
    }

    /**
     * Used to provide a {@link ControlValueAccessor} for form controls.
     *
     * See {@link DefaultValueAccessor} for how to implement one.
     * @stable
     */
    var NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');

    var CHECKBOX_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
        multi: true
    };
    /**
     * The accessor for writing a value and listening to changes on a checkbox input element.
     *
     *  ### Example
     *  ```
     *  <input type="checkbox" name="rememberLogin" ngModel>
     *  ```
     *
     *  @stable
     */
    var CheckboxControlValueAccessor = (function () {
        function CheckboxControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
        };
        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        CheckboxControlValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                        providers: [CHECKBOX_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        CheckboxControlValueAccessor.ctorParameters = [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
        ];
        return CheckboxControlValueAccessor;
    }());

    var DEFAULT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
        multi: true
    };
    /**
     * The default accessor for writing a value and listening to changes that is used by the
     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
     *
     *  ### Example
     *  ```
     *  <input type="text" name="searchQuery" ngModel>
     *  ```
     *
     *  @stable
     */
    var DefaultValueAccessor = (function () {
        function DefaultValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        DefaultValueAccessor.prototype.writeValue = function (value) {
            var normalizedValue = isBlank(value) ? '' : value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        };
        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        DefaultValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                        // TODO: vsavkin replace the above selector with the one below it once
                        // https://github.com/angular/angular/issues/3011 is implemented
                        // selector: '[ngControl],[ngModel],[ngFormControl]',
                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                        providers: [DEFAULT_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        DefaultValueAccessor.ctorParameters = [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
        ];
        return DefaultValueAccessor;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function normalizeValidator(validator) {
        if (validator.validate !== undefined) {
            return function (c) { return validator.validate(c); };
        }
        else {
            return validator;
        }
    }
    function normalizeAsyncValidator(validator) {
        if (validator.validate !== undefined) {
            return function (c) { return validator.validate(c); };
        }
        else {
            return validator;
        }
    }

    var NUMBER_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
        multi: true
    };
    /**
     * The accessor for writing a number value and listening to changes that is used by the
     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
     *
     *  ### Example
     *  ```
     *  <input type="number" [(ngModel)]="age">
     *  ```
     */
    var NumberValueAccessor = (function () {
        function NumberValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        NumberValueAccessor.prototype.writeValue = function (value) {
            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
            var normalizedValue = isBlank(value) ? '' : value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        };
        NumberValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
        };
        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        NumberValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                        host: {
                            '(change)': 'onChange($event.target.value)',
                            '(input)': 'onChange($event.target.value)',
                            '(blur)': 'onTouched()'
                        },
                        providers: [NUMBER_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        NumberValueAccessor.ctorParameters = [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
        ];
        return NumberValueAccessor;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$2 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    function unimplemented() {
        throw new Error('unimplemented');
    }
    /**
     * A base class that all control directive extend.
     * It binds a {@link FormControl} object to a DOM element.
     *
     * Used internally by Angular forms.
     *
     * @stable
     */
    var NgControl = (function (_super) {
        __extends$2(NgControl, _super);
        function NgControl() {
            _super.apply(this, arguments);
            /** @internal */
            this._parent = null;
            this.name = null;
            this.valueAccessor = null;
            /** @internal */
            this._rawValidators = [];
            /** @internal */
            this._rawAsyncValidators = [];
        }
        Object.defineProperty(NgControl.prototype, "validator", {
            get: function () { return unimplemented(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgControl.prototype, "asyncValidator", {
            get: function () { return unimplemented(); },
            enumerable: true,
            configurable: true
        });
        return NgControl;
    }(AbstractControlDirective));

    var RADIO_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
        multi: true
    };
    /**
     * Internal class used by Angular to uncheck radio buttons with the matching name.
     */
    var RadioControlRegistry = (function () {
        function RadioControlRegistry() {
            this._accessors = [];
        }
        RadioControlRegistry.prototype.add = function (control, accessor) {
            this._accessors.push([control, accessor]);
        };
        RadioControlRegistry.prototype.remove = function (accessor) {
            var indexToRemove = -1;
            for (var i = 0; i < this._accessors.length; ++i) {
                if (this._accessors[i][1] === accessor) {
                    indexToRemove = i;
                }
            }
            ListWrapper.removeAt(this._accessors, indexToRemove);
        };
        RadioControlRegistry.prototype.select = function (accessor) {
            var _this = this;
            this._accessors.forEach(function (c) {
                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                    c[1].fireUncheck(accessor.value);
                }
            });
        };
        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
            if (!controlPair[0].control)
                return false;
            return controlPair[0]._parent === accessor._control._parent &&
                controlPair[1].name === accessor.name;
        };
        RadioControlRegistry.decorators = [
            { type: _angular_core.Injectable },
        ];
        /** @nocollapse */
        RadioControlRegistry.ctorParameters = [];
        return RadioControlRegistry;
    }());
    /**
     * @whatItDoes  Writes radio control values and listens to radio control changes.
     *
     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
     * to keep the view synced with the {@link FormControl} model.
     *
     * @howToUse
     *
     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
     * value accessor will be active on any radio control that has a form directive. You do
     * **not** need to add a special selector to activate it.
     *
     * ### How to use radio buttons with form directives
     *
     * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
     * in the same group have the same `name` attribute.  Radio buttons with different `name`
     * attributes do not affect each other.
     *
     * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
     *
     * When using radio buttons in a reactive form, radio buttons in the same group should have the
     * same `formControlName`. You can also add a `name` attribute, but it's optional.
     *
     * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
     *
     *  * **npm package**: `@angular/forms`
     *
     *  @stable
     */
    var RadioControlValueAccessor = (function () {
        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._registry = _registry;
            this._injector = _injector;
            this.onChange = function () { };
            this.onTouched = function () { };
        }
        RadioControlValueAccessor.prototype.ngOnInit = function () {
            this._control = this._injector.get(NgControl);
            this._checkName();
            this._registry.add(this._control, this);
        };
        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
        RadioControlValueAccessor.prototype.writeValue = function (value) {
            this._state = value === this.value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
        };
        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this._fn = fn;
            this.onChange = function () {
                fn(_this.value);
                _this._registry.select(_this);
            };
        };
        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        RadioControlValueAccessor.prototype._checkName = function () {
            if (this.name && this.formControlName && this.name !== this.formControlName) {
                this._throwNameError();
            }
            if (!this.name && this.formControlName)
                this.name = this.formControlName;
        };
        RadioControlValueAccessor.prototype._throwNameError = function () {
            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
        };
        RadioControlValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                        providers: [RADIO_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        RadioControlValueAccessor.ctorParameters = [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
            { type: RadioControlRegistry, },
            { type: _angular_core.Injector, },
        ];
        RadioControlValueAccessor.propDecorators = {
            'name': [{ type: _angular_core.Input },],
            'formControlName': [{ type: _angular_core.Input },],
            'value': [{ type: _angular_core.Input },],
        };
        return RadioControlValueAccessor;
    }());

    var SELECT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
        multi: true
    };
    function _buildValueString(id, value) {
        if (isBlank(id))
            return "" + value;
        if (!isPrimitive(value))
            value = 'Object';
        return StringWrapper.slice(id + ": " + value, 0, 50);
    }
    function _extractId(valueString) {
        return valueString.split(':')[0];
    }
    /**
     * @whatItDoes Writes values and listens to changes on a select element.
     *
     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
     * to keep the view synced with the {@link FormControl} model.
     *
     * @howToUse
     *
     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
     * value accessor will be active on any select control that has a form directive. You do
     * **not** need to add a special selector to activate it.
     *
     * ### How to use select controls with form directives
     *
     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
     * attribute to the main `<select>` tag.
     *
     * If your option values are simple strings, you can bind to the normal `value` property
     * on the option.  If your option values happen to be objects (and you'd like to save the
     * selection in your form as an object), use `ngValue` instead:
     *
     * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
     *
     * In reactive forms, you'll also want to add your form directive (`formControlName` or
     * `formControl`) on the main `<select>` tag. Like in the former example, you have the
     * choice of binding to the  `value` or `ngValue` property on the select's options.
     *
     * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
     *
     * Note: We listen to the 'change' event because 'input' events aren't fired
     * for selects in Firefox and IE:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
     *
     * * **npm package**: `@angular/forms`
     *
     * @stable
     */
    var SelectControlValueAccessor = (function () {
        function SelectControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            /** @internal */
            this._optionMap = new Map();
            /** @internal */
            this._idCounter = 0;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        SelectControlValueAccessor.prototype.writeValue = function (value) {
            this.value = value;
            var valueString = _buildValueString(this._getOptionId(value), value);
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
        };
        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this.onChange = function (valueString) {
                _this.value = valueString;
                fn(_this._getOptionValue(valueString));
            };
        };
        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        /** @internal */
        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
        /** @internal */
        SelectControlValueAccessor.prototype._getOptionId = function (value) {
            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
                var id = _a[_i];
                if (looseIdentical(this._optionMap.get(id), value))
                    return id;
            }
            return null;
        };
        /** @internal */
        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
            var value = this._optionMap.get(_extractId(valueString));
            return isPresent(value) ? value : valueString;
        };
        SelectControlValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                        providers: [SELECT_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        SelectControlValueAccessor.ctorParameters = [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
        ];
        return SelectControlValueAccessor;
    }());
    /**
     * @whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * @howToUse
     *
     * See docs for {@link SelectControlValueAccessor} for usage examples.
     *
     * @stable
     */
    var NgSelectOption = (function () {
        function NgSelectOption(_element, _renderer, _select) {
            this._element = _element;
            this._renderer = _renderer;
            this._select = _select;
            if (isPresent(this._select))
                this.id = this._select._registerOption();
        }
        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
            set: function (value) {
                if (this._select == null)
                    return;
                this._select._optionMap.set(this.id, value);
                this._setElementValue(_buildValueString(this.id, value));
                this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectOption.prototype, "value", {
            set: function (value) {
                this._setElementValue(value);
                if (isPresent(this._select))
                    this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        NgSelectOption.prototype._setElementValue = function (value) {
            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
        };
        NgSelectOption.prototype.ngOnDestroy = function () {
            if (isPresent(this._select)) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        };
        NgSelectOption.decorators = [
            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
        ];
        /** @nocollapse */
        NgSelectOption.ctorParameters = [
            { type: _angular_core.ElementRef, },
            { type: _angular_core.Renderer, },
            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
        ];
        NgSelectOption.propDecorators = {
            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
            'value': [{ type: _angular_core.Input, args: ['value',] },],
        };
        return NgSelectOption;
    }());

    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
        multi: true
    };
    function _buildValueString$1(id, value) {
        if (isBlank(id))
            return "" + value;
        if (isString(value))
            value = "'" + value + "'";
        if (!isPrimitive(value))
            value = 'Object';
        return StringWrapper.slice(id + ": " + value, 0, 50);
    }
    function _extractId$1(valueString) {
        return valueString.split(':')[0];
    }
    /**
     * The accessor for writing a value and listening to changes on a select element.
     *
     * @stable
     */
    var SelectMultipleControlValueAccessor = (function () {
        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            /** @internal */
            this._optionMap = new Map();
            /** @internal */
            this._idCounter = 0;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
            var _this = this;
            this.value = value;
            if (value == null)
                return;
            var values = value;
            // convert values to ids
            var ids = values.map(function (v) { return _this._getOptionId(v); });
            this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
        };
        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this.onChange = function (_) {
                var selected = [];
                if (_.hasOwnProperty('selectedOptions')) {
                    var options = _.selectedOptions;
                    for (var i = 0; i < options.length; i++) {
                        var opt = options.item(i);
                        var val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
                else {
                    var options = _.options;
                    for (var i = 0; i < options.length; i++) {
                        var opt = options.item(i);
                        if (opt.selected) {
                            var val = _this._getOptionValue(opt.value);
                            selected.push(val);
                        }
                    }
                }
                fn(selected);
            };
        };
        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        /** @internal */
        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
            var id = (this._idCounter++).toString();
            this._optionMap.set(id, value);
            return id;
        };
        /** @internal */
        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
                var id = _a[_i];
                if (looseIdentical(this._optionMap.get(id)._value, value))
                    return id;
            }
            return null;
        };
        /** @internal */
        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
            var opt = this._optionMap.get(_extractId$1(valueString));
            return isPresent(opt) ? opt._value : valueString;
        };
        SelectMultipleControlValueAccessor.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        SelectMultipleControlValueAccessor.ctorParameters = [
            { type: _angular_core.Renderer, },
            { type: _angular_core.ElementRef, },
        ];
        return SelectMultipleControlValueAccessor;
    }());
    /**
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * ### Example
     *
     * ```
     * <select multiple name="city" ngModel>
     *   <option *ngFor="let c of cities" [value]="c"></option>
     * </select>
     * ```
     */
    var NgSelectMultipleOption = (function () {
        function NgSelectMultipleOption(_element, _renderer, _select) {
            this._element = _element;
            this._renderer = _renderer;
            this._select = _select;
            if (isPresent(this._select)) {
                this.id = this._select._registerOption(this);
            }
        }
        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
            set: function (value) {
                if (this._select == null)
                    return;
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
            set: function (value) {
                if (isPresent(this._select)) {
                    this._value = value;
                    this._setElementValue(_buildValueString$1(this.id, value));
                    this._select.writeValue(this._select.value);
                }
                else {
                    this._setElementValue(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        NgSelectMultipleOption.prototype._setElementValue = function (value) {
            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
        };
        /** @internal */
        NgSelectMultipleOption.prototype._setSelected = function (selected) {
            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
        };
        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
            if (isPresent(this._select)) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        };
        NgSelectMultipleOption.decorators = [
            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
        ];
        /** @nocollapse */
        NgSelectMultipleOption.ctorParameters = [
            { type: _angular_core.ElementRef, },
            { type: _angular_core.Renderer, },
            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
        ];
        NgSelectMultipleOption.propDecorators = {
            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
            'value': [{ type: _angular_core.Input, args: ['value',] },],
        };
        return NgSelectMultipleOption;
    }());

    function controlPath(name, parent) {
        var p = ListWrapper.clone(parent.path);
        p.push(name);
        return p;
    }
    function setUpControl(control, dir) {
        if (!control)
            _throwError(dir, 'Cannot find control with');
        if (!dir.valueAccessor)
            _throwError(dir, 'No value accessor for form control with');
        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
        dir.valueAccessor.writeValue(control.value);
        // view -> model
        dir.valueAccessor.registerOnChange(function (newValue) {
            dir.viewToModelUpdate(newValue);
            control.markAsDirty();
            control.setValue(newValue, { emitModelToViewChange: false });
        });
        // touched
        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
        control.registerOnChange(function (newValue, emitModelEvent) {
            // control -> view
            dir.valueAccessor.writeValue(newValue);
            // control -> ngModel
            if (emitModelEvent)
                dir.viewToModelUpdate(newValue);
        });
        if (dir.valueAccessor.setDisabledState) {
            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
        }
        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
        dir._rawValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange)
                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
        });
        dir._rawAsyncValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange)
                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
        });
    }
    function cleanUpControl(control, dir) {
        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
        dir._rawValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
        dir._rawAsyncValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
        if (control)
            control._clearChangeFns();
    }
    function setUpFormContainer(control, dir) {
        if (isBlank(control))
            _throwError(dir, 'Cannot find control with');
        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    }
    function _noControlError(dir) {
        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
    }
    function _throwError(dir, message) {
        var messageEnd;
        if (dir.path.length > 1) {
            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
        }
        else if (dir.path[0]) {
            messageEnd = "name: '" + dir.path + "'";
        }
        else {
            messageEnd = 'unspecified name attribute';
        }
        throw new Error(message + " " + messageEnd);
    }
    function composeValidators(validators) {
        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
    }
    function composeAsyncValidators(validators) {
        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
            null;
    }
    function isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model'))
            return false;
        var change = changes['model'];
        if (change.isFirstChange())
            return true;
        return !looseIdentical(viewModel, change.currentValue);
    }
    function isBuiltInAccessor(valueAccessor) {
        return (hasConstructor(valueAccessor, CheckboxControlValueAccessor) ||
            hasConstructor(valueAccessor, NumberValueAccessor) ||
            hasConstructor(valueAccessor, SelectControlValueAccessor) ||
            hasConstructor(valueAccessor, SelectMultipleControlValueAccessor) ||
            hasConstructor(valueAccessor, RadioControlValueAccessor));
    }
    // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
    function selectValueAccessor(dir, valueAccessors) {
        if (!valueAccessors)
            return null;
        var defaultAccessor;
        var builtinAccessor;
        var customAccessor;
        valueAccessors.forEach(function (v) {
            if (hasConstructor(v, DefaultValueAccessor)) {
                defaultAccessor = v;
            }
            else if (isBuiltInAccessor(v)) {
                if (isPresent(builtinAccessor))
                    _throwError(dir, 'More than one built-in value accessor matches form control with');
                builtinAccessor = v;
            }
            else {
                if (isPresent(customAccessor))
                    _throwError(dir, 'More than one custom value accessor matches form control with');
                customAccessor = v;
            }
        });
        if (isPresent(customAccessor))
            return customAccessor;
        if (isPresent(builtinAccessor))
            return builtinAccessor;
        if (isPresent(defaultAccessor))
            return defaultAccessor;
        _throwError(dir, 'No valid value accessor for form control with');
        return null;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
     *
     * @stable
     */
    var AbstractFormGroupDirective = (function (_super) {
        __extends(AbstractFormGroupDirective, _super);
        function AbstractFormGroupDirective() {
            _super.apply(this, arguments);
        }
        AbstractFormGroupDirective.prototype.ngOnInit = function () {
            this._checkParentType();
            this.formDirective.addFormGroup(this);
        };
        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeFormGroup(this);
            }
        };
        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
            /**
             * Get the {@link FormGroup} backing this binding.
             */
            get: function () { return this.formDirective.getFormGroup(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
            /**
             * Get the path to this control group.
             */
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
            /**
             * Get the {@link Form} to which this group belongs.
             */
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
            get: function () { return composeValidators(this._validators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
            get: function () { return composeAsyncValidators(this._asyncValidators); },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        AbstractFormGroupDirective.prototype._checkParentType = function () { };
        return AbstractFormGroupDirective;
    }(ControlContainer));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$3 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var AbstractControlStatus = (function () {
        function AbstractControlStatus(cd) {
            this._cd = cd;
        }
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
            get: function () {
                return isPresent(this._cd.control) ? this._cd.control.untouched : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
            get: function () {
                return isPresent(this._cd.control) ? this._cd.control.touched : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
            get: function () {
                return isPresent(this._cd.control) ? this._cd.control.pristine : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
            get: function () {
                return isPresent(this._cd.control) ? this._cd.control.dirty : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
            get: function () {
                return isPresent(this._cd.control) ? this._cd.control.valid : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
            get: function () {
                return isPresent(this._cd.control) ? this._cd.control.invalid : false;
            },
            enumerable: true,
            configurable: true
        });
        return AbstractControlStatus;
    }());
    var ngControlStatusHost = {
        '[class.ng-untouched]': 'ngClassUntouched',
        '[class.ng-touched]': 'ngClassTouched',
        '[class.ng-pristine]': 'ngClassPristine',
        '[class.ng-dirty]': 'ngClassDirty',
        '[class.ng-valid]': 'ngClassValid',
        '[class.ng-invalid]': 'ngClassInvalid'
    };
    /**
     * Directive automatically applied to Angular form controls that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * @stable
     */
    var NgControlStatus = (function (_super) {
        __extends$3(NgControlStatus, _super);
        function NgControlStatus(cd) {
            _super.call(this, cd);
        }
        NgControlStatus.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
        ];
        /** @nocollapse */
        NgControlStatus.ctorParameters = [
            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
        ];
        return NgControlStatus;
    }(AbstractControlStatus));
    /**
     * Directive automatically applied to Angular form groups that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * @stable
     */
    var NgControlStatusGroup = (function (_super) {
        __extends$3(NgControlStatusGroup, _super);
        function NgControlStatusGroup(cd) {
            _super.call(this, cd);
        }
        NgControlStatusGroup.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                        host: ngControlStatusHost
                    },] },
        ];
        /** @nocollapse */
        NgControlStatusGroup.ctorParameters = [
            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
        ];
        return NgControlStatusGroup;
    }(AbstractControlStatus));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$5 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * Use by directives and components to emit custom Events.
     *
     * ### Examples
     *
     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
     * title gets clicked:
     *
     * ```
     * @Component({
     *   selector: 'zippy',
     *   template: `
     *   <div class="zippy">
     *     <div (click)="toggle()">Toggle</div>
     *     <div [hidden]="!visible">
     *       <ng-content></ng-content>
     *     </div>
     *  </div>`})
     * export class Zippy {
     *   visible: boolean = true;
     *   @Output() open: EventEmitter<any> = new EventEmitter();
     *   @Output() close: EventEmitter<any> = new EventEmitter();
     *
     *   toggle() {
     *     this.visible = !this.visible;
     *     if (this.visible) {
     *       this.open.emit(null);
     *     } else {
     *       this.close.emit(null);
     *     }
     *   }
     * }
     * ```
     *
     * The events payload can be accessed by the parameter `$event` on the components output event
     * handler:
     *
     * ```
     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
     * ```
     *
     * Uses Rx.Observable but provides an adapter to make it work as specified here:
     * https://github.com/jhusain/observable-spec
     *
     * Once a reference implementation of the spec is available, switch to it.
     * @stable
     */
    var EventEmitter = (function (_super) {
        __extends$5(EventEmitter, _super);
        /**
         * Creates an instance of [EventEmitter], which depending on [isAsync],
         * delivers events synchronously or asynchronously.
         */
        function EventEmitter(isAsync) {
            if (isAsync === void 0) { isAsync = false; }
            _super.call(this);
            this.__isAsync = isAsync;
        }
        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
            var schedulerFn;
            var errorFn = function (err) { return null; };
            var completeFn = function () { return null; };
            if (generatorOrNext && typeof generatorOrNext === 'object') {
                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
                    setTimeout(function () { return generatorOrNext.next(value); });
                } : function (value /** TODO #9100 */) { generatorOrNext.next(value); };
                if (generatorOrNext.error) {
                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
                        function (err) { generatorOrNext.error(err); };
                }
                if (generatorOrNext.complete) {
                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
                        function () { generatorOrNext.complete(); };
                }
            }
            else {
                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
                    setTimeout(function () { return generatorOrNext(value); });
                } : function (value /** TODO #9100 */) { generatorOrNext(value); };
                if (error) {
                    errorFn =
                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
                }
                if (complete) {
                    completeFn =
                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
                }
            }
            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
        };
        return EventEmitter;
    }(rxjs_Subject.Subject));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$6 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
     */
    var VALID = 'VALID';
    /**
     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
     */
    var INVALID = 'INVALID';
    /**
     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
     * errors are not yet available for the input value.
     */
    var PENDING = 'PENDING';
    /**
     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
     * calculations of validity or value.
     */
    var DISABLED = 'DISABLED';
    function _find(control, path, delimiter) {
        if (isBlank(path))
            return null;
        if (!(path instanceof Array)) {
            path = path.split(delimiter);
        }
        if (path instanceof Array && ListWrapper.isEmpty(path))
            return null;
        return path.reduce(function (v, name) {
            if (v instanceof FormGroup) {
                return isPresent(v.controls[name]) ? v.controls[name] : null;
            }
            else if (v instanceof FormArray) {
                var index = name;
                return isPresent(v.at(index)) ? v.at(index) : null;
            }
            else {
                return null;
            }
        }, control);
    }
    function toObservable(r) {
        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
    }
    function coerceToValidator(validator) {
        return Array.isArray(validator) ? composeValidators(validator) : validator;
    }
    function coerceToAsyncValidator(asyncValidator) {
        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
    }
    /**
     * @whatItDoes This is the base class for {@link FormControl}, {@link FormGroup}, and
     * {@link FormArray}.
     *
     * It provides some of the shared behavior that all controls and groups of controls have, like
     * running validators, calculating status, and resetting state. It also defines the properties
     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
     * instantiated directly.
     *
     * @stable
     */
    var AbstractControl = (function () {
        function AbstractControl(validator, asyncValidator) {
            this.validator = validator;
            this.asyncValidator = asyncValidator;
            /** @internal */
            this._onCollectionChange = function () { };
            this._pristine = true;
            this._touched = false;
            /** @internal */
            this._onDisabledChange = [];
        }
        Object.defineProperty(AbstractControl.prototype, "value", {
            /**
             * The value of the control.
             */
            get: function () { return this._value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "status", {
            /**
             * The validation status of the control. There are four possible
             * validation statuses:
             *
             * * **VALID**:  control has passed all validation checks
             * * **INVALID**: control has failed at least one validation check
             * * **PENDING**: control is in the midst of conducting a validation check
             * * **DISABLED**: control is exempt from validation checks
             *
             * These statuses are mutually exclusive, so a control cannot be
             * both valid AND invalid or invalid AND disabled.
             */
            get: function () { return this._status; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "valid", {
            /**
             * A control is `valid` when its `status === VALID`.
             *
             * In order to have this status, the control must have passed all its
             * validation checks.
             */
            get: function () { return this._status === VALID; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "invalid", {
            /**
             * A control is `invalid` when its `status === INVALID`.
             *
             * In order to have this status, the control must have failed
             * at least one of its validation checks.
             */
            get: function () { return this._status === INVALID; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "pending", {
            /**
             * A control is `pending` when its `status === PENDING`.
             *
             * In order to have this status, the control must be in the
             * middle of conducting a validation check.
             */
            get: function () { return this._status == PENDING; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "disabled", {
            /**
             * A control is `disabled` when its `status === DISABLED`.
             *
             * Disabled controls are exempt from validation checks and
             * are not included in the aggregate value of their ancestor
             * controls.
             */
            get: function () { return this._status === DISABLED; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "enabled", {
            /**
             * A control is `enabled` as long as its `status !== DISABLED`.
             *
             * In other words, it has a status of `VALID`, `INVALID`, or
             * `PENDING`.
             */
            get: function () { return this._status !== DISABLED; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "errors", {
            /**
             * Returns any errors generated by failing validation. If there
             * are no errors, it will return null.
             */
            get: function () { return this._errors; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "pristine", {
            /**
             * A control is `pristine` if the user has not yet changed
             * the value in the UI.
             *
             * Note that programmatic changes to a control's value will
             * *not* mark it dirty.
             */
            get: function () { return this._pristine; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "dirty", {
            /**
             * A control is `dirty` if the user has changed the value
             * in the UI.
             *
             * Note that programmatic changes to a control's value will
             * *not* mark it dirty.
             */
            get: function () { return !this.pristine; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "touched", {
            /**
            * A control is marked `touched` once the user has triggered
            * a `blur` event on it.
            */
            get: function () { return this._touched; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "untouched", {
            /**
             * A control is `untouched` if the user has not yet triggered
             * a `blur` event on it.
             */
            get: function () { return !this._touched; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
            /**
             * Emits an event every time the value of the control changes, in
             * the UI or programmatically.
             */
            get: function () { return this._valueChanges; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
            /**
             * Emits an event every time the validation status of the control
             * is re-calculated.
             */
            get: function () { return this._statusChanges; },
            enumerable: true,
            configurable: true
        });
        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this will overwrite any existing sync validators.
         */
        AbstractControl.prototype.setValidators = function (newValidator) {
            this.validator = coerceToValidator(newValidator);
        };
        /**
         * Sets the async validators that are active on this control. Calling this
         * will overwrite any existing async validators.
         */
        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
            this.asyncValidator = coerceToAsyncValidator(newValidator);
        };
        /**
         * Empties out the sync validator list.
         */
        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
        /**
         * Empties out the async validator list.
         */
        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
        /**
         * Marks the control as `touched`.
         *
         * This will also mark all direct ancestors as `touched` to maintain
         * the model.
         */
        AbstractControl.prototype.markAsTouched = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            onlySelf = normalizeBool(onlySelf);
            this._touched = true;
            if (isPresent(this._parent) && !onlySelf) {
                this._parent.markAsTouched({ onlySelf: onlySelf });
            }
        };
        /**
         * Marks the control as `untouched`.
         *
         * If the control has any children, it will also mark all children as `untouched`
         * to maintain the model, and re-calculate the `touched` status of all parent
         * controls.
         */
        AbstractControl.prototype.markAsUntouched = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._touched = false;
            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
            if (isPresent(this._parent) && !onlySelf) {
                this._parent._updateTouched({ onlySelf: onlySelf });
            }
        };
        /**
         * Marks the control as `dirty`.
         *
         * This will also mark all direct ancestors as `dirty` to maintain
         * the model.
         */
        AbstractControl.prototype.markAsDirty = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            onlySelf = normalizeBool(onlySelf);
            this._pristine = false;
            if (isPresent(this._parent) && !onlySelf) {
                this._parent.markAsDirty({ onlySelf: onlySelf });
            }
        };
        /**
         * Marks the control as `pristine`.
         *
         * If the control has any children, it will also mark all children as `pristine`
         * to maintain the model, and re-calculate the `pristine` status of all parent
         * controls.
         */
        AbstractControl.prototype.markAsPristine = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._pristine = true;
            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
            if (isPresent(this._parent) && !onlySelf) {
                this._parent._updatePristine({ onlySelf: onlySelf });
            }
        };
        /**
         * Marks the control as `pending`.
         */
        AbstractControl.prototype.markAsPending = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            onlySelf = normalizeBool(onlySelf);
            this._status = PENDING;
            if (isPresent(this._parent) && !onlySelf) {
                this._parent.markAsPending({ onlySelf: onlySelf });
            }
        };
        /**
         * Disables the control. This means the control will be exempt from validation checks and
         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
         *
         * If the control has children, all children will be disabled to maintain the model.
         */
        AbstractControl.prototype.disable = function (_a) {
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            emitEvent = isPresent(emitEvent) ? emitEvent : true;
            this._status = DISABLED;
            this._errors = null;
            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
            this._updateValue();
            if (emitEvent) {
                this._valueChanges.emit(this._value);
                this._statusChanges.emit(this._status);
            }
            this._updateAncestors(onlySelf);
            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
        };
        /**
         * Enables the control. This means the control will be included in validation checks and
         * the aggregate value of its parent. Its status is re-calculated based on its value and
         * its validators.
         *
         * If the control has children, all children will be enabled.
         */
        AbstractControl.prototype.enable = function (_a) {
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            this._status = VALID;
            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
            this._updateAncestors(onlySelf);
            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
        };
        AbstractControl.prototype._updateAncestors = function (onlySelf) {
            if (isPresent(this._parent) && !onlySelf) {
                this._parent.updateValueAndValidity();
                this._parent._updatePristine();
                this._parent._updateTouched();
            }
        };
        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
        /**
         * Re-calculates the value and validation status of the control.
         *
         * By default, it will also update the value and validity of its ancestors.
         */
        AbstractControl.prototype.updateValueAndValidity = function (_a) {
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
            onlySelf = normalizeBool(onlySelf);
            emitEvent = isPresent(emitEvent) ? emitEvent : true;
            this._setInitialStatus();
            this._updateValue();
            if (this.enabled) {
                this._errors = this._runValidator();
                this._status = this._calculateStatus();
                if (this._status === VALID || this._status === PENDING) {
                    this._runAsyncValidator(emitEvent);
                }
            }
            if (emitEvent) {
                this._valueChanges.emit(this._value);
                this._statusChanges.emit(this._status);
            }
            if (isPresent(this._parent) && !onlySelf) {
                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            }
        };
        /** @internal */
        AbstractControl.prototype._updateTreeValidity = function (_a) {
            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
        };
        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
        AbstractControl.prototype._runValidator = function () {
            return isPresent(this.validator) ? this.validator(this) : null;
        };
        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
            var _this = this;
            if (isPresent(this.asyncValidator)) {
                this._status = PENDING;
                this._cancelExistingSubscription();
                var obs = toObservable(this.asyncValidator(this));
                this._asyncValidationSubscription = obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
            }
        };
        AbstractControl.prototype._cancelExistingSubscription = function () {
            if (isPresent(this._asyncValidationSubscription)) {
                this._asyncValidationSubscription.unsubscribe();
            }
        };
        /**
         * Sets errors on a form control.
         *
         * This is used when validations are run manually by the user, rather than automatically.
         *
         * Calling `setErrors` will also update the validity of the parent control.
         *
         * ### Example
         *
         * ```
         * const login = new FormControl("someLogin");
         * login.setErrors({
         *   "notUnique": true
         * });
         *
         * expect(login.valid).toEqual(false);
         * expect(login.errors).toEqual({"notUnique": true});
         *
         * login.setValue("someOtherLogin");
         *
         * expect(login.valid).toEqual(true);
         * ```
         */
        AbstractControl.prototype.setErrors = function (errors, _a) {
            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
            emitEvent = isPresent(emitEvent) ? emitEvent : true;
            this._errors = errors;
            this._updateControlsErrors(emitEvent);
        };
        /**
         * Retrieves a child control given the control's name or path.
         *
         * Paths can be passed in as an array or a string delimited by a dot.
         *
         * To get a control nested within a `person` sub-group:
         *
         * * `this.form.get('person.name');`
         *
         * -OR-
         *
         * * `this.form.get(['person', 'name']);`
         */
        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
        /**
         * Returns true if the control with the given path has the error specified. Otherwise
         * returns null or undefined.
         *
         * If no path is given, it checks for the error on the present control.
         */
        AbstractControl.prototype.getError = function (errorCode, path) {
            if (path === void 0) { path = null; }
            var control = isPresent(path) && !ListWrapper.isEmpty(path) ? this.get(path) : this;
            if (isPresent(control) && isPresent(control._errors)) {
                return control._errors[errorCode];
            }
            else {
                return null;
            }
        };
        /**
         * Returns true if the control with the given path has the error specified. Otherwise
         * returns false.
         *
         * If no path is given, it checks for the error on the present control.
         */
        AbstractControl.prototype.hasError = function (errorCode, path) {
            if (path === void 0) { path = null; }
            return isPresent(this.getError(errorCode, path));
        };
        Object.defineProperty(AbstractControl.prototype, "root", {
            /**
             * Retrieves the top-level ancestor of this control.
             */
            get: function () {
                var x = this;
                while (isPresent(x._parent)) {
                    x = x._parent;
                }
                return x;
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
            this._status = this._calculateStatus();
            if (emitEvent) {
                this._statusChanges.emit(this._status);
            }
            if (isPresent(this._parent)) {
                this._parent._updateControlsErrors(emitEvent);
            }
        };
        /** @internal */
        AbstractControl.prototype._initObservables = function () {
            this._valueChanges = new EventEmitter();
            this._statusChanges = new EventEmitter();
        };
        AbstractControl.prototype._calculateStatus = function () {
            if (this._allControlsDisabled())
                return DISABLED;
            if (isPresent(this._errors))
                return INVALID;
            if (this._anyControlsHaveStatus(PENDING))
                return PENDING;
            if (this._anyControlsHaveStatus(INVALID))
                return INVALID;
            return VALID;
        };
        /** @internal */
        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
            return this._anyControls(function (control) { return control.status == status; });
        };
        /** @internal */
        AbstractControl.prototype._anyControlsDirty = function () {
            return this._anyControls(function (control) { return control.dirty; });
        };
        /** @internal */
        AbstractControl.prototype._anyControlsTouched = function () {
            return this._anyControls(function (control) { return control.touched; });
        };
        /** @internal */
        AbstractControl.prototype._updatePristine = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._pristine = !this._anyControlsDirty();
            if (isPresent(this._parent) && !onlySelf) {
                this._parent._updatePristine({ onlySelf: onlySelf });
            }
        };
        /** @internal */
        AbstractControl.prototype._updateTouched = function (_a) {
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._touched = this._anyControlsTouched();
            if (isPresent(this._parent) && !onlySelf) {
                this._parent._updateTouched({ onlySelf: onlySelf });
            }
        };
        /** @internal */
        AbstractControl.prototype._isBoxedValue = function (formState) {
            return isStringMap(formState) && Object.keys(formState).length === 2 && 'value' in formState &&
                'disabled' in formState;
        };
        /** @internal */
        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
        return AbstractControl;
    }());
    /**
     * @whatItDoes Tracks the value and validation status of an individual form control.
     *
     * It is one of the three fundamental building blocks of Angular forms, along with
     * {@link FormGroup} and {@link FormArray}.
     *
     * @howToUse
     *
     * When instantiating a {@link FormControl}, you can pass in an initial value as the
     * first argument. Example:
     *
     * ```ts
     * const ctrl = new FormControl('some value');
     * console.log(ctrl.value);     // 'some value'
     *```
     *
     * You can also initialize the control with a form state object on instantiation,
     * which includes both the value and whether or not the control is disabled.
     * You can't use the value key without the disabled key; both are required
     * to use this way of initialization.
     *
     * ```ts
     * const ctrl = new FormControl({value: 'n/a', disabled: true});
     * console.log(ctrl.value);     // 'n/a'
     * console.log(ctrl.status);   // 'DISABLED'
     * ```
     *
     * To include a sync validator (or an array of sync validators) with the control,
     * pass it in as the second argument. Async validators are also supported, but
     * have to be passed in separately as the third arg.
     *
     * ```ts
     * const ctrl = new FormControl('', Validators.required);
     * console.log(ctrl.value);     // ''
     * console.log(ctrl.status);   // 'INVALID'
     * ```
     *
     * See its superclass, {@link AbstractControl}, for more properties and methods.
     *
     * * **npm package**: `@angular/forms`
     *
     * @stable
     */
    var FormControl = (function (_super) {
        __extends$6(FormControl, _super);
        function FormControl(formState, validator, asyncValidator) {
            if (formState === void 0) { formState = null; }
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
            /** @internal */
            this._onChange = [];
            this._applyFormState(formState);
            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            this._initObservables();
        }
        /**
         * Set the value of the form control to `value`.
         *
         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
         * and not its parent component. This defaults to false.
         *
         * If `emitEvent` is `true`, this
         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
         * to true (as it falls through to `updateValueAndValidity`).
         *
         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
         * specified.
         *
         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
         */
        FormControl.prototype.setValue = function (value, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
            emitModelToViewChange = isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
            emitViewToModelChange = isPresent(emitViewToModelChange) ? emitViewToModelChange : true;
            this._value = value;
            if (this._onChange.length && emitModelToViewChange) {
                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange); });
            }
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        };
        /**
         * Patches the value of a control.
         *
         * This function is functionally the same as {@link FormControl.setValue} at this level.
         * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
         * where it does behave differently.
         */
        FormControl.prototype.patchValue = function (value, options) {
            if (options === void 0) { options = {}; }
            this.setValue(value, options);
        };
        /**
         * Resets the form control. This means by default:
         *
         * * it is marked as `pristine`
         * * it is marked as `untouched`
         * * value is set to null
         *
         * You can also reset to a specific form state by passing through a standalone
         * value or a form state object that contains both a value and a disabled state
         * (these are the only two properties that cannot be calculated).
         *
         * Ex:
         *
         * ```ts
         * this.control.reset('Nancy');
         *
         * console.log(this.control.value);  // 'Nancy'
         * ```
         *
         * OR
         *
         * ```
         * this.control.reset({value: 'Nancy', disabled: true});
         *
         * console.log(this.control.value);  // 'Nancy'
         * console.log(this.control.status);  // 'DISABLED'
         * ```
         */
        FormControl.prototype.reset = function (formState, _a) {
            if (formState === void 0) { formState = null; }
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._applyFormState(formState);
            this.markAsPristine({ onlySelf: onlySelf });
            this.markAsUntouched({ onlySelf: onlySelf });
            this.setValue(this._value, { onlySelf: onlySelf });
        };
        /**
         * @internal
         */
        FormControl.prototype._updateValue = function () { };
        /**
         * @internal
         */
        FormControl.prototype._anyControls = function (condition) { return false; };
        /**
         * @internal
         */
        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
        /**
         * Register a listener for change events.
         */
        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
        /**
         * @internal
         */
        FormControl.prototype._clearChangeFns = function () {
            this._onChange = [];
            this._onDisabledChange = [];
            this._onCollectionChange = function () { };
        };
        /**
         * Register a listener for disabled events.
         */
        FormControl.prototype.registerOnDisabledChange = function (fn) {
            this._onDisabledChange.push(fn);
        };
        /**
         * @internal
         */
        FormControl.prototype._forEachChild = function (cb) { };
        FormControl.prototype._applyFormState = function (formState) {
            if (this._isBoxedValue(formState)) {
                this._value = formState.value;
                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                    this.enable({ onlySelf: true, emitEvent: false });
            }
            else {
                this._value = formState;
            }
        };
        return FormControl;
    }(AbstractControl));
    /**
     * @whatItDoes Tracks the value and validity state of a group of {@link FormControl}
     * instances.
     *
     * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
     * with each control name as the key.  It calculates its status by reducing the statuses
     * of its children. For example, if one of the controls in a group is invalid, the entire
     * group becomes invalid.
     *
     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
     * along with {@link FormControl} and {@link FormArray}.
     *
     * @howToUse
     *
     * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
     * argument. The key for each child will be the name under which it is registered.
     *
     * ### Example
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('Nancy', Validators.minLength(2)),
     *   last: new FormControl('Drew'),
     * });
     *
     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
     * console.log(form.status);  // 'VALID'
     * ```
     *
     * You can also include group-level validators as the second arg, or group-level async
     * validators as the third arg. These come in handy when you want to perform validation
     * that considers the value of more than one child control.
     *
     * ### Example
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('', Validators.minLength(2)),
     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
     * }, passwordMatchValidator);
     *
     *
     * function passwordMatchValidator(g: FormGroup) {
     *    return g.get('password').value === g.get('passwordConfirm').value
     *       ? null : {'mismatch': true};
     * }
     * ```
     *
     * * **npm package**: `@angular/forms`
     *
     * @stable
     */
    var FormGroup = (function (_super) {
        __extends$6(FormGroup, _super);
        function FormGroup(controls, validator, asyncValidator) {
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            _super.call(this, validator, asyncValidator);
            this.controls = controls;
            this._initObservables();
            this._setUpControls();
            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
        /**
         * Registers a control with the group's list of controls.
         *
         * This method does not update value or validity of the control, so for
         * most cases you'll want to use {@link FormGroup.addControl} instead.
         */
        FormGroup.prototype.registerControl = function (name, control) {
            if (this.controls[name])
                return this.controls[name];
            this.controls[name] = control;
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
            return control;
        };
        /**
         * Add a control to this group.
         */
        FormGroup.prototype.addControl = function (name, control) {
            this.registerControl(name, control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Remove a control from this group.
         */
        FormGroup.prototype.removeControl = function (name) {
            if (this.controls[name])
                this.controls[name]._registerOnCollectionChange(function () { });
            delete (this.controls[name]);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Replace an existing control.
         */
        FormGroup.prototype.setControl = function (name, control) {
            if (this.controls[name])
                this.controls[name]._registerOnCollectionChange(function () { });
            delete (this.controls[name]);
            if (control)
                this.registerControl(name, control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Check whether there is an enabled control with the given name in the group.
         *
         * It will return false for disabled controls. If you'd like to check for
         * existence in the group only, use {@link AbstractControl.get} instead.
         */
        FormGroup.prototype.contains = function (controlName) {
            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
        };
        /**
         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
         *  the structure of the group, with control names as keys.
         *
         * This method performs strict checks, so it will throw an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         *  ### Example
         *
         *  ```
         *  const form = new FormGroup({
         *     first: new FormControl(),
         *     last: new FormControl()
         *  });
         *  console.log(form.value);   // {first: null, last: null}
         *
         *  form.setValue({first: 'Nancy', last: 'Drew'});
         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
         *
         *  ```
         */
        FormGroup.prototype.setValue = function (value, _a) {
            var _this = this;
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._checkAllValuesPresent(value);
            Object.keys(value).forEach(function (name) {
                _this._throwIfControlMissing(name);
                _this.controls[name].setValue(value[name], { onlySelf: true });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf });
        };
        /**
         *  Patches the value of the {@link FormGroup}. It accepts an object with control
         *  names as keys, and will do its best to match the values to the correct controls
         *  in the group.
         *
         *  It accepts both super-sets and sub-sets of the group without throwing an error.
         *
         *  ### Example
         *
         *  ```
         *  const form = new FormGroup({
         *     first: new FormControl(),
         *     last: new FormControl()
         *  });
         *  console.log(form.value);   // {first: null, last: null}
         *
         *  form.patchValue({first: 'Nancy'});
         *  console.log(form.value);   // {first: 'Nancy', last: null}
         *
         *  ```
         */
        FormGroup.prototype.patchValue = function (value, _a) {
            var _this = this;
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            Object.keys(value).forEach(function (name) {
                if (_this.controls[name]) {
                    _this.controls[name].patchValue(value[name], { onlySelf: true });
                }
            });
            this.updateValueAndValidity({ onlySelf: onlySelf });
        };
        /**
         * Resets the {@link FormGroup}. This means by default:
         *
         * * The group and all descendants are marked `pristine`
         * * The group and all descendants are marked `untouched`
         * * The value of all descendants will be null or null maps
         *
         * You can also reset to a specific form state by passing in a map of states
         * that matches the structure of your form, with control names as keys. The state
         * can be a standalone value or a form state object with both a value and a disabled
         * status.
         *
         * ### Example
         *
         * ```ts
         * this.form.reset({first: 'name', last; 'last name'});
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * ```
         *
         * - OR -
         *
         * ```
         * this.form.reset({
         *   first: {value: 'name', disabled: true},
         *   last: 'last'
         * });
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * console.log(this.form.get('first').status);  // 'DISABLED'
         * ```
         */
        FormGroup.prototype.reset = function (value, _a) {
            if (value === void 0) { value = {}; }
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._forEachChild(function (control, name) {
                control.reset(value[name], { onlySelf: true });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf });
            this._updatePristine({ onlySelf: onlySelf });
            this._updateTouched({ onlySelf: onlySelf });
        };
        /**
         * The aggregate value of the {@link FormGroup}, including any disabled controls.
         *
         * If you'd like to include all values regardless of disabled status, use this method.
         * Otherwise, the `value` property is the best way to get the value of the group.
         */
        FormGroup.prototype.getRawValue = function () {
            return this._reduceChildren({}, function (acc, control, name) {
                acc[name] = control.value;
                return acc;
            });
        };
        /** @internal */
        FormGroup.prototype._throwIfControlMissing = function (name) {
            if (!Object.keys(this.controls).length) {
                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }
            if (!this.controls[name]) {
                throw new Error("Cannot find form control with name: " + name + ".");
            }
        };
        /** @internal */
        FormGroup.prototype._forEachChild = function (cb) {
            var _this = this;
            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
        };
        /** @internal */
        FormGroup.prototype._setUpControls = function () {
            var _this = this;
            this._forEachChild(function (control) {
                control.setParent(_this);
                control._registerOnCollectionChange(_this._onCollectionChange);
            });
        };
        /** @internal */
        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
        /** @internal */
        FormGroup.prototype._anyControls = function (condition) {
            var _this = this;
            var res = false;
            this._forEachChild(function (control, name) {
                res = res || (_this.contains(name) && condition(control));
            });
            return res;
        };
        /** @internal */
        FormGroup.prototype._reduceValue = function () {
            var _this = this;
            return this._reduceChildren({}, function (acc, control, name) {
                if (control.enabled || _this.disabled) {
                    acc[name] = control.value;
                }
                return acc;
            });
        };
        /** @internal */
        FormGroup.prototype._reduceChildren = function (initValue, fn) {
            var res = initValue;
            this._forEachChild(function (control, name) { res = fn(res, control, name); });
            return res;
        };
        /** @internal */
        FormGroup.prototype._allControlsDisabled = function () {
            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
                var controlName = _a[_i];
                if (this.controls[controlName].enabled) {
                    return false;
                }
            }
            return Object.keys(this.controls).length > 0 || this.disabled;
        };
        /** @internal */
        FormGroup.prototype._checkAllValuesPresent = function (value) {
            this._forEachChild(function (control, name) {
                if (value[name] === undefined) {
                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
                }
            });
        };
        return FormGroup;
    }(AbstractControl));
    /**
     * @whatItDoes Tracks the value and validity state of an array of {@link FormControl}
     * instances.
     *
     * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
     * It calculates its status by reducing the statuses of its children. For example, if one of
     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
     *
     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
     * along with {@link FormControl} and {@link FormGroup}.
     *
     * @howToUse
     *
     * When instantiating a {@link FormArray}, pass in an array of child controls as the first
     * argument.
     *
     * ### Example
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy', Validators.minLength(2)),
     *   new FormControl('Drew'),
     * ]);
     *
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * console.log(arr.status);  // 'VALID'
     * ```
     *
     * You can also include array-level validators as the second arg, or array-level async
     * validators as the third arg. These come in handy when you want to perform validation
     * that considers the value of more than one child control.
     *
     * ### Adding or removing controls
     *
     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
     * the `FormArray` directly, as that will result in strange and unexpected behavior such
     * as broken change detection.
     *
     * * **npm package**: `@angular/forms`
     *
     * @stable
     */
    var FormArray = (function (_super) {
        __extends$6(FormArray, _super);
        function FormArray(controls, validator, asyncValidator) {
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            _super.call(this, validator, asyncValidator);
            this.controls = controls;
            this._initObservables();
            this._setUpControls();
            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
        /**
         * Get the {@link AbstractControl} at the given `index` in the array.
         */
        FormArray.prototype.at = function (index) { return this.controls[index]; };
        /**
         * Insert a new {@link AbstractControl} at the end of the array.
         */
        FormArray.prototype.push = function (control) {
            this.controls.push(control);
            this._registerControl(control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Insert a new {@link AbstractControl} at the given `index` in the array.
         */
        FormArray.prototype.insert = function (index, control) {
            ListWrapper.insert(this.controls, index, control);
            this._registerControl(control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Remove the control at the given `index` in the array.
         */
        FormArray.prototype.removeAt = function (index) {
            if (this.controls[index])
                this.controls[index]._registerOnCollectionChange(function () { });
            ListWrapper.removeAt(this.controls, index);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Replace an existing control.
         */
        FormArray.prototype.setControl = function (index, control) {
            if (this.controls[index])
                this.controls[index]._registerOnCollectionChange(function () { });
            ListWrapper.removeAt(this.controls, index);
            if (control) {
                ListWrapper.insert(this.controls, index, control);
                this._registerControl(control);
            }
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        Object.defineProperty(FormArray.prototype, "length", {
            /**
             * Length of the control array.
             */
            get: function () { return this.controls.length; },
            enumerable: true,
            configurable: true
        });
        /**
         *  Sets the value of the {@link FormArray}. It accepts an array that matches
         *  the structure of the control.
         *
         * This method performs strict checks, so it will throw an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         *  ### Example
         *
         *  ```
         *  const arr = new FormArray([
         *     new FormControl(),
         *     new FormControl()
         *  ]);
         *  console.log(arr.value);   // [null, null]
         *
         *  arr.setValue(['Nancy', 'Drew']);
         *  console.log(arr.value);   // ['Nancy', 'Drew']
         *  ```
         */
        FormArray.prototype.setValue = function (value, _a) {
            var _this = this;
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._checkAllValuesPresent(value);
            value.forEach(function (newValue, index) {
                _this._throwIfControlMissing(index);
                _this.at(index).setValue(newValue, { onlySelf: true });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf });
        };
        /**
         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
         *  structure of the control, and will do its best to match the values to the correct
         *  controls in the group.
         *
         *  It accepts both super-sets and sub-sets of the array without throwing an error.
         *
         *  ### Example
         *
         *  ```
         *  const arr = new FormArray([
         *     new FormControl(),
         *     new FormControl()
         *  ]);
         *  console.log(arr.value);   // [null, null]
         *
         *  arr.patchValue(['Nancy']);
         *  console.log(arr.value);   // ['Nancy', null]
         *  ```
         */
        FormArray.prototype.patchValue = function (value, _a) {
            var _this = this;
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            value.forEach(function (newValue, index) {
                if (_this.at(index)) {
                    _this.at(index).patchValue(newValue, { onlySelf: true });
                }
            });
            this.updateValueAndValidity({ onlySelf: onlySelf });
        };
        /**
         * Resets the {@link FormArray}. This means by default:
         *
         * * The array and all descendants are marked `pristine`
         * * The array and all descendants are marked `untouched`
         * * The value of all descendants will be null or null maps
         *
         * You can also reset to a specific form state by passing in an array of states
         * that matches the structure of the control. The state can be a standalone value
         * or a form state object with both a value and a disabled status.
         *
         * ### Example
         *
         * ```ts
         * this.arr.reset(['name', 'last name']);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * ```
         *
         * - OR -
         *
         * ```
         * this.arr.reset([
         *   {value: 'name', disabled: true},
         *   'last'
         * ]);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * console.log(this.arr.get(0).status);  // 'DISABLED'
         * ```
         */
        FormArray.prototype.reset = function (value, _a) {
            if (value === void 0) { value = []; }
            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
            this._forEachChild(function (control, index) {
                control.reset(value[index], { onlySelf: true });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf });
            this._updatePristine({ onlySelf: onlySelf });
            this._updateTouched({ onlySelf: onlySelf });
        };
        /**
         * The aggregate value of the array, including any disabled controls.
         *
         * If you'd like to include all values regardless of disabled status, use this method.
         * Otherwise, the `value` property is the best way to get the value of the array.
         */
        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
        /** @internal */
        FormArray.prototype._throwIfControlMissing = function (index) {
            if (!this.controls.length) {
                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }
            if (!this.at(index)) {
                throw new Error("Cannot find form control at index " + index);
            }
        };
        /** @internal */
        FormArray.prototype._forEachChild = function (cb) {
            this.controls.forEach(function (control, index) { cb(control, index); });
        };
        /** @internal */
        FormArray.prototype._updateValue = function () {
            var _this = this;
            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
                .map(function (control) { return control.value; });
        };
        /** @internal */
        FormArray.prototype._anyControls = function (condition) {
            return this.controls.some(function (control) { return control.enabled && condition(control); });
        };
        /** @internal */
        FormArray.prototype._setUpControls = function () {
            var _this = this;
            this._forEachChild(function (control) { return _this._registerControl(control); });
        };
        /** @internal */
        FormArray.prototype._checkAllValuesPresent = function (value) {
            this._forEachChild(function (control, i) {
                if (value[i] === undefined) {
                    throw new Error("Must supply a value for form control at index: " + i + ".");
                }
            });
        };
        /** @internal */
        FormArray.prototype._allControlsDisabled = function () {
            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
                var control = _a[_i];
                if (control.enabled)
                    return false;
            }
            return this.controls.length > 0 || this.disabled;
        };
        FormArray.prototype._registerControl = function (control) {
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
        };
        return FormArray;
    }(AbstractControl));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$4 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var formDirectiveProvider = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return NgForm; })
    };
    var resolvedPromise = Promise.resolve(null);
    /**
     * @whatItDoes Creates a top-level {@link FormGroup} instance and binds it to a form
     * to track aggregate form value and validation status.
     *
     * @howToUse
     *
     * As soon as you import the `FormsModule`, this directive becomes active by default on
     * all `<form>` tags.  You don't need to add a special selector.
     *
     * You can export the directive into a local template variable using `ngForm` as the key
     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
     * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
     * will give you access to the aggregate value and validity status of the form, as well as
     * user interaction properties like `dirty` and `touched`.
     *
     * To register child controls with the form, you'll want to use {@link NgModel} with a
     * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
     * sub-groups within the form.
     *
     * You can listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission.
     *
     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * * **npm package**: `@angular/forms`
     *
     * * **NgModule**: `FormsModule`
     *
     *  @stable
     */
    var NgForm = (function (_super) {
        __extends$4(NgForm, _super);
        function NgForm(validators, asyncValidators) {
            _super.call(this);
            this._submitted = false;
            this.ngSubmit = new EventEmitter();
            this.form =
                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        }
        Object.defineProperty(NgForm.prototype, "submitted", {
            get: function () { return this._submitted; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "formDirective", {
            get: function () { return this; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "control", {
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "path", {
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "controls", {
            get: function () { return this.form.controls; },
            enumerable: true,
            configurable: true
        });
        NgForm.prototype.addControl = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var container = _this._findContainer(dir.path);
                dir._control = container.registerControl(dir.name, dir.control);
                setUpControl(dir.control, dir);
                dir.control.updateValueAndValidity({ emitEvent: false });
            });
        };
        NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
        NgForm.prototype.removeControl = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var container = _this._findContainer(dir.path);
                if (isPresent(container)) {
                    container.removeControl(dir.name);
                }
            });
        };
        NgForm.prototype.addFormGroup = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var container = _this._findContainer(dir.path);
                var group = new FormGroup({});
                setUpFormContainer(group, dir);
                container.registerControl(dir.name, group);
                group.updateValueAndValidity({ emitEvent: false });
            });
        };
        NgForm.prototype.removeFormGroup = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var container = _this._findContainer(dir.path);
                if (isPresent(container)) {
                    container.removeControl(dir.name);
                }
            });
        };
        NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
        NgForm.prototype.updateModel = function (dir, value) {
            var _this = this;
            resolvedPromise.then(function () {
                var ctrl = _this.form.get(dir.path);
                ctrl.setValue(value);
            });
        };
        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
        NgForm.prototype.onSubmit = function () {
            this._submitted = true;
            this.ngSubmit.emit(null);
            return false;
        };
        NgForm.prototype.onReset = function () { this.resetForm(); };
        NgForm.prototype.resetForm = function (value) {
            if (value === void 0) { value = undefined; }
            this.form.reset(value);
            this._submitted = false;
        };
        /** @internal */
        NgForm.prototype._findContainer = function (path) {
            path.pop();
            return ListWrapper.isEmpty(path) ? this.form : this.form.get(path);
        };
        NgForm.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
                        providers: [formDirectiveProvider],
                        host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
                        outputs: ['ngSubmit'],
                        exportAs: 'ngForm'
                    },] },
        ];
        /** @nocollapse */
        NgForm.ctorParameters = [
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        ];
        return NgForm;
    }(ControlContainer));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var Examples = {
        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
    };

    var TemplateDrivenErrors = (function () {
        function TemplateDrivenErrors() {
        }
        TemplateDrivenErrors.modelParentException = function () {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
        };
        TemplateDrivenErrors.formGroupNameException = function () {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
        };
        TemplateDrivenErrors.missingNameException = function () {
            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
        };
        TemplateDrivenErrors.modelGroupParentException = function () {
            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
        };
        return TemplateDrivenErrors;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$8 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var modelGroupProvider = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
    };
    /**
     * @whatItDoes Creates and binds a {@link FormGroup} instance to a DOM element.
     *
     * @howToUse
     *
     * This directive can only be used as a child of {@link NgForm} (or in other words,
     * within `<form>` tags).
     *
     * Use this directive if you'd like to create a sub-group within a form. This can
     * come in handy if you want to validate a sub-group of your form separately from
     * the rest of your form, or if some values in your domain model make more sense to
     * consume together in a nested object.
     *
     * Pass in the name you'd like this sub-group to have and it will become the key
     * for the sub-group in the form's full value. You can also export the directive into
     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
     *
     * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
     *
     * * **npm package**: `@angular/forms`
     *
     * * **NgModule**: `FormsModule`
     *
     * @stable
     */
    var NgModelGroup = (function (_super) {
        __extends$8(NgModelGroup, _super);
        function NgModelGroup(parent, validators, asyncValidators) {
            _super.call(this);
            this._parent = parent;
            this._validators = validators;
            this._asyncValidators = asyncValidators;
        }
        /** @internal */
        NgModelGroup.prototype._checkParentType = function () {
            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelGroupParentException();
            }
        };
        NgModelGroup.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
        ];
        /** @nocollapse */
        NgModelGroup.ctorParameters = [
            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        ];
        NgModelGroup.propDecorators = {
            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
        };
        return NgModelGroup;
    }(AbstractFormGroupDirective));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$7 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var formControlBinding = {
        provide: NgControl,
        useExisting: _angular_core.forwardRef(function () { return NgModel; })
    };
    var resolvedPromise$1 = Promise.resolve(null);
    /**
     * @whatItDoes Creates a {@link FormControl} instance from a domain model and binds it
     * to a form control element.
     *
     * The {@link FormControl} instance will track the value, user interaction, and
     * validation status of the control and keep the view synced with the model. If used
     * within a parent form, the directive will also register itself with the form as a child
     * control.
     *
     * @howToUse
     *
     * This directive can be used by itself or as part of a larger form. All you need is the
     * `ngModel` selector to activate it.
     *
     * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
     * the domain model in your class as well.
     *
     * If you wish to inspect the properties of the associated {@link FormControl} (like
     * validity state), you can also export the directive into a local template variable using
     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
     * will fall through to the control anyway, so you can access them directly. You can see a
     * full list of properties directly available in {@link AbstractControlDirective}.
     *
     * The following is an example of a simple standalone control using `ngModel`:
     *
     * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
     *
     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
     * so that the control can be registered with the parent form under that name.
     *
     * It's worth noting that in the context of a parent form, you often can skip one-way or
     * two-way binding because the parent form will sync the value for you. You can access
     * its properties by exporting it into a local template variable using `ngForm` (ex:
     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
     *
     * If you do need to populate initial values into your form, using a one-way binding for
     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
     * than the domain model's value on submit.
     *
     * Take a look at an example of using `ngModel` within a form:
     *
     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * To see `ngModel` examples with different form control types, see:
     *
     * * Radio buttons: {@link RadioControlValueAccessor}
     * * Selects: {@link SelectControlValueAccessor}
     *
     * **npm package**: `@angular/forms`
     *
     * **NgModule**: `FormsModule`
     *
     *  @stable
     */
    var NgModel = (function (_super) {
        __extends$7(NgModel, _super);
        function NgModel(parent, validators, asyncValidators, valueAccessors) {
            _super.call(this);
            /** @internal */
            this._control = new FormControl();
            /** @internal */
            this._registered = false;
            this.update = new EventEmitter();
            this._parent = parent;
            this._rawValidators = validators || [];
            this._rawAsyncValidators = asyncValidators || [];
            this.valueAccessor = selectValueAccessor(this, valueAccessors);
        }
        NgModel.prototype.ngOnChanges = function (changes) {
            this._checkForErrors();
            if (!this._registered)
                this._setUpControl();
            if ('isDisabled' in changes) {
                this._updateDisabled(changes);
            }
            if (isPropertyUpdated(changes, this.viewModel)) {
                this._updateValue(this.model);
                this.viewModel = this.model;
            }
        };
        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
        Object.defineProperty(NgModel.prototype, "control", {
            get: function () { return this._control; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "path", {
            get: function () {
                return this._parent ? controlPath(this.name, this._parent) : [this.name];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "formDirective", {
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "validator", {
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "asyncValidator", {
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        NgModel.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        NgModel.prototype._setUpControl = function () {
            this._isStandalone() ? this._setUpStandalone() :
                this.formDirective.addControl(this);
            this._registered = true;
        };
        NgModel.prototype._isStandalone = function () {
            return !this._parent || (this.options && this.options.standalone);
        };
        NgModel.prototype._setUpStandalone = function () {
            setUpControl(this._control, this);
            this._control.updateValueAndValidity({ emitEvent: false });
        };
        NgModel.prototype._checkForErrors = function () {
            if (!this._isStandalone()) {
                this._checkParentType();
            }
            this._checkName();
        };
        NgModel.prototype._checkParentType = function () {
            if (!(this._parent instanceof NgModelGroup) &&
                this._parent instanceof AbstractFormGroupDirective) {
                TemplateDrivenErrors.formGroupNameException();
            }
            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelParentException();
            }
        };
        NgModel.prototype._checkName = function () {
            if (this.options && this.options.name)
                this.name = this.options.name;
            if (!this._isStandalone() && !this.name) {
                TemplateDrivenErrors.missingNameException();
            }
        };
        NgModel.prototype._updateValue = function (value) {
            var _this = this;
            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
        };
        NgModel.prototype._updateDisabled = function (changes) {
            var _this = this;
            var disabledValue = changes['isDisabled'].currentValue;
            var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
            resolvedPromise$1.then(function () {
                if (isDisabled && !_this.control.disabled) {
                    _this.control.disable();
                }
                else if (!isDisabled && _this.control.disabled) {
                    _this.control.enable();
                }
            });
        };
        NgModel.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[ngModel]:not([formControlName]):not([formControl])',
                        providers: [formControlBinding],
                        exportAs: 'ngModel'
                    },] },
        ];
        /** @nocollapse */
        NgModel.ctorParameters = [
            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
        ];
        NgModel.propDecorators = {
            'name': [{ type: _angular_core.Input },],
            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
        };
        return NgModel;
    }(NgControl));

    var ReactiveErrors = (function () {
        function ReactiveErrors() {
        }
        ReactiveErrors.controlParentException = function () {
            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
        };
        ReactiveErrors.ngModelGroupException = function () {
            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
        };
        ReactiveErrors.missingFormException = function () {
            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
        };
        ReactiveErrors.groupParentException = function () {
            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
        };
        ReactiveErrors.arrayParentException = function () {
            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
        };
        ReactiveErrors.disabledAttrWarning = function () {
            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
        };
        return ReactiveErrors;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$9 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var formControlBinding$1 = {
        provide: NgControl,
        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
    };
    /**
     * @whatItDoes Syncs a standalone {@link FormControl} instance to a form control element.
     *
     * In other words, this directive ensures that any values written to the {@link FormControl}
     * instance programmatically will be written to the DOM element (model -> view). Conversely,
     * any values written to the DOM element through user input will be reflected in the
     * {@link FormControl} instance (view -> model).
     *
     * @howToUse
     *
     * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
     * Simply create a {@link FormControl}, save it to your component class, and pass it into the
     * {@link FormControlDirective}.
     *
     * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
     * it does not require that your {@link FormControl} instance be part of any parent
     * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
     * exists above it.
     *
     * **Get the value**: the `value` property is always synced and available on the
     * {@link FormControl} instance. See a full list of available properties in
     * {@link AbstractControl}.
     *
     * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
     * or you can set it programmatically later using {@link AbstractControl.setValue} or
     * {@link AbstractControl.patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the control, you can
     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
     * {@link AbstractControl.statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
     *
     * * **npm package**: `@angular/forms`
     *
     * * **NgModule**: `ReactiveFormsModule`
     *
     *  @stable
     */
    var FormControlDirective = (function (_super) {
        __extends$9(FormControlDirective, _super);
        function FormControlDirective(validators, asyncValidators, valueAccessors) {
            _super.call(this);
            this.update = new EventEmitter();
            this._rawValidators = validators || [];
            this._rawAsyncValidators = asyncValidators || [];
            this.valueAccessor = selectValueAccessor(this, valueAccessors);
        }
        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
            enumerable: true,
            configurable: true
        });
        FormControlDirective.prototype.ngOnChanges = function (changes) {
            if (this._isControlChanged(changes)) {
                setUpControl(this.form, this);
                if (this.control.disabled && this.valueAccessor.setDisabledState) {
                    this.valueAccessor.setDisabledState(true);
                }
                this.form.updateValueAndValidity({ emitEvent: false });
            }
            if (isPropertyUpdated(changes, this.viewModel)) {
                this.form.setValue(this.model);
                this.viewModel = this.model;
            }
        };
        Object.defineProperty(FormControlDirective.prototype, "path", {
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "validator", {
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "control", {
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        FormControlDirective.prototype._isControlChanged = function (changes) {
            return changes.hasOwnProperty('form');
        };
        FormControlDirective.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
        ];
        /** @nocollapse */
        FormControlDirective.ctorParameters = [
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
        ];
        FormControlDirective.propDecorators = {
            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
        };
        return FormControlDirective;
    }(NgControl));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$11 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var formDirectiveProvider$1 = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
    };
    /**
     * @whatItDoes Binds an existing {@link FormGroup} to a DOM element.
     *
     * @howToUse
     *
     * This directive accepts an existing {@link FormGroup} instance. It will then use this
     * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
     * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
     * and {@link FormArrayName} directives.
     *
     * **Set value**: You can set the form's initial value when instantiating the
     * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
     *
     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
     * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
     * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * In this example, we create form controls for first name and last name.
     *
     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * **npm package**: `@angular/forms`
     *
     * **NgModule**: {@link ReactiveFormsModule}
     *
     *  @stable
     */
    var FormGroupDirective = (function (_super) {
        __extends$11(FormGroupDirective, _super);
        function FormGroupDirective(_validators, _asyncValidators) {
            _super.call(this);
            this._validators = _validators;
            this._asyncValidators = _asyncValidators;
            this._submitted = false;
            this.directives = [];
            this.form = null;
            this.ngSubmit = new EventEmitter();
        }
        FormGroupDirective.prototype.ngOnChanges = function (changes) {
            this._checkFormPresent();
            if (changes.hasOwnProperty('form')) {
                this._updateValidators();
                this._updateDomValue();
                this._updateRegistrations();
            }
        };
        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
            get: function () { return this._submitted; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
            get: function () { return this; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "control", {
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "path", {
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        FormGroupDirective.prototype.addControl = function (dir) {
            var ctrl = this.form.get(dir.path);
            setUpControl(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
            this.directives.push(dir);
            return ctrl;
        };
        FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
        FormGroupDirective.prototype.addFormGroup = function (dir) {
            var ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        };
        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
        FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
        FormGroupDirective.prototype.addFormArray = function (dir) {
            var ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        };
        FormGroupDirective.prototype.removeFormArray = function (dir) { };
        FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
        FormGroupDirective.prototype.updateModel = function (dir, value) {
            var ctrl = this.form.get(dir.path);
            ctrl.setValue(value);
        };
        FormGroupDirective.prototype.onSubmit = function () {
            this._submitted = true;
            this.ngSubmit.emit(null);
            return false;
        };
        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
        FormGroupDirective.prototype.resetForm = function (value) {
            if (value === void 0) { value = undefined; }
            this.form.reset(value);
            this._submitted = false;
        };
        /** @internal */
        FormGroupDirective.prototype._updateDomValue = function () {
            var _this = this;
            this.directives.forEach(function (dir) {
                var newCtrl = _this.form.get(dir.path);
                if (dir._control !== newCtrl) {
                    cleanUpControl(dir._control, dir);
                    if (newCtrl)
                        setUpControl(newCtrl, dir);
                    dir._control = newCtrl;
                }
            });
            this.form._updateTreeValidity({ emitEvent: false });
        };
        FormGroupDirective.prototype._updateRegistrations = function () {
            var _this = this;
            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
            if (this._oldForm)
                this._oldForm._registerOnCollectionChange(function () { });
            this._oldForm = this.form;
        };
        FormGroupDirective.prototype._updateValidators = function () {
            var sync = composeValidators(this._validators);
            this.form.validator = Validators.compose([this.form.validator, sync]);
            var async = composeAsyncValidators(this._asyncValidators);
            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
        };
        FormGroupDirective.prototype._checkFormPresent = function () {
            if (!this.form) {
                ReactiveErrors.missingFormException();
            }
        };
        FormGroupDirective.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[formGroup]',
                        providers: [formDirectiveProvider$1],
                        host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
                        exportAs: 'ngForm'
                    },] },
        ];
        /** @nocollapse */
        FormGroupDirective.ctorParameters = [
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        ];
        FormGroupDirective.propDecorators = {
            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
            'ngSubmit': [{ type: _angular_core.Output },],
        };
        return FormGroupDirective;
    }(ControlContainer));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$12 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var formGroupNameProvider = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
    };
    /**
     * @whatItDoes Syncs a nested {@link FormGroup} to a DOM element.
     *
     * @howToUse
     *
     * This directive can only be used with a parent {@link FormGroupDirective} (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested {@link FormGroup} you want to link, and
     * will look for a {@link FormGroup} registered with that name in the parent
     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
     *
     * Nested form groups can come in handy when you want to validate a sub-group of a
     * form separately from the rest or when you'd like to group the values of certain
     * controls into their own nested object.
     *
     * **Access the group**: You can access the associated {@link FormGroup} using the
     * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
     *
     * You can also access individual controls within the group using dot syntax.
     * Ex: `this.form.get('name.first')`
     *
     * **Get the value**: the `value` property is always synced and available on the
     * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
     *
     * **Set the value**: You can set an initial value for each child control when instantiating
     * the {@link FormGroup}, or you can set it programmatically later using
     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the group, you can
     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
     * {@link AbstractControl.statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
     *
     * * **npm package**: `@angular/forms`
     *
     * * **NgModule**: `ReactiveFormsModule`
     *
     * @stable
     */
    var FormGroupName = (function (_super) {
        __extends$12(FormGroupName, _super);
        function FormGroupName(parent, validators, asyncValidators) {
            _super.call(this);
            this._parent = parent;
            this._validators = validators;
            this._asyncValidators = asyncValidators;
        }
        /** @internal */
        FormGroupName.prototype._checkParentType = function () {
            if (_hasInvalidParent(this._parent)) {
                ReactiveErrors.groupParentException();
            }
        };
        FormGroupName.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
        ];
        /** @nocollapse */
        FormGroupName.ctorParameters = [
            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        ];
        FormGroupName.propDecorators = {
            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
        };
        return FormGroupName;
    }(AbstractFormGroupDirective));
    var formArrayNameProvider = {
        provide: ControlContainer,
        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
    };
    /**
     * @whatItDoes Syncs a nested {@link FormArray} to a DOM element.
     *
     * @howToUse
     *
     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested {@link FormArray} you want to link, and
     * will look for a {@link FormArray} registered with that name in the parent
     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
     *
     * Nested form arrays can come in handy when you have a group of form controls but
     * you're not sure how many there will be. Form arrays allow you to create new
     * form controls dynamically.
     *
     * **Access the array**: You can access the associated {@link FormArray} using the
     * {@link AbstractControl.get} method on the parent {@link FormGroup}.
     * Ex: `this.form.get('cities')`.
     *
     * **Get the value**: the `value` property is always synced and available on the
     * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
     *
     * **Set the value**: You can set an initial value for each child control when instantiating
     * the {@link FormArray}, or you can set the value programmatically later using the
     * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
     * methods.
     *
     * **Listen to value**: If you want to listen to changes in the value of the array, you can
     * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
     * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
     * status is re-calculated.
     *
     * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
     * calling its {@link FormArray.push} method.
     *  Ex: `this.form.get('cities').push(new FormControl());`
     *
     * ### Example
     *
     * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
     *
     * * **npm package**: `@angular/forms`
     *
     * * **NgModule**: `ReactiveFormsModule`
     *
     * @stable
     */
    var FormArrayName = (function (_super) {
        __extends$12(FormArrayName, _super);
        function FormArrayName(parent, validators, asyncValidators) {
            _super.call(this);
            this._parent = parent;
            this._validators = validators;
            this._asyncValidators = asyncValidators;
        }
        FormArrayName.prototype.ngOnInit = function () {
            this._checkParentType();
            this.formDirective.addFormArray(this);
        };
        FormArrayName.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeFormArray(this);
            }
        };
        Object.defineProperty(FormArrayName.prototype, "control", {
            get: function () { return this.formDirective.getFormArray(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "formDirective", {
            get: function () {
                return this._parent ? this._parent.formDirective : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "path", {
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "validator", {
            get: function () { return composeValidators(this._validators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
            get: function () { return composeAsyncValidators(this._asyncValidators); },
            enumerable: true,
            configurable: true
        });
        FormArrayName.prototype._checkParentType = function () {
            if (_hasInvalidParent(this._parent)) {
                ReactiveErrors.arrayParentException();
            }
        };
        FormArrayName.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
        ];
        /** @nocollapse */
        FormArrayName.ctorParameters = [
            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        ];
        FormArrayName.propDecorators = {
            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
        };
        return FormArrayName;
    }(ControlContainer));
    function _hasInvalidParent(parent) {
        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
            !(parent instanceof FormArrayName);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var __extends$10 = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var controlNameBinding = {
        provide: NgControl,
        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
    };
    /**
     * @whatItDoes  Syncs a {@link FormControl} in an existing {@link FormGroup} to a form control
     * element by name.
     *
     * In other words, this directive ensures that any values written to the {@link FormControl}
     * instance programmatically will be written to the DOM element (model -> view). Conversely,
     * any values written to the DOM element through user input will be reflected in the
     * {@link FormControl} instance (view -> model).
     *
     * @howToUse
     *
     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the {@link FormControl} instance you want to
     * link, and will look for a {@link FormControl} registered with that name in the
     * closest {@link FormGroup} or {@link FormArray} above it.
     *
     * **Access the control**: You can access the {@link FormControl} associated with
     * this directive by using the {@link AbstractControl.get} method.
     * Ex: `this.form.get('first');`
     *
     * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
     * See a full list of available properties in {@link AbstractControl}.
     *
     *  **Set value**: You can set an initial value for the control when instantiating the
     *  {@link FormControl}, or you can set it programmatically later using
     *  {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the control, you can
     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
     * {@link AbstractControl.statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * In this example, we create form controls for first name and last name.
     *
     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * To see `formControlName` examples with different form control types, see:
     *
     * * Radio buttons: {@link RadioControlValueAccessor}
     * * Selects: {@link SelectControlValueAccessor}
     *
     * **npm package**: `@angular/forms`
     *
     * **NgModule**: {@link ReactiveFormsModule}
     *
     *  @stable
     */
    var FormControlName = (function (_super) {
        __extends$10(FormControlName, _super);
        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
            _super.call(this);
            this._added = false;
            this.update = new EventEmitter();
            this._parent = parent;
            this._rawValidators = validators || [];
            this._rawAsyncValidators = asyncValidators || [];
            this.valueAccessor = selectValueAccessor(this, valueAccessors);
        }
        Object.defineProperty(FormControlName.prototype, "isDisabled", {
            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
            enumerable: true,
            configurable: true
        });
        FormControlName.prototype.ngOnChanges = function (changes) {
            if (!this._added)
                this._setUpControl();
            if (isPropertyUpdated(changes, this.viewModel)) {
                this.viewModel = this.model;
                this.formDirective.updateModel(this, this.model);
            }
        };
        FormControlName.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeControl(this);
            }
        };
        FormControlName.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        Object.defineProperty(FormControlName.prototype, "path", {
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "formDirective", {
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "validator", {
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "control", {
            get: function () { return this._control; },
            enumerable: true,
            configurable: true
        });
        FormControlName.prototype._checkParentType = function () {
            if (!(this._parent instanceof FormGroupName) &&
                this._parent instanceof AbstractFormGroupDirective) {
                ReactiveErrors.ngModelGroupException();
            }
            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
                !(this._parent instanceof FormArrayName)) {
                ReactiveErrors.controlParentException();
            }
        };
        FormControlName.prototype._setUpControl = function () {
            this._checkParentType();
            this._control = this.formDirective.addControl(this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this._added = true;
        };
        FormControlName.decorators = [
            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
        ];
        /** @nocollapse */
        FormControlName.ctorParameters = [
            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
        ];
        FormControlName.propDecorators = {
            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
        };
        return FormControlName;
    }(NgControl));

    var REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
        multi: true
    };
    /**
     * A Directive that adds the `required` validator to any controls marked with the
     * `required` attribute, via the {@link NG_VALIDATORS} binding.
     *
     * ### Example
     *
     * ```
     * <input name="fullName" ngModel required>
     * ```
     *
     * @stable
     */
    var RequiredValidator = (function () {
        function RequiredValidator() {
        }
        Object.defineProperty(RequiredValidator.prototype, "required", {
            get: function () { return this._required; },
            set: function (value) {
                this._required = isPresent(value) && "" + value !== 'false';
                if (this._onChange)
                    this._onChange();
            },
            enumerable: true,
            configurable: true
        });
        RequiredValidator.prototype.validate = function (c) {
            return this.required ? Validators.required(c) : null;
        };
        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        RequiredValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[required][formControlName],[required][formControl],[required][ngModel]',
                        providers: [REQUIRED_VALIDATOR],
                        host: { '[attr.required]': 'required? "" : null' }
                    },] },
        ];
        /** @nocollapse */
        RequiredValidator.ctorParameters = [];
        RequiredValidator.propDecorators = {
            'required': [{ type: _angular_core.Input },],
        };
        return RequiredValidator;
    }());
    /**
     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
     *
     * ## Example:
     *
     * {@example common/forms/ts/validators/validators.ts region='min'}
     */
    var MIN_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
        multi: true
    };
    /**
     * A directive which installs the {@link MinLengthValidator} for any `formControlName`,
     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
     *
     * @stable
     */
    var MinLengthValidator = (function () {
        function MinLengthValidator() {
        }
        MinLengthValidator.prototype._createValidator = function () {
            this._validator = Validators.minLength(parseInt(this.minlength, 10));
        };
        MinLengthValidator.prototype.ngOnChanges = function (changes) {
            if (changes['minlength']) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        MinLengthValidator.prototype.validate = function (c) {
            return isPresent(this.minlength) ? this._validator(c) : null;
        };
        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        MinLengthValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                        providers: [MIN_LENGTH_VALIDATOR],
                        host: { '[attr.minlength]': 'minlength? minlength : null' }
                    },] },
        ];
        /** @nocollapse */
        MinLengthValidator.ctorParameters = [];
        MinLengthValidator.propDecorators = {
            'minlength': [{ type: _angular_core.Input },],
        };
        return MinLengthValidator;
    }());
    /**
     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
     *
     * ## Example:
     *
     * {@example common/forms/ts/validators/validators.ts region='max'}
     */
    var MAX_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
        multi: true
    };
    /**
     * A directive which installs the {@link MaxLengthValidator} for any `formControlName,
     * `formControl`,
     * or control with `ngModel` that also has a `maxlength` attribute.
     *
     * @stable
     */
    var MaxLengthValidator = (function () {
        function MaxLengthValidator() {
        }
        MaxLengthValidator.prototype._createValidator = function () {
            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
        };
        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
            if (changes['maxlength']) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        MaxLengthValidator.prototype.validate = function (c) {
            return isPresent(this.maxlength) ? this._validator(c) : null;
        };
        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        MaxLengthValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                        providers: [MAX_LENGTH_VALIDATOR],
                        host: { '[attr.maxlength]': 'maxlength? maxlength : null' }
                    },] },
        ];
        /** @nocollapse */
        MaxLengthValidator.ctorParameters = [];
        MaxLengthValidator.propDecorators = {
            'maxlength': [{ type: _angular_core.Input },],
        };
        return MaxLengthValidator;
    }());
    var PATTERN_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
        multi: true
    };
    /**
     * A Directive that adds the `pattern` validator to any controls marked with the
     * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
     * as the regex to validate Control value against.  Follows pattern attribute
     * semantics; i.e. regex must match entire Control value.
     *
     * ### Example
     *
     * ```
     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
     * ```
     * @stable
     */
    var PatternValidator = (function () {
        function PatternValidator() {
        }
        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
        PatternValidator.prototype.ngOnChanges = function (changes) {
            if (changes['pattern']) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        PatternValidator.prototype.validate = function (c) {
            return isPresent(this.pattern) ? this._validator(c) : null;
        };
        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        PatternValidator.decorators = [
            { type: _angular_core.Directive, args: [{
                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                        providers: [PATTERN_VALIDATOR],
                        host: { '[attr.pattern]': 'pattern? pattern : null' }
                    },] },
        ];
        /** @nocollapse */
        PatternValidator.ctorParameters = [];
        PatternValidator.propDecorators = {
            'pattern': [{ type: _angular_core.Input },],
        };
        return PatternValidator;
    }());

    /**
     * @whatItDoes Creates an {@link AbstractControl} from a user-specified configuration.
     *
     * It is essentially syntactic sugar that shortens the `new FormGroup()`,
     * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
     * forms.
     *
     * @howToUse
     *
     * To use, inject `FormBuilder` into your component class. You can then call its methods
     * directly.
     *
     * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
     *
     *  * **npm package**: `@angular/forms`
     *
     *  * **NgModule**: {@link ReactiveFormsModule}
     *
     * @stable
     */
    var FormBuilder = (function () {
        function FormBuilder() {
        }
        /**
         * Construct a new {@link FormGroup} with the given map of configuration.
         * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
         *
         * See the {@link FormGroup} constructor for more details.
         */
        FormBuilder.prototype.group = function (controlsConfig, extra) {
            if (extra === void 0) { extra = null; }
            var controls = this._reduceControls(controlsConfig);
            var validator = isPresent(extra) ? extra['validator'] : null;
            var asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
            return new FormGroup(controls, validator, asyncValidator);
        };
        /**
         * Construct a new {@link FormControl} with the given `formState`,`validator`, and
         * `asyncValidator`.
         *
         * `formState` can either be a standalone value for the form control or an object
         * that contains both a value and a disabled status.
         *
         */
        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            return new FormControl(formState, validator, asyncValidator);
        };
        /**
         * Construct a {@link FormArray} from the given `controlsConfig` array of
         * configuration, with the given optional `validator` and `asyncValidator`.
         */
        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
            var _this = this;
            if (validator === void 0) { validator = null; }
            if (asyncValidator === void 0) { asyncValidator = null; }
            var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
            return new FormArray(controls, validator, asyncValidator);
        };
        /** @internal */
        FormBuilder.prototype._reduceControls = function (controlsConfig) {
            var _this = this;
            var controls = {};
            Object.keys(controlsConfig).forEach(function (controlName) {
                controls[controlName] = _this._createControl(controlsConfig[controlName]);
            });
            return controls;
        };
        /** @internal */
        FormBuilder.prototype._createControl = function (controlConfig) {
            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
                controlConfig instanceof FormArray) {
                return controlConfig;
            }
            else if (isArray(controlConfig)) {
                var value = controlConfig[0];
                var validator = controlConfig.length > 1 ? controlConfig[1] : null;
                var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
                return this.control(value, validator, asyncValidator);
            }
            else {
                return this.control(controlConfig);
            }
        };
        FormBuilder.decorators = [
            { type: _angular_core.Injectable },
        ];
        /** @nocollapse */
        FormBuilder.ctorParameters = [];
        return FormBuilder;
    }());

    var SHARED_FORM_DIRECTIVES = [
        NgSelectOption, NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor,
        CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor,
        RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator,
        MinLengthValidator, MaxLengthValidator, PatternValidator
    ];
    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
    /**
     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
     */
    var InternalFormsSharedModule = (function () {
        function InternalFormsSharedModule() {
        }
        InternalFormsSharedModule.decorators = [
            { type: _angular_core.NgModule, args: [{ declarations: SHARED_FORM_DIRECTIVES, exports: SHARED_FORM_DIRECTIVES },] },
        ];
        /** @nocollapse */
        InternalFormsSharedModule.ctorParameters = [];
        return InternalFormsSharedModule;
    }());

    /**
     * The ng module for forms.
     * @stable
     */
    var FormsModule = (function () {
        function FormsModule() {
        }
        FormsModule.decorators = [
            { type: _angular_core.NgModule, args: [{
                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                        providers: [RadioControlRegistry],
                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
                    },] },
        ];
        /** @nocollapse */
        FormsModule.ctorParameters = [];
        return FormsModule;
    }());
    /**
     * The ng module for reactive forms.
     * @stable
     */
    var ReactiveFormsModule = (function () {
        function ReactiveFormsModule() {
        }
        ReactiveFormsModule.decorators = [
            { type: _angular_core.NgModule, args: [{
                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                        providers: [FormBuilder, RadioControlRegistry],
                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
                    },] },
        ];
        /** @nocollapse */
        ReactiveFormsModule.ctorParameters = [];
        return ReactiveFormsModule;
    }());

    exports.AbstractControlDirective = AbstractControlDirective;
    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
    exports.ControlContainer = ControlContainer;
    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
    exports.DefaultValueAccessor = DefaultValueAccessor;
    exports.NgControl = NgControl;
    exports.NgControlStatus = NgControlStatus;
    exports.NgControlStatusGroup = NgControlStatusGroup;
    exports.NgForm = NgForm;
    exports.NgModel = NgModel;
    exports.NgModelGroup = NgModelGroup;
    exports.RadioControlValueAccessor = RadioControlValueAccessor;
    exports.FormControlDirective = FormControlDirective;
    exports.FormControlName = FormControlName;
    exports.FormGroupDirective = FormGroupDirective;
    exports.FormArrayName = FormArrayName;
    exports.FormGroupName = FormGroupName;
    exports.NgSelectOption = NgSelectOption;
    exports.SelectControlValueAccessor = SelectControlValueAccessor;
    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
    exports.MaxLengthValidator = MaxLengthValidator;
    exports.MinLengthValidator = MinLengthValidator;
    exports.PatternValidator = PatternValidator;
    exports.RequiredValidator = RequiredValidator;
    exports.FormBuilder = FormBuilder;
    exports.AbstractControl = AbstractControl;
    exports.FormArray = FormArray;
    exports.FormControl = FormControl;
    exports.FormGroup = FormGroup;
    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
    exports.NG_VALIDATORS = NG_VALIDATORS;
    exports.Validators = Validators;
    exports.FormsModule = FormsModule;
    exports.ReactiveFormsModule = ReactiveFormsModule;

}));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var home_component_1 = __webpack_require__(18);
var fetchdata_component_1 = __webpack_require__(17);
var counter_component_1 = __webpack_require__(16);
var clients_component_1 = __webpack_require__(12);
var client_details_component_1 = __webpack_require__(11);
var cases_component_1 = __webpack_require__(9);
var case_details_component_1 = __webpack_require__(8);
var new_case_component_1 = __webpack_require__(10);
var site_details_component_1 = __webpack_require__(15);
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'counter', component: counter_component_1.CounterComponent },
    { path: 'cases', component: cases_component_1.CasesComponent },
    { path: 'cases/case-details/:id', component: case_details_component_1.CaseDetailsComponent, },
    { path: 'cases/new-case', component: new_case_component_1.NewCaseComponent, },
    { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
    { path: 'clients', component: clients_component_1.ClientsComponent },
    { path: 'clients/client-details/:id', component: client_details_component_1.ClientDetailsComponent, },
    { path: 'clients/client-details/site-details/:id', component: site_details_component_1.SiteDetailsComponent },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: __webpack_require__(39),
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Product = (function () {
    function Product(name, comment, version, id) {
        if (id === void 0) { id = -1; }
        this.name = name;
        this.comment = comment;
        this.version = version;
        this.id = id;
    }
    Product.prototype.toString = function () {
        return this.name + " " + this.version;
    };
    return Product;
}());
exports.Product = Product;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var current_data_service_1 = __webpack_require__(5);
var backend_service_1 = __webpack_require__(3);
var setup_1 = __webpack_require__(20);
var NavMenuComponent = (function () {
    function NavMenuComponent(currentDataService, backendService) {
        this.currentDataService = currentDataService;
        this.backendService = backendService;
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backendService.getSetup().then(function (setup) { return _this.currentDataService.setup = setup; }).catch(function (error) { return _this.currentDataService.setup = new setup_1.Setup(new Array()); });
    };
    return NavMenuComponent;
}());
NavMenuComponent = __decorate([
    core_1.Component({
        selector: 'nav-menu',
        template: __webpack_require__(49),
    }),
    __metadata("design:paramtypes", [current_data_service_1.CurrentDataService,
        backend_service_1.BackendService])
], NavMenuComponent);
exports.NavMenuComponent = NavMenuComponent;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var client_1 = __webpack_require__(13);
var site_1 = __webpack_require__(14);
var setup_1 = __webpack_require__(20);
var product_1 = __webpack_require__(31);
var backend_service_1 = __webpack_require__(3);
var case_1 = __webpack_require__(6);
var clients__ = [
    new client_1.Client("AAM", "AAM long descriptive name", "AAM comment", 1),
    new client_1.Client("BBVA", "BBVA long even more descriptive name", "BBVA comment", 2)
];
var cases = [
    new case_1.Case("TNA123209", "www.bombeltestuje.intuition.com", "This is description", "12/12/12"),
    new case_1.Case("TNA264409", "www.alefajnie.intuition.com", "This is description", "03/12/17"),
    new case_1.Case("TNA934543", "www.symphonysolutions.intuition.com", "This is description", "21/02/12"),
    new case_1.Case("TNA156586", "www.test.intuition.com", "This is description", "28/12/11"),
    new case_1.Case("TNA246757", "www.tomektest.intuition.com", "This is description", "12/08/10"),
    new case_1.Case("TNA234337", "www.testtesttest.intuition.com", "This is description", "12/08/10"),
    new case_1.Case("TNA644434", "www.tttttteeeest.intuition.com", "This is description", "12/08/10"),
    new case_1.Case("TNA246667", "www.tak.intuition.com", "This is description", "01/03/17")
];
clients__[0].sites.push(new site_1.Site("AICC", "aam site 1 comment", "https://aamcontent.intuition.com", 1));
clients__[0].sites.push(new site_1.Site("Hosted", "aam site 2 comment", "https://aamrubicon.intuition.com", 2));
var allProducts__ = [
    new product_1.Product("KnowHow", "KnowHow comment", "43", 1),
    new product_1.Product("KnowHow", "KnowHow comment", "42", 2),
    new product_1.Product("KnowHow", "KnowHow comment", "41", 3),
    new product_1.Product("KnowHow", "KnowHow comment", "40", 4),
    new product_1.Product("NASBA", "NASBA comment", "2016", 5)
];
var MockBackendService = (function (_super) {
    __extends(MockBackendService, _super);
    function MockBackendService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockBackendService.prototype.getClients = function (clientIds) {
        return Promise.resolve(clients__);
    };
    MockBackendService.prototype.getClient = function (clientId) {
        return new Promise(function (resolve) {
            return setTimeout(function () {
                return resolve(clients__.find(function (value, index, obj) { return value.id == clientId; }));
            }, 2000);
        });
    };
    MockBackendService.prototype.saveClient = function (clientToSave) {
        return new Promise(function (resolve) {
            var existingClient = clients__.find(function (value, index, obj) { return value.id == clientToSave.id; });
            var existingClientIndex = clients__.indexOf(existingClient);
            clients__.splice(existingClientIndex, 1, clientToSave);
            resolve("");
        });
    };
    MockBackendService.prototype.addClient = function (clientToAdd) {
        return new Promise(function (resolve) {
            var mockNewClient = new client_1.Client(clientToAdd.code, clientToAdd.name, clientToAdd.comment, clients__.length + 1);
            clients__.push(mockNewClient);
            resolve(clients__.length);
        });
    };
    MockBackendService.prototype.getSetup = function () {
        return Promise.resolve(new setup_1.Setup(allProducts__));
    };
    MockBackendService.prototype.addSite = function (clientId, siteToAdd) {
        var existingClient = clients__.find(function (value, index, obj) { return value.id == clientId; });
        existingClient.sites.push(new site_1.Site(siteToAdd.integrationType, siteToAdd.comment, siteToAdd.url, existingClient.sites.length + 1));
        return Promise.resolve(existingClient.sites.length);
    };
    MockBackendService.prototype.saveSite = function (siteToAdd) {
        return Promise.resolve();
    };
    MockBackendService.prototype.getCases = function (clientIds) {
        return Promise.resolve(cases);
    };
    return MockBackendService;
}(backend_service_1.BackendService));
MockBackendService = __decorate([
    core_1.Injectable()
], MockBackendService);
exports.MockBackendService = MockBackendService;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(26);
__webpack_require__(25);
var aspnet_prerendering_1 = __webpack_require__(27);
var core_1 = __webpack_require__(0);
var angular2_universal_1 = __webpack_require__(7);
var app_module_1 = __webpack_require__(24);
core_1.enableProdMode();
var platform = angular2_universal_1.platformNodeDynamic();
exports.default = aspnet_prerendering_1.createServerRenderer(function (params) {
    return new Promise(function (resolve, reject) {
        var requestZone = Zone.current.fork({
            name: 'angular-universal request',
            properties: {
                baseUrl: '/',
                requestUrl: params.url,
                originUrl: params.origin,
                preboot: false,
                document: '<app></app>'
            },
            onHandleError: function (parentZone, currentZone, targetZone, error) {
                // If any error occurs while rendering the module, reject the whole operation
                reject(error);
                return true;
            }
        });
        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
            resolve({ html: html });
        }, reject);
    });
});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<nav-menu></nav-menu>\n    <div class=\"main-panel\">\r\n        <nav class=\"navbar navbar-default\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"navbar-header\">\r\n                    <ul class=\"nav navbar-nav navbar-left\">\r\n                        <li class=\"nav-li\"><a class=\"navbar-brand\" href=\"clients.html\">Clients</a></li>\r\n                        <li class=\"nav-li\"><a class=\"navbar-brand\"><i class=\"ti-angle-right\"></i></a></li>\r\n                        <li class=\"nav-li\"><a class=\"navbar-brand\" href=\"addClient.html\">Client details</a></li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"collapse navbar-collapse\">\r\n                    <ul class=\"nav navbar-nav navbar-right\">\r\n                        <li class=\"dropdown\">\r\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                <i class=\"ti-bell\"></i>\r\n                                <p class=\"notification\">5</p>\r\n                                <p>Notifications</p>\r\n                                <b class=\"caret\"></b>\r\n                            </a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li><a href=\"#\">Notification 1</a></li>\r\n                                <li><a href=\"#\">Notification 2</a></li>\r\n                                <li><a href=\"#\">Notification 3</a></li>\r\n                                <li><a href=\"#\">Notification 4</a></li>\r\n                                <li><a href=\"#\">Another notification</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                <i class=\"ti-lock\"></i>\r\n                                <p>Log in</p>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n            </div>\r\n        </nav>\r\n        <router-outlet></router-outlet>\r\n    </div>\n\t\t<footer class=\"footer\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<nav class=\"pull-left\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t<i class=\"ti-settings\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t\t<div class=\"copyright pull-right\">\n\t\t\t\t\t&copy;\n\t\t\t\t\t<script>document.write(new Date().getFullYear())</script>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</footer>\n    <div class=\"fatalError-background\"></div>\n</div>\n";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <p *ngIf=\"!case\">Loading case details...</p>\n\n    <div *ngIf=\"case\" class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-7\">\n                <div class=\"card\">\n                    <div class=\"header text-center\" style=\"margin-bottom: 10px;\">\n                        <h4 class=\"title\" style=\"margin-bottom: 24px;\">Case details</h4>\n                    </div>\n                    <div class=\"content\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-2\">\n                                    <div class=\"form-group\">\n                                        <label>ID</label>\n                                        <input type=\"text\" class=\"form-control border-input\" value=\"{{case.id}}\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Date of creation</label>\n                                        <input type=\"text\" class=\"form-control border-input\" value=\"{{case.creationDate}}\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Site</label>\n                                        <input type=\"text\" class=\"form-control border-input\" value=\"{{case.site}}\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>Description</label>\n                                        <textarea rows=\"5\" class=\"form-control border-input disabledInput\">{{case.description}}</textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-md-offset-4\">\n                                    <button type=\"submit\" class=\"btn btn-default btn-block table-but btn-wd\">Update</button>\n                                </div>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <p *ngIf=\"!cases\">Loading cases...</p>\n\n    <div *ngIf=\"cases\" class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12 buttons-nav content\">\n                <div class=\"col-md-2\">\n                    <a (click)=\"newCase()\" class=\"table-link-details\"><button class=\"btn btn-default btn-block table-but\">Add case</button></a>\n                </div>\n                <div class=\"col-md-6\">\n\n                </div>\n                <div class=\"col-md-4\"></div>\n            </div>\n\n            <div class=\"col-md-12 card\">\n                <div class=\"header\">\n                    <h4 class=\"title\" style=\"margin-bottom: 20px;\">Cases history</h4>\n                </div>\n                <hr>\n                <table id=\"fresh-table\" class=\"table\">\n                    <thead>\n                    <th data-field=\"id\">ID</th>\n                    <th data-field=\"evidence\" data-sortable=\"true\"><i class=\"ti-arrows-vertical pull-right\" style=\"margin-top: 15px; margin-left: 5px; color: #949097; font-size: 12px;\"></i>Site</th>\n                    <th data-field=\"description\">Description</th>\n                    <th data-field=\"date\" data-sortable=\"true\"><i class=\"ti-arrows-vertical pull-right\" style=\"margin-top: 15px; margin-left: 5px; color: #949097; font-size: 12px;\"></i>Date of creation</th>\n                    <th data-field=\"type\">Type</th>\n                    <th>Details</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let case of cases\">\n                            <td>{{case.id}}</td>\n                            <td>{{case.site}}</td>\n                            <td>{{case.description}}</td>\n                            <td>{{case.creationDate}}</td>\n                            <td>managerpoland.intuition.com</td>\n                            <td><a class=\"table-link-details\"><button class=\"btn btn-default btn-block table-but\" (click)=\"caseDetails(case.id)\">Details</button></a></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-7\">\n                <div class=\"card\">\n                    <div class=\"header text-center\" style=\"margin-bottom: 10px;\">\n                        <h4 class=\"title\" style=\"margin-bottom: 24px;\">New Case</h4>\n                        <p>{{diagnostic}}</p>\n                    </div>\n                    <div class=\"content\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-2\">\n                                    <div class=\"form-group\">\n                                        <label for=\"id\">ID</label>\n                                        <input type=\"text\" id=\"id\" class=\"form-control border-input\" name=\"id\" [(ngModel)]=\"case.id\" required #id=\"ngModel\">\n                                    </div>\n                                    <div [hidden]=\"id.valid || id.untouched\"\n                                         class=\"alert alert-danger\">\n                                        Id is required\n                                    </div>\n                                </div>\n\n\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label for=\"creationDate\">Date of creation</label>\n                                        <input type=\"text\" id=\"creationDate\" class=\"form-control border-input\" name=\"creationDate\" [(ngModel)]=\"case.creationDate\" required #creationDate=\"ngModel\">\n                                    </div>\n                                    <div [hidden]=\"creationDate.valid || creationDate.untouched\"\n                                         class=\"alert alert-danger\">\n                                        Creation date is required\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label for=\"site\">Site</label>\n                                        <input type=\"text\" id=\"site\" class=\"form-control border-input\" name=\"site\" [(ngModel)]=\"case.site\" required #site=\"ngModel\">\n                                    </div>\n                                    <div [hidden]=\"site.valid || site.untouched\"\n                                         class=\"alert alert-danger\">\n                                        Site is required\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"description\">Description</label>\n                                        <textarea rows=\"5\" id=\"description\" class=\"form-control border-input disabledInput\" name=\"description\" [(ngModel)]=\"case.description\" required #description=\"ngModel\"></textarea>\n                                    </div>\n                                    <div [hidden]=\"description.valid || description.untouched\"\n                                         class=\"alert alert-danger\">\n                                        Creation date is required\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-md-offset-4\">\n                                    <button type=\"submit\" class=\"btn btn-default btn-block table-but btn-wd\">Save</button>\n                                </div>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\t<p *ngIf=\"!client\">Loading client...</p>\n\n\t<div *ngIf=\"client\" class=\"container-fluid\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"header text-center\">\n\t\t\t\t<h4 class=\"title\" style=\"margin-bottom: 24px;\">Client details</h4>\n\t\t\t</div>\n\t\t\t<div class=\"content\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Code</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control border-input\" placeholder=\"Code\" name=\"clientCode\" [(ngModel)]=\"client.code\" [disabled]=\"!isNewClient\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control border-input\" placeholder=\"Name\" name=\"clientName\" [(ngModel)]=\"client.name\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Comment</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control border-input\" placeholder=\"Comment\" name=\"clientComment\" [(ngModel)]=\"client.comment\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4 col-md-offset-4\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default btn-block table-but btn-wd\" (click)=\"onSaveClient()\">Save</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div  *ngIf=\"!isNewClient\" class=\"col-lg-12 col-md-7 card\">\n\t\t\t<div class=\"header table-header\">\n\t\t\t\t<h4 class=\"title\">Sites</h4>\n\t\t\t</div>\n\t\t\t<hr />\n\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 center-div\">\n\t\t\t\t\t\t<button class=\"btn btn-default btn-block table-but pull-left btn-wd btn-add\" (click)=\"addSite()\">Add site</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 center-div\">\n\t\t\t\t\t\t<div class=\"search pull-right\">\n\t\t\t\t\t\t\t<input class=\"form-control pull-right search-input\" type=\"text\" placeholder=\"Search\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div><i class=\"ti-search pull-right search-icon\"></i></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t<hr />\n\t\t\t<div class=\"content-table\">\n\t\t\t\t<table id=\"fresh-table\" class=\"table clientDetails table-responsive\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th data-field=\"link\" data-sortable=\"true\"><i class=\"ti-arrows-vertical\" style=\"margin-top: 15px; margin-left: 5px; margin-right: 5px; color: #949097; font-size: 12px;\"></i>Link</th>\n\t\t\t\t\t\t\t<th data-field=\"nameSh\">Content</th>\n\t\t\t\t\t\t\t<th>Details</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let site of client.sites\">\n\t\t\t\t\t\t\t<td>{{site.url}}</td>\n\t\t\t\t\t\t\t<td>{{site.integrationType}}</td>\n\t\t\t\t\t\t\t<td><button class=\"btn btn-default btn-block table-but\" (click)=\"siteDetails(site.id)\">Details</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n</div>\n";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\t<p *ngIf=\"!clients\">Loading clients...</p>\n\t<div *ngIf=\"clients\" class=\"container-fluid\">\n\n\t\t<div class=\"card\">\n\t\t\t<div class=\"header table-header\">\n\t\t\t\t<h4 class=\"title\">Clients</h4>\n\t\t\t</div>\n\t\t\t<hr />\n\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 center-div\">\n\t\t\t\t\t\t<button class=\"btn btn-default btn-block table-but pull-left btn-wd btn-add\" (click)=\"addClient()\">Add client</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 center-div\">\n\t\t\t\t\t\t<div class=\"search pull-right\">\n\t\t\t\t\t\t\t<input class=\"form-control pull-right search-input\" type=\"text\" placeholder=\"Search\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div><i class=\"ti-search pull-right search-icon\"></i></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t<hr />\n\t\t\t<div class=\"content-table\">\n\t\t\t\t<table id=\"fresh-table\" class=\"table client table-responsive\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th data-field=\"code\" data-sortable=\"true\"><i class=\"ti-arrows-vertical\" style=\"margin-top: 15px; margin-left: 5px; margin-right: 5px; color: #949097; font-size: 12px;\"></i>Code</th>\n\t\t\t\t\t\t\t<th data-field=\"name\" data-sortable=\"true\"><i class=\"ti-arrows-vertical\" style=\"margin-top: 15px; margin-left: 5px; margin-right: 5px; color: #949097; font-size: 12px;\"></i>Client's name</th>\n\t\t\t\t\t\t\t<th>Details</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let client of clients\" (click)=\"onSelect(client)\">\n\t\t\t\t\t\t\t<td>{{client.code}}</td>\n\t\t\t\t\t\t\t<td>{{client.name}}</td>\n\t\t\t\t\t\t\t<td><button class=\"btn btn-default btn-block table-but\" (click)=\"clientDetails(client.id)\">Details</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\t<p *ngIf=\"!site\">Loading site...</p>\n\n\t<div *ngIf=\"site\" class=\"container-fluid\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"header text-center\">\n\t\t\t\t<h4 class=\"title\">Site details</h4>\n\t\t\t</div>\n\t\t\t<div class=\"content\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t\t\t<label for=\"siteType\">Site type</label>\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"siteType\" [(ngModel)]=\"site.integrationType\" name=\"siteType\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let type of siteTypes\" [value]=\"type\">{{type}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Url</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control border-input\" placeholder=\"Url\" name=\"siteUrl\" [(ngModel)]=\"site.url\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Client’s LMS</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control border-input\" placeholder=\"Code\" value=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Comment</label>\n\t\t\t\t\t\t\t\t<textarea rows=\"5\" class=\"form-control border-input\" placeholder=\"Here can be your description\" value=\"Mike\">Oh so, your weak rhyme\nYou doubt I'll bother, reading into it\nI'll probably won't, left to my own devices\nBut that's the difference in our opinions.</textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4 col-md-offset-4\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default btn-block table-but btn-wd\" (click)=\"saveSite()\">Save</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"!isNewSite\" class=\"col-lg-12 col-md-12 card\">\n\t\t\t<div class=\"header\">\n\t\t\t\t<h4 class=\"title\" style=\"margin-bottom: 20px;\">Products</h4>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 center-div\">\n\t\t\t\t\t<button class=\"btn btn-default btn-block table-but pull-left btn-wd btn-add\" (click)=\"addProduct()\">Add product</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 center-div\">\n\t\t\t\t\t<div class=\"search pull-right\">\n\t\t\t\t\t\t<input class=\"form-control pull-right search-input\" type=\"text\" placeholder=\"Search\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div><i class=\"ti-search pull-right search-icon\"></i></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<div class=\"content\" *ngIf=\"isAddingNewProduct\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"dropdown col-lg-6 col-md-12 col-sm-12 col-xs-12 pull-left\" style=\"margin-bottom: 20px;\">\n\t\t\t\t\t\t<label for=\"productSelection\">Please select product</label>\n\t\t\t\t\t\t<select class=\"form-control\" id=\"productSelection\" [(ngModel)]=\"productToAdd\" name=\"productSelection\">\n\t\t\t\t\t\t\t<option *ngFor=\"let prod of currentDataService.setup.allProducts\" [ngValue]=\"prod\">{{prod.name}} {{prod.version}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12 center-block\">\n\t\t\t\t\t\t<button class=\"btn btn-default btn-block pull-right btn-wd\" (click)=\"saveProductToAdd()\" style=\"margin-top: 25px\">Save</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12 center-block\">\n\t\t\t\t\t\t<button class=\"btn btn-default btn-block pull-right btn-wd\" (click)=\"cancelAddingProduct()\" style=\"margin-top: 25px\">Cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"content-table\">\n\t\t\t\t<table id=\"fresh-table\" class=\"table product table-responsive\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th data-field=\"nameSh\" data-sortable=\"true\">Name</th>\n\t\t\t\t\t\t\t<th data-field=\"nameSh\">Version</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let product of site.products\">\n\t\t\t\t\t\t\t<td>{{product.name}}</td>\n\t\t\t\t\t\t\t<td>{{product.version}}</td>\n\t\t\t\t\t\t\t<td><button class=\"btn btn-default btn-block pull-left btn-wd\" (click)=\"removeProduct(product)\">Remove</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<h1>Counter</h1>\n\n<p>This is a simple example of an Angular 2 component.</p>\n\n<p>Current count: <strong>{{ currentCount }}</strong></p>\n\n<button (click)=\"incrementCounter()\">Increment</button>\n";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<h1>Weather forecast</h1>\n\n<p>This component demonstrates fetching data from the server.</p>\n\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\n\n<table class='table' *ngIf=\"forecasts\">\n    <thead>\n        <tr>\n            <th>Date</th>\n            <th>Temp. (C)</th>\n            <th>Temp. (F)</th>\n            <th>Summary</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let forecast of forecasts\">\n            <td>{{ forecast.dateFormatted }}</td>\n            <td>{{ forecast.temperatureC }}</td>\n            <td>{{ forecast.temperatureF }}</td>\n            <td>{{ forecast.summary }}</td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 col-md-offset-1 fatalError-content\">\r\n    <div class=\"header\"></div>\r\n    <div class=\"content\">\r\n        <p class=\"fatalError-card-banner\">You have reached <br> the end of the Internet</p>\r\n        <p class=\"fatalError-card-comment\">Just kidding. There's just nothing here</p>\r\n        <button class=\"btn table-but\"><a href=\"#\">Return</a></button>\r\n    </div>\r\n</div>\r\n\n";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\n\n\t<!--\n\t\t\t\tTip 1: you can change the color of the sidebar's background using: data-background-color=\"white | black\"\n\t\t\t\tTip 2: you can change the color of the active button using the data-active-color=\"primary | info | success | warning | danger\"\n\t-->\n\n\t<div class=\"sidebar-wrapper\">\n\t\t<div class=\"logo\">\n\t\t\t<a class=\"simple-text\" [routerLink]=\"['/home']\">\n\t\t\t\tIntuition Processing\n\t\t\t</a>\n\t\t</div>\n\n\t\t<ul class=\"nav\">\n            <div id=\"ind\"></div>\n\t\t\t<li class=\"active\">\n\t\t\t\t<a [routerLink]=\"['/clients']\">\n\t\t\t\t\t<i class=\"ti-user\"></i>\n\t\t\t\t\t<p>Clients</p>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a [routerLink]=\"['/cases']\">\n\t\t\t\t\t<i class=\"ti-view-list-alt\"></i>\n\t\t\t\t\t<p>Cases</p>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n        <ul class=\"ululul\">\r\n            <div id='indicator'></div>\r\n            <li>#wow</li>\r\n            <li>#such</li>\r\n            <li>#list</li>\r\n            <li>#here</li>\r\n            <li>#is</li>\r\n            <li>#some</li>\r\n            <li>#content</li>\r\n        </ul>\r\n\n\t</div>\n</div>";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(54);
var subscribeToResult_1 = __webpack_require__(56);
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): Observable} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return this.lift(new SwitchMapOperator(project, resultSelector));
}
exports.switchMap = switchMap;
var SwitchMapOperator = (function () {
    function SwitchMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapSubscriber = (function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (this.resultSelector) {
            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            this.destination.next(innerValue);
        }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        var result;
        try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return SwitchMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMap.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(57);
/**
 * @param PromiseCtor
 * @return {Promise<T>}
 * @method toPromise
 * @owner Observable
 */
function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
            PromiseCtor = root_1.root.Rx.config.Promise;
        }
        else if (root_1.root.Promise) {
            PromiseCtor = root_1.root.Promise;
        }
    }
    if (!PromiseCtor) {
        throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
    });
}
exports.toPromise = toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(124);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(16);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(25);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(26);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(33);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(6);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2VmYjEyMWUwODkyNzgwNWFhMGYiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9leHRlcm5hbCBcIi4vdmVuZG9yXCIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9zZXJ2aWNlcy9jbGllbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2N1cnJlbnQtZGF0YS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXNlcy9tb2RlbHMvY2FzZS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FzZXMvY29tcG9uZW50cy9jYXNlLWRldGFpbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXNlcy9jb21wb25lbnRzL2Nhc2VzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FzZXMvY29tcG9uZW50cy9uZXctY2FzZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50LWRldGFpbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jbGllbnRzL21vZGVscy9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NsaWVudHMvbW9kZWxzL3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NsaWVudHMvc2l0ZS1kZXRhaWxzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvYmFzZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvc2V0dXAudHMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tbW9uL2J1bmRsZXMvY29tbW9uLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUtbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzL25vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vfi9AYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NsaWVudHMvbW9kZWxzL3Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9tb2NrLmJhY2tlbmQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hc3NldHMvY3NzL2FuaW1hdGUubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Fzc2V0cy9jc3MvZnJlc2gtYm9vdHN0cmFwLXRhYmxlLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Fzc2V0cy9jc3MvcGFwZXItZGFzaGJvYXJkLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Fzc2V0cy9jc3MvdGhlbWlmeS1pY29ucy5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhc2VzL2NvbXBvbmVudHMvY2FzZS1kZXRhaWxzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXNlcy9jb21wb25lbnRzL2Nhc2VzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXNlcy9jb21wb25lbnRzL25ldy1jYXNlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NsaWVudHMvc2l0ZS1kZXRhaWxzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL34vcnhqcy9vcGVyYXRvci9zd2l0Y2hNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yeGpzL29wZXJhdG9yL3RvUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2J1bmRsZXMvaHR0cC51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9PdXRlclN1YnNjcmliZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJqZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvcm9vdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHFDOzs7Ozs7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxrQkFBa0IsRUFBRSxrQkFBa0Isb0JBQW9CLEVBQUUsZUFBZSx1QkFBdUIsRUFBRTtBQUMxSSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFDOzs7Ozs7QUMzQkEsK0M7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw2QyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdlZmIxMjFlMDg5Mjc4MDVhYTBmIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDY0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jbGllbnRzL21vZGVscy9jbGllbnQnO1xuaW1wb3J0IHsgU2l0ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2xpZW50cy9tb2RlbHMvc2l0ZSc7XG5pbXBvcnQgeyBTZXR1cCB9IGZyb20gJy4uL21vZGVscy9zZXR1cCc7XG5pbXBvcnQgeyBDYXNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYXNlcy9tb2RlbHMvY2FzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cblx0YWJzdHJhY3QgZ2V0Q2xpZW50cyhjbGllbnRJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxDbGllbnRbXT47XG5cblx0YWJzdHJhY3QgZ2V0Q2xpZW50KGNsaWVudElkOiBudW1iZXIpOiBQcm9taXNlPENsaWVudD47XG5cblx0YWJzdHJhY3Qgc2F2ZUNsaWVudChjbGllbnRUb1NhdmU6IENsaWVudCk6IFByb21pc2U8c3RyaW5nPjtcblxuXHRhYnN0cmFjdCBhZGRDbGllbnQoY2xpZW50VG9BZGQ6IENsaWVudCk6IFByb21pc2U8bnVtYmVyPjtcblxuXHRhYnN0cmFjdCBnZXRTZXR1cCgpOiBQcm9taXNlPFNldHVwPjtcblxuXHRhYnN0cmFjdCBhZGRTaXRlKGNsaWVudElkOiBudW1iZXIsIHNpdGVUb0FkZDogU2l0ZSk6IFByb21pc2U8bnVtYmVyPjtcblxuICAgIGFic3RyYWN0IHNhdmVTaXRlKHNpdGVUb0FkZDogU2l0ZSk6IFByb21pc2U8dm9pZD47XG5cbiAgICBhYnN0cmFjdCBnZXRDYXNlcyhjbGllbnRJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxDYXNlW10+O1xuXG4gICAgLy9hYnN0cmFjdCBnZXRDYXNlKGNhc2VJZDogbnVtYmVyKTogUHJvbWlzZTxDbGllbnQ+O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZSc7XG5cbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uL21vZGVscy9jbGllbnQnO1xuaW1wb3J0IHsgU2l0ZSB9IGZyb20gJy4uL21vZGVscy9zaXRlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbGllbnRTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZW5kOiBCYWNrZW5kU2VydmljZSkge1xuXHR9XG5cblx0Z2V0QWxsQ2xpZW50cygpOiBQcm9taXNlPENsaWVudFtdPiB7XG5cdFx0cmV0dXJuIHRoaXMuYmFja2VuZC5nZXRDbGllbnRzKFtdKTtcblx0fVxuXG5cdGdldENsaWVudChpZDogbnVtYmVyKTogUHJvbWlzZTxDbGllbnQ+IHtcblx0XHRyZXR1cm4gdGhpcy5iYWNrZW5kLmdldENsaWVudChpZCk7XG5cdH1cblxuXHRzYXZlQ2xpZW50KGNsaWVudFRvU2F2ZTogQ2xpZW50KSB7XG5cdFx0dGhpcy5iYWNrZW5kLnNhdmVDbGllbnQoY2xpZW50VG9TYXZlKTtcblx0fVxuXG5cdGFkZENsaWVudChjbGllbnRUb0FkZDogQ2xpZW50KTogUHJvbWlzZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5iYWNrZW5kLmFkZENsaWVudChjbGllbnRUb0FkZCk7XG5cdH1cblxuXHRzYXZlU2l0ZShzaXRlVG9TYXZlOiBTaXRlKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHRoaXMuYmFja2VuZC5zYXZlU2l0ZShzaXRlVG9TYXZlKTtcblx0fVxuXG5cdGFkZFNpdGVUb0NsaWVudChjbGllbnRJZDogbnVtYmVyLCBzaXRlVG9BZGQ6IFNpdGUpOiBQcm9taXNlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmJhY2tlbmQuYWRkU2l0ZShjbGllbnRJZCwgc2l0ZVRvQWRkKTtcblx0fVxuXG5cdGFkZFByb2R1Y3RUb1NpdGUoc2l0ZUlkOiBudW1iZXIsIHByb2R1Y3RUb0FkZDogUHJvZHVjdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXG5cdHJlbW92ZVByb2R1Y3RGcm9tU2l0ZShzaXRlSWQ6IG51bWJlciwgcHJvZHVjdFRvUmVtb3ZlOiBQcm9kdWN0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9zZXJ2aWNlcy9jbGllbnQuc2VydmljZS50cyIsImltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2xpZW50cy9tb2RlbHMvY2xpZW50JztcbmltcG9ydCB7IFNldHVwIH0gZnJvbSAnLi4vbW9kZWxzL3NldHVwJztcblxuZXhwb3J0IGNsYXNzIEN1cnJlbnREYXRhU2VydmljZSB7XG5cdHByaXZhdGUgX2N1cnJlbnRDbGllbnQ6IENsaWVudDtcblxuXHRzZXQgY3VycmVudENsaWVudCh2YWx1ZTogQ2xpZW50KSB7XG5cdFx0dGhpcy5fY3VycmVudENsaWVudCA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRDbGllbnQoKTogQ2xpZW50IHtcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudENsaWVudDtcblx0fVxuXG5cdHByaXZhdGUgX3NldHVwOiBTZXR1cDtcblx0c2V0IHNldHVwKHZhbHVlOiBTZXR1cCkge1xuXHRcdHRoaXMuX3NldHVwID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgc2V0dXAoKTogU2V0dXAge1xuXHRcdHJldHVybiB0aGlzLl9zZXR1cDtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9jdXJyZW50LWRhdGEuc2VydmljZS50cyIsImV4cG9ydCBjbGFzcyBDYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBzaXRlOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgY3JlYXRpb25EYXRlOiBzdHJpbmdcbiAgICApIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FzZXMvbW9kZWxzL2Nhc2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg2Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENhc2UgfSBmcm9tICcuLi9tb2RlbHMvY2FzZSc7XG5pbXBvcnQgeyBDYXNlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYXNlcy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgLy9zZWxlY3RvcjogJ2Nhc2UtZGV0YWlscycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2FzZS1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyksXG59KVxuZXhwb3J0IGNsYXNzIENhc2VEZXRhaWxzQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cbiAgICBjYXNlOiBDYXNlO1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FzZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FzZSA9IG5ldyBDYXNlKFwiVE5BMTIzMjA5XCIsIFwid3d3LmJvbWJlbHRlc3R1amUuaW50dWl0aW9uLmNvbVwiLCBcIlRoaXMgaXMgZGVzY3JpcHRpb25cIiwgXCIxMi8xMi8xMlwiKVxuICAgICAgICAvL3RoaXMucm91dGUucGFyYW1zLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgICAgLy8gICAgbGV0IHJldDogUHJvbWlzZTxDYXNlPjtcbiAgICAgICAgLy8gICAgbGV0IGNhc2VJZDogc3RyaW5nID0gcGFyYW1zWydpZCddO1xuXG4gICAgICAgIC8vICAgIHRyeSB7XG4gICAgICAgIC8vICAgICAgICAvL3JldCA9IHRoaXMuY2xpZW50U2VydmljZS5nZXRDbGllbnQoY2xpZW50SWQpO1xuICAgICAgICAvLyAgICB9XG4gICAgICAgIC8vICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vICAgICAgICAvL3JldCA9IFByb21pc2UucmVqZWN0KFwiVW5hYmxlIHRvIGdldCBjbGllbnQgXCIgKyBjbGllbnRJZCArIFwiIFwiICsgZS5NZXNzYWdlKTtcbiAgICAgICAgLy8gICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgIHJldHVybiByZXQ7XG4gICAgICAgIC8vfVxuICAgICAgICAvLykuc3Vic2NyaWJlKGMgPT4gdGhpcy5fY2FzZSA9IGMsIGUgPT4gdGhpcy5lcnJvciA9IGUpO1xuICAgIH1cbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXNlcy9jb21wb25lbnRzL2Nhc2UtZGV0YWlscy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENhc2UgfSBmcm9tICcuLi9tb2RlbHMvY2FzZSc7XG5pbXBvcnQgeyBDYXNlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYXNlcy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgLy9zZWxlY3RvcjogJ2hlcm8tZm9ybScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2FzZXMuY29tcG9uZW50Lmh0bWwnKSxcbiAgICAvL3Byb3ZpZGVyczogW0Nhc2VTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIENhc2VzQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgY2FzZXM6IENhc2VbXTtcbiAgICBzdGF0dXM6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2VuZDogQmFja2VuZFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXRDYXNlcygpO1xuICAgIH1cblxuICAgIGdldENhc2VzKCk6IFByb21pc2U8Q2FzZVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tlbmQuZ2V0Q2FzZXMoW10pXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IENhc2VbXSkgPT4gdGhpcy5jYXNlcyA9IHZhbHVlKVxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4gdGhpcy5zdGF0dXMgPSByZWFzb24pO1xuICAgIH1cblxuICAgIGNhc2VEZXRhaWxzKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuL2Nhc2VzL2Nhc2UtZGV0YWlscycsIGlkXSk7XG4gICAgfVxuXG4gICAgbmV3Q2FzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuL2Nhc2VzL25ldy1jYXNlJ10pO1xuICAgIH1cbiAgICAvL21vZGVsID0gbmV3IENhc2UoXCJUTkExMjMyMDlcIiwgXCJ3d3cuYm9tYmVsdGVzdHVqZS5pbnR1aXRpb24uY29tXCIsIFwiVGhpcyBpcyBkZXNjcmlwdGlvblwiLCBcIjEyLzEyLzEyXCIpO1xuICAgIC8vc3VibWl0dGVkID0gZmFsc2U7XG4gICAgLy9vblN1Ym1pdCgpIHtcbiAgICAvLyAgICB0aGlzLmFkZENhc2UoKTtcbiAgICAvLyAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgLy99XG4gICAgLy9uZXdDYXNlKCkge1xuICAgIC8vICAgIHRoaXMubW9kZWwgPSBuZXcgQ2FzZShcImFzZGFzXCIsIFwiYXNkYXNkXCIpO1xuICAgIC8vfVxuXG4gICAgLy9uZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyAgICB0aGlzLmdldEFsbCgpO1xuICAgIC8vfVxuXG4gICAgLy9nZXRBbGwoKSB7XG4gICAgLy8gICAgdGhpcy5jYXNlU2VydmljZS5nZXRDYXNlc1VwKClcbiAgICAvLyAgICAgICAgLnN1YnNjcmliZShcbiAgICAvLyAgICAgICAgY2FzZXMgPT4gdGhpcy5jYXNlcyA9IGNhc2VzLFxuICAgIC8vICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuXG4gICAgLy8gICAgY29uc29sZS5sb2codGhpcy5jYXNlcyk7XG4gICAgLy99XG4gICAgXG4gICAgLy9hZGRDYXNlKCkge1xuICAgIC8vICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwpO1xuICAgIC8vICAgIHRoaXMuY2FzZVNlcnZpY2UuYWRkQ2FzZSh0aGlzLm1vZGVsKVxuICAgIC8vICAgICAgICAuc3Vic2NyaWJlKFxuICAgIC8vICAgICAgICBoZXJvID0+IHRoaXMuY2FzZXMucHVzaChoZXJvKSxcbiAgICAvLyAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgICAvL31cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FzZXMvY29tcG9uZW50cy9jYXNlcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENhc2UgfSBmcm9tICcuLi9tb2RlbHMvY2FzZSc7XG5pbXBvcnQgeyBDYXNlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYXNlcy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgLy9zZWxlY3RvcjogJ2Nhc2UtZGV0YWlscycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmV3LWNhc2UuY29tcG9uZW50Lmh0bWwnKSxcbn0pXG5leHBvcnQgY2xhc3MgTmV3Q2FzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG4gICAgY2FzZTogQ2FzZTtcbiAgICBlcnJvcjogc3RyaW5nO1xuXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgICBvblN1Ym1pdCgpIHsgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyB9XG5cbiAgICBnZXQgZGlhZ25vc3RpYygpIHsgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FzZSk7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhc2UgPSBuZXcgQ2FzZShcIlwiLFwiXCIsXCJcIixcIlwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vdGhpcy5yb3V0ZS5wYXJhbXMuc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgICAvLyAgICBsZXQgcmV0OiBQcm9taXNlPENhc2U+O1xuICAgICAgICAvLyAgICBsZXQgY2FzZUlkOiBzdHJpbmcgPSBwYXJhbXNbJ2lkJ107XG5cbiAgICAgICAgLy8gICAgdHJ5IHtcbiAgICAgICAgLy8gICAgICAgIC8vcmV0ID0gdGhpcy5jbGllbnRTZXJ2aWNlLmdldENsaWVudChjbGllbnRJZCk7XG4gICAgICAgIC8vICAgIH1cbiAgICAgICAgLy8gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gICAgICAgIC8vcmV0ID0gUHJvbWlzZS5yZWplY3QoXCJVbmFibGUgdG8gZ2V0IGNsaWVudCBcIiArIGNsaWVudElkICsgXCIgXCIgKyBlLk1lc3NhZ2UpO1xuICAgICAgICAvLyAgICB9XG5cbiAgICAgICAgLy8gICAgcmV0dXJuIHJldDtcbiAgICAgICAgLy99XG4gICAgICAgIC8vKS5zdWJzY3JpYmUoYyA9PiB0aGlzLl9jYXNlID0gYywgZSA9PiB0aGlzLmVycm9yID0gZSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhc2VzL2NvbXBvbmVudHMvbmV3LWNhc2UuY29tcG9uZW50LnRzIiwiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4vbW9kZWxzL2NsaWVudCc7XG5pbXBvcnQgeyBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jbGllbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDdXJyZW50RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jdXJyZW50LWRhdGEuc2VydmljZSc7XG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjbGllbnQtZGV0YWlscycsXG5cdHRlbXBsYXRlOiByZXF1aXJlKCcuL2NsaWVudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyksXG59KVxuZXhwb3J0IGNsYXNzIENsaWVudERldGFpbHNDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRfY2xpZW50OiBDbGllbnQ7XG5cdHNldCBjbGllbnQodmFsdWU6IENsaWVudCkge1xuXHRcdHRoaXMuX2NsaWVudCA9IHZhbHVlO1xuXHRcdHRoaXMuaXNOZXdDbGllbnQgPSB0aGlzLl9jbGllbnQuaWQgPT0gLTE7XG5cdFx0dGhpcy5jdXJyZW50RGF0YVNlcnZpY2UuY3VycmVudENsaWVudCA9IHRoaXMuX2NsaWVudDtcblx0fVxuXG5cdGdldCBjbGllbnQoKTogQ2xpZW50IHtcblx0XHRyZXR1cm4gdGhpcy5fY2xpZW50O1xuXHR9XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjbGllbnRTZXJ2aWNlOiBDbGllbnRTZXJ2aWNlLFxuXHRcdHByaXZhdGUgY3VycmVudERhdGFTZXJ2aWNlOiBDdXJyZW50RGF0YVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRpc05ld0NsaWVudDogYm9vbGVhbjtcblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5fY2xpZW50ID0gbnVsbDtcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB7XG5cdFx0XHRsZXQgcmV0OiBQcm9taXNlPENsaWVudD47XG5cdFx0XHRsZXQgY2xpZW50SWQ6IG51bWJlciA9IHBhcmFtc1snaWQnXTtcblx0XHRcdC8vaWYgbmVnYXRpdmUgY2xpZW50IGlkIHdhcyBwcm92aWRlZCBpdCBtZWFucyBuZXcgY2xpZW50IHNob3VsZCBiZSBjcmVhdGVkIGZvciBjb21wb25lbnRcblx0XHRcdGlmIChjbGllbnRJZCA8IDApIHtcblx0XHRcdFx0dGhpcy5pc05ld0NsaWVudCA9IHRydWU7XG5cdFx0XHRcdHJldCA9IFByb21pc2UucmVzb2x2ZShuZXcgQ2xpZW50KFwiXCIsIFwiXCIsIFwiXCIpKTtcblx0XHRcdH1cblx0XHRcdC8vaWYgY2xpZW50IGlkIHdhcyBwcm92aWRlZCAtIHF1ZXJ5IHNlcnZlciBmb3IgaXQncyBmdWxsIGRhdGFcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlzTmV3Q2xpZW50ID0gZmFsc2U7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0ID0gdGhpcy5jbGllbnRTZXJ2aWNlLmdldENsaWVudChjbGllbnRJZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRyZXQgPSBQcm9taXNlLnJlamVjdChcIlVuYWJsZSB0byBnZXQgY2xpZW50IFwiICsgY2xpZW50SWQgKyBcIiBcIiArIGUuTWVzc2FnZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXHRcdCkuc3Vic2NyaWJlKGNsaWVudCA9PiB0aGlzLmNsaWVudCA9IGNsaWVudCwgZXJyb3IgPT4gdGhpcy5lcnJvciA9IGVycm9yKTtcblx0fVxuXG5cdG9uU2F2ZUNsaWVudCgpOiB2b2lkIHtcblx0XHQvL1RPRE8gaGFuZGxlIGFsbCBmYWlsdXJlcyBhbmQgY3JlYXRpbmcgbmV3IGNsaWVudCBpbiBtb3JlIGVsZWdhbnQgd2F5XG5cdFx0aWYgKHRoaXMuaXNOZXdDbGllbnQpIHtcblx0XHRcdHRoaXMuY2xpZW50U2VydmljZS5hZGRDbGllbnQodGhpcy5jbGllbnQpLnRoZW4oY3JlYXRlZENsaWVudElkID0+IHRoaXMuY2xpZW50ID0gbmV3IENsaWVudCh0aGlzLmNsaWVudC5jb2RlLCB0aGlzLmNsaWVudC5uYW1lLCB0aGlzLmNsaWVudC5jb21tZW50LCBjcmVhdGVkQ2xpZW50SWQpKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLmNsaWVudFNlcnZpY2Uuc2F2ZUNsaWVudCh0aGlzLmNsaWVudCk7XG5cdFx0fVxuXHR9XG5cblx0YWRkU2l0ZShzZWxlY3RlZFNpdGVJZDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuL2NsaWVudHMvY2xpZW50LWRldGFpbHMvc2l0ZS1kZXRhaWxzJywgLTFdKTtcblx0fVxuXG5cdHNpdGVEZXRhaWxzKHNlbGVjdGVkU2l0ZUlkOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vY2xpZW50cy9jbGllbnQtZGV0YWlscy9zaXRlLWRldGFpbHMnLCBzZWxlY3RlZFNpdGVJZF0pO1xuXHR9XG5cblx0b25Hb0JhY2soKTogdm9pZCB7XG5cdFx0dGhpcy5sb2NhdGlvbi5iYWNrKCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudC1kZXRhaWxzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jbGllbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuL21vZGVscy9jbGllbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NsaWVudHMnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NsaWVudHMuY29tcG9uZW50Lmh0bWwnKSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xpZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBjbGllbnRzOiBDbGllbnRbXTtcbiAgICBjdXJyZW50Q2xpZW50OiBDbGllbnQ7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaWVudFNlcnZpY2U6IENsaWVudFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsaWVudFNlcnZpY2UuZ2V0QWxsQ2xpZW50cygpLnRoZW4oKHZhbHVlOiBDbGllbnRbXSkgPT4gdGhpcy5jbGllbnRzID0gdmFsdWUpLmNhdGNoKChyZWFzb246IGFueSkgPT4gdGhpcy5zdGF0dXMgPSByZWFzb24pO1xuICAgIH1cblxuICAgIG9uU2VsZWN0KHNlbGVjdGVkQ2xpZW50OiBDbGllbnQpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2xpZW50ID0gc2VsZWN0ZWRDbGllbnQ7XG4gICAgfVxuXG4gICAgYWRkQ2xpZW50KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vY2xpZW50cy9jbGllbnQtZGV0YWlscycsIC0xXSk7XG5cdH1cblxuXHRjbGllbnREZXRhaWxzKHNlbGVjdGVkQ2xpZW50SWQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi9jbGllbnRzL2NsaWVudC1kZXRhaWxzJywgc2VsZWN0ZWRDbGllbnRJZF0pO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFNpdGUgfSBmcm9tICcuL3NpdGUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCBjbGFzcyBDbGllbnQge1xuXHRyZWFkb25seSBpZDogbnVtYmVyO1xuXHRyZWFkb25seSBzaXRlcyA9IG5ldyBBcnJheTxTaXRlPigpO1xuXHRwdWJsaWMgYWNjb3VudE1hbmFnZXI6IFVzZXI7XG5cblx0Y29uc3RydWN0b3IocmVhZG9ubHkgY29kZTogc3RyaW5nLCByZWFkb25seSBuYW1lOiBzdHJpbmcsIHJlYWRvbmx5IGNvbW1lbnQ6IHN0cmluZywgaWQ6IG51bWJlciA9IC0xKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHR9XG5cblx0Z2V0U2l0ZShpZDogbnVtYmVyKTogU2l0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuc2l0ZXMuZmluZCgodmFsdWUsIGluZGV4LCBvYmopID0+IHZhbHVlLmlkID09IGlkKTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NsaWVudHMvbW9kZWxzL2NsaWVudC50cyIsImltcG9ydCB7IExNUyB9IGZyb20gJy4vbG1zJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QnO1xuXG5leHBvcnQgY2xhc3MgU2l0ZSB7XG5cdHJlYWRvbmx5IGlkOiBudW1iZXI7XG5cdHJlYWRvbmx5IGxtc2VzID0gbmV3IEFycmF5PExNUz4oKTtcblx0cmVhZG9ubHkgcHJvZHVjdHMgPSBuZXcgQXJyYXk8UHJvZHVjdD4oKTtcblxuXHRjb25zdHJ1Y3RvcihyZWFkb25seSBpbnRlZ3JhdGlvblR5cGU6IHN0cmluZywgcmVhZG9ubHkgY29tbWVudDogc3RyaW5nLCByZWFkb25seSB1cmw6IHN0cmluZywgaWQ6IG51bWJlciA9IC0xKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9tb2RlbHMvc2l0ZS50cyIsImltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi9tb2RlbHMvY2xpZW50JztcbmltcG9ydCB7IFNpdGUgfSBmcm9tICcuL21vZGVscy9zaXRlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL21vZGVscy9wcm9kdWN0JztcblxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEN1cnJlbnREYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2N1cnJlbnQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENsaWVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NsaWVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc2l0ZS1kZXRhaWxzJyxcblx0dGVtcGxhdGU6IHJlcXVpcmUoJy4vc2l0ZS1kZXRhaWxzLmNvbXBvbmVudC5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZURldGFpbHNDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuXHRfc2l0ZTogU2l0ZTtcblx0c2V0IHNpdGUodmFsdWU6IFNpdGUpIHtcblx0XHR0aGlzLl9zaXRlID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgc2l0ZSgpOiBTaXRlIHtcblx0XHRyZXR1cm4gdGhpcy5fc2l0ZTtcblx0fVxuXG5cdGlzTmV3U2l0ZTogYm9vbGVhbjtcblx0cmVhZG9ubHkgc2l0ZVR5cGVzOiBBcnJheTxzdHJpbmc+ID0gW1wiQUlDQ1wiLCBcIkhvc3RlZFwiLCBcIlNDT1JNXCJdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY3VycmVudERhdGFTZXJ2aWNlOiBDdXJyZW50RGF0YVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBjbGllbnRTZXJ2aWNlOiBDbGllbnRTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMucm91dGUucGFyYW1zLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHtcblx0XHRcdGxldCByZXQ6IFByb21pc2U8U2l0ZT47XG5cdFx0XHRsZXQgc2l0ZUlkOiBudW1iZXIgPSBwYXJhbXNbJ2lkJ107XG5cdFx0XHQvL2lmIHNpdGUgaWQgaXMgbmVnYXRpdmUgaXQgbWVhbnMgbmV3IHNpdGUgaXMgYmVpbmcgY3JlYXRlZFxuXHRcdFx0aWYgKHNpdGVJZCA8IDApIHtcblx0XHRcdFx0dGhpcy5zaXRlID0gbmV3IFNpdGUoJycsICcnLCAnJyk7XG5cdFx0XHRcdHRoaXMuaXNOZXdTaXRlID0gdHJ1ZTtcblx0XHRcdFx0cmV0ID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2l0ZSk7XG5cdFx0XHR9XG5cdFx0XHQvL290aGVyd2lzZSBnZXQgc2l0ZSBieSBpZCBmcm9tIGN1cnJlbnQgZGF0YVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuaXNOZXdTaXRlID0gZmFsc2U7XG5cdFx0XHRcdGlmICh0aGlzLmN1cnJlbnREYXRhU2VydmljZS5jdXJyZW50Q2xpZW50ID09PSB1bmRlZmluZWQgfHwgdGhpcy5jdXJyZW50RGF0YVNlcnZpY2UuY3VycmVudENsaWVudCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldCA9IFByb21pc2UucmVqZWN0KFwiTm8gY3VycmVudCBjbGllbnRcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAodGhpcy5jdXJyZW50RGF0YVNlcnZpY2UuY3VycmVudENsaWVudC5nZXRTaXRlKHNpdGVJZCkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldCA9IFByb21pc2UucmVqZWN0KFwiU2l0ZSBub3QgZm91bmRcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0cmV0ID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY3VycmVudERhdGFTZXJ2aWNlLmN1cnJlbnRDbGllbnQuZ2V0U2l0ZShzaXRlSWQpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0pLnN1YnNjcmliZShzaXRlID0+IHRoaXMuc2l0ZSA9IHNpdGUsIGVycm9yID0+IHRoaXMuZXJyb3IgPSBlcnJvcik7XG5cdH1cblxuXHRzYXZlU2l0ZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc05ld1NpdGUpIHtcblx0XHRcdHRoaXMuY2xpZW50U2VydmljZS5hZGRTaXRlVG9DbGllbnQodGhpcy5jdXJyZW50RGF0YVNlcnZpY2UuY3VycmVudENsaWVudC5pZCwgdGhpcy5zaXRlKS5cblx0XHRcdFx0dGhlbihjcmVhdGVkU2l0ZUlkID0+IHtcblx0XHRcdFx0XHR0aGlzLnNpdGUgPSBuZXcgU2l0ZSh0aGlzLnNpdGUuaW50ZWdyYXRpb25UeXBlLCB0aGlzLnNpdGUuY29tbWVudCwgdGhpcy5zaXRlLnVybCwgY3JlYXRlZFNpdGVJZCk7XG5cdFx0XHRcdFx0dGhpcy5pc05ld1NpdGUgPSBmYWxzZTtcblx0XHRcdFx0fSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5lcnJvciA9IGVycm9yKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLmNsaWVudFNlcnZpY2Uuc2F2ZVNpdGUodGhpcy5zaXRlKS5jYXRjaChlcnJvciA9PiB0aGlzLmVycm9yID0gZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdGlzQWRkaW5nTmV3UHJvZHVjdDogYm9vbGVhbjtcblx0YWRkUHJvZHVjdCgpOiB2b2lkIHtcblx0XHR0aGlzLnByb2R1Y3RUb0FkZCA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLmlzQWRkaW5nTmV3UHJvZHVjdCA9IHRydWU7XG5cdH1cblxuXHRjYW5jZWxBZGRpbmdQcm9kdWN0KCk6IHZvaWQge1xuXHRcdHRoaXMucHJvZHVjdFRvQWRkID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMuaXNBZGRpbmdOZXdQcm9kdWN0ID0gZmFsc2U7XG5cdH1cblxuXHRwcm9kdWN0VG9BZGQ6IFByb2R1Y3Q7XG5cdHNhdmVQcm9kdWN0VG9BZGQoKSB7XG5cdFx0aWYgKHRoaXMuaXNBZGRpbmdOZXdQcm9kdWN0ICYmIHRoaXMucHJvZHVjdFRvQWRkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wcm9kdWN0VG9BZGQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuY2xpZW50U2VydmljZS5hZGRQcm9kdWN0VG9TaXRlKHRoaXMuc2l0ZS5pZCwgdGhpcy5wcm9kdWN0VG9BZGQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNpdGUucHJvZHVjdHMucHVzaCh0aGlzLnByb2R1Y3RUb0FkZCk7XG5cdFx0XHRcdHRoaXMucHJvZHVjdFRvQWRkID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR0aGlzLmlzQWRkaW5nTmV3UHJvZHVjdCA9IGZhbHNlO1xuXHRcdFx0fSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5lcnJvciA9IGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVQcm9kdWN0KHByb2RUb1JlbW92ZTogUHJvZHVjdCkge1xuXHRcdGlmIChwcm9kVG9SZW1vdmUgIT09IHVuZGVmaW5lZCAmJiBwcm9kVG9SZW1vdmUgIT09IG51bGwpIHtcblx0XHRcdGxldCBwcm9kSW5kZXggPSB0aGlzLnNpdGUucHJvZHVjdHMuaW5kZXhPZihwcm9kVG9SZW1vdmUpO1xuXHRcdFx0aWYgKHByb2RJbmRleCA+PSAwKSB7XG5cdFx0XHRcdHRoaXMuY2xpZW50U2VydmljZS5yZW1vdmVQcm9kdWN0RnJvbVNpdGUodGhpcy5zaXRlLmlkLCBwcm9kVG9SZW1vdmUpLlxuXHRcdFx0XHRcdHRoZW4oKCkgPT4gdGhpcy5zaXRlLnByb2R1Y3RzLnNwbGljZShwcm9kSW5kZXgpKS5cblx0XHRcdFx0XHRjYXRjaChlcnJvciA9PiB0aGlzLmVycm9yID0gZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9uR29CYWNrKCk6dm9pZCB7XG5cdFx0dGhpcy5sb2NhdGlvbi5iYWNrKCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jbGllbnRzL3NpdGUtZGV0YWlscy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb3VudGVyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jb3VudGVyLmNvbXBvbmVudC5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlckNvbXBvbmVudCB7XG4gICAgcHVibGljIGN1cnJlbnRDb3VudCA9IDA7XG5cbiAgICBwdWJsaWMgaW5jcmVtZW50Q291bnRlcigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q291bnQrKztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmV0Y2hkYXRhJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBGZXRjaERhdGFDb21wb25lbnQge1xuICAgIHB1YmxpYyBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdO1xuXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xuICAgICAgICBodHRwLmdldCgnL2FwaS9TYW1wbGVEYXRhL1dlYXRoZXJGb3JlY2FzdHMnKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RzID0gcmVzdWx0Lmpzb24oKSBhcyBXZWF0aGVyRm9yZWNhc3RbXTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0IHtcbiAgICBkYXRlRm9ybWF0dGVkOiBzdHJpbmc7XG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XG4gICAgdGVtcGVyYXR1cmVGOiBudW1iZXI7XG4gICAgc3VtbWFyeTogc3RyaW5nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQge1xuXHRwcm90ZWN0ZWQgaXNFcnJvcjogYm9vbGVhbjtcblx0cHJvdGVjdGVkIF9lcnJvcjogc3RyaW5nO1xuXG5cdHNldCBlcnJvcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5fZXJyb3IgPSB2YWx1ZTtcblx0XHR0aGlzLmlzRXJyb3IgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9IFwiXCI7XG5cdH1cblxuXHRnZXQgZXJyb3IoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fZXJyb3I7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvbW9kZWxzL2Jhc2UuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2xpZW50cy9tb2RlbHMvcHJvZHVjdCc7XG5cbmV4cG9ydCBjbGFzcyBTZXR1cCB7XG5cdGNvbnN0cnVjdG9yKHJlYWRvbmx5IGFsbFByb2R1Y3RzOiBBcnJheTxQcm9kdWN0Pikge1xuXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvbW9kZWxzL3NldHVwLnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgnLi4vLi4vT2JzZXJ2YWJsZScpO1xudmFyIHN3aXRjaE1hcF8xID0gcmVxdWlyZSgnLi4vLi4vb3BlcmF0b3Ivc3dpdGNoTWFwJyk7XG5PYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3dpdGNoTWFwID0gc3dpdGNoTWFwXzEuc3dpdGNoTWFwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpdGNoTWFwLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tbW9uL2J1bmRsZXMvY29tbW9uLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmV0Y2hEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7IENvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbGllbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2xpZW50RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jbGllbnRzL2NsaWVudC1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaXRlRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jbGllbnRzL3NpdGUtZGV0YWlscy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NsaWVudHMvc2VydmljZXMvY2xpZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZSc7XG5pbXBvcnQgeyBNb2NrQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21vY2suYmFja2VuZC5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbnREYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY3VycmVudC1kYXRhLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDYXNlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXNlcy9jb21wb25lbnRzL2Nhc2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXNlRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXNlcy9jb21wb25lbnRzL2Nhc2UtZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmV3Q2FzZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXNlcy9jb21wb25lbnRzL25ldy1jYXNlLmNvbXBvbmVudCc7XG5cbi8qQ1NTZXMqL1xuaW1wb3J0ICcuL2Fzc2V0cy9jc3MvYW5pbWF0ZS5taW4uY3NzJztcbmltcG9ydCAnLi9hc3NldHMvY3NzL2ZyZXNoLWJvb3RzdHJhcC10YWJsZS5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9jc3MvcGFwZXItZGFzaGJvYXJkLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL2Nzcy90aGVtaWZ5LWljb25zLmNzcyc7XG5cbkBOZ01vZHVsZSh7XG5cdGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEFwcENvbXBvbmVudCxcblx0XHROYXZNZW51Q29tcG9uZW50LFxuXHRcdENvdW50ZXJDb21wb25lbnQsXG5cdFx0RmV0Y2hEYXRhQ29tcG9uZW50LFxuXHRcdEhvbWVDb21wb25lbnQsXG5cdFx0Q2xpZW50c0NvbXBvbmVudCxcblx0XHRDbGllbnREZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICBDYXNlc0NvbXBvbmVudCxcbiAgICAgICAgQ2FzZURldGFpbHNDb21wb25lbnQsXG4gICAgICAgIE5ld0Nhc2VDb21wb25lbnQsXG5cdFx0U2l0ZURldGFpbHNDb21wb25lbnRcblx0XSxcblx0aW1wb3J0czogW1xuXHRcdFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0QXBwUm91dGluZ01vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRDbGllbnRTZXJ2aWNlLFxuXHRcdHsgcHJvdmlkZTogQmFja2VuZFNlcnZpY2UsIHVzZUNsYXNzOiBNb2NrQmFja2VuZFNlcnZpY2UgfSxcblx0XHRDdXJyZW50RGF0YVNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgzOCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLW5vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg2NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMvbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDY3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2Mi4wLjJcbiAqIChjKSAyMDEwLTIwMTYgR29vZ2xlLCBJbmMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpLCByZXF1aXJlKCdyeGpzL29wZXJhdG9yL3RvUHJvbWlzZScpLCByZXF1aXJlKCdyeGpzL1N1YmplY3QnKSwgcmVxdWlyZSgncnhqcy9PYnNlcnZhYmxlJyksIHJlcXVpcmUoJ3J4anMvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZScpKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cycsICdAYW5ndWxhci9jb3JlJywgJ3J4anMvb3BlcmF0b3IvdG9Qcm9taXNlJywgJ3J4anMvU3ViamVjdCcsICdyeGpzL09ic2VydmFibGUnLCAncnhqcy9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlJ10sIGZhY3RvcnkpIDpcbiAgICAoZmFjdG9yeSgoZ2xvYmFsLm5nID0gZ2xvYmFsLm5nIHx8IHt9LCBnbG9iYWwubmcuZm9ybXMgPSBnbG9iYWwubmcuZm9ybXMgfHwge30pLGdsb2JhbC5uZy5jb3JlLGdsb2JhbC5SeC5PYnNlcnZhYmxlLnByb3RvdHlwZSxnbG9iYWwuUngsZ2xvYmFsLlJ4LGdsb2JhbC5SeC5PYnNlcnZhYmxlKSk7XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLF9hbmd1bGFyX2NvcmUscnhqc19vcGVyYXRvcl90b1Byb21pc2Uscnhqc19TdWJqZWN0LHJ4anNfT2JzZXJ2YWJsZSxyeGpzX29ic2VydmFibGVfZnJvbVByb21pc2UpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZnVuY3Rpb24gaXNQcmVzZW50KG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0JsYW5rKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1N0cmluZ01hcChvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcbiAgICB9XG4gICAgdmFyIFN0cmluZ1dyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBTdHJpbmdXcmFwcGVyKCkge1xuICAgICAgICB9XG4gICAgICAgIFN0cmluZ1dyYXBwZXIuZnJvbUNoYXJDb2RlID0gZnVuY3Rpb24gKGNvZGUpIHsgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7IH07XG4gICAgICAgIFN0cmluZ1dyYXBwZXIuY2hhckNvZGVBdCA9IGZ1bmN0aW9uIChzLCBpbmRleCkgeyByZXR1cm4gcy5jaGFyQ29kZUF0KGluZGV4KTsgfTtcbiAgICAgICAgU3RyaW5nV3JhcHBlci5zcGxpdCA9IGZ1bmN0aW9uIChzLCByZWdFeHApIHsgcmV0dXJuIHMuc3BsaXQocmVnRXhwKTsgfTtcbiAgICAgICAgU3RyaW5nV3JhcHBlci5lcXVhbHMgPSBmdW5jdGlvbiAocywgczIpIHsgcmV0dXJuIHMgPT09IHMyOyB9O1xuICAgICAgICBTdHJpbmdXcmFwcGVyLnN0cmlwTGVmdCA9IGZ1bmN0aW9uIChzLCBjaGFyVmFsKSB7XG4gICAgICAgICAgICBpZiAocyAmJiBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc1tpXSAhPSBjaGFyVmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzID0gcy5zdWJzdHJpbmcocG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9O1xuICAgICAgICBTdHJpbmdXcmFwcGVyLnN0cmlwUmlnaHQgPSBmdW5jdGlvbiAocywgY2hhclZhbCkge1xuICAgICAgICAgICAgaWYgKHMgJiYgcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNbaV0gIT0gY2hhclZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBwb3MtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcyA9IHMuc3Vic3RyaW5nKDAsIHBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfTtcbiAgICAgICAgU3RyaW5nV3JhcHBlci5yZXBsYWNlID0gZnVuY3Rpb24gKHMsIGZyb20sIHJlcGxhY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoZnJvbSwgcmVwbGFjZSk7XG4gICAgICAgIH07XG4gICAgICAgIFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbCA9IGZ1bmN0aW9uIChzLCBmcm9tLCByZXBsYWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKGZyb20sIHJlcGxhY2UpO1xuICAgICAgICB9O1xuICAgICAgICBTdHJpbmdXcmFwcGVyLnNsaWNlID0gZnVuY3Rpb24gKHMsIGZyb20sIHRvKSB7XG4gICAgICAgICAgICBpZiAoZnJvbSA9PT0gdm9pZCAwKSB7IGZyb20gPSAwOyB9XG4gICAgICAgICAgICBpZiAodG8gPT09IHZvaWQgMCkgeyB0byA9IG51bGw7IH1cbiAgICAgICAgICAgIHJldHVybiBzLnNsaWNlKGZyb20sIHRvID09PSBudWxsID8gdW5kZWZpbmVkIDogdG8pO1xuICAgICAgICB9O1xuICAgICAgICBTdHJpbmdXcmFwcGVyLnJlcGxhY2VBbGxNYXBwZWQgPSBmdW5jdGlvbiAocywgZnJvbSwgY2IpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoZnJvbSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc1tfaSAtIDBdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIG9mZnNldCAmIHN0cmluZyBmcm9tIHRoZSByZXN1bHQgYXJyYXlcbiAgICAgICAgICAgICAgICBtYXRjaGVzLnNwbGljZSgtMiwgMik7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGNhbGxiYWNrIHJlY2VpdmVzIG1hdGNoLCBwMSwgLi4uLCBwblxuICAgICAgICAgICAgICAgIHJldHVybiBjYihtYXRjaGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBTdHJpbmdXcmFwcGVyLmNvbnRhaW5zID0gZnVuY3Rpb24gKHMsIHN1YnN0cikgeyByZXR1cm4gcy5pbmRleE9mKHN1YnN0cikgIT0gLTE7IH07XG4gICAgICAgIFN0cmluZ1dyYXBwZXIuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhID4gYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBTdHJpbmdXcmFwcGVyO1xuICAgIH0oKSk7XG4gICAgdmFyIE51bWJlcldyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBOdW1iZXJXcmFwcGVyKCkge1xuICAgICAgICB9XG4gICAgICAgIE51bWJlcldyYXBwZXIudG9GaXhlZCA9IGZ1bmN0aW9uIChuLCBmcmFjdGlvbkRpZ2l0cykgeyByZXR1cm4gbi50b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKTsgfTtcbiAgICAgICAgTnVtYmVyV3JhcHBlci5lcXVhbCA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhID09PSBiOyB9O1xuICAgICAgICBOdW1iZXJXcmFwcGVyLnBhcnNlSW50QXV0b1JhZGl4ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBwYXJzZUludCh0ZXh0KTtcbiAgICAgICAgICAgIGlmIChpc05hTihyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGludGVnZXIgbGl0ZXJhbCB3aGVuIHBhcnNpbmcgJyArIHRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgTnVtYmVyV3JhcHBlci5wYXJzZUludCA9IGZ1bmN0aW9uICh0ZXh0LCByYWRpeCkge1xuICAgICAgICAgICAgaWYgKHJhZGl4ID09IDEwKSB7XG4gICAgICAgICAgICAgICAgaWYgKC9eKFxcLXxcXCspP1swLTldKyQvLnRlc3QodGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRleHQsIHJhZGl4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyYWRpeCA9PSAxNikge1xuICAgICAgICAgICAgICAgIGlmICgvXihcXC18XFwrKT9bMC05QUJDREVGYWJjZGVmXSskLy50ZXN0KHRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0ZXh0LCByYWRpeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHBhcnNlSW50KHRleHQsIHJhZGl4KTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaW50ZWdlciBsaXRlcmFsIHdoZW4gcGFyc2luZyAnICsgdGV4dCArICcgaW4gYmFzZSAnICsgcmFkaXgpO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyV3JhcHBlciwgXCJOYU5cIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBOYU47IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBOdW1iZXJXcmFwcGVyLmlzTnVtZXJpYyA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gIWlzTmFOKHZhbHVlIC0gcGFyc2VGbG9hdCh2YWx1ZSkpOyB9O1xuICAgICAgICBOdW1iZXJXcmFwcGVyLmlzTmFOID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBpc05hTih2YWx1ZSk7IH07XG4gICAgICAgIE51bWJlcldyYXBwZXIuaXNJbnRlZ2VyID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKTsgfTtcbiAgICAgICAgcmV0dXJuIE51bWJlcldyYXBwZXI7XG4gICAgfSgpKTtcbiAgICAvLyBKUyBoYXMgTmFOICE9PSBOYU5cbiAgICBmdW5jdGlvbiBsb29zZUlkZW50aWNhbChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhID09PSBiIHx8IHR5cGVvZiBhID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYiA9PT0gJ251bWJlcicgJiYgaXNOYU4oYSkgJiYgaXNOYU4oYik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUJvb2wob2JqKSB7XG4gICAgICAgIHJldHVybiBpc0JsYW5rKG9iaikgPyBmYWxzZSA6IG9iajtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNKc09iamVjdChvKSB7XG4gICAgICAgIHJldHVybiBvICE9PSBudWxsICYmICh0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbyA9PT0gJ29iamVjdCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1ByaW1pdGl2ZShvYmopIHtcbiAgICAgICAgcmV0dXJuICFpc0pzT2JqZWN0KG9iaik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc0NvbnN0cnVjdG9yKHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gdHlwZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCYXNlIGNsYXNzIGZvciBjb250cm9sIGRpcmVjdGl2ZXMuXG4gICAgICpcbiAgICAgKiBPbmx5IHVzZWQgaW50ZXJuYWxseSBpbiB0aGUgZm9ybXMgbW9kdWxlLlxuICAgICAqXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUoKSB7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKCd1bmltcGxlbWVudGVkJyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlzUHJlc2VudCh0aGlzLmNvbnRyb2wpID8gdGhpcy5jb250cm9sLnZhbHVlIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInZhbGlkXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNQcmVzZW50KHRoaXMuY29udHJvbCkgPyB0aGlzLmNvbnRyb2wudmFsaWQgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiaW52YWxpZFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlzUHJlc2VudCh0aGlzLmNvbnRyb2wpID8gdGhpcy5jb250cm9sLmludmFsaWQgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwicGVuZGluZ1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlzUHJlc2VudCh0aGlzLmNvbnRyb2wpID8gdGhpcy5jb250cm9sLnBlbmRpbmcgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiZXJyb3JzXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1ByZXNlbnQodGhpcy5jb250cm9sKSA/IHRoaXMuY29udHJvbC5lcnJvcnMgOiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInByaXN0aW5lXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNQcmVzZW50KHRoaXMuY29udHJvbCkgPyB0aGlzLmNvbnRyb2wucHJpc3RpbmUgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiZGlydHlcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpc1ByZXNlbnQodGhpcy5jb250cm9sKSA/IHRoaXMuY29udHJvbC5kaXJ0eSA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ0b3VjaGVkXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNQcmVzZW50KHRoaXMuY29udHJvbCkgPyB0aGlzLmNvbnRyb2wudG91Y2hlZCA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ1bnRvdWNoZWRcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpc1ByZXNlbnQodGhpcy5jb250cm9sKSA/IHRoaXMuY29udHJvbC51bnRvdWNoZWQgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpc1ByZXNlbnQodGhpcy5jb250cm9sKSA/IHRoaXMuY29udHJvbC5kaXNhYmxlZCA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJlbmFibGVkXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNQcmVzZW50KHRoaXMuY29udHJvbCkgPyB0aGlzLmNvbnRyb2wuZW5hYmxlZCA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJzdGF0dXNDaGFuZ2VzXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1ByZXNlbnQodGhpcy5jb250cm9sKSA/IHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ2YWx1ZUNoYW5nZXNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzUHJlc2VudCh0aGlzLmNvbnRyb2wpID8gdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcyA6IG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IHVuZGVmaW5lZDsgfVxuICAgICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLmNvbnRyb2wpKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5yZXNldCh2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmU7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDEgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIGRpcmVjdGl2ZSB0aGF0IGNvbnRhaW5zIG11bHRpcGxlIHtAbGluayBOZ0NvbnRyb2x9cy5cbiAgICAgKlxuICAgICAqIE9ubHkgdXNlZCBieSB0aGUgZm9ybXMgbW9kdWxlLlxuICAgICAqXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBDb250cm9sQ29udGFpbmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDEoQ29udHJvbENvbnRhaW5lciwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQ29udHJvbENvbnRhaW5lcigpIHtcbiAgICAgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250cm9sQ29udGFpbmVyLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHRoZSBmb3JtIHRvIHdoaWNoIHRoaXMgY29udGFpbmVyIGJlbG9uZ3MuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250cm9sQ29udGFpbmVyLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHRoZSBwYXRoIHRvIHRoaXMgY29udGFpbmVyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gQ29udHJvbENvbnRhaW5lcjtcbiAgICB9KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSkpO1xuXG4gICAgLy8gU2FmYXJpIGFuZCBJbnRlcm5ldCBFeHBsb3JlciBkbyBub3Qgc3VwcG9ydCB0aGUgaXRlcmFibGUgcGFyYW1ldGVyIHRvIHRoZVxuICAgIC8vIE1hcCBjb25zdHJ1Y3Rvci4gIFdlIHdvcmsgYXJvdW5kIHRoYXQgYnkgbWFudWFsbHkgYWRkaW5nIHRoZSBpdGVtcy5cbiAgICB2YXIgY3JlYXRlTWFwRnJvbVBhaXJzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChuZXcgTWFwKFtbMSwgMl1dKS5zaXplID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZU1hcEZyb21QYWlycyhwYWlycykgeyByZXR1cm4gbmV3IE1hcChwYWlycyk7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlTWFwQW5kUG9wdWxhdGVGcm9tUGFpcnMocGFpcnMpIHtcbiAgICAgICAgICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICAgICAgICAgICAgICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuICAgIHZhciBfY2xlYXJWYWx1ZXMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoKG5ldyBNYXAoKSkua2V5cygpLm5leHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBfY2xlYXJWYWx1ZXMobSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXlJdGVyYXRvciA9IG0ua2V5cygpO1xuICAgICAgICAgICAgICAgIHZhciBrO1xuICAgICAgICAgICAgICAgIHdoaWxlICghKChrID0ga2V5SXRlcmF0b3IubmV4dCgpKS5kb25lKSkge1xuICAgICAgICAgICAgICAgICAgICBtLnNldChrLnZhbHVlLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIF9jbGVhclZhbHVlc1dpdGhGb3JlRWFjaChtKSB7XG4gICAgICAgICAgICAgICAgbS5mb3JFYWNoKGZ1bmN0aW9uICh2LCBrKSB7IG0uc2V0KGssIG51bGwpOyB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIC8vIFNhZmFyaSBkb2Vzbid0IGltcGxlbWVudCBNYXBJdGVyYXRvci5uZXh0KCksIHdoaWNoIGlzIHVzZWQgaXMgVHJhY2V1cidzIHBvbHlmaWxsIG9mIEFycmF5LmZyb21cbiAgICAvLyBUT0RPKG1sYXZhbCk6IHJlbW92ZSB0aGUgd29yayBhcm91bmQgb25jZSB3ZSBoYXZlIGEgd29ya2luZyBwb2x5ZmlsbCBvZiBBcnJheS5mcm9tXG4gICAgdmFyIF9hcnJheUZyb21NYXAgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKChuZXcgTWFwKCkpLnZhbHVlcygpLm5leHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlQXJyYXlGcm9tTWFwKG0sIGdldFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWVzID8gQXJyYXkuZnJvbShtLnZhbHVlcygpKSA6IEFycmF5LmZyb20obS5rZXlzKCkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlQXJyYXlGcm9tTWFwV2l0aEZvcmVhY2gobSwgZ2V0VmFsdWVzKSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gbmV3IEFycmF5KG0uc2l6ZSksIGkgPSAwO1xuICAgICAgICAgICAgbS5mb3JFYWNoKGZ1bmN0aW9uICh2LCBrKSB7XG4gICAgICAgICAgICAgICAgcmVzW2ldID0gZ2V0VmFsdWVzID8gdiA6IGs7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG4gICAgdmFyIE1hcFdyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBNYXBXcmFwcGVyKCkge1xuICAgICAgICB9XG4gICAgICAgIE1hcFdyYXBwZXIuY3JlYXRlRnJvbVN0cmluZ01hcCA9IGZ1bmN0aW9uIChzdHJpbmdNYXApIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHN0cmluZ01hcCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXQocHJvcCwgc3RyaW5nTWFwW3Byb3BdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICAgIE1hcFdyYXBwZXIudG9TdHJpbmdNYXAgPSBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgdmFyIHIgPSB7fTtcbiAgICAgICAgICAgIG0uZm9yRWFjaChmdW5jdGlvbiAodiwgaykgeyByZXR1cm4gcltrXSA9IHY7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH07XG4gICAgICAgIE1hcFdyYXBwZXIuY3JlYXRlRnJvbVBhaXJzID0gZnVuY3Rpb24gKHBhaXJzKSB7IHJldHVybiBjcmVhdGVNYXBGcm9tUGFpcnMocGFpcnMpOyB9O1xuICAgICAgICBNYXBXcmFwcGVyLml0ZXJhYmxlID0gZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG07IH07XG4gICAgICAgIE1hcFdyYXBwZXIua2V5cyA9IGZ1bmN0aW9uIChtKSB7IHJldHVybiBfYXJyYXlGcm9tTWFwKG0sIGZhbHNlKTsgfTtcbiAgICAgICAgTWFwV3JhcHBlci52YWx1ZXMgPSBmdW5jdGlvbiAobSkgeyByZXR1cm4gX2FycmF5RnJvbU1hcChtLCB0cnVlKTsgfTtcbiAgICAgICAgcmV0dXJuIE1hcFdyYXBwZXI7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiBXcmFwcyBKYXZhc2NyaXB0IE9iamVjdHNcbiAgICAgKi9cbiAgICB2YXIgU3RyaW5nTWFwV3JhcHBlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFN0cmluZ01hcFdyYXBwZXIoKSB7XG4gICAgICAgIH1cbiAgICAgICAgU3RyaW5nTWFwV3JhcHBlci5tZXJnZSA9IGZ1bmN0aW9uIChtMSwgbTIpIHtcbiAgICAgICAgICAgIHZhciBtID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobTEpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBrID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIG1ba10gPSBtMVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSBPYmplY3Qua2V5cyhtMik7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBfY1tfYl07XG4gICAgICAgICAgICAgICAgbVtrXSA9IG0yW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG4gICAgICAgIFN0cmluZ01hcFdyYXBwZXIuZXF1YWxzID0gZnVuY3Rpb24gKG0xLCBtMikge1xuICAgICAgICAgICAgdmFyIGsxID0gT2JqZWN0LmtleXMobTEpO1xuICAgICAgICAgICAgdmFyIGsyID0gT2JqZWN0LmtleXMobTIpO1xuICAgICAgICAgICAgaWYgKGsxLmxlbmd0aCAhPSBrMi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGsxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGsxW2ldO1xuICAgICAgICAgICAgICAgIGlmIChtMVtrZXldICE9PSBtMltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFN0cmluZ01hcFdyYXBwZXI7XG4gICAgfSgpKTtcbiAgICB2YXIgTGlzdFdyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBMaXN0V3JhcHBlcigpIHtcbiAgICAgICAgfVxuICAgICAgICAvLyBKUyBoYXMgbm8gd2F5IHRvIGV4cHJlc3MgYSBzdGF0aWNhbGx5IGZpeGVkIHNpemUgbGlzdCwgYnV0IGRhcnQgZG9lcyBzbyB3ZVxuICAgICAgICAvLyBrZWVwIGJvdGggbWV0aG9kcy5cbiAgICAgICAgTGlzdFdyYXBwZXIuY3JlYXRlRml4ZWRTaXplID0gZnVuY3Rpb24gKHNpemUpIHsgcmV0dXJuIG5ldyBBcnJheShzaXplKTsgfTtcbiAgICAgICAgTGlzdFdyYXBwZXIuY3JlYXRlR3Jvd2FibGVTaXplID0gZnVuY3Rpb24gKHNpemUpIHsgcmV0dXJuIG5ldyBBcnJheShzaXplKTsgfTtcbiAgICAgICAgTGlzdFdyYXBwZXIuY2xvbmUgPSBmdW5jdGlvbiAoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDApOyB9O1xuICAgICAgICBMaXN0V3JhcHBlci5mb3JFYWNoV2l0aEluZGV4ID0gZnVuY3Rpb24gKGFycmF5LCBmbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZuKGFycmF5W2ldLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTGlzdFdyYXBwZXIuZmlyc3QgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgICAgIGlmICghYXJyYXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbMF07XG4gICAgICAgIH07XG4gICAgICAgIExpc3RXcmFwcGVyLmxhc3QgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgICAgIGlmICghYXJyYXkgfHwgYXJyYXkubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgICAgIH07XG4gICAgICAgIExpc3RXcmFwcGVyLmluZGV4T2YgPSBmdW5jdGlvbiAoYXJyYXksIHZhbHVlLCBzdGFydEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSwgc3RhcnRJbmRleCk7XG4gICAgICAgIH07XG4gICAgICAgIExpc3RXcmFwcGVyLmNvbnRhaW5zID0gZnVuY3Rpb24gKGxpc3QsIGVsKSB7IHJldHVybiBsaXN0LmluZGV4T2YoZWwpICE9PSAtMTsgfTtcbiAgICAgICAgTGlzdFdyYXBwZXIucmV2ZXJzZWQgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBhID0gTGlzdFdyYXBwZXIuY2xvbmUoYXJyYXkpO1xuICAgICAgICAgICAgcmV0dXJuIGEucmV2ZXJzZSgpO1xuICAgICAgICB9O1xuICAgICAgICBMaXN0V3JhcHBlci5jb25jYXQgPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5jb25jYXQoYik7IH07XG4gICAgICAgIExpc3RXcmFwcGVyLmluc2VydCA9IGZ1bmN0aW9uIChsaXN0LCBpbmRleCwgdmFsdWUpIHsgbGlzdC5zcGxpY2UoaW5kZXgsIDAsIHZhbHVlKTsgfTtcbiAgICAgICAgTGlzdFdyYXBwZXIucmVtb3ZlQXQgPSBmdW5jdGlvbiAobGlzdCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciByZXMgPSBsaXN0W2luZGV4XTtcbiAgICAgICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH07XG4gICAgICAgIExpc3RXcmFwcGVyLnJlbW92ZUFsbCA9IGZ1bmN0aW9uIChsaXN0LCBpdGVtcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZihpdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBMaXN0V3JhcHBlci5yZW1vdmUgPSBmdW5jdGlvbiAobGlzdCwgZWwpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZihlbCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgTGlzdFdyYXBwZXIuY2xlYXIgPSBmdW5jdGlvbiAobGlzdCkgeyBsaXN0Lmxlbmd0aCA9IDA7IH07XG4gICAgICAgIExpc3RXcmFwcGVyLmlzRW1wdHkgPSBmdW5jdGlvbiAobGlzdCkgeyByZXR1cm4gbGlzdC5sZW5ndGggPT0gMDsgfTtcbiAgICAgICAgTGlzdFdyYXBwZXIuZmlsbCA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSB2b2lkIDApIHsgc3RhcnQgPSAwOyB9XG4gICAgICAgICAgICBpZiAoZW5kID09PSB2b2lkIDApIHsgZW5kID0gbnVsbDsgfVxuICAgICAgICAgICAgbGlzdC5maWxsKHZhbHVlLCBzdGFydCwgZW5kID09PSBudWxsID8gbGlzdC5sZW5ndGggOiBlbmQpO1xuICAgICAgICB9O1xuICAgICAgICBMaXN0V3JhcHBlci5lcXVhbHMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgTGlzdFdyYXBwZXIuc2xpY2UgPSBmdW5jdGlvbiAobCwgZnJvbSwgdG8pIHtcbiAgICAgICAgICAgIGlmIChmcm9tID09PSB2b2lkIDApIHsgZnJvbSA9IDA7IH1cbiAgICAgICAgICAgIGlmICh0byA9PT0gdm9pZCAwKSB7IHRvID0gbnVsbDsgfVxuICAgICAgICAgICAgcmV0dXJuIGwuc2xpY2UoZnJvbSwgdG8gPT09IG51bGwgPyB1bmRlZmluZWQgOiB0byk7XG4gICAgICAgIH07XG4gICAgICAgIExpc3RXcmFwcGVyLnNwbGljZSA9IGZ1bmN0aW9uIChsLCBmcm9tLCBsZW5ndGgpIHsgcmV0dXJuIGwuc3BsaWNlKGZyb20sIGxlbmd0aCk7IH07XG4gICAgICAgIExpc3RXcmFwcGVyLnNvcnQgPSBmdW5jdGlvbiAobCwgY29tcGFyZUZuKSB7XG4gICAgICAgICAgICBpZiAoaXNQcmVzZW50KGNvbXBhcmVGbikpIHtcbiAgICAgICAgICAgICAgICBsLnNvcnQoY29tcGFyZUZuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGwuc29ydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBMaXN0V3JhcHBlci50b1N0cmluZyA9IGZ1bmN0aW9uIChsKSB7IHJldHVybiBsLnRvU3RyaW5nKCk7IH07XG4gICAgICAgIExpc3RXcmFwcGVyLnRvSlNPTiA9IGZ1bmN0aW9uIChsKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeShsKTsgfTtcbiAgICAgICAgTGlzdFdyYXBwZXIubWF4aW11bSA9IGZ1bmN0aW9uIChsaXN0LCBwcmVkaWNhdGUpIHtcbiAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc29sdXRpb24gPSBudWxsO1xuICAgICAgICAgICAgdmFyIG1heFZhbHVlID0gLUluZmluaXR5O1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IGxpc3RbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChpc0JsYW5rKGNhbmRpZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjYW5kaWRhdGVWYWx1ZSA9IHByZWRpY2F0ZShjYW5kaWRhdGUpO1xuICAgICAgICAgICAgICAgIGlmIChjYW5kaWRhdGVWYWx1ZSA+IG1heFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvbHV0aW9uID0gY2FuZGlkYXRlO1xuICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IGNhbmRpZGF0ZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzb2x1dGlvbjtcbiAgICAgICAgfTtcbiAgICAgICAgTGlzdFdyYXBwZXIuZmxhdHRlbiA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gW107XG4gICAgICAgICAgICBfZmxhdHRlbkFycmF5KGxpc3QsIHRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9O1xuICAgICAgICBMaXN0V3JhcHBlci5hZGRBbGwgPSBmdW5jdGlvbiAobGlzdCwgc291cmNlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChzb3VyY2VbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTGlzdFdyYXBwZXI7XG4gICAgfSgpKTtcbiAgICBmdW5jdGlvbiBfZmxhdHRlbkFycmF5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIGlmIChpc1ByZXNlbnQoc291cmNlKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHNvdXJjZVtpXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBfZmxhdHRlbkFycmF5KGl0ZW0sIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICB2YXIgaXNQcm9taXNlID0gX2FuZ3VsYXJfY29yZS5fX2NvcmVfcHJpdmF0ZV9fLmlzUHJvbWlzZTtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVycyBmb3IgdmFsaWRhdG9ycyB0byBiZSB1c2VkIGZvciB7QGxpbmsgRm9ybUNvbnRyb2x9cyBpbiBhIGZvcm0uXG4gICAgICpcbiAgICAgKiBQcm92aWRlIHRoaXMgdXNpbmcgYG11bHRpOiB0cnVlYCB0byBhZGQgdmFsaWRhdG9ycy5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgY29yZS9mb3Jtcy90cy9uZ192YWxpZGF0b3JzL25nX3ZhbGlkYXRvcnMudHMgcmVnaW9uPSduZ192YWxpZGF0b3JzJ31cbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE5HX1ZBTElEQVRPUlMgPSBuZXcgX2FuZ3VsYXJfY29yZS5PcGFxdWVUb2tlbignTmdWYWxpZGF0b3JzJyk7XG4gICAgLyoqXG4gICAgICogUHJvdmlkZXJzIGZvciBhc3luY2hyb25vdXMgdmFsaWRhdG9ycyB0byBiZSB1c2VkIGZvciB7QGxpbmsgRm9ybUNvbnRyb2x9c1xuICAgICAqIGluIGEgZm9ybS5cbiAgICAgKlxuICAgICAqIFByb3ZpZGUgdGhpcyB1c2luZyBgbXVsdGk6IHRydWVgIHRvIGFkZCB2YWxpZGF0b3JzLlxuICAgICAqXG4gICAgICogU2VlIHtAbGluayBOR19WQUxJREFUT1JTfSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBOR19BU1lOQ19WQUxJREFUT1JTID0gbmV3IF9hbmd1bGFyX2NvcmUuT3BhcXVlVG9rZW4oJ05nQXN5bmNWYWxpZGF0b3JzJyk7XG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYSBzZXQgb2YgdmFsaWRhdG9ycyB1c2VkIGJ5IGZvcm0gY29udHJvbHMuXG4gICAgICpcbiAgICAgKiBBIHZhbGlkYXRvciBpcyBhIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIGEge0BsaW5rIEZvcm1Db250cm9sfSBvciBjb2xsZWN0aW9uIG9mXG4gICAgICogY29udHJvbHMgYW5kIHJldHVybnMgYSBtYXAgb2YgZXJyb3JzLiBBIG51bGwgbWFwIG1lYW5zIHRoYXQgdmFsaWRhdGlvbiBoYXMgcGFzc2VkLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB2YXIgbG9naW5Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIFZhbGlkYXRvcnMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBWYWxpZGF0b3JzKCkge1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgbm9uLWVtcHR5IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCA9IGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNCbGFuayhjb250cm9sLnZhbHVlKSB8fCAoaXNTdHJpbmcoY29udHJvbC52YWx1ZSkgJiYgY29udHJvbC52YWx1ZSA9PSAnJykgP1xuICAgICAgICAgICAgICAgIHsgJ3JlcXVpcmVkJzogdHJ1ZSB9IDpcbiAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIG9mIGEgbWluaW11bSBsZW5ndGguXG4gICAgICAgICAqL1xuICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCA9IGZ1bmN0aW9uIChtaW5MZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1ByZXNlbnQoVmFsaWRhdG9ycy5yZXF1aXJlZChjb250cm9sKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gY29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5sZW5ndGggPCBtaW5MZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICB7ICdtaW5sZW5ndGgnOiB7ICdyZXF1aXJlZExlbmd0aCc6IG1pbkxlbmd0aCwgJ2FjdHVhbExlbmd0aCc6IHYubGVuZ3RoIH0gfSA6XG4gICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIG9mIGEgbWF4aW11bSBsZW5ndGguXG4gICAgICAgICAqL1xuICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCA9IGZ1bmN0aW9uIChtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1ByZXNlbnQoVmFsaWRhdG9ycy5yZXF1aXJlZChjb250cm9sKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gY29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5sZW5ndGggPiBtYXhMZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICB7ICdtYXhsZW5ndGgnOiB7ICdyZXF1aXJlZExlbmd0aCc6IG1heExlbmd0aCwgJ2FjdHVhbExlbmd0aCc6IHYubGVuZ3RoIH0gfSA6XG4gICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgYSBjb250cm9sIHRvIG1hdGNoIGEgcmVnZXggdG8gaXRzIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuID0gZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJeXCIgKyBwYXR0ZXJuICsgXCIkXCIpO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gY29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVnZXgudGVzdCh2KSA/IG51bGwgOlxuICAgICAgICAgICAgICAgICAgICB7ICdwYXR0ZXJuJzogeyAncmVxdWlyZWRQYXR0ZXJuJzogXCJeXCIgKyBwYXR0ZXJuICsgXCIkXCIsICdhY3R1YWxWYWx1ZSc6IHYgfSB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vLW9wIHZhbGlkYXRvci5cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvciA9IGZ1bmN0aW9uIChjKSB7IHJldHVybiBudWxsOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcG9zZSBtdWx0aXBsZSB2YWxpZGF0b3JzIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB1bmlvblxuICAgICAgICAgKiBvZiB0aGUgaW5kaXZpZHVhbCBlcnJvciBtYXBzLlxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlID0gZnVuY3Rpb24gKHZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9ycylcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHZhciBwcmVzZW50VmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlzUHJlc2VudCk7XG4gICAgICAgICAgICBpZiAocHJlc2VudFZhbGlkYXRvcnMubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX21lcmdlRXJyb3JzKF9leGVjdXRlVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMgPSBmdW5jdGlvbiAodmFsaWRhdG9ycykge1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3JzKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgdmFyIHByZXNlbnRWYWxpZGF0b3JzID0gdmFsaWRhdG9ycy5maWx0ZXIoaXNQcmVzZW50KTtcbiAgICAgICAgICAgIGlmIChwcmVzZW50VmFsaWRhdG9ycy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IF9leGVjdXRlQXN5bmNWYWxpZGF0b3JzKGNvbnRyb2wsIHByZXNlbnRWYWxpZGF0b3JzKS5tYXAoX2NvbnZlcnRUb1Byb21pc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihfbWVyZ2VFcnJvcnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnM7XG4gICAgfSgpKTtcbiAgICBmdW5jdGlvbiBfY29udmVydFRvUHJvbWlzZShvYmopIHtcbiAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShvYmopID8gb2JqIDogcnhqc19vcGVyYXRvcl90b1Byb21pc2UudG9Qcm9taXNlLmNhbGwob2JqKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2V4ZWN1dGVWYWxpZGF0b3JzKGNvbnRyb2wsIHZhbGlkYXRvcnMpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2KGNvbnRyb2wpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2V4ZWN1dGVBc3luY1ZhbGlkYXRvcnMoY29udHJvbCwgdmFsaWRhdG9ycykge1xuICAgICAgICByZXR1cm4gdmFsaWRhdG9ycy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYoY29udHJvbCk7IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfbWVyZ2VFcnJvcnMoYXJyYXlPZkVycm9ycykge1xuICAgICAgICB2YXIgcmVzID0gYXJyYXlPZkVycm9ycy5yZWR1Y2UoZnVuY3Rpb24gKHJlcywgZXJyb3JzKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNQcmVzZW50KGVycm9ycykgPyBTdHJpbmdNYXBXcmFwcGVyLm1lcmdlKHJlcywgZXJyb3JzKSA6IHJlcztcbiAgICAgICAgfSwge30pO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzKS5sZW5ndGggPT09IDAgPyBudWxsIDogcmVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gcHJvdmlkZSBhIHtAbGluayBDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZm9yIGZvcm0gY29udHJvbHMuXG4gICAgICpcbiAgICAgKiBTZWUge0BsaW5rIERlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmb3IgaG93IHRvIGltcGxlbWVudCBvbmUuXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBOR19WQUxVRV9BQ0NFU1NPUiA9IG5ldyBfYW5ndWxhcl9jb3JlLk9wYXF1ZVRva2VuKCdOZ1ZhbHVlQWNjZXNzb3InKTtcblxuICAgIHZhciBDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgb24gYSBjaGVja2JveCBpbnB1dCBlbGVtZW50LlxuICAgICAqXG4gICAgICogICMjIyBFeGFtcGxlXG4gICAgICogIGBgYFxuICAgICAqICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlbWVtYmVyTG9naW5cIiBuZ01vZGVsPlxuICAgICAqICBgYGBcbiAgICAgKlxuICAgICAqICBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7IH07XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfVxuICAgICAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2hlY2tlZCcsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH07XG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9Y2hlY2tib3hdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1jaGVja2JveF1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9Y2hlY2tib3hdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQuY2hlY2tlZCknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1JdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5SZW5kZXJlciwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICB9KCkpO1xuXG4gICAgdmFyIERFRkFVTFRfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIERlZmF1bHRWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGFjY2Vzc29yIGZvciB3cml0aW5nIGEgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIHRoYXQgaXMgdXNlZCBieSB0aGVcbiAgICAgKiB7QGxpbmsgTmdNb2RlbH0sIHtAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0sIGFuZCB7QGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICAgICAqXG4gICAgICogICMjIyBFeGFtcGxlXG4gICAgICogIGBgYFxuICAgICAqICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoUXVlcnlcIiBuZ01vZGVsPlxuICAgICAqICBgYGBcbiAgICAgKlxuICAgICAqICBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIERlZmF1bHRWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gRGVmYXVsdFZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbm9ybWFsaXplZFZhbHVlID0gaXNCbGFuayh2YWx1ZSkgPyAnJyA6IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgbm9ybWFsaXplZFZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICBEZWZhdWx0VmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKVtmb3JtQ29udHJvbE5hbWVdLHRleHRhcmVhW2Zvcm1Db250cm9sTmFtZV0saW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSlbZm9ybUNvbnRyb2xdLHRleHRhcmVhW2Zvcm1Db250cm9sXSxpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKVtuZ01vZGVsXSx0ZXh0YXJlYVtuZ01vZGVsXSxbbmdEZWZhdWx0Q29udHJvbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdnNhdmtpbiByZXBsYWNlIHRoZSBhYm92ZSBzZWxlY3RvciB3aXRoIHRoZSBvbmUgYmVsb3cgaXQgb25jZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzAxMSBpcyBpbXBsZW1lbnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0b3I6ICdbbmdDb250cm9sXSxbbmdNb2RlbF0sW25nRm9ybUNvbnRyb2xdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhpbnB1dCknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbREVGQVVMVF9WQUxVRV9BQ0NFU1NPUl1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBEZWZhdWx0VmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5SZW5kZXJlciwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gRGVmYXVsdFZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBub3JtYWxpemVWYWxpZGF0b3IodmFsaWRhdG9yKSB7XG4gICAgICAgIGlmICh2YWxpZGF0b3IudmFsaWRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7IHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUoYyk7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUFzeW5jVmFsaWRhdG9yKHZhbGlkYXRvcikge1xuICAgICAgICBpZiAodmFsaWRhdG9yLnZhbGlkYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYykgeyByZXR1cm4gdmFsaWRhdG9yLnZhbGlkYXRlKGMpOyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBOVU1CRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE51bWJlclZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgbnVtYmVyIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyB0aGF0IGlzIHVzZWQgYnkgdGhlXG4gICAgICoge0BsaW5rIE5nTW9kZWx9LCB7QGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge0BsaW5rIEZvcm1Db250cm9sTmFtZX0gZGlyZWN0aXZlcy5cbiAgICAgKlxuICAgICAqICAjIyMgRXhhbXBsZVxuICAgICAqICBgYGBcbiAgICAgKiAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cImFnZVwiPlxuICAgICAqICBgYGBcbiAgICAgKi9cbiAgICB2YXIgTnVtYmVyVmFsdWVBY2Nlc3NvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE51bWJlclZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFRoZSB2YWx1ZSBuZWVkcyB0byBiZSBub3JtYWxpemVkIGZvciBJRTksIG90aGVyd2lzZSBpdCBpcyBzZXQgdG8gJ251bGwnIHdoZW4gbnVsbFxuICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZWRWYWx1ZSA9IGlzQmxhbmsodmFsdWUpID8gJycgOiB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5vcm1hbGl6ZWRWYWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHsgZm4odmFsdWUgPT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSkpOyB9O1xuICAgICAgICB9O1xuICAgICAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgICAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgICAgICB9O1xuICAgICAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPW51bWJlcl1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPW51bWJlcl1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9bnVtYmVyXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKGlucHV0KSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyhibHVyKSc6ICdvblRvdWNoZWQoKSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtOVU1CRVJfVkFMVUVfQUNDRVNTT1JdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTnVtYmVyVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5SZW5kZXJlciwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gTnVtYmVyVmFsdWVBY2Nlc3NvcjtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkMiA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHVuaW1wbGVtZW50ZWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5pbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIGJhc2UgY2xhc3MgdGhhdCBhbGwgY29udHJvbCBkaXJlY3RpdmUgZXh0ZW5kLlxuICAgICAqIEl0IGJpbmRzIGEge0BsaW5rIEZvcm1Db250cm9sfSBvYmplY3QgdG8gYSBET00gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFVzZWQgaW50ZXJuYWxseSBieSBBbmd1bGFyIGZvcm1zLlxuICAgICAqXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBOZ0NvbnRyb2wgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMihOZ0NvbnRyb2wsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIE5nQ29udHJvbCgpIHtcbiAgICAgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3IgPSBudWxsO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fcmF3VmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nQ29udHJvbC5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nQ29udHJvbC5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmltcGxlbWVudGVkKCk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gTmdDb250cm9sO1xuICAgIH0oQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlKSk7XG5cbiAgICB2YXIgUkFESU9fVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgY2xhc3MgdXNlZCBieSBBbmd1bGFyIHRvIHVuY2hlY2sgcmFkaW8gYnV0dG9ucyB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLlxuICAgICAqL1xuICAgIHZhciBSYWRpb0NvbnRyb2xSZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFJhZGlvQ29udHJvbFJlZ2lzdHJ5KCkge1xuICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgUmFkaW9Db250cm9sUmVnaXN0cnkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChjb250cm9sLCBhY2Nlc3Nvcikge1xuICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnB1c2goW2NvbnRyb2wsIGFjY2Vzc29yXSk7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQ29udHJvbFJlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoYWNjZXNzb3IpIHtcbiAgICAgICAgICAgIHZhciBpbmRleFRvUmVtb3ZlID0gLTE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hY2Nlc3NvcnNbaV1bMV0gPT09IGFjY2Vzc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4VG9SZW1vdmUgPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExpc3RXcmFwcGVyLnJlbW92ZUF0KHRoaXMuX2FjY2Vzc29ycywgaW5kZXhUb1JlbW92ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQ29udHJvbFJlZ2lzdHJ5LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoYWNjZXNzb3IpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5faXNTYW1lR3JvdXAoYywgYWNjZXNzb3IpICYmIGNbMV0gIT09IGFjY2Vzc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNbMV0uZmlyZVVuY2hlY2soYWNjZXNzb3IudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBSYWRpb0NvbnRyb2xSZWdpc3RyeS5wcm90b3R5cGUuX2lzU2FtZUdyb3VwID0gZnVuY3Rpb24gKGNvbnRyb2xQYWlyLCBhY2Nlc3Nvcikge1xuICAgICAgICAgICAgaWYgKCFjb250cm9sUGFpclswXS5jb250cm9sKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sUGFpclswXS5fcGFyZW50ID09PSBhY2Nlc3Nvci5fY29udHJvbC5fcGFyZW50ICYmXG4gICAgICAgICAgICAgICAgY29udHJvbFBhaXJbMV0ubmFtZSA9PT0gYWNjZXNzb3IubmFtZTtcbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9Db250cm9sUmVnaXN0cnkuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3RhYmxlIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xSZWdpc3RyeS5jdG9yUGFyYW1ldGVycyA9IFtdO1xuICAgICAgICByZXR1cm4gUmFkaW9Db250cm9sUmVnaXN0cnk7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiBAd2hhdEl0RG9lcyAgV3JpdGVzIHJhZGlvIGNvbnRyb2wgdmFsdWVzIGFuZCBsaXN0ZW5zIHRvIHJhZGlvIGNvbnRyb2wgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIFVzZWQgYnkge0BsaW5rIE5nTW9kZWx9LCB7QGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge0BsaW5rIEZvcm1Db250cm9sTmFtZX1cbiAgICAgKiB0byBrZWVwIHRoZSB2aWV3IHN5bmNlZCB3aXRoIHRoZSB7QGxpbmsgRm9ybUNvbnRyb2x9IG1vZGVsLlxuICAgICAqXG4gICAgICogQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBJZiB5b3UgaGF2ZSBpbXBvcnRlZCB0aGUge0BsaW5rIEZvcm1zTW9kdWxlfSBvciB0aGUge0BsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9LCB0aGlzXG4gICAgICogdmFsdWUgYWNjZXNzb3Igd2lsbCBiZSBhY3RpdmUgb24gYW55IHJhZGlvIGNvbnRyb2wgdGhhdCBoYXMgYSBmb3JtIGRpcmVjdGl2ZS4gWW91IGRvXG4gICAgICogKipub3QqKiBuZWVkIHRvIGFkZCBhIHNwZWNpYWwgc2VsZWN0b3IgdG8gYWN0aXZhdGUgaXQuXG4gICAgICpcbiAgICAgKiAjIyMgSG93IHRvIHVzZSByYWRpbyBidXR0b25zIHdpdGggZm9ybSBkaXJlY3RpdmVzXG4gICAgICpcbiAgICAgKiBUbyB1c2UgcmFkaW8gYnV0dG9ucyBpbiBhIHRlbXBsYXRlLWRyaXZlbiBmb3JtLCB5b3UnbGwgd2FudCB0byBlbnN1cmUgdGhhdCByYWRpbyBidXR0b25zXG4gICAgICogaW4gdGhlIHNhbWUgZ3JvdXAgaGF2ZSB0aGUgc2FtZSBgbmFtZWAgYXR0cmlidXRlLiAgUmFkaW8gYnV0dG9ucyB3aXRoIGRpZmZlcmVudCBgbmFtZWBcbiAgICAgKiBhdHRyaWJ1dGVzIGRvIG5vdCBhZmZlY3QgZWFjaCBvdGhlci5cbiAgICAgKlxuICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9yYWRpb0J1dHRvbnMvcmFkaW9fYnV0dG9uX2V4YW1wbGUudHMgcmVnaW9uPSdUZW1wbGF0ZURyaXZlbid9XG4gICAgICpcbiAgICAgKiBXaGVuIHVzaW5nIHJhZGlvIGJ1dHRvbnMgaW4gYSByZWFjdGl2ZSBmb3JtLCByYWRpbyBidXR0b25zIGluIHRoZSBzYW1lIGdyb3VwIHNob3VsZCBoYXZlIHRoZVxuICAgICAqIHNhbWUgYGZvcm1Db250cm9sTmFtZWAuIFlvdSBjYW4gYWxzbyBhZGQgYSBgbmFtZWAgYXR0cmlidXRlLCBidXQgaXQncyBvcHRpb25hbC5cbiAgICAgKlxuICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9yZWFjdGl2ZVJhZGlvQnV0dG9ucy9yZWFjdGl2ZV9yYWRpb19idXR0b25fZXhhbXBsZS50cyByZWdpb249J1JlYWN0aXZlJ31cbiAgICAgKlxuICAgICAqICAqICoqbnBtIHBhY2thZ2UqKjogYEBhbmd1bGFyL2Zvcm1zYFxuICAgICAqXG4gICAgICogIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZiwgX3JlZ2lzdHJ5LCBfaW5qZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0cnkgPSBfcmVnaXN0cnk7XG4gICAgICAgICAgICB0aGlzLl9pbmplY3RvciA9IF9pbmplY3RvcjtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfVxuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2wgPSB0aGlzLl9pbmplY3Rvci5nZXQoTmdDb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrTmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0cnkuYWRkKHRoaXMuX2NvbnRyb2wsIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fcmVnaXN0cnkucmVtb3ZlKHRoaXMpOyB9O1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NoZWNrZWQnLCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl9mbiA9IGZuO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmbihfdGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlZ2lzdHJ5LnNlbGVjdChfdGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5maXJlVW5jaGVjayA9IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLndyaXRlVmFsdWUodmFsdWUpOyB9O1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgICAgICB9O1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fY2hlY2tOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZSAmJiB0aGlzLm5hbWUgIT09IHRoaXMuZm9ybUNvbnRyb2xOYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGhyb3dOYW1lRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5uYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lKVxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZm9ybUNvbnRyb2xOYW1lO1xuICAgICAgICB9O1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fdGhyb3dOYW1lRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICBJZiB5b3UgZGVmaW5lIGJvdGggYSBuYW1lIGFuZCBhIGZvcm1Db250cm9sTmFtZSBhdHRyaWJ1dGUgb24geW91ciByYWRpbyBidXR0b24sIHRoZWlyIHZhbHVlc1xcbiAgICAgIG11c3QgbWF0Y2guIEV4OiA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZm9vZFxcXCIgbmFtZT1cXFwiZm9vZFxcXCI+XFxuICAgIFwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1yYWRpb11bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPXJhZGlvXVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1yYWRpb11bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnKGNoYW5nZSknOiAnb25DaGFuZ2UoKScsICcoYmx1ciknOiAnb25Ub3VjaGVkKCknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtSQURJT19WQUxVRV9BQ0NFU1NPUl1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFJhZGlvQ29udHJvbFJlZ2lzdHJ5LCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdG9yLCB9LFxuICAgICAgICBdO1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0IH0sXSxcbiAgICAgICAgICAgICdmb3JtQ29udHJvbE5hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0IH0sXSxcbiAgICAgICAgICAgICd2YWx1ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICB9KCkpO1xuXG4gICAgdmFyIFNFTEVDVF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgZnVuY3Rpb24gX2J1aWxkVmFsdWVTdHJpbmcoaWQsIHZhbHVlKSB7XG4gICAgICAgIGlmIChpc0JsYW5rKGlkKSlcbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgdmFsdWU7XG4gICAgICAgIGlmICghaXNQcmltaXRpdmUodmFsdWUpKVxuICAgICAgICAgICAgdmFsdWUgPSAnT2JqZWN0JztcbiAgICAgICAgcmV0dXJuIFN0cmluZ1dyYXBwZXIuc2xpY2UoaWQgKyBcIjogXCIgKyB2YWx1ZSwgMCwgNTApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZXh0cmFjdElkKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVN0cmluZy5zcGxpdCgnOicpWzBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAd2hhdEl0RG9lcyBXcml0ZXMgdmFsdWVzIGFuZCBsaXN0ZW5zIHRvIGNoYW5nZXMgb24gYSBzZWxlY3QgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFVzZWQgYnkge0BsaW5rIE5nTW9kZWx9LCB7QGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge0BsaW5rIEZvcm1Db250cm9sTmFtZX1cbiAgICAgKiB0byBrZWVwIHRoZSB2aWV3IHN5bmNlZCB3aXRoIHRoZSB7QGxpbmsgRm9ybUNvbnRyb2x9IG1vZGVsLlxuICAgICAqXG4gICAgICogQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBJZiB5b3UgaGF2ZSBpbXBvcnRlZCB0aGUge0BsaW5rIEZvcm1zTW9kdWxlfSBvciB0aGUge0BsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9LCB0aGlzXG4gICAgICogdmFsdWUgYWNjZXNzb3Igd2lsbCBiZSBhY3RpdmUgb24gYW55IHNlbGVjdCBjb250cm9sIHRoYXQgaGFzIGEgZm9ybSBkaXJlY3RpdmUuIFlvdSBkb1xuICAgICAqICoqbm90KiogbmVlZCB0byBhZGQgYSBzcGVjaWFsIHNlbGVjdG9yIHRvIGFjdGl2YXRlIGl0LlxuICAgICAqXG4gICAgICogIyMjIEhvdyB0byB1c2Ugc2VsZWN0IGNvbnRyb2xzIHdpdGggZm9ybSBkaXJlY3RpdmVzXG4gICAgICpcbiAgICAgKiBUbyB1c2UgYSBzZWxlY3QgaW4gYSB0ZW1wbGF0ZS1kcml2ZW4gZm9ybSwgc2ltcGx5IGFkZCBhbiBgbmdNb2RlbGAgYW5kIGEgYG5hbWVgXG4gICAgICogYXR0cmlidXRlIHRvIHRoZSBtYWluIGA8c2VsZWN0PmAgdGFnLlxuICAgICAqXG4gICAgICogSWYgeW91ciBvcHRpb24gdmFsdWVzIGFyZSBzaW1wbGUgc3RyaW5ncywgeW91IGNhbiBiaW5kIHRvIHRoZSBub3JtYWwgYHZhbHVlYCBwcm9wZXJ0eVxuICAgICAqIG9uIHRoZSBvcHRpb24uICBJZiB5b3VyIG9wdGlvbiB2YWx1ZXMgaGFwcGVuIHRvIGJlIG9iamVjdHMgKGFuZCB5b3UnZCBsaWtlIHRvIHNhdmUgdGhlXG4gICAgICogc2VsZWN0aW9uIGluIHlvdXIgZm9ybSBhcyBhbiBvYmplY3QpLCB1c2UgYG5nVmFsdWVgIGluc3RlYWQ6XG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvc2VsZWN0Q29udHJvbC9zZWxlY3RfY29udHJvbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqIEluIHJlYWN0aXZlIGZvcm1zLCB5b3UnbGwgYWxzbyB3YW50IHRvIGFkZCB5b3VyIGZvcm0gZGlyZWN0aXZlIChgZm9ybUNvbnRyb2xOYW1lYCBvclxuICAgICAqIGBmb3JtQ29udHJvbGApIG9uIHRoZSBtYWluIGA8c2VsZWN0PmAgdGFnLiBMaWtlIGluIHRoZSBmb3JtZXIgZXhhbXBsZSwgeW91IGhhdmUgdGhlXG4gICAgICogY2hvaWNlIG9mIGJpbmRpbmcgdG8gdGhlICBgdmFsdWVgIG9yIGBuZ1ZhbHVlYCBwcm9wZXJ0eSBvbiB0aGUgc2VsZWN0J3Mgb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9yZWFjdGl2ZVNlbGVjdENvbnRyb2wvcmVhY3RpdmVfc2VsZWN0X2NvbnRyb2xfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICpcbiAgICAgKiBOb3RlOiBXZSBsaXN0ZW4gdG8gdGhlICdjaGFuZ2UnIGV2ZW50IGJlY2F1c2UgJ2lucHV0JyBldmVudHMgYXJlbid0IGZpcmVkXG4gICAgICogZm9yIHNlbGVjdHMgaW4gRmlyZWZveCBhbmQgSUU6XG4gICAgICogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTAyNDM1MFxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzQ2NjAwNDUvXG4gICAgICpcbiAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYEBhbmd1bGFyL2Zvcm1zYFxuICAgICAqXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9uTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5faWRDb3VudGVyID0gMDtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoXykgeyB9O1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIH1cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhciB2YWx1ZVN0cmluZyA9IF9idWlsZFZhbHVlU3RyaW5nKHRoaXMuX2dldE9wdGlvbklkKHZhbHVlKSwgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWVTdHJpbmcpO1xuICAgICAgICB9O1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy52YWx1ZSA9IHZhbHVlU3RyaW5nO1xuICAgICAgICAgICAgICAgIGZuKF90aGlzLl9nZXRPcHRpb25WYWx1ZSh2YWx1ZVN0cmluZykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgICAgICB9O1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fcmVnaXN0ZXJPcHRpb24gPSBmdW5jdGlvbiAoKSB7IHJldHVybiAodGhpcy5faWRDb3VudGVyKyspLnRvU3RyaW5nKCk7IH07XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9nZXRPcHRpb25JZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE1hcFdyYXBwZXIua2V5cyh0aGlzLl9vcHRpb25NYXApOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAobG9vc2VJZGVudGljYWwodGhpcy5fb3B0aW9uTWFwLmdldChpZCksIHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9nZXRPcHRpb25WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZVN0cmluZykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5fb3B0aW9uTWFwLmdldChfZXh0cmFjdElkKHZhbHVlU3RyaW5nKSk7XG4gICAgICAgICAgICByZXR1cm4gaXNQcmVzZW50KHZhbHVlKSA/IHZhbHVlIDogdmFsdWVTdHJpbmc7XG4gICAgICAgIH07XG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3Q6bm90KFttdWx0aXBsZV0pW2Zvcm1Db250cm9sTmFtZV0sc2VsZWN0Om5vdChbbXVsdGlwbGVdKVtmb3JtQ29udHJvbF0sc2VsZWN0Om5vdChbbXVsdGlwbGVdKVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsICcoYmx1ciknOiAnb25Ub3VjaGVkKCknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtTRUxFQ1RfVkFMVUVfQUNDRVNTT1JdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogQHdoYXRJdERvZXMgTWFya3MgYDxvcHRpb24+YCBhcyBkeW5hbWljLCBzbyBBbmd1bGFyIGNhbiBiZSBub3RpZmllZCB3aGVuIG9wdGlvbnMgY2hhbmdlLlxuICAgICAqXG4gICAgICogQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBTZWUgZG9jcyBmb3Ige0BsaW5rIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmb3IgdXNhZ2UgZXhhbXBsZXMuXG4gICAgICpcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE5nU2VsZWN0T3B0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTmdTZWxlY3RPcHRpb24oX2VsZW1lbnQsIF9yZW5kZXJlciwgX3NlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCA9IF9lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3QgPSBfc2VsZWN0O1xuICAgICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9zZWxlY3QpKVxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLl9zZWxlY3QuX3JlZ2lzdGVyT3B0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZSwgXCJuZ1ZhbHVlXCIsIHtcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdCA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0Ll9vcHRpb25NYXAuc2V0KHRoaXMuaWQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUoX2J1aWxkVmFsdWVTdHJpbmcodGhpcy5pZCwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5fc2VsZWN0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIE5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZS5fc2V0RWxlbWVudFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIE5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5fc2VsZWN0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdC5fb3B0aW9uTWFwLmRlbGV0ZSh0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBOZ1NlbGVjdE9wdGlvbi5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdvcHRpb24nIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdTZWxlY3RPcHRpb24uY3RvclBhcmFtZXRlcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5SZW5kZXJlciwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIE5nU2VsZWN0T3B0aW9uLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25nVmFsdWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nVmFsdWUnLF0gfSxdLFxuICAgICAgICAgICAgJ3ZhbHVlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWyd2YWx1ZScsXSB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBOZ1NlbGVjdE9wdGlvbjtcbiAgICB9KCkpO1xuXG4gICAgdmFyIFNFTEVDVF9NVUxUSVBMRV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICBmdW5jdGlvbiBfYnVpbGRWYWx1ZVN0cmluZyQxKGlkLCB2YWx1ZSkge1xuICAgICAgICBpZiAoaXNCbGFuayhpZCkpXG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKVxuICAgICAgICAgICAgdmFsdWUgPSBcIidcIiArIHZhbHVlICsgXCInXCI7XG4gICAgICAgIGlmICghaXNQcmltaXRpdmUodmFsdWUpKVxuICAgICAgICAgICAgdmFsdWUgPSAnT2JqZWN0JztcbiAgICAgICAgcmV0dXJuIFN0cmluZ1dyYXBwZXIuc2xpY2UoaWQgKyBcIjogXCIgKyB2YWx1ZSwgMCwgNTApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZXh0cmFjdElkJDEodmFsdWVTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlU3RyaW5nLnNwbGl0KCc6JylbMF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBhY2Nlc3NvciBmb3Igd3JpdGluZyBhIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyBvbiBhIHNlbGVjdCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcihfcmVuZGVyZXIsIF9lbGVtZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBfZWxlbWVudFJlZjtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX29wdGlvbk1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX2lkQ291bnRlciA9IDA7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gdmFsdWU7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IHZhbHVlcyB0byBpZHNcbiAgICAgICAgICAgIHZhciBpZHMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBfdGhpcy5fZ2V0T3B0aW9uSWQodik7IH0pO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9uTWFwLmZvckVhY2goZnVuY3Rpb24gKG9wdCwgbykgeyBvcHQuX3NldFNlbGVjdGVkKGlkcy5pbmRleE9mKG8udG9TdHJpbmcoKSkgPiAtMSk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gW107XG4gICAgICAgICAgICAgICAgaWYgKF8uaGFzT3duUHJvcGVydHkoJ3NlbGVjdGVkT3B0aW9ucycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gXy5zZWxlY3RlZE9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdCA9IG9wdGlvbnMuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBfdGhpcy5fZ2V0T3B0aW9uVmFsdWUob3B0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBfLm9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdCA9IG9wdGlvbnMuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gX3RoaXMuX2dldE9wdGlvblZhbHVlKG9wdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZuKHNlbGVjdGVkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlZ2lzdGVyT3B0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSAodGhpcy5faWRDb3VudGVyKyspLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25NYXAuc2V0KGlkLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2dldE9wdGlvbklkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gTWFwV3JhcHBlci5rZXlzKHRoaXMuX29wdGlvbk1hcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGlmIChsb29zZUlkZW50aWNhbCh0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKS5fdmFsdWUsIHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2dldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgb3B0ID0gdGhpcy5fb3B0aW9uTWFwLmdldChfZXh0cmFjdElkJDEodmFsdWVTdHJpbmcpKTtcbiAgICAgICAgICAgIHJldHVybiBpc1ByZXNlbnQob3B0KSA/IG9wdC5fdmFsdWUgOiB2YWx1ZVN0cmluZztcbiAgICAgICAgfTtcbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0W211bHRpcGxlXVtmb3JtQ29udHJvbE5hbWVdLHNlbGVjdFttdWx0aXBsZV1bZm9ybUNvbnRyb2xdLHNlbGVjdFttdWx0aXBsZV1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldCknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbU0VMRUNUX01VTFRJUExFX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuUmVuZGVyZXIsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiBNYXJrcyBgPG9wdGlvbj5gIGFzIGR5bmFtaWMsIHNvIEFuZ3VsYXIgY2FuIGJlIG5vdGlmaWVkIHdoZW4gb3B0aW9ucyBjaGFuZ2UuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogPHNlbGVjdCBtdWx0aXBsZSBuYW1lPVwiY2l0eVwiIG5nTW9kZWw+XG4gICAgICogICA8b3B0aW9uICpuZ0Zvcj1cImxldCBjIG9mIGNpdGllc1wiIFt2YWx1ZV09XCJjXCI+PC9vcHRpb24+XG4gICAgICogPC9zZWxlY3Q+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgdmFyIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uKF9lbGVtZW50LCBfcmVuZGVyZXIsIF9zZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ID0gX3NlbGVjdDtcbiAgICAgICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5fc2VsZWN0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLl9zZWxlY3QuX3JlZ2lzdGVyT3B0aW9uKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZSwgXCJuZ1ZhbHVlXCIsIHtcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdCA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUoX2J1aWxkVmFsdWVTdHJpbmckMSh0aGlzLmlkLCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9zZWxlY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZShfYnVpbGRWYWx1ZVN0cmluZyQxKHRoaXMuaWQsIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLl9zZXRFbGVtZW50VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5fc2V0U2VsZWN0ZWQgPSBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3NlbGVjdCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5kZWxldGUodGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdvcHRpb24nIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5jdG9yUGFyYW1ldGVycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ib3N0IH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25nVmFsdWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nVmFsdWUnLF0gfSxdLFxuICAgICAgICAgICAgJ3ZhbHVlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWyd2YWx1ZScsXSB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uO1xuICAgIH0oKSk7XG5cbiAgICBmdW5jdGlvbiBjb250cm9sUGF0aChuYW1lLCBwYXJlbnQpIHtcbiAgICAgICAgdmFyIHAgPSBMaXN0V3JhcHBlci5jbG9uZShwYXJlbnQucGF0aCk7XG4gICAgICAgIHAucHVzaChuYW1lKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFVwQ29udHJvbChjb250cm9sLCBkaXIpIHtcbiAgICAgICAgaWYgKCFjb250cm9sKVxuICAgICAgICAgICAgX3Rocm93RXJyb3IoZGlyLCAnQ2Fubm90IGZpbmQgY29udHJvbCB3aXRoJyk7XG4gICAgICAgIGlmICghZGlyLnZhbHVlQWNjZXNzb3IpXG4gICAgICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdObyB2YWx1ZSBhY2Nlc3NvciBmb3IgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICAgICAgY29udHJvbC52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2UoW2NvbnRyb2wudmFsaWRhdG9yLCBkaXIudmFsaWRhdG9yXSk7XG4gICAgICAgIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhbY29udHJvbC5hc3luY1ZhbGlkYXRvciwgZGlyLmFzeW5jVmFsaWRhdG9yXSk7XG4gICAgICAgIGRpci52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUoY29udHJvbC52YWx1ZSk7XG4gICAgICAgIC8vIHZpZXcgLT4gbW9kZWxcbiAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPbkNoYW5nZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGRpci52aWV3VG9Nb2RlbFVwZGF0ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgICAgICBjb250cm9sLnNldFZhbHVlKG5ld1ZhbHVlLCB7IGVtaXRNb2RlbFRvVmlld0NoYW5nZTogZmFsc2UgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0b3VjaGVkXG4gICAgICAgIGRpci52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25Ub3VjaGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpOyB9KTtcbiAgICAgICAgY29udHJvbC5yZWdpc3Rlck9uQ2hhbmdlKGZ1bmN0aW9uIChuZXdWYWx1ZSwgZW1pdE1vZGVsRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIGNvbnRyb2wgLT4gdmlld1xuICAgICAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAvLyBjb250cm9sIC0+IG5nTW9kZWxcbiAgICAgICAgICAgIGlmIChlbWl0TW9kZWxFdmVudClcbiAgICAgICAgICAgICAgICBkaXIudmlld1RvTW9kZWxVcGRhdGUobmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRpci52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnRyb2wucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7IGRpci52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlLXJ1biB2YWxpZGF0aW9uIHdoZW4gdmFsaWRhdG9yIGJpbmRpbmcgY2hhbmdlcywgZS5nLiBtaW5sZW5ndGg9MyAtPiBtaW5sZW5ndGg9NFxuICAgICAgICBkaXIuX3Jhd1ZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyLl9yYXdBc3luY1ZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYW5VcENvbnRyb2woY29udHJvbCwgZGlyKSB7XG4gICAgICAgIGRpci52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25DaGFuZ2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gX25vQ29udHJvbEVycm9yKGRpcik7IH0pO1xuICAgICAgICBkaXIudmFsdWVBY2Nlc3Nvci5yZWdpc3Rlck9uVG91Y2hlZChmdW5jdGlvbiAoKSB7IHJldHVybiBfbm9Db250cm9sRXJyb3IoZGlyKTsgfSk7XG4gICAgICAgIGRpci5fcmF3VmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHsgcmV0dXJuIHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKG51bGwpOyB9KTtcbiAgICAgICAgZGlyLl9yYXdBc3luY1ZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7IHJldHVybiB2YWxpZGF0b3IucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShudWxsKTsgfSk7XG4gICAgICAgIGlmIChjb250cm9sKVxuICAgICAgICAgICAgY29udHJvbC5fY2xlYXJDaGFuZ2VGbnMoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0VXBGb3JtQ29udGFpbmVyKGNvbnRyb2wsIGRpcikge1xuICAgICAgICBpZiAoaXNCbGFuayhjb250cm9sKSlcbiAgICAgICAgICAgIF90aHJvd0Vycm9yKGRpciwgJ0Nhbm5vdCBmaW5kIGNvbnRyb2wgd2l0aCcpO1xuICAgICAgICBjb250cm9sLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZShbY29udHJvbC52YWxpZGF0b3IsIGRpci52YWxpZGF0b3JdKTtcbiAgICAgICAgY29udHJvbC5hc3luY1ZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKFtjb250cm9sLmFzeW5jVmFsaWRhdG9yLCBkaXIuYXN5bmNWYWxpZGF0b3JdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX25vQ29udHJvbEVycm9yKGRpcikge1xuICAgICAgICByZXR1cm4gX3Rocm93RXJyb3IoZGlyLCAnVGhlcmUgaXMgbm8gRm9ybUNvbnRyb2wgaW5zdGFuY2UgYXR0YWNoZWQgdG8gZm9ybSBjb250cm9sIGVsZW1lbnQgd2l0aCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfdGhyb3dFcnJvcihkaXIsIG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2VFbmQ7XG4gICAgICAgIGlmIChkaXIucGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBtZXNzYWdlRW5kID0gXCJwYXRoOiAnXCIgKyBkaXIucGF0aC5qb2luKCcgLT4gJykgKyBcIidcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXIucGF0aFswXSkge1xuICAgICAgICAgICAgbWVzc2FnZUVuZCA9IFwibmFtZTogJ1wiICsgZGlyLnBhdGggKyBcIidcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2VFbmQgPSAndW5zcGVjaWZpZWQgbmFtZSBhdHRyaWJ1dGUnO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlICsgXCIgXCIgKyBtZXNzYWdlRW5kKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcG9zZVZhbGlkYXRvcnModmFsaWRhdG9ycykge1xuICAgICAgICByZXR1cm4gaXNQcmVzZW50KHZhbGlkYXRvcnMpID8gVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkYXRvcnMubWFwKG5vcm1hbGl6ZVZhbGlkYXRvcikpIDogbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh2YWxpZGF0b3JzKSB7XG4gICAgICAgIHJldHVybiBpc1ByZXNlbnQodmFsaWRhdG9ycykgPyBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyh2YWxpZGF0b3JzLm1hcChub3JtYWxpemVBc3luY1ZhbGlkYXRvcikpIDpcbiAgICAgICAgICAgIG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHZpZXdNb2RlbCkge1xuICAgICAgICBpZiAoIWNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ21vZGVsJykpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzWydtb2RlbCddO1xuICAgICAgICBpZiAoY2hhbmdlLmlzRmlyc3RDaGFuZ2UoKSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gIWxvb3NlSWRlbnRpY2FsKHZpZXdNb2RlbCwgY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzQnVpbHRJbkFjY2Vzc29yKHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgcmV0dXJuIChoYXNDb25zdHJ1Y3Rvcih2YWx1ZUFjY2Vzc29yLCBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yKSB8fFxuICAgICAgICAgICAgaGFzQ29uc3RydWN0b3IodmFsdWVBY2Nlc3NvciwgTnVtYmVyVmFsdWVBY2Nlc3NvcikgfHxcbiAgICAgICAgICAgIGhhc0NvbnN0cnVjdG9yKHZhbHVlQWNjZXNzb3IsIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yKSB8fFxuICAgICAgICAgICAgaGFzQ29uc3RydWN0b3IodmFsdWVBY2Nlc3NvciwgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcikgfHxcbiAgICAgICAgICAgIGhhc0NvbnN0cnVjdG9yKHZhbHVlQWNjZXNzb3IsIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IpKTtcbiAgICB9XG4gICAgLy8gVE9ETzogdnNhdmtpbiByZW1vdmUgaXQgb25jZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8zMDExIGlzIGltcGxlbWVudGVkXG4gICAgZnVuY3Rpb24gc2VsZWN0VmFsdWVBY2Nlc3NvcihkaXIsIHZhbHVlQWNjZXNzb3JzKSB7XG4gICAgICAgIGlmICghdmFsdWVBY2Nlc3NvcnMpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIGRlZmF1bHRBY2Nlc3NvcjtcbiAgICAgICAgdmFyIGJ1aWx0aW5BY2Nlc3NvcjtcbiAgICAgICAgdmFyIGN1c3RvbUFjY2Vzc29yO1xuICAgICAgICB2YWx1ZUFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBpZiAoaGFzQ29uc3RydWN0b3IodiwgRGVmYXVsdFZhbHVlQWNjZXNzb3IpKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdEFjY2Vzc29yID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzQnVpbHRJbkFjY2Vzc29yKHYpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJlc2VudChidWlsdGluQWNjZXNzb3IpKVxuICAgICAgICAgICAgICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdNb3JlIHRoYW4gb25lIGJ1aWx0LWluIHZhbHVlIGFjY2Vzc29yIG1hdGNoZXMgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICAgICAgICAgICAgICBidWlsdGluQWNjZXNzb3IgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJlc2VudChjdXN0b21BY2Nlc3NvcikpXG4gICAgICAgICAgICAgICAgICAgIF90aHJvd0Vycm9yKGRpciwgJ01vcmUgdGhhbiBvbmUgY3VzdG9tIHZhbHVlIGFjY2Vzc29yIG1hdGNoZXMgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICAgICAgICAgICAgICBjdXN0b21BY2Nlc3NvciA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNQcmVzZW50KGN1c3RvbUFjY2Vzc29yKSlcbiAgICAgICAgICAgIHJldHVybiBjdXN0b21BY2Nlc3NvcjtcbiAgICAgICAgaWYgKGlzUHJlc2VudChidWlsdGluQWNjZXNzb3IpKVxuICAgICAgICAgICAgcmV0dXJuIGJ1aWx0aW5BY2Nlc3NvcjtcbiAgICAgICAgaWYgKGlzUHJlc2VudChkZWZhdWx0QWNjZXNzb3IpKVxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRBY2Nlc3NvcjtcbiAgICAgICAgX3Rocm93RXJyb3IoZGlyLCAnTm8gdmFsaWQgdmFsdWUgYWNjZXNzb3IgZm9yIGZvcm0gY29udHJvbCB3aXRoJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGNvZGUgc2hhcmVkIGJldHdlZW4ge0BsaW5rIE5nTW9kZWxHcm91cH0gYW5kIHtAbGluayBGb3JtR3JvdXBOYW1lfS5cbiAgICAgKlxuICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKCkge1xuICAgICAgICAgICAgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tQYXJlbnRUeXBlKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUuYWRkRm9ybUdyb3VwKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUZvcm1Hcm91cCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHRoZSB7QGxpbmsgRm9ybUdyb3VwfSBiYWNraW5nIHRoaXMgYmluZGluZy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZvcm1EaXJlY3RpdmUuZ2V0Rm9ybUdyb3VwKHRoaXMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHRoZSBwYXRoIHRvIHRoaXMgY29udHJvbCBncm91cC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb250cm9sUGF0aCh0aGlzLm5hbWUsIHRoaXMuX3BhcmVudCk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgdGhlIHtAbGluayBGb3JtfSB0byB3aGljaCB0aGlzIGdyb3VwIGJlbG9uZ3MuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcGFyZW50ID8gdGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ2YWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX2FzeW5jVmFsaWRhdG9ycyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fY2hlY2tQYXJlbnRUeXBlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICByZXR1cm4gQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmU7XG4gICAgfShDb250cm9sQ29udGFpbmVyKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIEFic3RyYWN0Q29udHJvbFN0YXR1cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEFic3RyYWN0Q29udHJvbFN0YXR1cyhjZCkge1xuICAgICAgICAgICAgdGhpcy5fY2QgPSBjZDtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzVW50b3VjaGVkXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1ByZXNlbnQodGhpcy5fY2QuY29udHJvbCkgPyB0aGlzLl9jZC5jb250cm9sLnVudG91Y2hlZCA6IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NUb3VjaGVkXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1ByZXNlbnQodGhpcy5fY2QuY29udHJvbCkgPyB0aGlzLl9jZC5jb250cm9sLnRvdWNoZWQgOiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzUHJpc3RpbmVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzUHJlc2VudCh0aGlzLl9jZC5jb250cm9sKSA/IHRoaXMuX2NkLmNvbnRyb2wucHJpc3RpbmUgOiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzRGlydHlcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzUHJlc2VudCh0aGlzLl9jZC5jb250cm9sKSA/IHRoaXMuX2NkLmNvbnRyb2wuZGlydHkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzVmFsaWRcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzUHJlc2VudCh0aGlzLl9jZC5jb250cm9sKSA/IHRoaXMuX2NkLmNvbnRyb2wudmFsaWQgOiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzSW52YWxpZFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNQcmVzZW50KHRoaXMuX2NkLmNvbnRyb2wpID8gdGhpcy5fY2QuY29udHJvbC5pbnZhbGlkIDogZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEFic3RyYWN0Q29udHJvbFN0YXR1cztcbiAgICB9KCkpO1xuICAgIHZhciBuZ0NvbnRyb2xTdGF0dXNIb3N0ID0ge1xuICAgICAgICAnW2NsYXNzLm5nLXVudG91Y2hlZF0nOiAnbmdDbGFzc1VudG91Y2hlZCcsXG4gICAgICAgICdbY2xhc3MubmctdG91Y2hlZF0nOiAnbmdDbGFzc1RvdWNoZWQnLFxuICAgICAgICAnW2NsYXNzLm5nLXByaXN0aW5lXSc6ICduZ0NsYXNzUHJpc3RpbmUnLFxuICAgICAgICAnW2NsYXNzLm5nLWRpcnR5XSc6ICduZ0NsYXNzRGlydHknLFxuICAgICAgICAnW2NsYXNzLm5nLXZhbGlkXSc6ICduZ0NsYXNzVmFsaWQnLFxuICAgICAgICAnW2NsYXNzLm5nLWludmFsaWRdJzogJ25nQ2xhc3NJbnZhbGlkJ1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGlyZWN0aXZlIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byBBbmd1bGFyIGZvcm0gY29udHJvbHMgdGhhdCBzZXRzIENTUyBjbGFzc2VzXG4gICAgICogYmFzZWQgb24gY29udHJvbCBzdGF0dXMgKHZhbGlkL2ludmFsaWQvZGlydHkvZXRjKS5cbiAgICAgKlxuICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgTmdDb250cm9sU3RhdHVzID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDMoTmdDb250cm9sU3RhdHVzLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBOZ0NvbnRyb2xTdGF0dXMoY2QpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGNkKTtcbiAgICAgICAgfVxuICAgICAgICBOZ0NvbnRyb2xTdGF0dXMuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2Zvcm1Db250cm9sTmFtZV0sW25nTW9kZWxdLFtmb3JtQ29udHJvbF0nLCBob3N0OiBuZ0NvbnRyb2xTdGF0dXNIb3N0IH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdDb250cm9sU3RhdHVzLmN0b3JQYXJhbWV0ZXJzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBOZ0NvbnRyb2wsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIE5nQ29udHJvbFN0YXR1cztcbiAgICB9KEFic3RyYWN0Q29udHJvbFN0YXR1cykpO1xuICAgIC8qKlxuICAgICAqIERpcmVjdGl2ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gQW5ndWxhciBmb3JtIGdyb3VwcyB0aGF0IHNldHMgQ1NTIGNsYXNzZXNcbiAgICAgKiBiYXNlZCBvbiBjb250cm9sIHN0YXR1cyAodmFsaWQvaW52YWxpZC9kaXJ0eS9ldGMpLlxuICAgICAqXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBOZ0NvbnRyb2xTdGF0dXNHcm91cCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQzKE5nQ29udHJvbFN0YXR1c0dyb3VwLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBOZ0NvbnRyb2xTdGF0dXNHcm91cChjZCkge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgY2QpO1xuICAgICAgICB9XG4gICAgICAgIE5nQ29udHJvbFN0YXR1c0dyb3VwLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbZm9ybUdyb3VwTmFtZV0sW2Zvcm1BcnJheU5hbWVdLFtuZ01vZGVsR3JvdXBdLFtmb3JtR3JvdXBdLGZvcm06bm90KFtuZ05vRm9ybV0pLFtuZ0Zvcm1dJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IG5nQ29udHJvbFN0YXR1c0hvc3RcbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ0NvbnRyb2xTdGF0dXNHcm91cC5jdG9yUGFyYW1ldGVycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gTmdDb250cm9sU3RhdHVzR3JvdXA7XG4gICAgfShBYnN0cmFjdENvbnRyb2xTdGF0dXMpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDUgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2UgYnkgZGlyZWN0aXZlcyBhbmQgY29tcG9uZW50cyB0byBlbWl0IGN1c3RvbSBFdmVudHMuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZXNcbiAgICAgKlxuICAgICAqIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgYFppcHB5YCBhbHRlcm5hdGl2ZWx5IGVtaXRzIGBvcGVuYCBhbmQgYGNsb3NlYCBldmVudHMgd2hlbiBpdHNcbiAgICAgKiB0aXRsZSBnZXRzIGNsaWNrZWQ6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBAQ29tcG9uZW50KHtcbiAgICAgKiAgIHNlbGVjdG9yOiAnemlwcHknLFxuICAgICAqICAgdGVtcGxhdGU6IGBcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJ6aXBweVwiPlxuICAgICAqICAgICA8ZGl2IChjbGljayk9XCJ0b2dnbGUoKVwiPlRvZ2dsZTwvZGl2PlxuICAgICAqICAgICA8ZGl2IFtoaWRkZW5dPVwiIXZpc2libGVcIj5cbiAgICAgKiAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICogICAgIDwvZGl2PlxuICAgICAqICA8L2Rpdj5gfSlcbiAgICAgKiBleHBvcnQgY2xhc3MgWmlwcHkge1xuICAgICAqICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgICogICBAT3V0cHV0KCkgb3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICogICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAqXG4gICAgICogICB0b2dnbGUoKSB7XG4gICAgICogICAgIHRoaXMudmlzaWJsZSA9ICF0aGlzLnZpc2libGU7XG4gICAgICogICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgKiAgICAgICB0aGlzLm9wZW4uZW1pdChudWxsKTtcbiAgICAgKiAgICAgfSBlbHNlIHtcbiAgICAgKiAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICogICAgIH1cbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBUaGUgZXZlbnRzIHBheWxvYWQgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBwYXJhbWV0ZXIgYCRldmVudGAgb24gdGhlIGNvbXBvbmVudHMgb3V0cHV0IGV2ZW50XG4gICAgICogaGFuZGxlcjpcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIDx6aXBweSAob3Blbik9XCJvbk9wZW4oJGV2ZW50KVwiIChjbG9zZSk9XCJvbkNsb3NlKCRldmVudClcIj48L3ppcHB5PlxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogVXNlcyBSeC5PYnNlcnZhYmxlIGJ1dCBwcm92aWRlcyBhbiBhZGFwdGVyIHRvIG1ha2UgaXQgd29yayBhcyBzcGVjaWZpZWQgaGVyZTpcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vamh1c2Fpbi9vYnNlcnZhYmxlLXNwZWNcbiAgICAgKlxuICAgICAqIE9uY2UgYSByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24gb2YgdGhlIHNwZWMgaXMgYXZhaWxhYmxlLCBzd2l0Y2ggdG8gaXQuXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBFdmVudEVtaXR0ZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkNShFdmVudEVtaXR0ZXIsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFtFdmVudEVtaXR0ZXJdLCB3aGljaCBkZXBlbmRpbmcgb24gW2lzQXN5bmNdLFxuICAgICAgICAgKiBkZWxpdmVycyBldmVudHMgc3luY2hyb25vdXNseSBvciBhc3luY2hyb25vdXNseS5cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcihpc0FzeW5jKSB7XG4gICAgICAgICAgICBpZiAoaXNBc3luYyA9PT0gdm9pZCAwKSB7IGlzQXN5bmMgPSBmYWxzZTsgfVxuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9faXNBc3luYyA9IGlzQXN5bmM7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKHZhbHVlKSB7IF9zdXBlci5wcm90b3R5cGUubmV4dC5jYWxsKHRoaXMsIHZhbHVlKTsgfTtcbiAgICAgICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoZ2VuZXJhdG9yT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgICAgIHZhciBzY2hlZHVsZXJGbjtcbiAgICAgICAgICAgIHZhciBlcnJvckZuID0gZnVuY3Rpb24gKGVycikgeyByZXR1cm4gbnVsbDsgfTtcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZUZuID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfTtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0b3JPck5leHQgJiYgdHlwZW9mIGdlbmVyYXRvck9yTmV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXJGbiA9IHRoaXMuX19pc0FzeW5jID8gZnVuY3Rpb24gKHZhbHVlIC8qKiBUT0RPICM5MTAwICovKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2VuZXJhdG9yT3JOZXh0Lm5leHQodmFsdWUpOyB9KTtcbiAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24gKHZhbHVlIC8qKiBUT0RPICM5MTAwICovKSB7IGdlbmVyYXRvck9yTmV4dC5uZXh0KHZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBpZiAoZ2VuZXJhdG9yT3JOZXh0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yRm4gPSB0aGlzLl9faXNBc3luYyA/IGZ1bmN0aW9uIChlcnIpIHsgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBnZW5lcmF0b3JPck5leHQuZXJyb3IoZXJyKTsgfSk7IH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycikgeyBnZW5lcmF0b3JPck5leHQuZXJyb3IoZXJyKTsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyYXRvck9yTmV4dC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUZuID0gdGhpcy5fX2lzQXN5bmMgPyBmdW5jdGlvbiAoKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2VuZXJhdG9yT3JOZXh0LmNvbXBsZXRlKCk7IH0pOyB9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHsgZ2VuZXJhdG9yT3JOZXh0LmNvbXBsZXRlKCk7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVyRm4gPSB0aGlzLl9faXNBc3luYyA/IGZ1bmN0aW9uICh2YWx1ZSAvKiogVE9ETyAjOTEwMCAqLykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdlbmVyYXRvck9yTmV4dCh2YWx1ZSk7IH0pO1xuICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbiAodmFsdWUgLyoqIFRPRE8gIzkxMDAgKi8pIHsgZ2VuZXJhdG9yT3JOZXh0KHZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JGbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9faXNBc3luYyA/IGZ1bmN0aW9uIChlcnIpIHsgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBlcnJvcihlcnIpOyB9KTsgfSA6IGZ1bmN0aW9uIChlcnIpIHsgZXJyb3IoZXJyKTsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlRm4gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2lzQXN5bmMgPyBmdW5jdGlvbiAoKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcGxldGUoKTsgfSk7IH0gOiBmdW5jdGlvbiAoKSB7IGNvbXBsZXRlKCk7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuc3Vic2NyaWJlLmNhbGwodGhpcywgc2NoZWR1bGVyRm4sIGVycm9yRm4sIGNvbXBsZXRlRm4pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRXZlbnRFbWl0dGVyO1xuICAgIH0ocnhqc19TdWJqZWN0LlN1YmplY3QpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDYgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCBhIEZvcm1Db250cm9sIGlzIHZhbGlkLCBpLmUuIHRoYXQgbm8gZXJyb3JzIGV4aXN0IGluIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YXIgVkFMSUQgPSAnVkFMSUQnO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgaW52YWxpZCwgaS5lLiB0aGF0IGFuIGVycm9yIGV4aXN0cyBpbiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICovXG4gICAgdmFyIElOVkFMSUQgPSAnSU5WQUxJRCc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBwZW5kaW5nLCBpLmUuIHRoYXQgYXN5bmMgdmFsaWRhdGlvbiBpcyBvY2N1cnJpbmcgYW5kXG4gICAgICogZXJyb3JzIGFyZSBub3QgeWV0IGF2YWlsYWJsZSBmb3IgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqL1xuICAgIHZhciBQRU5ESU5HID0gJ1BFTkRJTkcnO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgZGlzYWJsZWQsIGkuZS4gdGhhdCB0aGUgY29udHJvbCBpcyBleGVtcHQgZnJvbSBhbmNlc3RvclxuICAgICAqIGNhbGN1bGF0aW9ucyBvZiB2YWxpZGl0eSBvciB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YXIgRElTQUJMRUQgPSAnRElTQUJMRUQnO1xuICAgIGZ1bmN0aW9uIF9maW5kKGNvbnRyb2wsIHBhdGgsIGRlbGltaXRlcikge1xuICAgICAgICBpZiAoaXNCbGFuayhwYXRoKSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoIShwYXRoIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5zcGxpdChkZWxpbWl0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoIGluc3RhbmNlb2YgQXJyYXkgJiYgTGlzdFdyYXBwZXIuaXNFbXB0eShwYXRoKSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gcGF0aC5yZWR1Y2UoZnVuY3Rpb24gKHYsIG5hbWUpIHtcbiAgICAgICAgICAgIGlmICh2IGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzUHJlc2VudCh2LmNvbnRyb2xzW25hbWVdKSA/IHYuY29udHJvbHNbbmFtZV0gOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodiBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IG5hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzUHJlc2VudCh2LmF0KGluZGV4KSkgPyB2LmF0KGluZGV4KSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udHJvbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvT2JzZXJ2YWJsZShyKSB7XG4gICAgICAgIHJldHVybiBpc1Byb21pc2UocikgPyByeGpzX29ic2VydmFibGVfZnJvbVByb21pc2UuZnJvbVByb21pc2UocikgOiByO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb2VyY2VUb1ZhbGlkYXRvcih2YWxpZGF0b3IpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsaWRhdG9yKSA/IGNvbXBvc2VWYWxpZGF0b3JzKHZhbGlkYXRvcikgOiB2YWxpZGF0b3I7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IoYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXN5bmNWYWxpZGF0b3IpID8gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcikgOiBhc3luY1ZhbGlkYXRvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHdoYXRJdERvZXMgVGhpcyBpcyB0aGUgYmFzZSBjbGFzcyBmb3Ige0BsaW5rIEZvcm1Db250cm9sfSwge0BsaW5rIEZvcm1Hcm91cH0sIGFuZFxuICAgICAqIHtAbGluayBGb3JtQXJyYXl9LlxuICAgICAqXG4gICAgICogSXQgcHJvdmlkZXMgc29tZSBvZiB0aGUgc2hhcmVkIGJlaGF2aW9yIHRoYXQgYWxsIGNvbnRyb2xzIGFuZCBncm91cHMgb2YgY29udHJvbHMgaGF2ZSwgbGlrZVxuICAgICAqIHJ1bm5pbmcgdmFsaWRhdG9ycywgY2FsY3VsYXRpbmcgc3RhdHVzLCBhbmQgcmVzZXR0aW5nIHN0YXRlLiBJdCBhbHNvIGRlZmluZXMgdGhlIHByb3BlcnRpZXNcbiAgICAgKiB0aGF0IGFyZSBzaGFyZWQgYmV0d2VlbiBhbGwgc3ViLWNsYXNzZXMsIGxpa2UgYHZhbHVlYCwgYHZhbGlkYCwgYW5kIGBkaXJ0eWAuIEl0IHNob3VsZG4ndCBiZVxuICAgICAqIGluc3RhbnRpYXRlZCBkaXJlY3RseS5cbiAgICAgKlxuICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgQWJzdHJhY3RDb250cm9sID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gQWJzdHJhY3RDb250cm9sKHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgICAgICAgICAgdGhpcy5hc3luY1ZhbGlkYXRvciA9IGFzeW5jVmFsaWRhdG9yO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwic3RhdHVzXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sLiBUaGVyZSBhcmUgZm91ciBwb3NzaWJsZVxuICAgICAgICAgICAgICogdmFsaWRhdGlvbiBzdGF0dXNlczpcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAqICoqVkFMSUQqKjogIGNvbnRyb2wgaGFzIHBhc3NlZCBhbGwgdmFsaWRhdGlvbiBjaGVja3NcbiAgICAgICAgICAgICAqICogKipJTlZBTElEKio6IGNvbnRyb2wgaGFzIGZhaWxlZCBhdCBsZWFzdCBvbmUgdmFsaWRhdGlvbiBjaGVja1xuICAgICAgICAgICAgICogKiAqKlBFTkRJTkcqKjogY29udHJvbCBpcyBpbiB0aGUgbWlkc3Qgb2YgY29uZHVjdGluZyBhIHZhbGlkYXRpb24gY2hlY2tcbiAgICAgICAgICAgICAqICogKipESVNBQkxFRCoqOiBjb250cm9sIGlzIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogVGhlc2Ugc3RhdHVzZXMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSwgc28gYSBjb250cm9sIGNhbm5vdCBiZVxuICAgICAgICAgICAgICogYm90aCB2YWxpZCBBTkQgaW52YWxpZCBvciBpbnZhbGlkIEFORCBkaXNhYmxlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXM7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJ2YWxpZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBgdmFsaWRgIHdoZW4gaXRzIGBzdGF0dXMgPT09IFZBTElEYC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBJbiBvcmRlciB0byBoYXZlIHRoaXMgc3RhdHVzLCB0aGUgY29udHJvbCBtdXN0IGhhdmUgcGFzc2VkIGFsbCBpdHNcbiAgICAgICAgICAgICAqIHZhbGlkYXRpb24gY2hlY2tzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gVkFMSUQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJpbnZhbGlkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQSBjb250cm9sIGlzIGBpbnZhbGlkYCB3aGVuIGl0cyBgc3RhdHVzID09PSBJTlZBTElEYC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBJbiBvcmRlciB0byBoYXZlIHRoaXMgc3RhdHVzLCB0aGUgY29udHJvbCBtdXN0IGhhdmUgZmFpbGVkXG4gICAgICAgICAgICAgKiBhdCBsZWFzdCBvbmUgb2YgaXRzIHZhbGlkYXRpb24gY2hlY2tzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gSU5WQUxJRDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInBlbmRpbmdcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIGNvbnRyb2wgaXMgYHBlbmRpbmdgIHdoZW4gaXRzIGBzdGF0dXMgPT09IFBFTkRJTkdgLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEluIG9yZGVyIHRvIGhhdmUgdGhpcyBzdGF0dXMsIHRoZSBjb250cm9sIG11c3QgYmUgaW4gdGhlXG4gICAgICAgICAgICAgKiBtaWRkbGUgb2YgY29uZHVjdGluZyBhIHZhbGlkYXRpb24gY2hlY2suXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzID09IFBFTkRJTkc7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBgZGlzYWJsZWRgIHdoZW4gaXRzIGBzdGF0dXMgPT09IERJU0FCTEVEYC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBEaXNhYmxlZCBjb250cm9scyBhcmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gICAgICAgICAgICAgKiBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgdGhlaXIgYW5jZXN0b3JcbiAgICAgICAgICAgICAqIGNvbnRyb2xzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gRElTQUJMRUQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJlbmFibGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQSBjb250cm9sIGlzIGBlbmFibGVkYCBhcyBsb25nIGFzIGl0cyBgc3RhdHVzICE9PSBESVNBQkxFRGAuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogSW4gb3RoZXIgd29yZHMsIGl0IGhhcyBhIHN0YXR1cyBvZiBgVkFMSURgLCBgSU5WQUxJRGAsIG9yXG4gICAgICAgICAgICAgKiBgUEVORElOR2AuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzICE9PSBESVNBQkxFRDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcImVycm9yc1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgYW55IGVycm9ycyBnZW5lcmF0ZWQgYnkgZmFpbGluZyB2YWxpZGF0aW9uLiBJZiB0aGVyZVxuICAgICAgICAgICAgICogYXJlIG5vIGVycm9ycywgaXQgd2lsbCByZXR1cm4gbnVsbC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9lcnJvcnM7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJwcmlzdGluZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBgcHJpc3RpbmVgIGlmIHRoZSB1c2VyIGhhcyBub3QgeWV0IGNoYW5nZWRcbiAgICAgICAgICAgICAqIHRoZSB2YWx1ZSBpbiB0aGUgVUkuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogTm90ZSB0aGF0IHByb2dyYW1tYXRpYyBjaGFuZ2VzIHRvIGEgY29udHJvbCdzIHZhbHVlIHdpbGxcbiAgICAgICAgICAgICAqICpub3QqIG1hcmsgaXQgZGlydHkuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJpc3RpbmU7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJkaXJ0eVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBgZGlydHlgIGlmIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSB2YWx1ZVxuICAgICAgICAgICAgICogaW4gdGhlIFVJLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIE5vdGUgdGhhdCBwcm9ncmFtbWF0aWMgY2hhbmdlcyB0byBhIGNvbnRyb2wncyB2YWx1ZSB3aWxsXG4gICAgICAgICAgICAgKiAqbm90KiBtYXJrIGl0IGRpcnR5LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICF0aGlzLnByaXN0aW5lOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwidG91Y2hlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogQSBjb250cm9sIGlzIG1hcmtlZCBgdG91Y2hlZGAgb25jZSB0aGUgdXNlciBoYXMgdHJpZ2dlcmVkXG4gICAgICAgICAgICAqIGEgYGJsdXJgIGV2ZW50IG9uIGl0LlxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fdG91Y2hlZDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInVudG91Y2hlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgY29udHJvbCBpcyBgdW50b3VjaGVkYCBpZiB0aGUgdXNlciBoYXMgbm90IHlldCB0cmlnZ2VyZWRcbiAgICAgICAgICAgICAqIGEgYGJsdXJgIGV2ZW50IG9uIGl0LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICF0aGlzLl90b3VjaGVkOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwidmFsdWVDaGFuZ2VzXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW1pdHMgYW4gZXZlbnQgZXZlcnkgdGltZSB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgY2hhbmdlcywgaW5cbiAgICAgICAgICAgICAqIHRoZSBVSSBvciBwcm9ncmFtbWF0aWNhbGx5LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlQ2hhbmdlczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInN0YXR1c0NoYW5nZXNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbWl0cyBhbiBldmVudCBldmVyeSB0aW1lIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbFxuICAgICAgICAgICAgICogaXMgcmUtY2FsY3VsYXRlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXNDaGFuZ2VzOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHN5bmNocm9ub3VzIHZhbGlkYXRvcnMgdGhhdCBhcmUgYWN0aXZlIG9uIHRoaXMgY29udHJvbC4gIENhbGxpbmdcbiAgICAgICAgICogdGhpcyB3aWxsIG92ZXJ3cml0ZSBhbnkgZXhpc3Rpbmcgc3luYyB2YWxpZGF0b3JzLlxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5zZXRWYWxpZGF0b3JzID0gZnVuY3Rpb24gKG5ld1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBjb2VyY2VUb1ZhbGlkYXRvcihuZXdWYWxpZGF0b3IpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgYXN5bmMgdmFsaWRhdG9ycyB0aGF0IGFyZSBhY3RpdmUgb24gdGhpcyBjb250cm9sLiBDYWxsaW5nIHRoaXNcbiAgICAgICAgICogd2lsbCBvdmVyd3JpdGUgYW55IGV4aXN0aW5nIGFzeW5jIHZhbGlkYXRvcnMuXG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnNldEFzeW5jVmFsaWRhdG9ycyA9IGZ1bmN0aW9uIChuZXdWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuYXN5bmNWYWxpZGF0b3IgPSBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKG5ld1ZhbGlkYXRvcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbXB0aWVzIG91dCB0aGUgc3luYyB2YWxpZGF0b3IgbGlzdC5cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuY2xlYXJWYWxpZGF0b3JzID0gZnVuY3Rpb24gKCkgeyB0aGlzLnZhbGlkYXRvciA9IG51bGw7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbXB0aWVzIG91dCB0aGUgYXN5bmMgdmFsaWRhdG9yIGxpc3QuXG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmNsZWFyQXN5bmNWYWxpZGF0b3JzID0gZnVuY3Rpb24gKCkgeyB0aGlzLmFzeW5jVmFsaWRhdG9yID0gbnVsbDsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGB0b3VjaGVkYC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyB3aWxsIGFsc28gbWFyayBhbGwgZGlyZWN0IGFuY2VzdG9ycyBhcyBgdG91Y2hlZGAgdG8gbWFpbnRhaW5cbiAgICAgICAgICogdGhlIG1vZGVsLlxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5tYXJrQXNUb3VjaGVkID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgb25seVNlbGYgPSBub3JtYWxpemVCb29sKG9ubHlTZWxmKTtcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9wYXJlbnQpICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5tYXJrQXNUb3VjaGVkKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHVudG91Y2hlZGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBjb250cm9sIGhhcyBhbnkgY2hpbGRyZW4sIGl0IHdpbGwgYWxzbyBtYXJrIGFsbCBjaGlsZHJlbiBhcyBgdW50b3VjaGVkYFxuICAgICAgICAgKiB0byBtYWludGFpbiB0aGUgbW9kZWwsIGFuZCByZS1jYWxjdWxhdGUgdGhlIGB0b3VjaGVkYCBzdGF0dXMgb2YgYWxsIHBhcmVudFxuICAgICAgICAgKiBjb250cm9scy5cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUubWFya0FzVW50b3VjaGVkID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7IGNvbnRyb2wubWFya0FzVW50b3VjaGVkKHsgb25seVNlbGY6IHRydWUgfSk7IH0pO1xuICAgICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9wYXJlbnQpICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlVG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGBkaXJ0eWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgd2lsbCBhbHNvIG1hcmsgYWxsIGRpcmVjdCBhbmNlc3RvcnMgYXMgYGRpcnR5YCB0byBtYWludGFpblxuICAgICAgICAgKiB0aGUgbW9kZWwuXG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLm1hcmtBc0RpcnR5ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgb25seVNlbGYgPSBub3JtYWxpemVCb29sKG9ubHlTZWxmKTtcbiAgICAgICAgICAgIHRoaXMuX3ByaXN0aW5lID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3BhcmVudCkgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm1hcmtBc0RpcnR5KHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHByaXN0aW5lYC5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGFueSBjaGlsZHJlbiwgaXQgd2lsbCBhbHNvIG1hcmsgYWxsIGNoaWxkcmVuIGFzIGBwcmlzdGluZWBcbiAgICAgICAgICogdG8gbWFpbnRhaW4gdGhlIG1vZGVsLCBhbmQgcmUtY2FsY3VsYXRlIHRoZSBgcHJpc3RpbmVgIHN0YXR1cyBvZiBhbGwgcGFyZW50XG4gICAgICAgICAqIGNvbnRyb2xzLlxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5tYXJrQXNQcmlzdGluZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX3ByaXN0aW5lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCkgeyBjb250cm9sLm1hcmtBc1ByaXN0aW5lKHsgb25seVNlbGY6IHRydWUgfSk7IH0pO1xuICAgICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9wYXJlbnQpICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlUHJpc3RpbmUoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgcGVuZGluZ2AuXG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLm1hcmtBc1BlbmRpbmcgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICBvbmx5U2VsZiA9IG5vcm1hbGl6ZUJvb2wob25seVNlbGYpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gUEVORElORztcbiAgICAgICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5fcGFyZW50KSAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQubWFya0FzUGVuZGluZyh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc2FibGVzIHRoZSBjb250cm9sLiBUaGlzIG1lYW5zIHRoZSBjb250cm9sIHdpbGwgYmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gICAgICAgICAqIGV4Y2x1ZGVkIGZyb20gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiBhbnkgcGFyZW50LiBJdHMgc3RhdHVzIGlzIGBESVNBQkxFRGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBjb250cm9sIGhhcyBjaGlsZHJlbiwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgZGlzYWJsZWQgdG8gbWFpbnRhaW4gdGhlIG1vZGVsLlxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgZW1pdEV2ZW50ID0gaXNQcmVzZW50KGVtaXRFdmVudCkgPyBlbWl0RXZlbnQgOiB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gRElTQUJMRUQ7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcnMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7IGNvbnRyb2wuZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pOyB9KTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMuZW1pdCh0aGlzLl9zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQW5jZXN0b3JzKG9ubHlTZWxmKTtcbiAgICAgICAgICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlRm4pIHsgcmV0dXJuIGNoYW5nZUZuKHRydWUpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZXMgdGhlIGNvbnRyb2wuIFRoaXMgbWVhbnMgdGhlIGNvbnRyb2wgd2lsbCBiZSBpbmNsdWRlZCBpbiB2YWxpZGF0aW9uIGNoZWNrcyBhbmRcbiAgICAgICAgICogdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiBpdHMgcGFyZW50LiBJdHMgc3RhdHVzIGlzIHJlLWNhbGN1bGF0ZWQgYmFzZWQgb24gaXRzIHZhbHVlIGFuZFxuICAgICAgICAgKiBpdHMgdmFsaWRhdG9ycy5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGNoaWxkcmVuLCBhbGwgY2hpbGRyZW4gd2lsbCBiZSBlbmFibGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBWQUxJRDtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCkgeyBjb250cm9sLmVuYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pOyB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFuY2VzdG9ycyhvbmx5U2VsZik7XG4gICAgICAgICAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZUZuKSB7IHJldHVybiBjaGFuZ2VGbihmYWxzZSk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVBbmNlc3RvcnMgPSBmdW5jdGlvbiAob25seVNlbGYpIHtcbiAgICAgICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5fcGFyZW50KSAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlUHJpc3RpbmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVRvdWNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5zZXRQYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50KSB7IHRoaXMuX3BhcmVudCA9IHBhcmVudDsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlLWNhbGN1bGF0ZXMgdGhlIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbC5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgZGVmYXVsdCwgaXQgd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IG9mIGl0cyBhbmNlc3RvcnMuXG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICBvbmx5U2VsZiA9IG5vcm1hbGl6ZUJvb2wob25seVNlbGYpO1xuICAgICAgICAgICAgZW1pdEV2ZW50ID0gaXNQcmVzZW50KGVtaXRFdmVudCkgPyBlbWl0RXZlbnQgOiB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fc2V0SW5pdGlhbFN0YXR1cygpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLl9ydW5WYWxpZGF0b3IoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhdHVzID09PSBWQUxJRCB8fCB0aGlzLl9zdGF0dXMgPT09IFBFTkRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVuQXN5bmNWYWxpZGF0b3IoZW1pdEV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMuZW1pdCh0aGlzLl9zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9wYXJlbnQpICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVUcmVlVmFsaWRpdHkgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBlbWl0RXZlbnQgPSAoX2EgPT09IHZvaWQgMCA/IHsgZW1pdEV2ZW50OiB0cnVlIH0gOiBfYSkuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjdHJsKSB7IHJldHVybiBjdHJsLl91cGRhdGVUcmVlVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTsgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3NldEluaXRpYWxTdGF0dXMgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX3N0YXR1cyA9IHRoaXMuX2FsbENvbnRyb2xzRGlzYWJsZWQoKSA/IERJU0FCTEVEIDogVkFMSUQ7IH07XG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3J1blZhbGlkYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1ByZXNlbnQodGhpcy52YWxpZGF0b3IpID8gdGhpcy52YWxpZGF0b3IodGhpcykgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9ydW5Bc3luY1ZhbGlkYXRvciA9IGZ1bmN0aW9uIChlbWl0RXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMuYXN5bmNWYWxpZGF0b3IpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gUEVORElORztcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxFeGlzdGluZ1N1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgIHZhciBvYnMgPSB0b09ic2VydmFibGUodGhpcy5hc3luY1ZhbGlkYXRvcih0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uID0gb2JzLnN1YnNjcmliZSh7IG5leHQ6IGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIF90aGlzLnNldEVycm9ycyhyZXMsIHsgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7IH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2NhbmNlbEV4aXN0aW5nU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGVycm9ycyBvbiBhIGZvcm0gY29udHJvbC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBpcyB1c2VkIHdoZW4gdmFsaWRhdGlvbnMgYXJlIHJ1biBtYW51YWxseSBieSB0aGUgdXNlciwgcmF0aGVyIHRoYW4gYXV0b21hdGljYWxseS5cbiAgICAgICAgICpcbiAgICAgICAgICogQ2FsbGluZyBgc2V0RXJyb3JzYCB3aWxsIGFsc28gdXBkYXRlIHRoZSB2YWxpZGl0eSBvZiB0aGUgcGFyZW50IGNvbnRyb2wuXG4gICAgICAgICAqXG4gICAgICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiBjb25zdCBsb2dpbiA9IG5ldyBGb3JtQ29udHJvbChcInNvbWVMb2dpblwiKTtcbiAgICAgICAgICogbG9naW4uc2V0RXJyb3JzKHtcbiAgICAgICAgICogICBcIm5vdFVuaXF1ZVwiOiB0cnVlXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwoZmFsc2UpO1xuICAgICAgICAgKiBleHBlY3QobG9naW4uZXJyb3JzKS50b0VxdWFsKHtcIm5vdFVuaXF1ZVwiOiB0cnVlfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGxvZ2luLnNldFZhbHVlKFwic29tZU90aGVyTG9naW5cIik7XG4gICAgICAgICAqXG4gICAgICAgICAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbCh0cnVlKTtcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnNldEVycm9ycyA9IGZ1bmN0aW9uIChlcnJvcnMsIF9hKSB7XG4gICAgICAgICAgICB2YXIgZW1pdEV2ZW50ID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5lbWl0RXZlbnQ7XG4gICAgICAgICAgICBlbWl0RXZlbnQgPSBpc1ByZXNlbnQoZW1pdEV2ZW50KSA/IGVtaXRFdmVudCA6IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVDb250cm9sc0Vycm9ycyhlbWl0RXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmV0cmlldmVzIGEgY2hpbGQgY29udHJvbCBnaXZlbiB0aGUgY29udHJvbCdzIG5hbWUgb3IgcGF0aC5cbiAgICAgICAgICpcbiAgICAgICAgICogUGF0aHMgY2FuIGJlIHBhc3NlZCBpbiBhcyBhbiBhcnJheSBvciBhIHN0cmluZyBkZWxpbWl0ZWQgYnkgYSBkb3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIGdldCBhIGNvbnRyb2wgbmVzdGVkIHdpdGhpbiBhIGBwZXJzb25gIHN1Yi1ncm91cDpcbiAgICAgICAgICpcbiAgICAgICAgICogKiBgdGhpcy5mb3JtLmdldCgncGVyc29uLm5hbWUnKTtgXG4gICAgICAgICAqXG4gICAgICAgICAqIC1PUi1cbiAgICAgICAgICpcbiAgICAgICAgICogKiBgdGhpcy5mb3JtLmdldChbJ3BlcnNvbicsICduYW1lJ10pO2BcbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIF9maW5kKHRoaXMsIHBhdGgsICcuJyk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbnRyb2wgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBoYXMgdGhlIGVycm9yIHNwZWNpZmllZC4gT3RoZXJ3aXNlXG4gICAgICAgICAqIHJldHVybnMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIG5vIHBhdGggaXMgZ2l2ZW4sIGl0IGNoZWNrcyBmb3IgdGhlIGVycm9yIG9uIHRoZSBwcmVzZW50IGNvbnRyb2wuXG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmdldEVycm9yID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgcGF0aCkge1xuICAgICAgICAgICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIGNvbnRyb2wgPSBpc1ByZXNlbnQocGF0aCkgJiYgIUxpc3RXcmFwcGVyLmlzRW1wdHkocGF0aCkgPyB0aGlzLmdldChwYXRoKSA6IHRoaXM7XG4gICAgICAgICAgICBpZiAoaXNQcmVzZW50KGNvbnRyb2wpICYmIGlzUHJlc2VudChjb250cm9sLl9lcnJvcnMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2wuX2Vycm9yc1tlcnJvckNvZGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbnRyb2wgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBoYXMgdGhlIGVycm9yIHNwZWNpZmllZC4gT3RoZXJ3aXNlXG4gICAgICAgICAqIHJldHVybnMgZmFsc2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIG5vIHBhdGggaXMgZ2l2ZW4sIGl0IGNoZWNrcyBmb3IgdGhlIGVycm9yIG9uIHRoZSBwcmVzZW50IGNvbnRyb2wuXG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmhhc0Vycm9yID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgcGF0aCkge1xuICAgICAgICAgICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gbnVsbDsgfVxuICAgICAgICAgICAgcmV0dXJuIGlzUHJlc2VudCh0aGlzLmdldEVycm9yKGVycm9yQ29kZSwgcGF0aCkpO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJyb290XCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0cmlldmVzIHRoZSB0b3AtbGV2ZWwgYW5jZXN0b3Igb2YgdGhpcyBjb250cm9sLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGlzUHJlc2VudCh4Ll9wYXJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSB4Ll9wYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdXBkYXRlQ29udHJvbHNFcnJvcnMgPSBmdW5jdGlvbiAoZW1pdEV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcbiAgICAgICAgICAgIGlmIChlbWl0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzLmVtaXQodGhpcy5fc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5fcGFyZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlQ29udHJvbHNFcnJvcnMoZW1pdEV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9pbml0T2JzZXJ2YWJsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZUNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB9O1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9jYWxjdWxhdGVTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYWxsQ29udHJvbHNEaXNhYmxlZCgpKVxuICAgICAgICAgICAgICAgIHJldHVybiBESVNBQkxFRDtcbiAgICAgICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5fZXJyb3JzKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbnlDb250cm9sc0hhdmVTdGF0dXMoUEVORElORykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBFTkRJTkc7XG4gICAgICAgICAgICBpZiAodGhpcy5fYW55Q29udHJvbHNIYXZlU3RhdHVzKElOVkFMSUQpKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgcmV0dXJuIFZBTElEO1xuICAgICAgICB9O1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbnlDb250cm9scyhmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC5zdGF0dXMgPT0gc3RhdHVzOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9hbnlDb250cm9sc0RpcnR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FueUNvbnRyb2xzKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBjb250cm9sLmRpcnR5OyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9hbnlDb250cm9sc1RvdWNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW55Q29udHJvbHMoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wudG91Y2hlZDsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdXBkYXRlUHJpc3RpbmUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB0aGlzLl9wcmlzdGluZSA9ICF0aGlzLl9hbnlDb250cm9sc0RpcnR5KCk7XG4gICAgICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3BhcmVudCkgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVQcmlzdGluZSh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVUb3VjaGVkID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hlZCA9IHRoaXMuX2FueUNvbnRyb2xzVG91Y2hlZCgpO1xuICAgICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9wYXJlbnQpICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlVG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9pc0JveGVkVmFsdWUgPSBmdW5jdGlvbiAoZm9ybVN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNTdHJpbmdNYXAoZm9ybVN0YXRlKSAmJiBPYmplY3Qua2V5cyhmb3JtU3RhdGUpLmxlbmd0aCA9PT0gMiAmJiAndmFsdWUnIGluIGZvcm1TdGF0ZSAmJlxuICAgICAgICAgICAgICAgICdkaXNhYmxlZCcgaW4gZm9ybVN0YXRlO1xuICAgICAgICB9O1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICByZXR1cm4gQWJzdHJhY3RDb250cm9sO1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogQHdoYXRJdERvZXMgVHJhY2tzIHRoZSB2YWx1ZSBhbmQgdmFsaWRhdGlvbiBzdGF0dXMgb2YgYW4gaW5kaXZpZHVhbCBmb3JtIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiBJdCBpcyBvbmUgb2YgdGhlIHRocmVlIGZ1bmRhbWVudGFsIGJ1aWxkaW5nIGJsb2NrcyBvZiBBbmd1bGFyIGZvcm1zLCBhbG9uZyB3aXRoXG4gICAgICoge0BsaW5rIEZvcm1Hcm91cH0gYW5kIHtAbGluayBGb3JtQXJyYXl9LlxuICAgICAqXG4gICAgICogQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBXaGVuIGluc3RhbnRpYXRpbmcgYSB7QGxpbmsgRm9ybUNvbnRyb2x9LCB5b3UgY2FuIHBhc3MgaW4gYW4gaW5pdGlhbCB2YWx1ZSBhcyB0aGVcbiAgICAgKiBmaXJzdCBhcmd1bWVudC4gRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY29uc3QgY3RybCA9IG5ldyBGb3JtQ29udHJvbCgnc29tZSB2YWx1ZScpO1xuICAgICAqIGNvbnNvbGUubG9nKGN0cmwudmFsdWUpOyAgICAgLy8gJ3NvbWUgdmFsdWUnXG4gICAgICpgYGBcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gYWxzbyBpbml0aWFsaXplIHRoZSBjb250cm9sIHdpdGggYSBmb3JtIHN0YXRlIG9iamVjdCBvbiBpbnN0YW50aWF0aW9uLFxuICAgICAqIHdoaWNoIGluY2x1ZGVzIGJvdGggdGhlIHZhbHVlIGFuZCB3aGV0aGVyIG9yIG5vdCB0aGUgY29udHJvbCBpcyBkaXNhYmxlZC5cbiAgICAgKiBZb3UgY2FuJ3QgdXNlIHRoZSB2YWx1ZSBrZXkgd2l0aG91dCB0aGUgZGlzYWJsZWQga2V5OyBib3RoIGFyZSByZXF1aXJlZFxuICAgICAqIHRvIHVzZSB0aGlzIHdheSBvZiBpbml0aWFsaXphdGlvbi5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY29uc3QgY3RybCA9IG5ldyBGb3JtQ29udHJvbCh7dmFsdWU6ICduL2EnLCBkaXNhYmxlZDogdHJ1ZX0pO1xuICAgICAqIGNvbnNvbGUubG9nKGN0cmwudmFsdWUpOyAgICAgLy8gJ24vYSdcbiAgICAgKiBjb25zb2xlLmxvZyhjdHJsLnN0YXR1cyk7ICAgLy8gJ0RJU0FCTEVEJ1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogVG8gaW5jbHVkZSBhIHN5bmMgdmFsaWRhdG9yIChvciBhbiBhcnJheSBvZiBzeW5jIHZhbGlkYXRvcnMpIHdpdGggdGhlIGNvbnRyb2wsXG4gICAgICogcGFzcyBpdCBpbiBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBBc3luYyB2YWxpZGF0b3JzIGFyZSBhbHNvIHN1cHBvcnRlZCwgYnV0XG4gICAgICogaGF2ZSB0byBiZSBwYXNzZWQgaW4gc2VwYXJhdGVseSBhcyB0aGUgdGhpcmQgYXJnLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25zdCBjdHJsID0gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgKiBjb25zb2xlLmxvZyhjdHJsLnZhbHVlKTsgICAgIC8vICcnXG4gICAgICogY29uc29sZS5sb2coY3RybC5zdGF0dXMpOyAgIC8vICdJTlZBTElEJ1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogU2VlIGl0cyBzdXBlcmNsYXNzLCB7QGxpbmsgQWJzdHJhY3RDb250cm9sfSwgZm9yIG1vcmUgcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cbiAgICAgKlxuICAgICAqICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1Db250cm9sID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDYoRm9ybUNvbnRyb2wsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEZvcm1Db250cm9sKGZvcm1TdGF0ZSwgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKGZvcm1TdGF0ZSA9PT0gdm9pZCAwKSB7IGZvcm1TdGF0ZSA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGNvZXJjZVRvVmFsaWRhdG9yKHZhbGlkYXRvciksIGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IoYXN5bmNWYWxpZGF0b3IpKTtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlID0gW107XG4gICAgICAgICAgICB0aGlzLl9hcHBseUZvcm1TdGF0ZShmb3JtU3RhdGUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgICAgICB0aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSB2YWx1ZSBvZiB0aGUgZm9ybSBjb250cm9sIHRvIGB2YWx1ZWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIGBvbmx5U2VsZmAgaXMgYHRydWVgLCB0aGlzIGNoYW5nZSB3aWxsIG9ubHkgYWZmZWN0IHRoZSB2YWxpZGF0aW9uIG9mIHRoaXMgYEZvcm1Db250cm9sYFxuICAgICAgICAgKiBhbmQgbm90IGl0cyBwYXJlbnQgY29tcG9uZW50LiBUaGlzIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBgZW1pdEV2ZW50YCBpcyBgdHJ1ZWAsIHRoaXNcbiAgICAgICAgICogY2hhbmdlIHdpbGwgY2F1c2UgYSBgdmFsdWVDaGFuZ2VzYCBldmVudCBvbiB0aGUgYEZvcm1Db250cm9sYCB0byBiZSBlbWl0dGVkLiBUaGlzIGRlZmF1bHRzXG4gICAgICAgICAqIHRvIHRydWUgKGFzIGl0IGZhbGxzIHRocm91Z2ggdG8gYHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHlgKS5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgYGVtaXRNb2RlbFRvVmlld0NoYW5nZWAgaXMgYHRydWVgLCB0aGUgdmlldyB3aWxsIGJlIG5vdGlmaWVkIGFib3V0IHRoZSBuZXcgdmFsdWVcbiAgICAgICAgICogdmlhIGFuIGBvbkNoYW5nZWAgZXZlbnQuIFRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3IgaWYgYGVtaXRNb2RlbFRvVmlld0NoYW5nZWAgaXMgbm90XG4gICAgICAgICAqIHNwZWNpZmllZC5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgYGVtaXRWaWV3VG9Nb2RlbENoYW5nZWAgaXMgYHRydWVgLCBhbiBuZ01vZGVsQ2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgdG8gdXBkYXRlIHRoZVxuICAgICAgICAgKiBtb2RlbC4gIFRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3IgaWYgYGVtaXRWaWV3VG9Nb2RlbENoYW5nZWAgaXMgbm90IHNwZWNpZmllZC5cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgX2EpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50LCBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UgPSBfYi5lbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsIGVtaXRWaWV3VG9Nb2RlbENoYW5nZSA9IF9iLmVtaXRWaWV3VG9Nb2RlbENoYW5nZTtcbiAgICAgICAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZSA9IGlzUHJlc2VudChlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UpID8gZW1pdE1vZGVsVG9WaWV3Q2hhbmdlIDogdHJ1ZTtcbiAgICAgICAgICAgIGVtaXRWaWV3VG9Nb2RlbENoYW5nZSA9IGlzUHJlc2VudChlbWl0Vmlld1RvTW9kZWxDaGFuZ2UpID8gZW1pdFZpZXdUb01vZGVsQ2hhbmdlIDogdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fb25DaGFuZ2UubGVuZ3RoICYmIGVtaXRNb2RlbFRvVmlld0NoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZUZuKSB7IHJldHVybiBjaGFuZ2VGbihfdGhpcy5fdmFsdWUsIGVtaXRWaWV3VG9Nb2RlbENoYW5nZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhdGNoZXMgdGhlIHZhbHVlIG9mIGEgY29udHJvbC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBmdW5jdGlvbiBpcyBmdW5jdGlvbmFsbHkgdGhlIHNhbWUgYXMge0BsaW5rIEZvcm1Db250cm9sLnNldFZhbHVlfSBhdCB0aGlzIGxldmVsLlxuICAgICAgICAgKiBJdCBleGlzdHMgZm9yIHN5bW1ldHJ5IHdpdGgge0BsaW5rIEZvcm1Hcm91cC5wYXRjaFZhbHVlfSBvbiBgRm9ybUdyb3Vwc2AgYW5kIGBGb3JtQXJyYXlzYCxcbiAgICAgICAgICogd2hlcmUgaXQgZG9lcyBiZWhhdmUgZGlmZmVyZW50bHkuXG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUucGF0Y2hWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXRzIHRoZSBmb3JtIGNvbnRyb2wuIFRoaXMgbWVhbnMgYnkgZGVmYXVsdDpcbiAgICAgICAgICpcbiAgICAgICAgICogKiBpdCBpcyBtYXJrZWQgYXMgYHByaXN0aW5lYFxuICAgICAgICAgKiAqIGl0IGlzIG1hcmtlZCBhcyBgdW50b3VjaGVkYFxuICAgICAgICAgKiAqIHZhbHVlIGlzIHNldCB0byBudWxsXG4gICAgICAgICAqXG4gICAgICAgICAqIFlvdSBjYW4gYWxzbyByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyB0aHJvdWdoIGEgc3RhbmRhbG9uZVxuICAgICAgICAgKiB2YWx1ZSBvciBhIGZvcm0gc3RhdGUgb2JqZWN0IHRoYXQgY29udGFpbnMgYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkIHN0YXRlXG4gICAgICAgICAqICh0aGVzZSBhcmUgdGhlIG9ubHkgdHdvIHByb3BlcnRpZXMgdGhhdCBjYW5ub3QgYmUgY2FsY3VsYXRlZCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OlxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGB0c1xuICAgICAgICAgKiB0aGlzLmNvbnRyb2wucmVzZXQoJ05hbmN5Jyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC52YWx1ZSk7ICAvLyAnTmFuY3knXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKlxuICAgICAgICAgKiBPUlxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICogdGhpcy5jb250cm9sLnJlc2V0KHt2YWx1ZTogJ05hbmN5JywgZGlzYWJsZWQ6IHRydWV9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2codGhpcy5jb250cm9sLnZhbHVlKTsgIC8vICdOYW5jeSdcbiAgICAgICAgICogY29uc29sZS5sb2codGhpcy5jb250cm9sLnN0YXR1cyk7ICAvLyAnRElTQUJMRUQnXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKGZvcm1TdGF0ZSwgX2EpIHtcbiAgICAgICAgICAgIGlmIChmb3JtU3RhdGUgPT09IHZvaWQgMCkgeyBmb3JtU3RhdGUgPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgdGhpcy5fYXBwbHlGb3JtU3RhdGUoZm9ybVN0YXRlKTtcbiAgICAgICAgICAgIHRoaXMubWFya0FzUHJpc3RpbmUoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB0aGlzLm1hcmtBc1VudG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5fdmFsdWUsIHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX2FueUNvbnRyb2xzID0gZnVuY3Rpb24gKGNvbmRpdGlvbikgeyByZXR1cm4gZmFsc2U7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5fYWxsQ29udHJvbHNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZvciBjaGFuZ2UgZXZlbnRzLlxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25DaGFuZ2UucHVzaChmbik7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5fY2xlYXJDaGFuZ2VGbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3IgZGlzYWJsZWQgZXZlbnRzLlxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLnJlZ2lzdGVyT25EaXNhYmxlZENoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZS5wdXNoKGZuKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLl9mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiAoY2IpIHsgfTtcbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLl9hcHBseUZvcm1TdGF0ZSA9IGZ1bmN0aW9uIChmb3JtU3RhdGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0JveGVkVmFsdWUoZm9ybVN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybVN0YXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5kaXNhYmxlZCA/IHRoaXMuZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlIH0pIDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGUoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybVN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUNvbnRyb2w7XG4gICAgfShBYnN0cmFjdENvbnRyb2wpKTtcbiAgICAvKipcbiAgICAgKiBAd2hhdEl0RG9lcyBUcmFja3MgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBzdGF0ZSBvZiBhIGdyb3VwIG9mIHtAbGluayBGb3JtQ29udHJvbH1cbiAgICAgKiBpbnN0YW5jZXMuXG4gICAgICpcbiAgICAgKiBBIGBGb3JtR3JvdXBgIGFnZ3JlZ2F0ZXMgdGhlIHZhbHVlcyBvZiBlYWNoIGNoaWxkIHtAbGluayBGb3JtQ29udHJvbH0gaW50byBvbmUgb2JqZWN0LFxuICAgICAqIHdpdGggZWFjaCBjb250cm9sIG5hbWUgYXMgdGhlIGtleS4gIEl0IGNhbGN1bGF0ZXMgaXRzIHN0YXR1cyBieSByZWR1Y2luZyB0aGUgc3RhdHVzZXNcbiAgICAgKiBvZiBpdHMgY2hpbGRyZW4uIEZvciBleGFtcGxlLCBpZiBvbmUgb2YgdGhlIGNvbnRyb2xzIGluIGEgZ3JvdXAgaXMgaW52YWxpZCwgdGhlIGVudGlyZVxuICAgICAqIGdyb3VwIGJlY29tZXMgaW52YWxpZC5cbiAgICAgKlxuICAgICAqIGBGb3JtR3JvdXBgIGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIHVzZWQgdG8gZGVmaW5lIGZvcm1zIGluIEFuZ3VsYXIsXG4gICAgICogYWxvbmcgd2l0aCB7QGxpbmsgRm9ybUNvbnRyb2x9IGFuZCB7QGxpbmsgRm9ybUFycmF5fS5cbiAgICAgKlxuICAgICAqIEBob3dUb1VzZVxuICAgICAqXG4gICAgICogV2hlbiBpbnN0YW50aWF0aW5nIGEge0BsaW5rIEZvcm1Hcm91cH0sIHBhc3MgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkIGNvbnRyb2xzIGFzIHRoZSBmaXJzdFxuICAgICAqIGFyZ3VtZW50LiBUaGUga2V5IGZvciBlYWNoIGNoaWxkIHdpbGwgYmUgdGhlIG5hbWUgdW5kZXIgd2hpY2ggaXQgaXMgcmVnaXN0ZXJlZC5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICogICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCdOYW5jeScsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAgICAgKiAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnRHJldycpLFxuICAgICAqIH0pO1xuICAgICAqXG4gICAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiAnTmFuY3knLCBsYXN0OyAnRHJldyd9XG4gICAgICogY29uc29sZS5sb2coZm9ybS5zdGF0dXMpOyAgLy8gJ1ZBTElEJ1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogWW91IGNhbiBhbHNvIGluY2x1ZGUgZ3JvdXAtbGV2ZWwgdmFsaWRhdG9ycyBhcyB0aGUgc2Vjb25kIGFyZywgb3IgZ3JvdXAtbGV2ZWwgYXN5bmNcbiAgICAgKiB2YWxpZGF0b3JzIGFzIHRoZSB0aGlyZCBhcmcuIFRoZXNlIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3Ugd2FudCB0byBwZXJmb3JtIHZhbGlkYXRpb25cbiAgICAgKiB0aGF0IGNvbnNpZGVycyB0aGUgdmFsdWUgb2YgbW9yZSB0aGFuIG9uZSBjaGlsZCBjb250cm9sLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgKiAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAgICAgKiAgIHBhc3N3b3JkQ29uZmlybTogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXG4gICAgICogfSwgcGFzc3dvcmRNYXRjaFZhbGlkYXRvcik7XG4gICAgICpcbiAgICAgKlxuICAgICAqIGZ1bmN0aW9uIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IoZzogRm9ybUdyb3VwKSB7XG4gICAgICogICAgcmV0dXJuIGcuZ2V0KCdwYXNzd29yZCcpLnZhbHVlID09PSBnLmdldCgncGFzc3dvcmRDb25maXJtJykudmFsdWVcbiAgICAgKiAgICAgICA/IG51bGwgOiB7J21pc21hdGNoJzogdHJ1ZX07XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRm9ybUdyb3VwID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDYoRm9ybUdyb3VwLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBGb3JtR3JvdXAoY29udHJvbHMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scyA9IGNvbnRyb2xzO1xuICAgICAgICAgICAgdGhpcy5faW5pdE9ic2VydmFibGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9zZXRVcENvbnRyb2xzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXJzIGEgY29udHJvbCB3aXRoIHRoZSBncm91cCdzIGxpc3Qgb2YgY29udHJvbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGRvZXMgbm90IHVwZGF0ZSB2YWx1ZSBvciB2YWxpZGl0eSBvZiB0aGUgY29udHJvbCwgc28gZm9yXG4gICAgICAgICAqIG1vc3QgY2FzZXMgeW91J2xsIHdhbnQgdG8gdXNlIHtAbGluayBGb3JtR3JvdXAuYWRkQ29udHJvbH0gaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUucmVnaXN0ZXJDb250cm9sID0gZnVuY3Rpb24gKG5hbWUsIGNvbnRyb2wpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzW25hbWVdKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzW25hbWVdO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sc1tuYW1lXSA9IGNvbnRyb2w7XG4gICAgICAgICAgICBjb250cm9sLnNldFBhcmVudCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnRyb2wuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSk7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhIGNvbnRyb2wgdG8gdGhpcyBncm91cC5cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuYWRkQ29udHJvbCA9IGZ1bmN0aW9uIChuYW1lLCBjb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYSBjb250cm9sIGZyb20gdGhpcyBncm91cC5cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUucmVtb3ZlQ29udHJvbCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzW25hbWVdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgZGVsZXRlICh0aGlzLmNvbnRyb2xzW25hbWVdKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXBsYWNlIGFuIGV4aXN0aW5nIGNvbnRyb2wuXG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLnNldENvbnRyb2wgPSBmdW5jdGlvbiAobmFtZSwgY29udHJvbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbbmFtZV0pXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1tuYW1lXS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIGRlbGV0ZSAodGhpcy5jb250cm9sc1tuYW1lXSk7XG4gICAgICAgICAgICBpZiAoY29udHJvbClcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayB3aGV0aGVyIHRoZXJlIGlzIGFuIGVuYWJsZWQgY29udHJvbCB3aXRoIHRoZSBnaXZlbiBuYW1lIGluIHRoZSBncm91cC5cbiAgICAgICAgICpcbiAgICAgICAgICogSXQgd2lsbCByZXR1cm4gZmFsc2UgZm9yIGRpc2FibGVkIGNvbnRyb2xzLiBJZiB5b3UnZCBsaWtlIHRvIGNoZWNrIGZvclxuICAgICAgICAgKiBleGlzdGVuY2UgaW4gdGhlIGdyb3VwIG9ubHksIHVzZSB7QGxpbmsgQWJzdHJhY3RDb250cm9sLmdldH0gaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoY29udHJvbE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmhhc093blByb3BlcnR5KGNvbnRyb2xOYW1lKSAmJiB0aGlzLmNvbnRyb2xzW2NvbnRyb2xOYW1lXS5lbmFibGVkO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFNldHMgdGhlIHZhbHVlIG9mIHRoZSB7QGxpbmsgRm9ybUdyb3VwfS4gSXQgYWNjZXB0cyBhbiBvYmplY3QgdGhhdCBtYXRjaGVzXG4gICAgICAgICAqICB0aGUgc3RydWN0dXJlIG9mIHRoZSBncm91cCwgd2l0aCBjb250cm9sIG5hbWVzIGFzIGtleXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHBlcmZvcm1zIHN0cmljdCBjaGVja3MsIHNvIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgeW91IHRyeVxuICAgICAgICAgKiB0byBzZXQgdGhlIHZhbHVlIG9mIGEgY29udHJvbCB0aGF0IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgeW91IGV4Y2x1ZGUgdGhlXG4gICAgICAgICAqIHZhbHVlIG9mIGEgY29udHJvbC5cbiAgICAgICAgICpcbiAgICAgICAgICogICMjIyBFeGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICBgYGBcbiAgICAgICAgICogIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICogICAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgICAgICogICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICAgICAqICB9KTtcbiAgICAgICAgICogIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogbnVsbCwgbGFzdDogbnVsbH1cbiAgICAgICAgICpcbiAgICAgICAgICogIGZvcm0uc2V0VmFsdWUoe2ZpcnN0OiAnTmFuY3knLCBsYXN0OiAnRHJldyd9KTtcbiAgICAgICAgICogIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDogJ0RyZXcnfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgYGBgXG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWUpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nKG5hbWUpO1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2xzW25hbWVdLnNldFZhbHVlKHZhbHVlW25hbWVdLCB7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUGF0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIHtAbGluayBGb3JtR3JvdXB9LiBJdCBhY2NlcHRzIGFuIG9iamVjdCB3aXRoIGNvbnRyb2xcbiAgICAgICAgICogIG5hbWVzIGFzIGtleXMsIGFuZCB3aWxsIGRvIGl0cyBiZXN0IHRvIG1hdGNoIHRoZSB2YWx1ZXMgdG8gdGhlIGNvcnJlY3QgY29udHJvbHNcbiAgICAgICAgICogIGluIHRoZSBncm91cC5cbiAgICAgICAgICpcbiAgICAgICAgICogIEl0IGFjY2VwdHMgYm90aCBzdXBlci1zZXRzIGFuZCBzdWItc2V0cyBvZiB0aGUgZ3JvdXAgd2l0aG91dCB0aHJvd2luZyBhbiBlcnJvci5cbiAgICAgICAgICpcbiAgICAgICAgICogICMjIyBFeGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICBgYGBcbiAgICAgICAgICogIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICogICAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgICAgICogICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICAgICAqICB9KTtcbiAgICAgICAgICogIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogbnVsbCwgbGFzdDogbnVsbH1cbiAgICAgICAgICpcbiAgICAgICAgICogIGZvcm0ucGF0Y2hWYWx1ZSh7Zmlyc3Q6ICdOYW5jeSd9KTtcbiAgICAgICAgICogIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDogbnVsbH1cbiAgICAgICAgICpcbiAgICAgICAgICogIGBgYFxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5wYXRjaFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb250cm9sc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb250cm9sc1tuYW1lXS5wYXRjaFZhbHVlKHZhbHVlW25hbWVdLCB7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXRzIHRoZSB7QGxpbmsgRm9ybUdyb3VwfS4gVGhpcyBtZWFucyBieSBkZWZhdWx0OlxuICAgICAgICAgKlxuICAgICAgICAgKiAqIFRoZSBncm91cCBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHByaXN0aW5lYFxuICAgICAgICAgKiAqIFRoZSBncm91cCBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHVudG91Y2hlZGBcbiAgICAgICAgICogKiBUaGUgdmFsdWUgb2YgYWxsIGRlc2NlbmRhbnRzIHdpbGwgYmUgbnVsbCBvciBudWxsIG1hcHNcbiAgICAgICAgICpcbiAgICAgICAgICogWW91IGNhbiBhbHNvIHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIGluIGEgbWFwIG9mIHN0YXRlc1xuICAgICAgICAgKiB0aGF0IG1hdGNoZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGZvcm0sIHdpdGggY29udHJvbCBuYW1lcyBhcyBrZXlzLiBUaGUgc3RhdGVcbiAgICAgICAgICogY2FuIGJlIGEgc3RhbmRhbG9uZSB2YWx1ZSBvciBhIGZvcm0gc3RhdGUgb2JqZWN0IHdpdGggYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkXG4gICAgICAgICAqIHN0YXR1cy5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogYGBgdHNcbiAgICAgICAgICogdGhpcy5mb3JtLnJlc2V0KHtmaXJzdDogJ25hbWUnLCBsYXN0OyAnbGFzdCBuYW1lJ30pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICpcbiAgICAgICAgICogLSBPUiAtXG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiB0aGlzLmZvcm0ucmVzZXQoe1xuICAgICAgICAgKiAgIGZpcnN0OiB7dmFsdWU6ICduYW1lJywgZGlzYWJsZWQ6IHRydWV9LFxuICAgICAgICAgKiAgIGxhc3Q6ICdsYXN0J1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2codGhpcy5mb3JtLnZhbHVlKTsgIC8vIHtmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ31cbiAgICAgICAgICogY29uc29sZS5sb2codGhpcy5mb3JtLmdldCgnZmlyc3QnKS5zdGF0dXMpOyAgLy8gJ0RJU0FCTEVEJ1xuICAgICAgICAgKiBgYGBcbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IHt9OyB9XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5yZXNldCh2YWx1ZVtuYW1lXSwgeyBvbmx5U2VsZjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUHJpc3RpbmUoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUb3VjaGVkKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiB0aGUge0BsaW5rIEZvcm1Hcm91cH0sIGluY2x1ZGluZyBhbnkgZGlzYWJsZWQgY29udHJvbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHlvdSdkIGxpa2UgdG8gaW5jbHVkZSBhbGwgdmFsdWVzIHJlZ2FyZGxlc3Mgb2YgZGlzYWJsZWQgc3RhdHVzLCB1c2UgdGhpcyBtZXRob2QuXG4gICAgICAgICAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgdGhlIGJlc3Qgd2F5IHRvIGdldCB0aGUgdmFsdWUgb2YgdGhlIGdyb3VwLlxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5nZXRSYXdWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWR1Y2VDaGlsZHJlbih7fSwgZnVuY3Rpb24gKGFjYywgY29udHJvbCwgbmFtZSkge1xuICAgICAgICAgICAgICAgIGFjY1tuYW1lXSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3Rocm93SWZDb250cm9sTWlzc2luZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgICAgVGhlcmUgYXJlIG5vIGZvcm0gY29udHJvbHMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgZ3JvdXAgeWV0LiAgSWYgeW91J3JlIHVzaW5nIG5nTW9kZWwsXFxuICAgICAgICB5b3UgbWF5IHdhbnQgdG8gY2hlY2sgbmV4dCB0aWNrIChlLmcuIHVzZSBzZXRUaW1lb3V0KS5cXG4gICAgICBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29udHJvbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBmb3JtIGNvbnRyb2wgd2l0aCBuYW1lOiBcIiArIG5hbWUgKyBcIi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fZm9yRWFjaENoaWxkID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5jb250cm9scykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyByZXR1cm4gY2IoX3RoaXMuY29udHJvbHNba10sIGspOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9zZXRVcENvbnRyb2xzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuc2V0UGFyZW50KF90aGlzKTtcbiAgICAgICAgICAgICAgICBjb250cm9sLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShfdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3VwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKCkgeyB0aGlzLl92YWx1ZSA9IHRoaXMuX3JlZHVjZVZhbHVlKCk7IH07XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fYW55Q29udHJvbHMgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHJlcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gcmVzIHx8IChfdGhpcy5jb250YWlucyhuYW1lKSAmJiBjb25kaXRpb24oY29udHJvbCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3JlZHVjZVZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWR1Y2VDaGlsZHJlbih7fSwgZnVuY3Rpb24gKGFjYywgY29udHJvbCwgbmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmVuYWJsZWQgfHwgX3RoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjW25hbWVdID0gY29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3JlZHVjZUNoaWxkcmVuID0gZnVuY3Rpb24gKGluaXRWYWx1ZSwgZm4pIHtcbiAgICAgICAgICAgIHZhciByZXMgPSBpbml0VmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wsIG5hbWUpIHsgcmVzID0gZm4ocmVzLCBjb250cm9sLCBuYW1lKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX2FsbENvbnRyb2xzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXModGhpcy5jb250cm9scyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xOYW1lID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzW2NvbnRyb2xOYW1lXS5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jb250cm9scykubGVuZ3RoID4gMCB8fCB0aGlzLmRpc2FibGVkO1xuICAgICAgICB9O1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX2NoZWNrQWxsVmFsdWVzUHJlc2VudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBzdXBwbHkgYSB2YWx1ZSBmb3IgZm9ybSBjb250cm9sIHdpdGggbmFtZTogJ1wiICsgbmFtZSArIFwiJy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtR3JvdXA7XG4gICAgfShBYnN0cmFjdENvbnRyb2wpKTtcbiAgICAvKipcbiAgICAgKiBAd2hhdEl0RG9lcyBUcmFja3MgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBzdGF0ZSBvZiBhbiBhcnJheSBvZiB7QGxpbmsgRm9ybUNvbnRyb2x9XG4gICAgICogaW5zdGFuY2VzLlxuICAgICAqXG4gICAgICogQSBgRm9ybUFycmF5YCBhZ2dyZWdhdGVzIHRoZSB2YWx1ZXMgb2YgZWFjaCBjaGlsZCB7QGxpbmsgRm9ybUNvbnRyb2x9IGludG8gYW4gYXJyYXkuXG4gICAgICogSXQgY2FsY3VsYXRlcyBpdHMgc3RhdHVzIGJ5IHJlZHVjaW5nIHRoZSBzdGF0dXNlcyBvZiBpdHMgY2hpbGRyZW4uIEZvciBleGFtcGxlLCBpZiBvbmUgb2ZcbiAgICAgKiB0aGUgY29udHJvbHMgaW4gYSBgRm9ybUFycmF5YCBpcyBpbnZhbGlkLCB0aGUgZW50aXJlIGFycmF5IGJlY29tZXMgaW52YWxpZC5cbiAgICAgKlxuICAgICAqIGBGb3JtQXJyYXlgIGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIHVzZWQgdG8gZGVmaW5lIGZvcm1zIGluIEFuZ3VsYXIsXG4gICAgICogYWxvbmcgd2l0aCB7QGxpbmsgRm9ybUNvbnRyb2x9IGFuZCB7QGxpbmsgRm9ybUdyb3VwfS5cbiAgICAgKlxuICAgICAqIEBob3dUb1VzZVxuICAgICAqXG4gICAgICogV2hlbiBpbnN0YW50aWF0aW5nIGEge0BsaW5rIEZvcm1BcnJheX0sIHBhc3MgaW4gYW4gYXJyYXkgb2YgY2hpbGQgY29udHJvbHMgYXMgdGhlIGZpcnN0XG4gICAgICogYXJndW1lbnQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gICAgICogICBuZXcgRm9ybUNvbnRyb2woJ05hbmN5JywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxuICAgICAqICAgbmV3IEZvcm1Db250cm9sKCdEcmV3JyksXG4gICAgICogXSk7XG4gICAgICpcbiAgICAgKiBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFsnTmFuY3knLCAnRHJldyddXG4gICAgICogY29uc29sZS5sb2coYXJyLnN0YXR1cyk7ICAvLyAnVkFMSUQnXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGFsc28gaW5jbHVkZSBhcnJheS1sZXZlbCB2YWxpZGF0b3JzIGFzIHRoZSBzZWNvbmQgYXJnLCBvciBhcnJheS1sZXZlbCBhc3luY1xuICAgICAqIHZhbGlkYXRvcnMgYXMgdGhlIHRoaXJkIGFyZy4gVGhlc2UgY29tZSBpbiBoYW5keSB3aGVuIHlvdSB3YW50IHRvIHBlcmZvcm0gdmFsaWRhdGlvblxuICAgICAqIHRoYXQgY29uc2lkZXJzIHRoZSB2YWx1ZSBvZiBtb3JlIHRoYW4gb25lIGNoaWxkIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiAjIyMgQWRkaW5nIG9yIHJlbW92aW5nIGNvbnRyb2xzXG4gICAgICpcbiAgICAgKiBUbyBjaGFuZ2UgdGhlIGNvbnRyb2xzIGluIHRoZSBhcnJheSwgdXNlIHRoZSBgcHVzaGAsIGBpbnNlcnRgLCBvciBgcmVtb3ZlQXRgIG1ldGhvZHNcbiAgICAgKiBpbiBgRm9ybUFycmF5YCBpdHNlbGYuIFRoZXNlIG1ldGhvZHMgZW5zdXJlIHRoZSBjb250cm9scyBhcmUgcHJvcGVybHkgdHJhY2tlZCBpbiB0aGVcbiAgICAgKiBmb3JtJ3MgaGllcmFyY2h5LiBEbyBub3QgbW9kaWZ5IHRoZSBhcnJheSBvZiBgQWJzdHJhY3RDb250cm9sYHMgdXNlZCB0byBpbnN0YW50aWF0ZVxuICAgICAqIHRoZSBgRm9ybUFycmF5YCBkaXJlY3RseSwgYXMgdGhhdCB3aWxsIHJlc3VsdCBpbiBzdHJhbmdlIGFuZCB1bmV4cGVjdGVkIGJlaGF2aW9yIHN1Y2hcbiAgICAgKiBhcyBicm9rZW4gY2hhbmdlIGRldGVjdGlvbi5cbiAgICAgKlxuICAgICAqICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1BcnJheSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ2KEZvcm1BcnJheSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gRm9ybUFycmF5KGNvbnRyb2xzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yID09PSB2b2lkIDApIHsgdmFsaWRhdG9yID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKGFzeW5jVmFsaWRhdG9yID09PSB2b2lkIDApIHsgYXN5bmNWYWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMgPSBjb250cm9scztcbiAgICAgICAgICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICAgICAgICAgICAgdGhpcy5fc2V0VXBDb250cm9scygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbH0gYXQgdGhlIGdpdmVuIGBpbmRleGAgaW4gdGhlIGFycmF5LlxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5hdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gdGhpcy5jb250cm9sc1tpbmRleF07IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnQgYSBuZXcge0BsaW5rIEFic3RyYWN0Q29udHJvbH0gYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydCBhIG5ldyB7QGxpbmsgQWJzdHJhY3RDb250cm9sfSBhdCB0aGUgZ2l2ZW4gYGluZGV4YCBpbiB0aGUgYXJyYXkuXG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChpbmRleCwgY29udHJvbCkge1xuICAgICAgICAgICAgTGlzdFdyYXBwZXIuaW5zZXJ0KHRoaXMuY29udHJvbHMsIGluZGV4LCBjb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdGVyQ29udHJvbChjb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGNvbnRyb2wgYXQgdGhlIGdpdmVuIGBpbmRleGAgaW4gdGhlIGFycmF5LlxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5yZW1vdmVBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbaW5kZXhdKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNbaW5kZXhdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgTGlzdFdyYXBwZXIucmVtb3ZlQXQodGhpcy5jb250cm9scywgaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlcGxhY2UgYW4gZXhpc3RpbmcgY29udHJvbC5cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuc2V0Q29udHJvbCA9IGZ1bmN0aW9uIChpbmRleCwgY29udHJvbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbaW5kZXhdKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNbaW5kZXhdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgTGlzdFdyYXBwZXIucmVtb3ZlQXQodGhpcy5jb250cm9scywgaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBMaXN0V3JhcHBlci5pbnNlcnQodGhpcy5jb250cm9scywgaW5kZXgsIGNvbnRyb2wpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZ2lzdGVyQ29udHJvbChjb250cm9sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQXJyYXkucHJvdG90eXBlLCBcImxlbmd0aFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIExlbmd0aCBvZiB0aGUgY29udHJvbCBhcnJheS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2xzLmxlbmd0aDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHtAbGluayBGb3JtQXJyYXl9LiBJdCBhY2NlcHRzIGFuIGFycmF5IHRoYXQgbWF0Y2hlc1xuICAgICAgICAgKiAgdGhlIHN0cnVjdHVyZSBvZiB0aGUgY29udHJvbC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBtZXRob2QgcGVyZm9ybXMgc3RyaWN0IGNoZWNrcywgc28gaXQgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB5b3UgdHJ5XG4gICAgICAgICAqIHRvIHNldCB0aGUgdmFsdWUgb2YgYSBjb250cm9sIHRoYXQgZG9lc24ndCBleGlzdCBvciBpZiB5b3UgZXhjbHVkZSB0aGVcbiAgICAgICAgICogdmFsdWUgb2YgYSBjb250cm9sLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIyMjIEV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogIGBgYFxuICAgICAgICAgKiAgY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gICAgICAgICAqICAgICBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgICAgICogICAgIG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICAgICAqICBdKTtcbiAgICAgICAgICogIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gW251bGwsIG51bGxdXG4gICAgICAgICAqXG4gICAgICAgICAqICBhcnIuc2V0VmFsdWUoWydOYW5jeScsICdEcmV3J10pO1xuICAgICAgICAgKiAgY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbJ05hbmN5JywgJ0RyZXcnXVxuICAgICAgICAgKiAgYGBgXG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWUpO1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAobmV3VmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3Rocm93SWZDb250cm9sTWlzc2luZyhpbmRleCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXQoaW5kZXgpLnNldFZhbHVlKG5ld1ZhbHVlLCB7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUGF0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIHtAbGluayBGb3JtQXJyYXl9LiBJdCBhY2NlcHRzIGFuIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGVcbiAgICAgICAgICogIHN0cnVjdHVyZSBvZiB0aGUgY29udHJvbCwgYW5kIHdpbGwgZG8gaXRzIGJlc3QgdG8gbWF0Y2ggdGhlIHZhbHVlcyB0byB0aGUgY29ycmVjdFxuICAgICAgICAgKiAgY29udHJvbHMgaW4gdGhlIGdyb3VwLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgSXQgYWNjZXB0cyBib3RoIHN1cGVyLXNldHMgYW5kIHN1Yi1zZXRzIG9mIHRoZSBhcnJheSB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIyMjIEV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogIGBgYFxuICAgICAgICAgKiAgY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gICAgICAgICAqICAgICBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgICAgICogICAgIG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICAgICAqICBdKTtcbiAgICAgICAgICogIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gW251bGwsIG51bGxdXG4gICAgICAgICAqXG4gICAgICAgICAqICBhcnIucGF0Y2hWYWx1ZShbJ05hbmN5J10pO1xuICAgICAgICAgKiAgY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbJ05hbmN5JywgbnVsbF1cbiAgICAgICAgICogIGBgYFxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5wYXRjaFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChuZXdWYWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYXQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmF0KGluZGV4KS5wYXRjaFZhbHVlKG5ld1ZhbHVlLCB7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXRzIHRoZSB7QGxpbmsgRm9ybUFycmF5fS4gVGhpcyBtZWFucyBieSBkZWZhdWx0OlxuICAgICAgICAgKlxuICAgICAgICAgKiAqIFRoZSBhcnJheSBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHByaXN0aW5lYFxuICAgICAgICAgKiAqIFRoZSBhcnJheSBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHVudG91Y2hlZGBcbiAgICAgICAgICogKiBUaGUgdmFsdWUgb2YgYWxsIGRlc2NlbmRhbnRzIHdpbGwgYmUgbnVsbCBvciBudWxsIG1hcHNcbiAgICAgICAgICpcbiAgICAgICAgICogWW91IGNhbiBhbHNvIHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIGluIGFuIGFycmF5IG9mIHN0YXRlc1xuICAgICAgICAgKiB0aGF0IG1hdGNoZXMgdGhlIHN0cnVjdHVyZSBvZiB0aGUgY29udHJvbC4gVGhlIHN0YXRlIGNhbiBiZSBhIHN0YW5kYWxvbmUgdmFsdWVcbiAgICAgICAgICogb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB3aXRoIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZCBzdGF0dXMuXG4gICAgICAgICAqXG4gICAgICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYHRzXG4gICAgICAgICAqIHRoaXMuYXJyLnJlc2V0KFsnbmFtZScsICdsYXN0IG5hbWUnXSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuYXJyLnZhbHVlKTsgIC8vIFsnbmFtZScsICdsYXN0IG5hbWUnXVxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICpcbiAgICAgICAgICogLSBPUiAtXG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiB0aGlzLmFyci5yZXNldChbXG4gICAgICAgICAqICAge3ZhbHVlOiAnbmFtZScsIGRpc2FibGVkOiB0cnVlfSxcbiAgICAgICAgICogICAnbGFzdCdcbiAgICAgICAgICogXSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuYXJyLnZhbHVlKTsgIC8vIFsnbmFtZScsICdsYXN0IG5hbWUnXVxuICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmFyci5nZXQoMCkuc3RhdHVzKTsgIC8vICdESVNBQkxFRCdcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgdmFsdWUgPSBbXTsgfVxuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sLnJlc2V0KHZhbHVlW2luZGV4XSwgeyBvbmx5U2VsZjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUHJpc3RpbmUoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUb3VjaGVkKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiB0aGUgYXJyYXksIGluY2x1ZGluZyBhbnkgZGlzYWJsZWQgY29udHJvbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHlvdSdkIGxpa2UgdG8gaW5jbHVkZSBhbGwgdmFsdWVzIHJlZ2FyZGxlc3Mgb2YgZGlzYWJsZWQgc3RhdHVzLCB1c2UgdGhpcyBtZXRob2QuXG4gICAgICAgICAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgdGhlIGJlc3Qgd2F5IHRvIGdldCB0aGUgdmFsdWUgb2YgdGhlIGFycmF5LlxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5nZXRSYXdWYWx1ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbHMubWFwKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBjb250cm9sLnZhbHVlOyB9KTsgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl90aHJvd0lmQ29udHJvbE1pc3NpbmcgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb250cm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICAgIFRoZXJlIGFyZSBubyBmb3JtIGNvbnRyb2xzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGFycmF5IHlldC4gIElmIHlvdSdyZSB1c2luZyBuZ01vZGVsLFxcbiAgICAgICAgeW91IG1heSB3YW50IHRvIGNoZWNrIG5leHQgdGljayAoZS5nLiB1c2Ugc2V0VGltZW91dCkuXFxuICAgICAgXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmF0KGluZGV4KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIGZvcm0gY29udHJvbCBhdCBpbmRleCBcIiArIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl9mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMuZm9yRWFjaChmdW5jdGlvbiAoY29udHJvbCwgaW5kZXgpIHsgY2IoY29udHJvbCwgaW5kZXgpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuY29udHJvbHMuZmlsdGVyKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBjb250cm9sLmVuYWJsZWQgfHwgX3RoaXMuZGlzYWJsZWQ7IH0pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC52YWx1ZTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fYW55Q29udHJvbHMgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5zb21lKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBjb250cm9sLmVuYWJsZWQgJiYgY29uZGl0aW9uKGNvbnRyb2wpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl9zZXRVcENvbnRyb2xzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gX3RoaXMuX3JlZ2lzdGVyQ29udHJvbChjb250cm9sKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fY2hlY2tBbGxWYWx1ZXNQcmVzZW50ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wsIGkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHN1cHBseSBhIHZhbHVlIGZvciBmb3JtIGNvbnRyb2wgYXQgaW5kZXg6IFwiICsgaSArIFwiLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl9hbGxDb250cm9sc0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuY29udHJvbHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRyb2wgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZW5hYmxlZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHMubGVuZ3RoID4gMCB8fCB0aGlzLmRpc2FibGVkO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl9yZWdpc3RlckNvbnRyb2wgPSBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgY29udHJvbC5zZXRQYXJlbnQodGhpcyk7XG4gICAgICAgICAgICBjb250cm9sLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSh0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUFycmF5O1xuICAgIH0oQWJzdHJhY3RDb250cm9sKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ0ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIGZvcm1EaXJlY3RpdmVQcm92aWRlciA9IHtcbiAgICAgICAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBOZ0Zvcm07IH0pXG4gICAgfTtcbiAgICB2YXIgcmVzb2x2ZWRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIC8qKlxuICAgICAqIEB3aGF0SXREb2VzIENyZWF0ZXMgYSB0b3AtbGV2ZWwge0BsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgYW5kIGJpbmRzIGl0IHRvIGEgZm9ybVxuICAgICAqIHRvIHRyYWNrIGFnZ3JlZ2F0ZSBmb3JtIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cy5cbiAgICAgKlxuICAgICAqIEBob3dUb1VzZVxuICAgICAqXG4gICAgICogQXMgc29vbiBhcyB5b3UgaW1wb3J0IHRoZSBgRm9ybXNNb2R1bGVgLCB0aGlzIGRpcmVjdGl2ZSBiZWNvbWVzIGFjdGl2ZSBieSBkZWZhdWx0IG9uXG4gICAgICogYWxsIGA8Zm9ybT5gIHRhZ3MuICBZb3UgZG9uJ3QgbmVlZCB0byBhZGQgYSBzcGVjaWFsIHNlbGVjdG9yLlxuICAgICAqXG4gICAgICogWW91IGNhbiBleHBvcnQgdGhlIGRpcmVjdGl2ZSBpbnRvIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmcgYG5nRm9ybWAgYXMgdGhlIGtleVxuICAgICAqIChleDogYCNteUZvcm09XCJuZ0Zvcm1cImApLiBUaGlzIGlzIG9wdGlvbmFsLCBidXQgdXNlZnVsLiAgTWFueSBwcm9wZXJ0aWVzIGZyb20gdGhlIHVuZGVybHlpbmdcbiAgICAgKiB7QGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSBhcmUgZHVwbGljYXRlZCBvbiB0aGUgZGlyZWN0aXZlIGl0c2VsZiwgc28gYSByZWZlcmVuY2UgdG8gaXRcbiAgICAgKiB3aWxsIGdpdmUgeW91IGFjY2VzcyB0byB0aGUgYWdncmVnYXRlIHZhbHVlIGFuZCB2YWxpZGl0eSBzdGF0dXMgb2YgdGhlIGZvcm0sIGFzIHdlbGwgYXNcbiAgICAgKiB1c2VyIGludGVyYWN0aW9uIHByb3BlcnRpZXMgbGlrZSBgZGlydHlgIGFuZCBgdG91Y2hlZGAuXG4gICAgICpcbiAgICAgKiBUbyByZWdpc3RlciBjaGlsZCBjb250cm9scyB3aXRoIHRoZSBmb3JtLCB5b3UnbGwgd2FudCB0byB1c2Uge0BsaW5rIE5nTW9kZWx9IHdpdGggYVxuICAgICAqIGBuYW1lYCBhdHRyaWJ1dGUuICBZb3UgY2FuIGFsc28gdXNlIHtAbGluayBOZ01vZGVsR3JvdXB9IGlmIHlvdSdkIGxpa2UgdG8gY3JlYXRlXG4gICAgICogc3ViLWdyb3VwcyB3aXRoaW4gdGhlIGZvcm0uXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGxpc3RlbiB0byB0aGUgZGlyZWN0aXZlJ3MgYG5nU3VibWl0YCBldmVudCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB1c2VyIGhhc1xuICAgICAqIHRyaWdnZXJlZCBhIGZvcm0gc3VibWlzc2lvbi5cbiAgICAgKlxuICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtL3NpbXBsZV9mb3JtX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAqXG4gICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICogKipOZ01vZHVsZSoqOiBgRm9ybXNNb2R1bGVgXG4gICAgICpcbiAgICAgKiAgQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBOZ0Zvcm0gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkNChOZ0Zvcm0sIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIE5nRm9ybSh2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5nU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgdGhpcy5mb3JtID1cbiAgICAgICAgICAgICAgICBuZXcgRm9ybUdyb3VwKHt9LCBjb21wb3NlVmFsaWRhdG9ycyh2YWxpZGF0b3JzKSwgY29tcG9zZUFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcnMpKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdGb3JtLnByb3RvdHlwZSwgXCJzdWJtaXR0ZWRcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdWJtaXR0ZWQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdGb3JtLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZvcm07IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdGb3JtLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdGb3JtLnByb3RvdHlwZSwgXCJjb250cm9sc1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUuYWRkQ29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IF90aGlzLl9maW5kQ29udGFpbmVyKGRpci5wYXRoKTtcbiAgICAgICAgICAgICAgICBkaXIuX2NvbnRyb2wgPSBjb250YWluZXIucmVnaXN0ZXJDb250cm9sKGRpci5uYW1lLCBkaXIuY29udHJvbCk7XG4gICAgICAgICAgICAgICAgc2V0VXBDb250cm9sKGRpci5jb250cm9sLCBkaXIpO1xuICAgICAgICAgICAgICAgIGRpci5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUuZ2V0Q29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpOyB9O1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLnJlbW92ZUNvbnRyb2wgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBfdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJlc2VudChjb250YWluZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDb250cm9sKGRpci5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5hZGRGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBfdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICAgICAgICAgICAgdmFyIGdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gICAgICAgICAgICAgICAgc2V0VXBGb3JtQ29udGFpbmVyKGdyb3VwLCBkaXIpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZWdpc3RlckNvbnRyb2woZGlyLm5hbWUsIGdyb3VwKTtcbiAgICAgICAgICAgICAgICBncm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLnJlbW92ZUZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IF90aGlzLl9maW5kQ29udGFpbmVyKGRpci5wYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcmVzZW50KGNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNvbnRyb2woZGlyLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLmdldEZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpOyB9O1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLnVwZGF0ZU1vZGVsID0gZnVuY3Rpb24gKGRpciwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN0cmwgPSBfdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgICAgICAgICAgICAgY3RybC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpOyB9O1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubmdTdWJtaXQuZW1pdChudWxsKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5vblJlc2V0ID0gZnVuY3Rpb24gKCkgeyB0aGlzLnJlc2V0Rm9ybSgpOyB9O1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLnJlc2V0Rm9ybSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgdmFsdWUgPSB1bmRlZmluZWQ7IH1cbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLl9maW5kQ29udGFpbmVyID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgICAgIHBhdGgucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gTGlzdFdyYXBwZXIuaXNFbXB0eShwYXRoKSA/IHRoaXMuZm9ybSA6IHRoaXMuZm9ybS5nZXQocGF0aCk7XG4gICAgICAgIH07XG4gICAgICAgIE5nRm9ybS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybTpub3QoW25nTm9Gb3JtXSk6bm90KFtmb3JtR3JvdXBdKSxuZ0Zvcm0sW25nRm9ybV0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbZm9ybURpcmVjdGl2ZVByb3ZpZGVyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhzdWJtaXQpJzogJ29uU3VibWl0KCknLCAnKHJlc2V0KSc6ICdvblJlc2V0KCknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRzOiBbJ25nU3VibWl0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRBczogJ25nRm9ybSdcbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ0Zvcm0uY3RvclBhcmFtZXRlcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiBOZ0Zvcm07XG4gICAgfShDb250cm9sQ29udGFpbmVyKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIEV4YW1wbGVzID0ge1xuICAgICAgICBmb3JtQ29udHJvbE5hbWU6IFwiXFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XFxcIm15R3JvdXBcXFwiPlxcbiAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XFxcImZpcnN0TmFtZVxcXCI+XFxuICAgIDwvZGl2PlxcblxcbiAgICBJbiB5b3VyIGNsYXNzOlxcblxcbiAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcXG4gICAgICAgZmlyc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2woKVxcbiAgICB9KTtcIixcbiAgICAgICAgZm9ybUdyb3VwTmFtZTogXCJcXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cXFwibXlHcm91cFxcXCI+XFxuICAgICAgIDxkaXYgZm9ybUdyb3VwTmFtZT1cXFwicGVyc29uXFxcIj5cXG4gICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cXFwiZmlyc3ROYW1lXFxcIj5cXG4gICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICBJbiB5b3VyIGNsYXNzOlxcblxcbiAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcXG4gICAgICAgcGVyc29uOiBuZXcgRm9ybUdyb3VwKHsgZmlyc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2woKSB9KVxcbiAgICB9KTtcIixcbiAgICAgICAgZm9ybUFycmF5TmFtZTogXCJcXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cXFwibXlHcm91cFxcXCI+XFxuICAgICAgPGRpdiBmb3JtQXJyYXlOYW1lPVxcXCJjaXRpZXNcXFwiPlxcbiAgICAgICAgPGRpdiAqbmdGb3I9XFxcImxldCBjaXR5IG9mIGNpdHlBcnJheS5jb250cm9sczsgbGV0IGk9aW5kZXhcXFwiPlxcbiAgICAgICAgICA8aW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XFxcImlcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICBJbiB5b3VyIGNsYXNzOlxcblxcbiAgICB0aGlzLmNpdHlBcnJheSA9IG5ldyBGb3JtQXJyYXkoW25ldyBGb3JtQ29udHJvbCgnU0YnKV0pO1xcbiAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcXG4gICAgICBjaXRpZXM6IHRoaXMuY2l0eUFycmF5XFxuICAgIH0pO1wiLFxuICAgICAgICBuZ01vZGVsR3JvdXA6IFwiXFxuICAgIDxmb3JtPlxcbiAgICAgICA8ZGl2IG5nTW9kZWxHcm91cD1cXFwicGVyc29uXFxcIj5cXG4gICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJwZXJzb24ubmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIj5cXG4gICAgICAgPC9kaXY+XFxuICAgIDwvZm9ybT5cIixcbiAgICAgICAgbmdNb2RlbFdpdGhGb3JtR3JvdXA6IFwiXFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XFxcIm15R3JvdXBcXFwiPlxcbiAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVxcXCJmaXJzdE5hbWVcXFwiPlxcbiAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcInNob3dNb3JlQ29udHJvbHNcXFwiIFtuZ01vZGVsT3B0aW9uc109XFxcIntzdGFuZGFsb25lOiB0cnVlfVxcXCI+XFxuICAgIDwvZGl2PlxcbiAgXCJcbiAgICB9O1xuXG4gICAgdmFyIFRlbXBsYXRlRHJpdmVuRXJyb3JzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gVGVtcGxhdGVEcml2ZW5FcnJvcnMoKSB7XG4gICAgICAgIH1cbiAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubW9kZWxQYXJlbnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICBuZ01vZGVsIGNhbm5vdCBiZSB1c2VkIHRvIHJlZ2lzdGVyIGZvcm0gY29udHJvbHMgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgVHJ5IHVzaW5nXFxuICAgICAgZm9ybUdyb3VwJ3MgcGFydG5lciBkaXJlY3RpdmUgXFxcImZvcm1Db250cm9sTmFtZVxcXCIgaW5zdGVhZC4gIEV4YW1wbGU6XFxuXFxuICAgICAgXCIgKyBFeGFtcGxlcy5mb3JtQ29udHJvbE5hbWUgKyBcIlxcblxcbiAgICAgIE9yLCBpZiB5b3UnZCBsaWtlIHRvIGF2b2lkIHJlZ2lzdGVyaW5nIHRoaXMgZm9ybSBjb250cm9sLCBpbmRpY2F0ZSB0aGF0IGl0J3Mgc3RhbmRhbG9uZSBpbiBuZ01vZGVsT3B0aW9uczpcXG5cXG4gICAgICBFeGFtcGxlOlxcblxcbiAgICAgIFwiICsgRXhhbXBsZXMubmdNb2RlbFdpdGhGb3JtR3JvdXApO1xuICAgICAgICB9O1xuICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5mb3JtR3JvdXBOYW1lRXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgbmdNb2RlbCBjYW5ub3QgYmUgdXNlZCB0byByZWdpc3RlciBmb3JtIGNvbnRyb2xzIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwTmFtZSBvciBmb3JtQXJyYXlOYW1lIGRpcmVjdGl2ZS5cXG5cXG4gICAgICBPcHRpb24gMTogVXNlIGZvcm1Db250cm9sTmFtZSBpbnN0ZWFkIG9mIG5nTW9kZWwgKHJlYWN0aXZlIHN0cmF0ZWd5KTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLmZvcm1Hcm91cE5hbWUgKyBcIlxcblxcbiAgICAgIE9wdGlvbiAyOiAgVXBkYXRlIG5nTW9kZWwncyBwYXJlbnQgYmUgbmdNb2RlbEdyb3VwICh0ZW1wbGF0ZS1kcml2ZW4gc3RyYXRlZ3kpOlxcblxcbiAgICAgIFwiICsgRXhhbXBsZXMubmdNb2RlbEdyb3VwKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubWlzc2luZ05hbWVFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJZiBuZ01vZGVsIGlzIHVzZWQgd2l0aGluIGEgZm9ybSB0YWcsIGVpdGhlciB0aGUgbmFtZSBhdHRyaWJ1dGUgbXVzdCBiZSBzZXQgb3IgdGhlIGZvcm1cXG4gICAgICBjb250cm9sIG11c3QgYmUgZGVmaW5lZCBhcyAnc3RhbmRhbG9uZScgaW4gbmdNb2RlbE9wdGlvbnMuXFxuXFxuICAgICAgRXhhbXBsZSAxOiA8aW5wdXQgWyhuZ01vZGVsKV09XFxcInBlcnNvbi5maXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0XFxcIj5cXG4gICAgICBFeGFtcGxlIDI6IDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwicGVyc29uLmZpcnN0TmFtZVxcXCIgW25nTW9kZWxPcHRpb25zXT1cXFwie3N0YW5kYWxvbmU6IHRydWV9XFxcIj5cIik7XG4gICAgICAgIH07XG4gICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1vZGVsR3JvdXBQYXJlbnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICBuZ01vZGVsR3JvdXAgY2Fubm90IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLlxcblxcbiAgICAgIE9wdGlvbiAxOiBVc2UgZm9ybUdyb3VwTmFtZSBpbnN0ZWFkIG9mIG5nTW9kZWxHcm91cCAocmVhY3RpdmUgc3RyYXRlZ3kpOlxcblxcbiAgICAgIFwiICsgRXhhbXBsZXMuZm9ybUdyb3VwTmFtZSArIFwiXFxuXFxuICAgICAgT3B0aW9uIDI6ICBVc2UgYSByZWd1bGFyIGZvcm0gdGFnIGluc3RlYWQgb2YgdGhlIGZvcm1Hcm91cCBkaXJlY3RpdmUgKHRlbXBsYXRlLWRyaXZlbiBzdHJhdGVneSk6XFxuXFxuICAgICAgXCIgKyBFeGFtcGxlcy5uZ01vZGVsR3JvdXApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVGVtcGxhdGVEcml2ZW5FcnJvcnM7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDggPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICB2YXIgbW9kZWxHcm91cFByb3ZpZGVyID0ge1xuICAgICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE5nTW9kZWxHcm91cDsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEB3aGF0SXREb2VzIENyZWF0ZXMgYW5kIGJpbmRzIGEge0BsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgdG8gYSBET00gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBob3dUb1VzZVxuICAgICAqXG4gICAgICogVGhpcyBkaXJlY3RpdmUgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGNoaWxkIG9mIHtAbGluayBOZ0Zvcm19IChvciBpbiBvdGhlciB3b3JkcyxcbiAgICAgKiB3aXRoaW4gYDxmb3JtPmAgdGFncykuXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBkaXJlY3RpdmUgaWYgeW91J2QgbGlrZSB0byBjcmVhdGUgYSBzdWItZ3JvdXAgd2l0aGluIGEgZm9ybS4gVGhpcyBjYW5cbiAgICAgKiBjb21lIGluIGhhbmR5IGlmIHlvdSB3YW50IHRvIHZhbGlkYXRlIGEgc3ViLWdyb3VwIG9mIHlvdXIgZm9ybSBzZXBhcmF0ZWx5IGZyb21cbiAgICAgKiB0aGUgcmVzdCBvZiB5b3VyIGZvcm0sIG9yIGlmIHNvbWUgdmFsdWVzIGluIHlvdXIgZG9tYWluIG1vZGVsIG1ha2UgbW9yZSBzZW5zZSB0b1xuICAgICAqIGNvbnN1bWUgdG9nZXRoZXIgaW4gYSBuZXN0ZWQgb2JqZWN0LlxuICAgICAqXG4gICAgICogUGFzcyBpbiB0aGUgbmFtZSB5b3UnZCBsaWtlIHRoaXMgc3ViLWdyb3VwIHRvIGhhdmUgYW5kIGl0IHdpbGwgYmVjb21lIHRoZSBrZXlcbiAgICAgKiBmb3IgdGhlIHN1Yi1ncm91cCBpbiB0aGUgZm9ybSdzIGZ1bGwgdmFsdWUuIFlvdSBjYW4gYWxzbyBleHBvcnQgdGhlIGRpcmVjdGl2ZSBpbnRvXG4gICAgICogYSBsb2NhbCB0ZW1wbGF0ZSB2YXJpYWJsZSB1c2luZyBgbmdNb2RlbEdyb3VwYCAoZXg6IGAjbXlHcm91cD1cIm5nTW9kZWxHcm91cFwiYCkuXG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvbmdNb2RlbEdyb3VwL25nX21vZGVsX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAqXG4gICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICogKipOZ01vZHVsZSoqOiBgRm9ybXNNb2R1bGVgXG4gICAgICpcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE5nTW9kZWxHcm91cCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ4KE5nTW9kZWxHcm91cCwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gTmdNb2RlbEdyb3VwKHBhcmVudCwgdmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzO1xuICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzO1xuICAgICAgICB9XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgTmdNb2RlbEdyb3VwLnByb3RvdHlwZS5fY2hlY2tQYXJlbnRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdNb2RlbEdyb3VwKSAmJiAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nRm9ybSkpIHtcbiAgICAgICAgICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5tb2RlbEdyb3VwUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE5nTW9kZWxHcm91cC5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbbmdNb2RlbEdyb3VwXScsIHByb3ZpZGVyczogW21vZGVsR3JvdXBQcm92aWRlcl0sIGV4cG9ydEFzOiAnbmdNb2RlbEdyb3VwJyB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE5nTW9kZWxHcm91cC5jdG9yUGFyYW1ldGVycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5Ib3N0IH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ta2lwU2VsZiB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgTmdNb2RlbEdyb3VwLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWxHcm91cCcsXSB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBOZ01vZGVsR3JvdXA7XG4gICAgfShBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSkpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkNyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciBmb3JtQ29udHJvbEJpbmRpbmcgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5nQ29udHJvbCxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBOZ01vZGVsOyB9KVxuICAgIH07XG4gICAgdmFyIHJlc29sdmVkUHJvbWlzZSQxID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIC8qKlxuICAgICAqIEB3aGF0SXREb2VzIENyZWF0ZXMgYSB7QGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIGZyb20gYSBkb21haW4gbW9kZWwgYW5kIGJpbmRzIGl0XG4gICAgICogdG8gYSBmb3JtIGNvbnRyb2wgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFRoZSB7QGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIHdpbGwgdHJhY2sgdGhlIHZhbHVlLCB1c2VyIGludGVyYWN0aW9uLCBhbmRcbiAgICAgKiB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbCBhbmQga2VlcCB0aGUgdmlldyBzeW5jZWQgd2l0aCB0aGUgbW9kZWwuIElmIHVzZWRcbiAgICAgKiB3aXRoaW4gYSBwYXJlbnQgZm9ybSwgdGhlIGRpcmVjdGl2ZSB3aWxsIGFsc28gcmVnaXN0ZXIgaXRzZWxmIHdpdGggdGhlIGZvcm0gYXMgYSBjaGlsZFxuICAgICAqIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiBAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIFRoaXMgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIGJ5IGl0c2VsZiBvciBhcyBwYXJ0IG9mIGEgbGFyZ2VyIGZvcm0uIEFsbCB5b3UgbmVlZCBpcyB0aGVcbiAgICAgKiBgbmdNb2RlbGAgc2VsZWN0b3IgdG8gYWN0aXZhdGUgaXQuXG4gICAgICpcbiAgICAgKiBJdCBhY2NlcHRzIGEgZG9tYWluIG1vZGVsIGFzIGFuIG9wdGlvbmFsIHtAbGluayBASW5wdXR9LiBJZiB5b3UgaGF2ZSBhIG9uZS13YXkgYmluZGluZ1xuICAgICAqIHRvIGBuZ01vZGVsYCB3aXRoIGBbXWAgc3ludGF4LCBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhlIGRvbWFpbiBtb2RlbCBpbiB0aGUgY29tcG9uZW50XG4gICAgICogY2xhc3Mgd2lsbCBzZXQgdGhlIHZhbHVlIGluIHRoZSB2aWV3LiBJZiB5b3UgaGF2ZSBhIHR3by13YXkgYmluZGluZyB3aXRoIGBbKCldYCBzeW50YXhcbiAgICAgKiAoYWxzbyBrbm93biBhcyAnYmFuYW5hLWJveCBzeW50YXgnKSwgdGhlIHZhbHVlIGluIHRoZSBVSSB3aWxsIGFsd2F5cyBiZSBzeW5jZWQgYmFjayB0b1xuICAgICAqIHRoZSBkb21haW4gbW9kZWwgaW4geW91ciBjbGFzcyBhcyB3ZWxsLlxuICAgICAqXG4gICAgICogSWYgeW91IHdpc2ggdG8gaW5zcGVjdCB0aGUgcHJvcGVydGllcyBvZiB0aGUgYXNzb2NpYXRlZCB7QGxpbmsgRm9ybUNvbnRyb2x9IChsaWtlXG4gICAgICogdmFsaWRpdHkgc3RhdGUpLCB5b3UgY2FuIGFsc28gZXhwb3J0IHRoZSBkaXJlY3RpdmUgaW50byBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nXG4gICAgICogYG5nTW9kZWxgIGFzIHRoZSBrZXkgKGV4OiBgI215VmFyPVwibmdNb2RlbFwiYCkuIFlvdSBjYW4gdGhlbiBhY2Nlc3MgdGhlIGNvbnRyb2wgdXNpbmcgdGhlXG4gICAgICogZGlyZWN0aXZlJ3MgYGNvbnRyb2xgIHByb3BlcnR5LCBidXQgbW9zdCBwcm9wZXJ0aWVzIHlvdSdsbCBuZWVkIChsaWtlIGB2YWxpZGAgYW5kIGBkaXJ0eWApXG4gICAgICogd2lsbCBmYWxsIHRocm91Z2ggdG8gdGhlIGNvbnRyb2wgYW55d2F5LCBzbyB5b3UgY2FuIGFjY2VzcyB0aGVtIGRpcmVjdGx5LiBZb3UgY2FuIHNlZSBhXG4gICAgICogZnVsbCBsaXN0IG9mIHByb3BlcnRpZXMgZGlyZWN0bHkgYXZhaWxhYmxlIGluIHtAbGluayBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9LlxuICAgICAqXG4gICAgICogVGhlIGZvbGxvd2luZyBpcyBhbiBleGFtcGxlIG9mIGEgc2ltcGxlIHN0YW5kYWxvbmUgY29udHJvbCB1c2luZyBgbmdNb2RlbGA6XG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlTmdNb2RlbC9zaW1wbGVfbmdfbW9kZWxfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICpcbiAgICAgKiBXaGVuIHVzaW5nIHRoZSBgbmdNb2RlbGAgd2l0aGluIGA8Zm9ybT5gIHRhZ3MsIHlvdSdsbCBhbHNvIG5lZWQgdG8gc3VwcGx5IGEgYG5hbWVgIGF0dHJpYnV0ZVxuICAgICAqIHNvIHRoYXQgdGhlIGNvbnRyb2wgY2FuIGJlIHJlZ2lzdGVyZWQgd2l0aCB0aGUgcGFyZW50IGZvcm0gdW5kZXIgdGhhdCBuYW1lLlxuICAgICAqXG4gICAgICogSXQncyB3b3J0aCBub3RpbmcgdGhhdCBpbiB0aGUgY29udGV4dCBvZiBhIHBhcmVudCBmb3JtLCB5b3Ugb2Z0ZW4gY2FuIHNraXAgb25lLXdheSBvclxuICAgICAqIHR3by13YXkgYmluZGluZyBiZWNhdXNlIHRoZSBwYXJlbnQgZm9ybSB3aWxsIHN5bmMgdGhlIHZhbHVlIGZvciB5b3UuIFlvdSBjYW4gYWNjZXNzXG4gICAgICogaXRzIHByb3BlcnRpZXMgYnkgZXhwb3J0aW5nIGl0IGludG8gYSBsb2NhbCB0ZW1wbGF0ZSB2YXJpYWJsZSB1c2luZyBgbmdGb3JtYCAoZXg6XG4gICAgICogYCNmPVwibmdGb3JtXCJgKS4gVGhlbiB5b3UgY2FuIHBhc3MgaXQgd2hlcmUgaXQgbmVlZHMgdG8gZ28gb24gc3VibWl0LlxuICAgICAqXG4gICAgICogSWYgeW91IGRvIG5lZWQgdG8gcG9wdWxhdGUgaW5pdGlhbCB2YWx1ZXMgaW50byB5b3VyIGZvcm0sIHVzaW5nIGEgb25lLXdheSBiaW5kaW5nIGZvclxuICAgICAqIGBuZ01vZGVsYCB0ZW5kcyB0byBiZSBzdWZmaWNpZW50IGFzIGxvbmcgYXMgeW91IHVzZSB0aGUgZXhwb3J0ZWQgZm9ybSdzIHZhbHVlIHJhdGhlclxuICAgICAqIHRoYW4gdGhlIGRvbWFpbiBtb2RlbCdzIHZhbHVlIG9uIHN1Ym1pdC5cbiAgICAgKlxuICAgICAqIFRha2UgYSBsb29rIGF0IGFuIGV4YW1wbGUgb2YgdXNpbmcgYG5nTW9kZWxgIHdpdGhpbiBhIGZvcm06XG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybS9zaW1wbGVfZm9ybV9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqIFRvIHNlZSBgbmdNb2RlbGAgZXhhbXBsZXMgd2l0aCBkaWZmZXJlbnQgZm9ybSBjb250cm9sIHR5cGVzLCBzZWU6XG4gICAgICpcbiAgICAgKiAqIFJhZGlvIGJ1dHRvbnM6IHtAbGluayBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICAgICAqICogU2VsZWN0czoge0BsaW5rIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICAgICAqXG4gICAgICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiAqKk5nTW9kdWxlKio6IGBGb3Jtc01vZHVsZWBcbiAgICAgKlxuICAgICAqICBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE5nTW9kZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkNyhOZ01vZGVsLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBOZ01vZGVsKHBhcmVudCwgdmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzLCB2YWx1ZUFjY2Vzc29ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9jb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RlcmVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMuX3Jhd1ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yID0gc2VsZWN0VmFsdWVBY2Nlc3Nvcih0aGlzLCB2YWx1ZUFjY2Vzc29ycyk7XG4gICAgICAgIH1cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tGb3JFcnJvcnMoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcmVnaXN0ZXJlZClcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRVcENvbnRyb2woKTtcbiAgICAgICAgICAgIGlmICgnaXNEaXNhYmxlZCcgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURpc2FibGVkKGNoYW5nZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMudmlld01vZGVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlKHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7IHRoaXMuZm9ybURpcmVjdGl2ZSAmJiB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlQ29udHJvbCh0aGlzKTsgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nTW9kZWwucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jb250cm9sOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nTW9kZWwucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudCA/IGNvbnRyb2xQYXRoKHRoaXMubmFtZSwgdGhpcy5fcGFyZW50KSA6IFt0aGlzLm5hbWVdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ01vZGVsLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcGFyZW50ID8gdGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nTW9kZWwucHJvdG90eXBlLCBcInZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3Jhd1ZhbGlkYXRvcnMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nTW9kZWwucHJvdG90eXBlLCBcImFzeW5jVmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUudmlld1RvTW9kZWxVcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX3NldFVwQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU3RhbmRhbG9uZSgpID8gdGhpcy5fc2V0VXBTdGFuZGFsb25lKCkgOlxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5hZGRDb250cm9sKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl9pc1N0YW5kYWxvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuX3BhcmVudCB8fCAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5zdGFuZGFsb25lKTtcbiAgICAgICAgfTtcbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX3NldFVwU3RhbmRhbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFVwQ29udHJvbCh0aGlzLl9jb250cm9sLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH07XG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl9jaGVja0ZvckVycm9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNTdGFuZGFsb25lKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1BhcmVudFR5cGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NoZWNrTmFtZSgpO1xuICAgICAgICB9O1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5fY2hlY2tQYXJlbnRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdNb2RlbEdyb3VwKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMuZm9ybUdyb3VwTmFtZUV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ01vZGVsR3JvdXApICYmICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdGb3JtKSkge1xuICAgICAgICAgICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1vZGVsUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl9jaGVja05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5uYW1lKVxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMub3B0aW9ucy5uYW1lO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1N0YW5kYWxvbmUoKSAmJiAhdGhpcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubWlzc2luZ05hbWVFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX3VwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlJDEudGhlbihmdW5jdGlvbiAoKSB7IF90aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIHsgZW1pdFZpZXdUb01vZGVsQ2hhbmdlOiBmYWxzZSB9KTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl91cGRhdGVEaXNhYmxlZCA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGRpc2FibGVkVmFsdWUgPSBjaGFuZ2VzWydpc0Rpc2FibGVkJ10uY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgdmFyIGlzRGlzYWJsZWQgPSBkaXNhYmxlZFZhbHVlID09PSAnJyB8fCAoZGlzYWJsZWRWYWx1ZSAmJiBkaXNhYmxlZFZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZSQxLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0Rpc2FibGVkICYmICFfdGhpcy5jb250cm9sLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNEaXNhYmxlZCAmJiBfdGhpcy5jb250cm9sLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIE5nTW9kZWwuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tuZ01vZGVsXTpub3QoW2Zvcm1Db250cm9sTmFtZV0pOm5vdChbZm9ybUNvbnRyb2xdKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtmb3JtQ29udHJvbEJpbmRpbmddLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0QXM6ICduZ01vZGVsJ1xuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE5nTW9kZWwuY3RvclBhcmFtZXRlcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxVRV9BQ0NFU1NPUixdIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICBOZ01vZGVsLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0IH0sXSxcbiAgICAgICAgICAgICdpc0Rpc2FibGVkJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydkaXNhYmxlZCcsXSB9LF0sXG4gICAgICAgICAgICAnbW9kZWwnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWwnLF0gfSxdLFxuICAgICAgICAgICAgJ29wdGlvbnMnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWxPcHRpb25zJyxdIH0sXSxcbiAgICAgICAgICAgICd1cGRhdGUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk91dHB1dCwgYXJnczogWyduZ01vZGVsQ2hhbmdlJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE5nTW9kZWw7XG4gICAgfShOZ0NvbnRyb2wpKTtcblxuICAgIHZhciBSZWFjdGl2ZUVycm9ycyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFJlYWN0aXZlRXJyb3JzKCkge1xuICAgICAgICB9XG4gICAgICAgIFJlYWN0aXZlRXJyb3JzLmNvbnRyb2xQYXJlbnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtQ29udHJvbE5hbWUgbXVzdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFlvdSdsbCB3YW50IHRvIGFkZCBhIGZvcm1Hcm91cFxcbiAgICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXFxuXFxuICAgICAgRXhhbXBsZTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLmZvcm1Db250cm9sTmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIFJlYWN0aXZlRXJyb3JzLm5nTW9kZWxHcm91cEV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZvcm1Db250cm9sTmFtZSBjYW5ub3QgYmUgdXNlZCB3aXRoIGFuIG5nTW9kZWxHcm91cCBwYXJlbnQuIEl0IGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHBhcmVudHNcXG4gICAgICAgdGhhdCBhbHNvIGhhdmUgYSBcXFwiZm9ybVxcXCIgcHJlZml4OiBmb3JtR3JvdXBOYW1lLCBmb3JtQXJyYXlOYW1lLCBvciBmb3JtR3JvdXAuXFxuXFxuICAgICAgIE9wdGlvbiAxOiAgVXBkYXRlIHRoZSBwYXJlbnQgdG8gYmUgZm9ybUdyb3VwTmFtZSAocmVhY3RpdmUgZm9ybSBzdHJhdGVneSlcXG5cXG4gICAgICAgIFwiICsgRXhhbXBsZXMuZm9ybUdyb3VwTmFtZSArIFwiXFxuXFxuICAgICAgICBPcHRpb24gMjogVXNlIG5nTW9kZWwgaW5zdGVhZCBvZiBmb3JtQ29udHJvbE5hbWUgKHRlbXBsYXRlLWRyaXZlbiBzdHJhdGVneSlcXG5cXG4gICAgICAgIFwiICsgRXhhbXBsZXMubmdNb2RlbEdyb3VwKTtcbiAgICAgICAgfTtcbiAgICAgICAgUmVhY3RpdmVFcnJvcnMubWlzc2luZ0Zvcm1FeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtR3JvdXAgZXhwZWN0cyBhIEZvcm1Hcm91cCBpbnN0YW5jZS4gUGxlYXNlIHBhc3Mgb25lIGluLlxcblxcbiAgICAgICBFeGFtcGxlOlxcblxcbiAgICAgICBcIiArIEV4YW1wbGVzLmZvcm1Db250cm9sTmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIFJlYWN0aXZlRXJyb3JzLmdyb3VwUGFyZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZm9ybUdyb3VwTmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXFxuICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxcblxcbiAgICAgIEV4YW1wbGU6XFxuXFxuICAgICAgXCIgKyBFeGFtcGxlcy5mb3JtR3JvdXBOYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgUmVhY3RpdmVFcnJvcnMuYXJyYXlQYXJlbnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtQXJyYXlOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcXG4gICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxcblxcbiAgICAgICAgRXhhbXBsZTpcXG5cXG4gICAgICAgIFwiICsgRXhhbXBsZXMuZm9ybUFycmF5TmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIFJlYWN0aXZlRXJyb3JzLmRpc2FibGVkQXR0cldhcm5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJcXG4gICAgICBJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIHdpdGggYSByZWFjdGl2ZSBmb3JtIGRpcmVjdGl2ZS4gSWYgeW91IHNldCBkaXNhYmxlZCB0byB0cnVlXFxuICAgICAgd2hlbiB5b3Ugc2V0IHVwIHRoaXMgY29udHJvbCBpbiB5b3VyIGNvbXBvbmVudCBjbGFzcywgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB3aWxsIGFjdHVhbGx5IGJlIHNldCBpbiB0aGUgRE9NIGZvclxcbiAgICAgIHlvdS4gV2UgcmVjb21tZW5kIHVzaW5nIHRoaXMgYXBwcm9hY2ggdG8gYXZvaWQgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgZXJyb3JzLlxcbiAgICAgICBcXG4gICAgICBFeGFtcGxlOiBcXG4gICAgICBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XFxuICAgICAgICBmaXJzdDogbmV3IEZvcm1Db250cm9sKHt2YWx1ZTogJ05hbmN5JywgZGlzYWJsZWQ6IHRydWV9LCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcXG4gICAgICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnRHJldycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXFxuICAgICAgfSk7XFxuICAgIFwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0aXZlRXJyb3JzO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ5ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIGZvcm1Db250cm9sQmluZGluZyQxID0ge1xuICAgICAgICBwcm92aWRlOiBOZ0NvbnRyb2wsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRm9ybUNvbnRyb2xEaXJlY3RpdmU7IH0pXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAd2hhdEl0RG9lcyBTeW5jcyBhIHN0YW5kYWxvbmUge0BsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSB0byBhIGZvcm0gY29udHJvbCBlbGVtZW50LlxuICAgICAqXG4gICAgICogSW4gb3RoZXIgd29yZHMsIHRoaXMgZGlyZWN0aXZlIGVuc3VyZXMgdGhhdCBhbnkgdmFsdWVzIHdyaXR0ZW4gdG8gdGhlIHtAbGluayBGb3JtQ29udHJvbH1cbiAgICAgKiBpbnN0YW5jZSBwcm9ncmFtbWF0aWNhbGx5IHdpbGwgYmUgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgKG1vZGVsIC0+IHZpZXcpLiBDb252ZXJzZWx5LFxuICAgICAqIGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgdGhyb3VnaCB1c2VyIGlucHV0IHdpbGwgYmUgcmVmbGVjdGVkIGluIHRoZVxuICAgICAqIHtAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgKHZpZXcgLT4gbW9kZWwpLlxuICAgICAqXG4gICAgICogQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBkaXJlY3RpdmUgaWYgeW91J2QgbGlrZSB0byBjcmVhdGUgYW5kIG1hbmFnZSBhIHtAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgZGlyZWN0bHkuXG4gICAgICogU2ltcGx5IGNyZWF0ZSBhIHtAbGluayBGb3JtQ29udHJvbH0sIHNhdmUgaXQgdG8geW91ciBjb21wb25lbnQgY2xhc3MsIGFuZCBwYXNzIGl0IGludG8gdGhlXG4gICAgICoge0BsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfS5cbiAgICAgKlxuICAgICAqIFRoaXMgZGlyZWN0aXZlIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgYXMgYSBzdGFuZGFsb25lIGNvbnRyb2wuICBVbmxpa2Uge0BsaW5rIEZvcm1Db250cm9sTmFtZX0sXG4gICAgICogaXQgZG9lcyBub3QgcmVxdWlyZSB0aGF0IHlvdXIge0BsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSBiZSBwYXJ0IG9mIGFueSBwYXJlbnRcbiAgICAgKiB7QGxpbmsgRm9ybUdyb3VwfSwgYW5kIGl0IHdvbid0IGJlIHJlZ2lzdGVyZWQgdG8gYW55IHtAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IHRoYXRcbiAgICAgKiBleGlzdHMgYWJvdmUgaXQuXG4gICAgICpcbiAgICAgKiAqKkdldCB0aGUgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZVxuICAgICAqIHtAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UuIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpblxuICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2x9LlxuICAgICAqXG4gICAgICogKipTZXQgdGhlIHZhbHVlKio6IFlvdSBjYW4gcGFzcyBpbiBhbiBpbml0aWFsIHZhbHVlIHdoZW4gaW5zdGFudGlhdGluZyB0aGUge0BsaW5rIEZvcm1Db250cm9sfSxcbiAgICAgKiBvciB5b3UgY2FuIHNldCBpdCBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyIHVzaW5nIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yXG4gICAgICoge0BsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfS5cbiAgICAgKlxuICAgICAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCwgeW91IGNhblxuICAgICAqIHN1YnNjcmliZSB0byB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgaXNcbiAgICAgKiByZS1jYWxjdWxhdGVkLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtQ29udHJvbC9zaW1wbGVfZm9ybV9jb250cm9sX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAqXG4gICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICogKipOZ01vZHVsZSoqOiBgUmVhY3RpdmVGb3Jtc01vZHVsZWBcbiAgICAgKlxuICAgICAqICBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1Db250cm9sRGlyZWN0aXZlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDkoRm9ybUNvbnRyb2xEaXJlY3RpdmUsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEZvcm1Db250cm9sRGlyZWN0aXZlKHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycywgdmFsdWVBY2Nlc3NvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9yYXdWYWxpZGF0b3JzID0gdmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3NvciA9IHNlbGVjdFZhbHVlQWNjZXNzb3IodGhpcywgdmFsdWVBY2Nlc3NvcnMpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiaXNEaXNhYmxlZFwiLCB7XG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7IFJlYWN0aXZlRXJyb3JzLmRpc2FibGVkQXR0cldhcm5pbmcoKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNDb250cm9sQ2hhbmdlZChjaGFuZ2VzKSkge1xuICAgICAgICAgICAgICAgIHNldFVwQ29udHJvbCh0aGlzLmZvcm0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2wuZGlzYWJsZWQgJiYgdGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzLCB0aGlzLnZpZXdNb2RlbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc2V0VmFsdWUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fcmF3VmFsaWRhdG9ycyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImFzeW5jVmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5mb3JtOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLnZpZXdUb01vZGVsVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdChuZXdWYWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS5faXNDb250cm9sQ2hhbmdlZCA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZm9ybScpO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtQ29udHJvbERpcmVjdGl2ZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbZm9ybUNvbnRyb2xdJywgcHJvdmlkZXJzOiBbZm9ybUNvbnRyb2xCaW5kaW5nJDFdLCBleHBvcnRBczogJ25nRm9ybScgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtQ29udHJvbERpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsXSB9LF0gfSxcbiAgICAgICAgICAgIHsgdHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdCwgYXJnczogW05HX1ZBTFVFX0FDQ0VTU09SLF0gfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ2Zvcm0nOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Zvcm1Db250cm9sJyxdIH0sXSxcbiAgICAgICAgICAgICdtb2RlbCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbCcsXSB9LF0sXG4gICAgICAgICAgICAndXBkYXRlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PdXRwdXQsIGFyZ3M6IFsnbmdNb2RlbENoYW5nZScsXSB9LF0sXG4gICAgICAgICAgICAnaXNEaXNhYmxlZCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnZGlzYWJsZWQnLF0gfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG4gICAgfShOZ0NvbnRyb2wpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDExID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIGZvcm1EaXJlY3RpdmVQcm92aWRlciQxID0ge1xuICAgICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZvcm1Hcm91cERpcmVjdGl2ZTsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEB3aGF0SXREb2VzIEJpbmRzIGFuIGV4aXN0aW5nIHtAbGluayBGb3JtR3JvdXB9IHRvIGEgRE9NIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIFRoaXMgZGlyZWN0aXZlIGFjY2VwdHMgYW4gZXhpc3Rpbmcge0BsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UuIEl0IHdpbGwgdGhlbiB1c2UgdGhpc1xuICAgICAqIHtAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIHRvIG1hdGNoIGFueSBjaGlsZCB7QGxpbmsgRm9ybUNvbnRyb2x9LCB7QGxpbmsgRm9ybUdyb3VwfSxcbiAgICAgKiBhbmQge0BsaW5rIEZvcm1BcnJheX0gaW5zdGFuY2VzIHRvIGNoaWxkIHtAbGluayBGb3JtQ29udHJvbE5hbWV9LCB7QGxpbmsgRm9ybUdyb3VwTmFtZX0sXG4gICAgICogYW5kIHtAbGluayBGb3JtQXJyYXlOYW1lfSBkaXJlY3RpdmVzLlxuICAgICAqXG4gICAgICogKipTZXQgdmFsdWUqKjogWW91IGNhbiBzZXQgdGhlIGZvcm0ncyBpbml0aWFsIHZhbHVlIHdoZW4gaW5zdGFudGlhdGluZyB0aGVcbiAgICAgKiB7QGxpbmsgRm9ybUdyb3VwfSwgb3IgeW91IGNhbiBzZXQgaXQgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZyB0aGUge0BsaW5rIEZvcm1Hcm91cH0nc1xuICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yIHtAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX0gbWV0aG9kcy5cbiAgICAgKlxuICAgICAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZm9ybSwgeW91IGNhbiBzdWJzY3JpYmVcbiAgICAgKiB0byB0aGUge0BsaW5rIEZvcm1Hcm91cH0ncyB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc28gbGlzdGVuIHRvXG4gICAgICogaXRzIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgaXNcbiAgICAgKiByZS1jYWxjdWxhdGVkLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIEluIHRoaXMgZXhhbXBsZSwgd2UgY3JlYXRlIGZvcm0gY29udHJvbHMgZm9yIGZpcnN0IG5hbWUgYW5kIGxhc3QgbmFtZS5cbiAgICAgKlxuICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtR3JvdXAvc2ltcGxlX2Zvcm1fZ3JvdXBfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICpcbiAgICAgKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICoqTmdNb2R1bGUqKjoge0BsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9XG4gICAgICpcbiAgICAgKiAgQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBGb3JtR3JvdXBEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMTEoRm9ybUdyb3VwRGlyZWN0aXZlLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBGb3JtR3JvdXBEaXJlY3RpdmUoX3ZhbGlkYXRvcnMsIF9hc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9ycyA9IF92YWxpZGF0b3JzO1xuICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gX2FzeW5jVmFsaWRhdG9ycztcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVzID0gW107XG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5uZ1N1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrRm9ybVByZXNlbnQoKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdmb3JtJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVWYWxpZGF0b3JzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9tVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVSZWdpc3RyYXRpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcInN1Ym1pdHRlZFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N1Ym1pdHRlZDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuYWRkQ29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHZhciBjdHJsID0gdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgICAgICAgICBzZXRVcENvbnRyb2woY3RybCwgZGlyKTtcbiAgICAgICAgICAgIGN0cmwudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZXMucHVzaChkaXIpO1xuICAgICAgICAgICAgcmV0dXJuIGN0cmw7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Q29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHsgcmV0dXJuIHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpOyB9O1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLnJlbW92ZUNvbnRyb2wgPSBmdW5jdGlvbiAoZGlyKSB7IExpc3RXcmFwcGVyLnJlbW92ZSh0aGlzLmRpcmVjdGl2ZXMsIGRpcik7IH07XG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuYWRkRm9ybUdyb3VwID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgdmFyIGN0cmwgPSB0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgICAgICAgICAgIHNldFVwRm9ybUNvbnRhaW5lcihjdHJsLCBkaXIpO1xuICAgICAgICAgICAgY3RybC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5yZW1vdmVGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7IH07XG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Rm9ybUdyb3VwID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gdGhpcy5mb3JtLmdldChkaXIucGF0aCk7IH07XG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuYWRkRm9ybUFycmF5ID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgdmFyIGN0cmwgPSB0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgICAgICAgICAgIHNldFVwRm9ybUNvbnRhaW5lcihjdHJsLCBkaXIpO1xuICAgICAgICAgICAgY3RybC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5yZW1vdmVGb3JtQXJyYXkgPSBmdW5jdGlvbiAoZGlyKSB7IH07XG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Rm9ybUFycmF5ID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gdGhpcy5mb3JtLmdldChkaXIucGF0aCk7IH07XG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUudXBkYXRlTW9kZWwgPSBmdW5jdGlvbiAoZGlyLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGN0cmwgPSB0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgICAgICAgICAgIGN0cmwuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubmdTdWJtaXQuZW1pdChudWxsKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5vblJlc2V0ID0gZnVuY3Rpb24gKCkgeyB0aGlzLnJlc2V0Rm9ybSgpOyB9O1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLnJlc2V0Rm9ybSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgdmFsdWUgPSB1bmRlZmluZWQ7IH1cbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl91cGRhdGVEb21WYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0N0cmwgPSBfdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGRpci5fY29udHJvbCAhPT0gbmV3Q3RybCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhblVwQ29udHJvbChkaXIuX2NvbnRyb2wsIGRpcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdDdHJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBDb250cm9sKG5ld0N0cmwsIGRpcik7XG4gICAgICAgICAgICAgICAgICAgIGRpci5fY29udHJvbCA9IG5ld0N0cmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZvcm0uX3VwZGF0ZVRyZWVWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX3VwZGF0ZVJlZ2lzdHJhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5mb3JtLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fdXBkYXRlRG9tVmFsdWUoKTsgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fb2xkRm9ybSlcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRGb3JtLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgdGhpcy5fb2xkRm9ybSA9IHRoaXMuZm9ybTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fdXBkYXRlVmFsaWRhdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzeW5jID0gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB0aGlzLmZvcm0udmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlKFt0aGlzLmZvcm0udmFsaWRhdG9yLCBzeW5jXSk7XG4gICAgICAgICAgICB2YXIgYXN5bmMgPSBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX2FzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB0aGlzLmZvcm0uYXN5bmNWYWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhbdGhpcy5mb3JtLmFzeW5jVmFsaWRhdG9yLCBhc3luY10pO1xuICAgICAgICB9O1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl9jaGVja0Zvcm1QcmVzZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgICAgICBSZWFjdGl2ZUVycm9ycy5taXNzaW5nRm9ybUV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tmb3JtR3JvdXBdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW2Zvcm1EaXJlY3RpdmVQcm92aWRlciQxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhzdWJtaXQpJzogJ29uU3VibWl0KCknLCAnKHJlc2V0KSc6ICdvblJlc2V0KCknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRBczogJ25nRm9ybSdcbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICdmb3JtJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydmb3JtR3JvdXAnLF0gfSxdLFxuICAgICAgICAgICAgJ25nU3VibWl0JzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PdXRwdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUdyb3VwRGlyZWN0aXZlO1xuICAgIH0oQ29udHJvbENvbnRhaW5lcikpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkMTIgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICB2YXIgZm9ybUdyb3VwTmFtZVByb3ZpZGVyID0ge1xuICAgICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZvcm1Hcm91cE5hbWU7IH0pXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAd2hhdEl0RG9lcyBTeW5jcyBhIG5lc3RlZCB7QGxpbmsgRm9ybUdyb3VwfSB0byBhIERPTSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQGhvd1RvVXNlXG4gICAgICpcbiAgICAgKiBUaGlzIGRpcmVjdGl2ZSBjYW4gb25seSBiZSB1c2VkIHdpdGggYSBwYXJlbnQge0BsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0gKHNlbGVjdG9yOlxuICAgICAqIGBbZm9ybUdyb3VwXWApLlxuICAgICAqXG4gICAgICogSXQgYWNjZXB0cyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIG5lc3RlZCB7QGxpbmsgRm9ybUdyb3VwfSB5b3Ugd2FudCB0byBsaW5rLCBhbmRcbiAgICAgKiB3aWxsIGxvb2sgZm9yIGEge0BsaW5rIEZvcm1Hcm91cH0gcmVnaXN0ZXJlZCB3aXRoIHRoYXQgbmFtZSBpbiB0aGUgcGFyZW50XG4gICAgICoge0BsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgeW91IHBhc3NlZCBpbnRvIHtAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9LlxuICAgICAqXG4gICAgICogTmVzdGVkIGZvcm0gZ3JvdXBzIGNhbiBjb21lIGluIGhhbmR5IHdoZW4geW91IHdhbnQgdG8gdmFsaWRhdGUgYSBzdWItZ3JvdXAgb2YgYVxuICAgICAqIGZvcm0gc2VwYXJhdGVseSBmcm9tIHRoZSByZXN0IG9yIHdoZW4geW91J2QgbGlrZSB0byBncm91cCB0aGUgdmFsdWVzIG9mIGNlcnRhaW5cbiAgICAgKiBjb250cm9scyBpbnRvIHRoZWlyIG93biBuZXN0ZWQgb2JqZWN0LlxuICAgICAqXG4gICAgICogKipBY2Nlc3MgdGhlIGdyb3VwKio6IFlvdSBjYW4gYWNjZXNzIHRoZSBhc3NvY2lhdGVkIHtAbGluayBGb3JtR3JvdXB9IHVzaW5nIHRoZVxuICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2wuZ2V0fSBtZXRob2QuIEV4OiBgdGhpcy5mb3JtLmdldCgnbmFtZScpYC5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gYWxzbyBhY2Nlc3MgaW5kaXZpZHVhbCBjb250cm9scyB3aXRoaW4gdGhlIGdyb3VwIHVzaW5nIGRvdCBzeW50YXguXG4gICAgICogRXg6IGB0aGlzLmZvcm0uZ2V0KCduYW1lLmZpcnN0JylgXG4gICAgICpcbiAgICAgKiAqKkdldCB0aGUgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZVxuICAgICAqIHtAbGluayBGb3JtR3JvdXB9LiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW4ge0BsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gICAgICpcbiAgICAgKiAqKlNldCB0aGUgdmFsdWUqKjogWW91IGNhbiBzZXQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgZWFjaCBjaGlsZCBjb250cm9sIHdoZW4gaW5zdGFudGlhdGluZ1xuICAgICAqIHRoZSB7QGxpbmsgRm9ybUdyb3VwfSwgb3IgeW91IGNhbiBzZXQgaXQgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZ1xuICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yIHtAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX0uXG4gICAgICpcbiAgICAgKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGdyb3VwLCB5b3UgY2FuXG4gICAgICogc3Vic2NyaWJlIHRvIHRoZSB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc28gbGlzdGVuIHRvXG4gICAgICoge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXNDaGFuZ2VzfSB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBpc1xuICAgICAqIHJlLWNhbGN1bGF0ZWQuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICoge0BleGFtcGxlIGZvcm1zL3RzL25lc3RlZEZvcm1Hcm91cC9uZXN0ZWRfZm9ybV9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiAqICoqTmdNb2R1bGUqKjogYFJlYWN0aXZlRm9ybXNNb2R1bGVgXG4gICAgICpcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1Hcm91cE5hbWUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMTIoRm9ybUdyb3VwTmFtZSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gRm9ybUdyb3VwTmFtZShwYXJlbnQsIHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0b3JzID0gdmFsaWRhdG9ycztcbiAgICAgICAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycztcbiAgICAgICAgfVxuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIEZvcm1Hcm91cE5hbWUucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX2hhc0ludmFsaWRQYXJlbnQodGhpcy5fcGFyZW50KSkge1xuICAgICAgICAgICAgICAgIFJlYWN0aXZlRXJyb3JzLmdyb3VwUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1Hcm91cE5hbWUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2Zvcm1Hcm91cE5hbWVdJywgcHJvdmlkZXJzOiBbZm9ybUdyb3VwTmFtZVByb3ZpZGVyXSB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIEZvcm1Hcm91cE5hbWUuY3RvclBhcmFtZXRlcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNraXBTZWxmIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICBGb3JtR3JvdXBOYW1lLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Zvcm1Hcm91cE5hbWUnLF0gfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUdyb3VwTmFtZTtcbiAgICB9KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSk7XG4gICAgdmFyIGZvcm1BcnJheU5hbWVQcm92aWRlciA9IHtcbiAgICAgICAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBGb3JtQXJyYXlOYW1lOyB9KVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHdoYXRJdERvZXMgU3luY3MgYSBuZXN0ZWQge0BsaW5rIEZvcm1BcnJheX0gdG8gYSBET00gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBob3dUb1VzZVxuICAgICAqXG4gICAgICogVGhpcyBkaXJlY3RpdmUgaXMgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIGEgcGFyZW50IHtAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IChzZWxlY3RvcjpcbiAgICAgKiBgW2Zvcm1Hcm91cF1gKS5cbiAgICAgKlxuICAgICAqIEl0IGFjY2VwdHMgdGhlIHN0cmluZyBuYW1lIG9mIHRoZSBuZXN0ZWQge0BsaW5rIEZvcm1BcnJheX0geW91IHdhbnQgdG8gbGluaywgYW5kXG4gICAgICogd2lsbCBsb29rIGZvciBhIHtAbGluayBGb3JtQXJyYXl9IHJlZ2lzdGVyZWQgd2l0aCB0aGF0IG5hbWUgaW4gdGhlIHBhcmVudFxuICAgICAqIHtAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIHlvdSBwYXNzZWQgaW50byB7QGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfS5cbiAgICAgKlxuICAgICAqIE5lc3RlZCBmb3JtIGFycmF5cyBjYW4gY29tZSBpbiBoYW5keSB3aGVuIHlvdSBoYXZlIGEgZ3JvdXAgb2YgZm9ybSBjb250cm9scyBidXRcbiAgICAgKiB5b3UncmUgbm90IHN1cmUgaG93IG1hbnkgdGhlcmUgd2lsbCBiZS4gRm9ybSBhcnJheXMgYWxsb3cgeW91IHRvIGNyZWF0ZSBuZXdcbiAgICAgKiBmb3JtIGNvbnRyb2xzIGR5bmFtaWNhbGx5LlxuICAgICAqXG4gICAgICogKipBY2Nlc3MgdGhlIGFycmF5Kio6IFlvdSBjYW4gYWNjZXNzIHRoZSBhc3NvY2lhdGVkIHtAbGluayBGb3JtQXJyYXl9IHVzaW5nIHRoZVxuICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2wuZ2V0fSBtZXRob2Qgb24gdGhlIHBhcmVudCB7QGxpbmsgRm9ybUdyb3VwfS5cbiAgICAgKiBFeDogYHRoaXMuZm9ybS5nZXQoJ2NpdGllcycpYC5cbiAgICAgKlxuICAgICAqICoqR2V0IHRoZSB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlXG4gICAgICoge0BsaW5rIEZvcm1BcnJheX0uIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpbiB7QGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAgICAgKlxuICAgICAqICoqU2V0IHRoZSB2YWx1ZSoqOiBZb3UgY2FuIHNldCBhbiBpbml0aWFsIHZhbHVlIGZvciBlYWNoIGNoaWxkIGNvbnRyb2wgd2hlbiBpbnN0YW50aWF0aW5nXG4gICAgICogdGhlIHtAbGluayBGb3JtQXJyYXl9LCBvciB5b3UgY2FuIHNldCB0aGUgdmFsdWUgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZyB0aGVcbiAgICAgKiB7QGxpbmsgRm9ybUFycmF5fSdzIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yIHtAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX1cbiAgICAgKiBtZXRob2RzLlxuICAgICAqXG4gICAgICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBhcnJheSwgeW91IGNhblxuICAgICAqIHN1YnNjcmliZSB0byB0aGUge0BsaW5rIEZvcm1BcnJheX0ncyB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc29cbiAgICAgKiBsaXN0ZW4gdG8gaXRzIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvblxuICAgICAqIHN0YXR1cyBpcyByZS1jYWxjdWxhdGVkLlxuICAgICAqXG4gICAgICogKipBZGQgbmV3IGNvbnRyb2xzKio6IFlvdSBjYW4gYWRkIG5ldyBjb250cm9scyB0byB0aGUge0BsaW5rIEZvcm1BcnJheX0gZHluYW1pY2FsbHkgYnlcbiAgICAgKiBjYWxsaW5nIGl0cyB7QGxpbmsgRm9ybUFycmF5LnB1c2h9IG1ldGhvZC5cbiAgICAgKiAgRXg6IGB0aGlzLmZvcm0uZ2V0KCdjaXRpZXMnKS5wdXNoKG5ldyBGb3JtQ29udHJvbCgpKTtgXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICoge0BleGFtcGxlIGZvcm1zL3RzL25lc3RlZEZvcm1BcnJheS9uZXN0ZWRfZm9ybV9hcnJheV9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgKlxuICAgICAqICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiAqICoqTmdNb2R1bGUqKjogYFJlYWN0aXZlRm9ybXNNb2R1bGVgXG4gICAgICpcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1BcnJheU5hbWUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMTIoRm9ybUFycmF5TmFtZSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gRm9ybUFycmF5TmFtZShwYXJlbnQsIHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0b3JzID0gdmFsaWRhdG9ycztcbiAgICAgICAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycztcbiAgICAgICAgfVxuICAgICAgICBGb3JtQXJyYXlOYW1lLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLmFkZEZvcm1BcnJheSh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUFycmF5TmFtZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUZvcm1BcnJheSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1BcnJheU5hbWUucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZvcm1EaXJlY3RpdmUuZ2V0Rm9ybUFycmF5KHRoaXMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1BcnJheU5hbWUucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudCA/IHRoaXMuX3BhcmVudC5mb3JtRGlyZWN0aXZlIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnRyb2xQYXRoKHRoaXMubmFtZSwgdGhpcy5fcGFyZW50KTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQXJyYXlOYW1lLnByb3RvdHlwZSwgXCJ2YWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQXJyYXlOYW1lLnByb3RvdHlwZSwgXCJhc3luY1ZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fYXN5bmNWYWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIEZvcm1BcnJheU5hbWUucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX2hhc0ludmFsaWRQYXJlbnQodGhpcy5fcGFyZW50KSkge1xuICAgICAgICAgICAgICAgIFJlYWN0aXZlRXJyb3JzLmFycmF5UGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1BcnJheU5hbWUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2Zvcm1BcnJheU5hbWVdJywgcHJvdmlkZXJzOiBbZm9ybUFycmF5TmFtZVByb3ZpZGVyXSB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIEZvcm1BcnJheU5hbWUuY3RvclBhcmFtZXRlcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNraXBTZWxmIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICBGb3JtQXJyYXlOYW1lLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Zvcm1BcnJheU5hbWUnLF0gfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUFycmF5TmFtZTtcbiAgICB9KENvbnRyb2xDb250YWluZXIpKTtcbiAgICBmdW5jdGlvbiBfaGFzSW52YWxpZFBhcmVudChwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuICEocGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwTmFtZSkgJiYgIShwYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBEaXJlY3RpdmUpICYmXG4gICAgICAgICAgICAhKHBhcmVudCBpbnN0YW5jZW9mIEZvcm1BcnJheU5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDEwID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIGNvbnRyb2xOYW1lQmluZGluZyA9IHtcbiAgICAgICAgcHJvdmlkZTogTmdDb250cm9sLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZvcm1Db250cm9sTmFtZTsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEB3aGF0SXREb2VzICBTeW5jcyBhIHtAbGluayBGb3JtQ29udHJvbH0gaW4gYW4gZXhpc3Rpbmcge0BsaW5rIEZvcm1Hcm91cH0gdG8gYSBmb3JtIGNvbnRyb2xcbiAgICAgKiBlbGVtZW50IGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBJbiBvdGhlciB3b3JkcywgdGhpcyBkaXJlY3RpdmUgZW5zdXJlcyB0aGF0IGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUge0BsaW5rIEZvcm1Db250cm9sfVxuICAgICAqIGluc3RhbmNlIHByb2dyYW1tYXRpY2FsbHkgd2lsbCBiZSB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCAobW9kZWwgLT4gdmlldykuIENvbnZlcnNlbHksXG4gICAgICogYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCB0aHJvdWdoIHVzZXIgaW5wdXQgd2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlXG4gICAgICoge0BsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSAodmlldyAtPiBtb2RlbCkuXG4gICAgICpcbiAgICAgKiBAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIFRoaXMgZGlyZWN0aXZlIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCBhIHBhcmVudCB7QGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfSAoc2VsZWN0b3I6XG4gICAgICogYFtmb3JtR3JvdXBdYCkuXG4gICAgICpcbiAgICAgKiBJdCBhY2NlcHRzIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUge0BsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSB5b3Ugd2FudCB0b1xuICAgICAqIGxpbmssIGFuZCB3aWxsIGxvb2sgZm9yIGEge0BsaW5rIEZvcm1Db250cm9sfSByZWdpc3RlcmVkIHdpdGggdGhhdCBuYW1lIGluIHRoZVxuICAgICAqIGNsb3Nlc3Qge0BsaW5rIEZvcm1Hcm91cH0gb3Ige0BsaW5rIEZvcm1BcnJheX0gYWJvdmUgaXQuXG4gICAgICpcbiAgICAgKiAqKkFjY2VzcyB0aGUgY29udHJvbCoqOiBZb3UgY2FuIGFjY2VzcyB0aGUge0BsaW5rIEZvcm1Db250cm9sfSBhc3NvY2lhdGVkIHdpdGhcbiAgICAgKiB0aGlzIGRpcmVjdGl2ZSBieSB1c2luZyB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbC5nZXR9IG1ldGhvZC5cbiAgICAgKiBFeDogYHRoaXMuZm9ybS5nZXQoJ2ZpcnN0Jyk7YFxuICAgICAqXG4gICAgICogKipHZXQgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZSB7QGxpbmsgRm9ybUNvbnRyb2x9LlxuICAgICAqIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpbiB7QGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAgICAgKlxuICAgICAqICAqKlNldCB2YWx1ZSoqOiBZb3UgY2FuIHNldCBhbiBpbml0aWFsIHZhbHVlIGZvciB0aGUgY29udHJvbCB3aGVuIGluc3RhbnRpYXRpbmcgdGhlXG4gICAgICogIHtAbGluayBGb3JtQ29udHJvbH0sIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmdcbiAgICAgKiAge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zZXRWYWx1ZX0gb3Ige0BsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfS5cbiAgICAgKlxuICAgICAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCwgeW91IGNhblxuICAgICAqIHN1YnNjcmliZSB0byB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgaXNcbiAgICAgKiByZS1jYWxjdWxhdGVkLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIEluIHRoaXMgZXhhbXBsZSwgd2UgY3JlYXRlIGZvcm0gY29udHJvbHMgZm9yIGZpcnN0IG5hbWUgYW5kIGxhc3QgbmFtZS5cbiAgICAgKlxuICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtR3JvdXAvc2ltcGxlX2Zvcm1fZ3JvdXBfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICpcbiAgICAgKiBUbyBzZWUgYGZvcm1Db250cm9sTmFtZWAgZXhhbXBsZXMgd2l0aCBkaWZmZXJlbnQgZm9ybSBjb250cm9sIHR5cGVzLCBzZWU6XG4gICAgICpcbiAgICAgKiAqIFJhZGlvIGJ1dHRvbnM6IHtAbGluayBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICAgICAqICogU2VsZWN0czoge0BsaW5rIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICAgICAqXG4gICAgICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICpcbiAgICAgKiAqKk5nTW9kdWxlKio6IHtAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfVxuICAgICAqXG4gICAgICogIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRm9ybUNvbnRyb2xOYW1lID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDEwKEZvcm1Db250cm9sTmFtZSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gRm9ybUNvbnRyb2xOYW1lKHBhcmVudCwgdmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzLCB2YWx1ZUFjY2Vzc29ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9hZGRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl9yYXdWYWxpZGF0b3JzID0gdmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3NvciA9IHNlbGVjdFZhbHVlQWNjZXNzb3IodGhpcywgdmFsdWVBY2Nlc3NvcnMpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcImlzRGlzYWJsZWRcIiwge1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoaXNEaXNhYmxlZCkgeyBSZWFjdGl2ZUVycm9ycy5kaXNhYmxlZEF0dHJXYXJuaW5nKCk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fYWRkZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0VXBDb250cm9sKCk7XG4gICAgICAgICAgICBpZiAoaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy52aWV3TW9kZWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS51cGRhdGVNb2RlbCh0aGlzLCB0aGlzLm1vZGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1EaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlQ29udHJvbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS52aWV3VG9Nb2RlbFVwZGF0ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQobmV3VmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3BhcmVudCA/IHRoaXMuX3BhcmVudC5mb3JtRGlyZWN0aXZlIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcInZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3Jhd1ZhbGlkYXRvcnMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUuX2NoZWNrUGFyZW50VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cE5hbWUpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50IGluc3RhbmNlb2YgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBSZWFjdGl2ZUVycm9ycy5uZ01vZGVsR3JvdXBFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwTmFtZSkgJiYgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBEaXJlY3RpdmUpICYmXG4gICAgICAgICAgICAgICAgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBGb3JtQXJyYXlOYW1lKSkge1xuICAgICAgICAgICAgICAgIFJlYWN0aXZlRXJyb3JzLmNvbnRyb2xQYXJlbnRFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5fc2V0VXBDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tQYXJlbnRUeXBlKCk7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9sID0gdGhpcy5mb3JtRGlyZWN0aXZlLmFkZENvbnRyb2wodGhpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sLmRpc2FibGVkICYmIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9hZGRlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1Db250cm9sTmFtZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbZm9ybUNvbnRyb2xOYW1lXScsIHByb3ZpZGVyczogW2NvbnRyb2xOYW1lQmluZGluZ10gfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtQ29udHJvbE5hbWUuY3RvclBhcmFtZXRlcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNraXBTZWxmIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMVUVfQUNDRVNTT1IsXSB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Zvcm1Db250cm9sTmFtZScsXSB9LF0sXG4gICAgICAgICAgICAnbW9kZWwnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWwnLF0gfSxdLFxuICAgICAgICAgICAgJ3VwZGF0ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3V0cHV0LCBhcmdzOiBbJ25nTW9kZWxDaGFuZ2UnLF0gfSxdLFxuICAgICAgICAgICAgJ2lzRGlzYWJsZWQnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Rpc2FibGVkJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1Db250cm9sTmFtZTtcbiAgICB9KE5nQ29udHJvbCkpO1xuXG4gICAgdmFyIFJFUVVJUkVEX1ZBTElEQVRPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBSZXF1aXJlZFZhbGlkYXRvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGByZXF1aXJlZGAgdmFsaWRhdG9yIHRvIGFueSBjb250cm9scyBtYXJrZWQgd2l0aCB0aGVcbiAgICAgKiBgcmVxdWlyZWRgIGF0dHJpYnV0ZSwgdmlhIHRoZSB7QGxpbmsgTkdfVkFMSURBVE9SU30gYmluZGluZy5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiA8aW5wdXQgbmFtZT1cImZ1bGxOYW1lXCIgbmdNb2RlbCByZXF1aXJlZD5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgUmVxdWlyZWRWYWxpZGF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBSZXF1aXJlZFZhbGlkYXRvcigpIHtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVxdWlyZWRWYWxpZGF0b3IucHJvdG90eXBlLCBcInJlcXVpcmVkXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVpcmVkID0gaXNQcmVzZW50KHZhbHVlKSAmJiBcIlwiICsgdmFsdWUgIT09ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCA/IFZhbGlkYXRvcnMucmVxdWlyZWQoYykgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBSZXF1aXJlZFZhbGlkYXRvci5wcm90b3R5cGUucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICBSZXF1aXJlZFZhbGlkYXRvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW3JlcXVpcmVkXVtmb3JtQ29udHJvbE5hbWVdLFtyZXF1aXJlZF1bZm9ybUNvbnRyb2xdLFtyZXF1aXJlZF1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbUkVRVUlSRURfVkFMSURBVE9SXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJ1thdHRyLnJlcXVpcmVkXSc6ICdyZXF1aXJlZD8gXCJcIiA6IG51bGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBSZXF1aXJlZFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IFtdO1xuICAgICAgICBSZXF1aXJlZFZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICdyZXF1aXJlZCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmVxdWlyZWRWYWxpZGF0b3I7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiBQcm92aWRlciB3aGljaCBhZGRzIHtAbGluayBNaW5MZW5ndGhWYWxpZGF0b3J9IHRvIHtAbGluayBOR19WQUxJREFUT1JTfS5cbiAgICAgKlxuICAgICAqICMjIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgY29tbW9uL2Zvcm1zL3RzL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyByZWdpb249J21pbid9XG4gICAgICovXG4gICAgdmFyIE1JTl9MRU5HVEhfVkFMSURBVE9SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1pbkxlbmd0aFZhbGlkYXRvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIGRpcmVjdGl2ZSB3aGljaCBpbnN0YWxscyB0aGUge0BsaW5rIE1pbkxlbmd0aFZhbGlkYXRvcn0gZm9yIGFueSBgZm9ybUNvbnRyb2xOYW1lYCxcbiAgICAgKiBgZm9ybUNvbnRyb2xgLCBvciBjb250cm9sIHdpdGggYG5nTW9kZWxgIHRoYXQgYWxzbyBoYXMgYSBgbWlubGVuZ3RoYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIE1pbkxlbmd0aFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE1pbkxlbmd0aFZhbGlkYXRvcigpIHtcbiAgICAgICAgfVxuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLl9jcmVhdGVWYWxpZGF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1pbkxlbmd0aChwYXJzZUludCh0aGlzLm1pbmxlbmd0aCwgMTApKTtcbiAgICAgICAgfTtcbiAgICAgICAgTWluTGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlc1snbWlubGVuZ3RoJ10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb25DaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIGlzUHJlc2VudCh0aGlzLm1pbmxlbmd0aCkgPyB0aGlzLl92YWxpZGF0b3IoYykgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfTtcbiAgICAgICAgTWluTGVuZ3RoVmFsaWRhdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbbWlubGVuZ3RoXVtmb3JtQ29udHJvbE5hbWVdLFttaW5sZW5ndGhdW2Zvcm1Db250cm9sXSxbbWlubGVuZ3RoXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtNSU5fTEVOR1RIX1ZBTElEQVRPUl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICdbYXR0ci5taW5sZW5ndGhdJzogJ21pbmxlbmd0aD8gbWlubGVuZ3RoIDogbnVsbCcgfVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE1pbkxlbmd0aFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IFtdO1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbWlubGVuZ3RoJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBNaW5MZW5ndGhWYWxpZGF0b3I7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiBQcm92aWRlciB3aGljaCBhZGRzIHtAbGluayBNYXhMZW5ndGhWYWxpZGF0b3J9IHRvIHtAbGluayBOR19WQUxJREFUT1JTfS5cbiAgICAgKlxuICAgICAqICMjIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiB7QGV4YW1wbGUgY29tbW9uL2Zvcm1zL3RzL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyByZWdpb249J21heCd9XG4gICAgICovXG4gICAgdmFyIE1BWF9MRU5HVEhfVkFMSURBVE9SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1heExlbmd0aFZhbGlkYXRvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIGRpcmVjdGl2ZSB3aGljaCBpbnN0YWxscyB0aGUge0BsaW5rIE1heExlbmd0aFZhbGlkYXRvcn0gZm9yIGFueSBgZm9ybUNvbnRyb2xOYW1lLFxuICAgICAqIGBmb3JtQ29udHJvbGAsXG4gICAgICogb3IgY29udHJvbCB3aXRoIGBuZ01vZGVsYCB0aGF0IGFsc28gaGFzIGEgYG1heGxlbmd0aGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBNYXhMZW5ndGhWYWxpZGF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBNYXhMZW5ndGhWYWxpZGF0b3IoKSB7XG4gICAgICAgIH1cbiAgICAgICAgTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5fY3JlYXRlVmFsaWRhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gVmFsaWRhdG9ycy5tYXhMZW5ndGgocGFyc2VJbnQodGhpcy5tYXhsZW5ndGgsIDEwKSk7XG4gICAgICAgIH07XG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgaWYgKGNoYW5nZXNbJ21heGxlbmd0aCddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1ByZXNlbnQodGhpcy5tYXhsZW5ndGgpID8gdGhpcy5fdmFsaWRhdG9yKGMpIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH07XG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW21heGxlbmd0aF1bZm9ybUNvbnRyb2xOYW1lXSxbbWF4bGVuZ3RoXVtmb3JtQ29udHJvbF0sW21heGxlbmd0aF1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbTUFYX0xFTkdUSF9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnW2F0dHIubWF4bGVuZ3RoXSc6ICdtYXhsZW5ndGg/IG1heGxlbmd0aCA6IG51bGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IuY3RvclBhcmFtZXRlcnMgPSBbXTtcbiAgICAgICAgTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ21heGxlbmd0aCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTWF4TGVuZ3RoVmFsaWRhdG9yO1xuICAgIH0oKSk7XG4gICAgdmFyIFBBVFRFUk5fVkFMSURBVE9SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFBhdHRlcm5WYWxpZGF0b3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBEaXJlY3RpdmUgdGhhdCBhZGRzIHRoZSBgcGF0dGVybmAgdmFsaWRhdG9yIHRvIGFueSBjb250cm9scyBtYXJrZWQgd2l0aCB0aGVcbiAgICAgKiBgcGF0dGVybmAgYXR0cmlidXRlLCB2aWEgdGhlIHtAbGluayBOR19WQUxJREFUT1JTfSBiaW5kaW5nLiBVc2VzIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAqIGFzIHRoZSByZWdleCB0byB2YWxpZGF0ZSBDb250cm9sIHZhbHVlIGFnYWluc3QuICBGb2xsb3dzIHBhdHRlcm4gYXR0cmlidXRlXG4gICAgICogc2VtYW50aWNzOyBpLmUuIHJlZ2V4IG11c3QgbWF0Y2ggZW50aXJlIENvbnRyb2wgdmFsdWUuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogPGlucHV0IFtuYW1lXT1cImZ1bGxOYW1lXCIgcGF0dGVybj1cIlthLXpBLVogXSpcIiBuZ01vZGVsPlxuICAgICAqIGBgYFxuICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgUGF0dGVyblZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFBhdHRlcm5WYWxpZGF0b3IoKSB7XG4gICAgICAgIH1cbiAgICAgICAgUGF0dGVyblZhbGlkYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZhbGlkYXRvciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fdmFsaWRhdG9yID0gVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMucGF0dGVybik7IH07XG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzWydwYXR0ZXJuJ10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb25DaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1ByZXNlbnQodGhpcy5wYXR0ZXJuKSA/IHRoaXMuX3ZhbGlkYXRvcihjKSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IucHJvdG90eXBlLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfTtcbiAgICAgICAgUGF0dGVyblZhbGlkYXRvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW3BhdHRlcm5dW2Zvcm1Db250cm9sTmFtZV0sW3BhdHRlcm5dW2Zvcm1Db250cm9sXSxbcGF0dGVybl1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbUEFUVEVSTl9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnW2F0dHIucGF0dGVybl0nOiAncGF0dGVybj8gcGF0dGVybiA6IG51bGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBQYXR0ZXJuVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzID0gW107XG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAncGF0dGVybic6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUGF0dGVyblZhbGlkYXRvcjtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQHdoYXRJdERvZXMgQ3JlYXRlcyBhbiB7QGxpbmsgQWJzdHJhY3RDb250cm9sfSBmcm9tIGEgdXNlci1zcGVjaWZpZWQgY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEl0IGlzIGVzc2VudGlhbGx5IHN5bnRhY3RpYyBzdWdhciB0aGF0IHNob3J0ZW5zIHRoZSBgbmV3IEZvcm1Hcm91cCgpYCxcbiAgICAgKiBgbmV3IEZvcm1Db250cm9sKClgLCBhbmQgYG5ldyBGb3JtQXJyYXkoKWAgYm9pbGVycGxhdGUgdGhhdCBjYW4gYnVpbGQgdXAgaW4gbGFyZ2VyXG4gICAgICogZm9ybXMuXG4gICAgICpcbiAgICAgKiBAaG93VG9Vc2VcbiAgICAgKlxuICAgICAqIFRvIHVzZSwgaW5qZWN0IGBGb3JtQnVpbGRlcmAgaW50byB5b3VyIGNvbXBvbmVudCBjbGFzcy4gWW91IGNhbiB0aGVuIGNhbGwgaXRzIG1ldGhvZHNcbiAgICAgKiBkaXJlY3RseS5cbiAgICAgKlxuICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9mb3JtQnVpbGRlci9mb3JtX2J1aWxkZXJfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICpcbiAgICAgKiAgKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgKlxuICAgICAqICAqICoqTmdNb2R1bGUqKjoge0BsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9XG4gICAgICpcbiAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1CdWlsZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gRm9ybUJ1aWxkZXIoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdCBhIG5ldyB7QGxpbmsgRm9ybUdyb3VwfSB3aXRoIHRoZSBnaXZlbiBtYXAgb2YgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICogVmFsaWQga2V5cyBmb3IgdGhlIGBleHRyYWAgcGFyYW1ldGVyIG1hcCBhcmUgYHZhbGlkYXRvcmAgYW5kIGBhc3luY1ZhbGlkYXRvcmAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFNlZSB0aGUge0BsaW5rIEZvcm1Hcm91cH0gY29uc3RydWN0b3IgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1CdWlsZGVyLnByb3RvdHlwZS5ncm91cCA9IGZ1bmN0aW9uIChjb250cm9sc0NvbmZpZywgZXh0cmEpIHtcbiAgICAgICAgICAgIGlmIChleHRyYSA9PT0gdm9pZCAwKSB7IGV4dHJhID0gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIGNvbnRyb2xzID0gdGhpcy5fcmVkdWNlQ29udHJvbHMoY29udHJvbHNDb25maWcpO1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRvciA9IGlzUHJlc2VudChleHRyYSkgPyBleHRyYVsndmFsaWRhdG9yJ10gOiBudWxsO1xuICAgICAgICAgICAgdmFyIGFzeW5jVmFsaWRhdG9yID0gaXNQcmVzZW50KGV4dHJhKSA/IGV4dHJhWydhc3luY1ZhbGlkYXRvciddIDogbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGNvbnRyb2xzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdCBhIG5ldyB7QGxpbmsgRm9ybUNvbnRyb2x9IHdpdGggdGhlIGdpdmVuIGBmb3JtU3RhdGVgLGB2YWxpZGF0b3JgLCBhbmRcbiAgICAgICAgICogYGFzeW5jVmFsaWRhdG9yYC5cbiAgICAgICAgICpcbiAgICAgICAgICogYGZvcm1TdGF0ZWAgY2FuIGVpdGhlciBiZSBhIHN0YW5kYWxvbmUgdmFsdWUgZm9yIHRoZSBmb3JtIGNvbnRyb2wgb3IgYW4gb2JqZWN0XG4gICAgICAgICAqIHRoYXQgY29udGFpbnMgYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkIHN0YXR1cy5cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIEZvcm1CdWlsZGVyLnByb3RvdHlwZS5jb250cm9sID0gZnVuY3Rpb24gKGZvcm1TdGF0ZSwgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IHZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChhc3luY1ZhbGlkYXRvciA9PT0gdm9pZCAwKSB7IGFzeW5jVmFsaWRhdG9yID0gbnVsbDsgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb3JtQ29udHJvbChmb3JtU3RhdGUsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0IGEge0BsaW5rIEZvcm1BcnJheX0gZnJvbSB0aGUgZ2l2ZW4gYGNvbnRyb2xzQ29uZmlnYCBhcnJheSBvZlxuICAgICAgICAgKiBjb25maWd1cmF0aW9uLCB3aXRoIHRoZSBnaXZlbiBvcHRpb25hbCBgdmFsaWRhdG9yYCBhbmQgYGFzeW5jVmFsaWRhdG9yYC5cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1CdWlsZGVyLnByb3RvdHlwZS5hcnJheSA9IGZ1bmN0aW9uIChjb250cm9sc0NvbmZpZywgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIHZhciBjb250cm9scyA9IGNvbnRyb2xzQ29uZmlnLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gX3RoaXMuX2NyZWF0ZUNvbnRyb2woYyk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb3JtQXJyYXkoY29udHJvbHMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICB9O1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIEZvcm1CdWlsZGVyLnByb3RvdHlwZS5fcmVkdWNlQ29udHJvbHMgPSBmdW5jdGlvbiAoY29udHJvbHNDb25maWcpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgY29udHJvbHMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbnRyb2xzQ29uZmlnKS5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9sTmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzW2NvbnRyb2xOYW1lXSA9IF90aGlzLl9jcmVhdGVDb250cm9sKGNvbnRyb2xzQ29uZmlnW2NvbnRyb2xOYW1lXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9scztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICBGb3JtQnVpbGRlci5wcm90b3R5cGUuX2NyZWF0ZUNvbnRyb2wgPSBmdW5jdGlvbiAoY29udHJvbENvbmZpZykge1xuICAgICAgICAgICAgaWYgKGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCB8fCBjb250cm9sQ29uZmlnIGluc3RhbmNlb2YgRm9ybUdyb3VwIHx8XG4gICAgICAgICAgICAgICAgY29udHJvbENvbmZpZyBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sQ29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheShjb250cm9sQ29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNvbnRyb2xDb25maWdbMF07XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRvciA9IGNvbnRyb2xDb25maWcubGVuZ3RoID4gMSA/IGNvbnRyb2xDb25maWdbMV0gOiBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBhc3luY1ZhbGlkYXRvciA9IGNvbnRyb2xDb25maWcubGVuZ3RoID4gMiA/IGNvbnRyb2xDb25maWdbMl0gOiBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wodmFsdWUsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUJ1aWxkZXIuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3RhYmxlIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtQnVpbGRlci5jdG9yUGFyYW1ldGVycyA9IFtdO1xuICAgICAgICByZXR1cm4gRm9ybUJ1aWxkZXI7XG4gICAgfSgpKTtcblxuICAgIHZhciBTSEFSRURfRk9STV9ESVJFQ1RJVkVTID0gW1xuICAgICAgICBOZ1NlbGVjdE9wdGlvbiwgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbiwgRGVmYXVsdFZhbHVlQWNjZXNzb3IsIE51bWJlclZhbHVlQWNjZXNzb3IsXG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IsIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ0NvbnRyb2xTdGF0dXMsIE5nQ29udHJvbFN0YXR1c0dyb3VwLCBSZXF1aXJlZFZhbGlkYXRvcixcbiAgICAgICAgTWluTGVuZ3RoVmFsaWRhdG9yLCBNYXhMZW5ndGhWYWxpZGF0b3IsIFBhdHRlcm5WYWxpZGF0b3JcbiAgICBdO1xuICAgIHZhciBURU1QTEFURV9EUklWRU5fRElSRUNUSVZFUyA9IFtOZ01vZGVsLCBOZ01vZGVsR3JvdXAsIE5nRm9ybV07XG4gICAgdmFyIFJFQUNUSVZFX0RSSVZFTl9ESVJFQ1RJVkVTID0gW0Zvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtR3JvdXBEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSwgRm9ybUdyb3VwTmFtZSwgRm9ybUFycmF5TmFtZV07XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgbW9kdWxlIHVzZWQgZm9yIHNoYXJpbmcgZGlyZWN0aXZlcyBiZXR3ZWVuIEZvcm1zTW9kdWxlIGFuZCBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgICovXG4gICAgdmFyIEludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlKCkge1xuICAgICAgICB9XG4gICAgICAgIEludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5OZ01vZHVsZSwgYXJnczogW3sgZGVjbGFyYXRpb25zOiBTSEFSRURfRk9STV9ESVJFQ1RJVkVTLCBleHBvcnRzOiBTSEFSRURfRk9STV9ESVJFQ1RJVkVTIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZS5jdG9yUGFyYW1ldGVycyA9IFtdO1xuICAgICAgICByZXR1cm4gSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZTtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5nIG1vZHVsZSBmb3IgZm9ybXMuXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBGb3Jtc01vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEZvcm1zTW9kdWxlKCkge1xuICAgICAgICB9XG4gICAgICAgIEZvcm1zTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbUmFkaW9Db250cm9sUmVnaXN0cnldLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogW0ludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUsIFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIEZvcm1zTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gW107XG4gICAgICAgIHJldHVybiBGb3Jtc01vZHVsZTtcbiAgICB9KCkpO1xuICAgIC8qKlxuICAgICAqIFRoZSBuZyBtb2R1bGUgZm9yIHJlYWN0aXZlIGZvcm1zLlxuICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgUmVhY3RpdmVGb3Jtc01vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFJlYWN0aXZlRm9ybXNNb2R1bGUoKSB7XG4gICAgICAgIH1cbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbUkVBQ1RJVkVfRFJJVkVOX0RJUkVDVElWRVNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbRm9ybUJ1aWxkZXIsIFJhZGlvQ29udHJvbFJlZ2lzdHJ5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IFtJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlLCBSRUFDVElWRV9EUklWRU5fRElSRUNUSVZFU11cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gW107XG4gICAgICAgIHJldHVybiBSZWFjdGl2ZUZvcm1zTW9kdWxlO1xuICAgIH0oKSk7XG5cbiAgICBleHBvcnRzLkFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSA9IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZTtcbiAgICBleHBvcnRzLkFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlID0gQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmU7XG4gICAgZXhwb3J0cy5DaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yID0gQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICBleHBvcnRzLkNvbnRyb2xDb250YWluZXIgPSBDb250cm9sQ29udGFpbmVyO1xuICAgIGV4cG9ydHMuTkdfVkFMVUVfQUNDRVNTT1IgPSBOR19WQUxVRV9BQ0NFU1NPUjtcbiAgICBleHBvcnRzLkRlZmF1bHRWYWx1ZUFjY2Vzc29yID0gRGVmYXVsdFZhbHVlQWNjZXNzb3I7XG4gICAgZXhwb3J0cy5OZ0NvbnRyb2wgPSBOZ0NvbnRyb2w7XG4gICAgZXhwb3J0cy5OZ0NvbnRyb2xTdGF0dXMgPSBOZ0NvbnRyb2xTdGF0dXM7XG4gICAgZXhwb3J0cy5OZ0NvbnRyb2xTdGF0dXNHcm91cCA9IE5nQ29udHJvbFN0YXR1c0dyb3VwO1xuICAgIGV4cG9ydHMuTmdGb3JtID0gTmdGb3JtO1xuICAgIGV4cG9ydHMuTmdNb2RlbCA9IE5nTW9kZWw7XG4gICAgZXhwb3J0cy5OZ01vZGVsR3JvdXAgPSBOZ01vZGVsR3JvdXA7XG4gICAgZXhwb3J0cy5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yID0gUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICBleHBvcnRzLkZvcm1Db250cm9sRGlyZWN0aXZlID0gRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG4gICAgZXhwb3J0cy5Gb3JtQ29udHJvbE5hbWUgPSBGb3JtQ29udHJvbE5hbWU7XG4gICAgZXhwb3J0cy5Gb3JtR3JvdXBEaXJlY3RpdmUgPSBGb3JtR3JvdXBEaXJlY3RpdmU7XG4gICAgZXhwb3J0cy5Gb3JtQXJyYXlOYW1lID0gRm9ybUFycmF5TmFtZTtcbiAgICBleHBvcnRzLkZvcm1Hcm91cE5hbWUgPSBGb3JtR3JvdXBOYW1lO1xuICAgIGV4cG9ydHMuTmdTZWxlY3RPcHRpb24gPSBOZ1NlbGVjdE9wdGlvbjtcbiAgICBleHBvcnRzLlNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yID0gU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgZXhwb3J0cy5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yID0gU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICBleHBvcnRzLk1heExlbmd0aFZhbGlkYXRvciA9IE1heExlbmd0aFZhbGlkYXRvcjtcbiAgICBleHBvcnRzLk1pbkxlbmd0aFZhbGlkYXRvciA9IE1pbkxlbmd0aFZhbGlkYXRvcjtcbiAgICBleHBvcnRzLlBhdHRlcm5WYWxpZGF0b3IgPSBQYXR0ZXJuVmFsaWRhdG9yO1xuICAgIGV4cG9ydHMuUmVxdWlyZWRWYWxpZGF0b3IgPSBSZXF1aXJlZFZhbGlkYXRvcjtcbiAgICBleHBvcnRzLkZvcm1CdWlsZGVyID0gRm9ybUJ1aWxkZXI7XG4gICAgZXhwb3J0cy5BYnN0cmFjdENvbnRyb2wgPSBBYnN0cmFjdENvbnRyb2w7XG4gICAgZXhwb3J0cy5Gb3JtQXJyYXkgPSBGb3JtQXJyYXk7XG4gICAgZXhwb3J0cy5Gb3JtQ29udHJvbCA9IEZvcm1Db250cm9sO1xuICAgIGV4cG9ydHMuRm9ybUdyb3VwID0gRm9ybUdyb3VwO1xuICAgIGV4cG9ydHMuTkdfQVNZTkNfVkFMSURBVE9SUyA9IE5HX0FTWU5DX1ZBTElEQVRPUlM7XG4gICAgZXhwb3J0cy5OR19WQUxJREFUT1JTID0gTkdfVkFMSURBVE9SUztcbiAgICBleHBvcnRzLlZhbGlkYXRvcnMgPSBWYWxpZGF0b3JzO1xuICAgIGV4cG9ydHMuRm9ybXNNb2R1bGUgPSBGb3Jtc01vZHVsZTtcbiAgICBleHBvcnRzLlJlYWN0aXZlRm9ybXNNb2R1bGUgPSBSZWFjdGl2ZUZvcm1zTW9kdWxlO1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQGFuZ3VsYXIvZm9ybXMvYnVuZGxlcy9mb3Jtcy51bWQuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmV0Y2hEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7IENvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbGllbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2xpZW50RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jbGllbnRzL2NsaWVudC1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXNlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXNlcy9jb21wb25lbnRzL2Nhc2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXNlRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXNlcy9jb21wb25lbnRzL2Nhc2UtZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmV3Q2FzZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXNlcy9jb21wb25lbnRzL25ldy1jYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaXRlRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jbGllbnRzL3NpdGUtZGV0YWlscy5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ2NvdW50ZXInLCBjb21wb25lbnQ6IENvdW50ZXJDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdjYXNlcycsIGNvbXBvbmVudDogQ2FzZXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdjYXNlcy9jYXNlLWRldGFpbHMvOmlkJywgY29tcG9uZW50OiBDYXNlRGV0YWlsc0NvbXBvbmVudCwgfSxcbiAgICB7IHBhdGg6ICdjYXNlcy9uZXctY2FzZScsIGNvbXBvbmVudDogTmV3Q2FzZUNvbXBvbmVudCwgfSxcbiAgICB7IHBhdGg6ICdmZXRjaC1kYXRhJywgY29tcG9uZW50OiBGZXRjaERhdGFDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdjbGllbnRzJywgY29tcG9uZW50OiBDbGllbnRzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnY2xpZW50cy9jbGllbnQtZGV0YWlscy86aWQnLCBjb21wb25lbnQ6IENsaWVudERldGFpbHNDb21wb25lbnQsIH0sXG5cdHsgcGF0aDogJ2NsaWVudHMvY2xpZW50LWRldGFpbHMvc2l0ZS1kZXRhaWxzLzppZCcsIGNvbXBvbmVudDogU2l0ZURldGFpbHNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICAgLy9zdHlsZXM6IFtyZXF1aXJlKCcuLycpXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgUHJvZHVjdCB7XG5cdHJlYWRvbmx5IGlkOiBudW1iZXI7XG5cdGNvbnN0cnVjdG9yKHJlYWRvbmx5IG5hbWU6IHN0cmluZywgcmVhZG9ubHkgY29tbWVudDogc3RyaW5nLCByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmcsIGlkOiBudW1iZXIgPSAtMSkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0fVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZSArIFwiIFwiICsgdGhpcy52ZXJzaW9uO1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9tb2RlbHMvcHJvZHVjdC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW50RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jdXJyZW50LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTZXR1cCB9IGZyb20gJy4uLy4uL21vZGVscy9zZXR1cCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jbGllbnRzL21vZGVscy9wcm9kdWN0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuXHR0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG59KVxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnREYXRhU2VydmljZTogQ3VycmVudERhdGFTZXJ2aWNlLFxuXHRcdHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmJhY2tlbmRTZXJ2aWNlLmdldFNldHVwKCkudGhlbihzZXR1cCA9PiB0aGlzLmN1cnJlbnREYXRhU2VydmljZS5zZXR1cCA9IHNldHVwKS5jYXRjaChlcnJvciA9PiB0aGlzLmN1cnJlbnREYXRhU2VydmljZS5zZXR1cCA9IG5ldyBTZXR1cChuZXcgQXJyYXk8UHJvZHVjdD4oKSkpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jbGllbnRzL21vZGVscy9jbGllbnQnO1xuaW1wb3J0IHsgU2l0ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2xpZW50cy9tb2RlbHMvc2l0ZSc7XG5pbXBvcnQgeyBTZXR1cCB9IGZyb20gJy4uL21vZGVscy9zZXR1cCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jbGllbnRzL21vZGVscy9wcm9kdWN0JztcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9iYWNrZW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FzZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2FzZXMvbW9kZWxzL2Nhc2UnO1xuXG52YXIgY2xpZW50c19fOiBDbGllbnRbXSA9XG5cdFtcblx0XHRuZXcgQ2xpZW50KFwiQUFNXCIsIFwiQUFNIGxvbmcgZGVzY3JpcHRpdmUgbmFtZVwiLCBcIkFBTSBjb21tZW50XCIsIDEpLFxuXHRcdG5ldyBDbGllbnQoXCJCQlZBXCIsIFwiQkJWQSBsb25nIGV2ZW4gbW9yZSBkZXNjcmlwdGl2ZSBuYW1lXCIsIFwiQkJWQSBjb21tZW50XCIsIDIpXG5cdF07XG5cbnZhciBjYXNlczogQ2FzZVtdID0gW1xuICAgIG5ldyBDYXNlKFwiVE5BMTIzMjA5XCIsIFwid3d3LmJvbWJlbHRlc3R1amUuaW50dWl0aW9uLmNvbVwiLCBcIlRoaXMgaXMgZGVzY3JpcHRpb25cIiwgXCIxMi8xMi8xMlwiKSxcbiAgICBuZXcgQ2FzZShcIlROQTI2NDQwOVwiLCBcInd3dy5hbGVmYWpuaWUuaW50dWl0aW9uLmNvbVwiLCBcIlRoaXMgaXMgZGVzY3JpcHRpb25cIiwgXCIwMy8xMi8xN1wiKSxcbiAgICBuZXcgQ2FzZShcIlROQTkzNDU0M1wiLCBcInd3dy5zeW1waG9ueXNvbHV0aW9ucy5pbnR1aXRpb24uY29tXCIsIFwiVGhpcyBpcyBkZXNjcmlwdGlvblwiLCBcIjIxLzAyLzEyXCIpLFxuICAgIG5ldyBDYXNlKFwiVE5BMTU2NTg2XCIsIFwid3d3LnRlc3QuaW50dWl0aW9uLmNvbVwiLCBcIlRoaXMgaXMgZGVzY3JpcHRpb25cIiwgXCIyOC8xMi8xMVwiKSxcbiAgICBuZXcgQ2FzZShcIlROQTI0Njc1N1wiLCBcInd3dy50b21la3Rlc3QuaW50dWl0aW9uLmNvbVwiLCBcIlRoaXMgaXMgZGVzY3JpcHRpb25cIiwgXCIxMi8wOC8xMFwiKSxcbiAgICBuZXcgQ2FzZShcIlROQTIzNDMzN1wiLCBcInd3dy50ZXN0dGVzdHRlc3QuaW50dWl0aW9uLmNvbVwiLCBcIlRoaXMgaXMgZGVzY3JpcHRpb25cIiwgXCIxMi8wOC8xMFwiKSxcbiAgICBuZXcgQ2FzZShcIlROQTY0NDQzNFwiLCBcInd3dy50dHR0dHRlZWVlc3QuaW50dWl0aW9uLmNvbVwiLCBcIlRoaXMgaXMgZGVzY3JpcHRpb25cIiwgXCIxMi8wOC8xMFwiKSxcbiAgICBuZXcgQ2FzZShcIlROQTI0NjY2N1wiLCBcInd3dy50YWsuaW50dWl0aW9uLmNvbVwiLCBcIlRoaXMgaXMgZGVzY3JpcHRpb25cIiwgXCIwMS8wMy8xN1wiKVxuXTtcblxuY2xpZW50c19fWzBdLnNpdGVzLnB1c2gobmV3IFNpdGUoXCJBSUNDXCIsIFwiYWFtIHNpdGUgMSBjb21tZW50XCIsIFwiaHR0cHM6Ly9hYW1jb250ZW50LmludHVpdGlvbi5jb21cIiwgMSkpO1xuY2xpZW50c19fWzBdLnNpdGVzLnB1c2gobmV3IFNpdGUoXCJIb3N0ZWRcIiwgXCJhYW0gc2l0ZSAyIGNvbW1lbnRcIiwgXCJodHRwczovL2FhbXJ1Ymljb24uaW50dWl0aW9uLmNvbVwiLCAyKSk7XG5cbnZhciBhbGxQcm9kdWN0c19fOiBBcnJheTxQcm9kdWN0PiA9XG5cdFtcblx0XHRuZXcgUHJvZHVjdChcIktub3dIb3dcIiwgXCJLbm93SG93IGNvbW1lbnRcIiwgXCI0M1wiLCAxKSxcblx0XHRuZXcgUHJvZHVjdChcIktub3dIb3dcIiwgXCJLbm93SG93IGNvbW1lbnRcIiwgXCI0MlwiLCAyKSxcblx0XHRuZXcgUHJvZHVjdChcIktub3dIb3dcIiwgXCJLbm93SG93IGNvbW1lbnRcIiwgXCI0MVwiLCAzKSxcblx0XHRuZXcgUHJvZHVjdChcIktub3dIb3dcIiwgXCJLbm93SG93IGNvbW1lbnRcIiwgXCI0MFwiLCA0KSxcblx0XHRuZXcgUHJvZHVjdChcIk5BU0JBXCIsIFwiTkFTQkEgY29tbWVudFwiLCBcIjIwMTZcIiwgNSlcblx0XTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vY2tCYWNrZW5kU2VydmljZSBleHRlbmRzIEJhY2tlbmRTZXJ2aWNlIHtcblxuXHRnZXRDbGllbnRzKGNsaWVudElkczogc3RyaW5nW10pOiBQcm9taXNlPENsaWVudFtdPiB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShjbGllbnRzX18pO1xuXHR9XG5cblx0Z2V0Q2xpZW50KGNsaWVudElkOiBudW1iZXIpOiBQcm9taXNlPENsaWVudD4ge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxDbGllbnQ+KHJlc29sdmUgPT5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT5cblx0XHRcdFx0cmVzb2x2ZShjbGllbnRzX18uZmluZCgodmFsdWU6IENsaWVudCwgaW5kZXg6IG51bWJlciwgb2JqOiBDbGllbnRbXSkgPT4geyByZXR1cm4gdmFsdWUuaWQgPT0gY2xpZW50SWQ7IH0pKSwgMjAwMClcblx0XHQpO1xuXHR9XG5cblx0c2F2ZUNsaWVudChjbGllbnRUb1NhdmU6IENsaWVudCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4ocmVzb2x2ZSA9PiB7XG5cdFx0XHRsZXQgZXhpc3RpbmdDbGllbnQgPSBjbGllbnRzX18uZmluZCgodmFsdWU6IENsaWVudCwgaW5kZXg6IG51bWJlciwgb2JqOiBDbGllbnRbXSkgPT4geyByZXR1cm4gdmFsdWUuaWQgPT0gY2xpZW50VG9TYXZlLmlkOyB9KTtcblx0XHRcdGxldCBleGlzdGluZ0NsaWVudEluZGV4ID0gY2xpZW50c19fLmluZGV4T2YoZXhpc3RpbmdDbGllbnQpO1xuXHRcdFx0Y2xpZW50c19fLnNwbGljZShleGlzdGluZ0NsaWVudEluZGV4LCAxLCBjbGllbnRUb1NhdmUpO1xuXHRcdFx0cmVzb2x2ZShcIlwiKTtcblx0XHR9KTtcblx0fVxuXG5cdGFkZENsaWVudChjbGllbnRUb0FkZDogQ2xpZW50KTogUHJvbWlzZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPihyZXNvbHZlID0+IHtcblx0XHRcdGxldCBtb2NrTmV3Q2xpZW50ID0gbmV3IENsaWVudChjbGllbnRUb0FkZC5jb2RlLCBjbGllbnRUb0FkZC5uYW1lLCBjbGllbnRUb0FkZC5jb21tZW50LCBjbGllbnRzX18ubGVuZ3RoICsgMSk7XG5cdFx0XHRjbGllbnRzX18ucHVzaChtb2NrTmV3Q2xpZW50KTtcblx0XHRcdHJlc29sdmUoY2xpZW50c19fLmxlbmd0aCk7XG5cdFx0fSk7XG5cblx0fVxuXG5cdGdldFNldHVwKCk6IFByb21pc2U8U2V0dXA+IHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBTZXR1cChhbGxQcm9kdWN0c19fKSk7XG5cdH1cblxuXHRhZGRTaXRlKGNsaWVudElkOiBudW1iZXIsIHNpdGVUb0FkZDogU2l0ZSk6IFByb21pc2U8bnVtYmVyPiB7XG5cdFx0bGV0IGV4aXN0aW5nQ2xpZW50ID0gY2xpZW50c19fLmZpbmQoKHZhbHVlOiBDbGllbnQsIGluZGV4OiBudW1iZXIsIG9iajogQ2xpZW50W10pID0+IHsgcmV0dXJuIHZhbHVlLmlkID09IGNsaWVudElkOyB9KTtcblx0XHRleGlzdGluZ0NsaWVudC5zaXRlcy5wdXNoKG5ldyBTaXRlKHNpdGVUb0FkZC5pbnRlZ3JhdGlvblR5cGUsIHNpdGVUb0FkZC5jb21tZW50LCBzaXRlVG9BZGQudXJsLCBleGlzdGluZ0NsaWVudC5zaXRlcy5sZW5ndGggKyAxKSk7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShleGlzdGluZ0NsaWVudC5zaXRlcy5sZW5ndGgpO1xuXHR9XG5cblx0c2F2ZVNpdGUoc2l0ZVRvQWRkOiBTaXRlKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG5cbiAgICBnZXRDYXNlcyhjbGllbnRJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxDYXNlW10+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYXNlcyk7XG4gICAgfVxuXG4gICAgLy9nZXRDYXNlKGNhc2VJZDogbnVtYmVyKTogUHJvbWlzZTxDbGllbnQ+IHtcbiAgICAvLyAgICByZXR1cm4gbmV3IFByb21pc2U8Q2xpZW50PihyZXNvbHZlID0+XG4gICAgLy8gICAgICAgIHNldFRpbWVvdXQoKCkgPT5cbiAgICAvLyAgICAgICAgICAgIHJlc29sdmUoY2xpZW50c19fLmZpbmQoKHZhbHVlOiBDYXNlLCBpbmRleDogbnVtYmVyLCBvYmo6IENhc2VbXSkgPT4geyByZXR1cm4gdmFsdWUuaWQgPT0gY2FzZUlkOyB9KSksIDIwMDApXG4gICAgLy8gICAgKTtcbiAgICAvL31cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9tb2NrLmJhY2tlbmQuc2VydmljZS50cyIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzxhcHA+PC9hcHA+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Fzc2V0cy9jc3MvYW5pbWF0ZS5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hc3NldHMvY3NzL2ZyZXNoLWJvb3RzdHJhcC10YWJsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Fzc2V0cy9jc3MvcGFwZXItZGFzaGJvYXJkLmNzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYXNzZXRzL2Nzcy90aGVtaWZ5LWljb25zLmNzc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIndyYXBwZXJcXFwiPlxcblxcdDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYWluLXBhbmVsXFxcIj5cXHJcXG4gICAgICAgIDxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1saVxcXCI+PGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgaHJlZj1cXFwiY2xpZW50cy5odG1sXFxcIj5DbGllbnRzPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtbGlcXFwiPjxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiPjxpIGNsYXNzPVxcXCJ0aS1hbmdsZS1yaWdodFxcXCI+PC9pPjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWxpXFxcIj48YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiBocmVmPVxcXCJhZGRDbGllbnQuaHRtbFxcXCI+Q2xpZW50IGRldGFpbHM8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcInRpLWJlbGxcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJub3RpZmljYXRpb25cXFwiPjU8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob3RpZmljYXRpb25zPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5Ob3RpZmljYXRpb24gMTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPk5vdGlmaWNhdGlvbiAyPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+Tm90aWZpY2F0aW9uIDM8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5Ob3RpZmljYXRpb24gNDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkFub3RoZXIgbm90aWZpY2F0aW9uPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcInRpLWxvY2tcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvZyBpbjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvbmF2PlxcclxcbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICA8L2Rpdj5cXG5cXHRcXHQ8Zm9vdGVyIGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuXFx0XFx0XFx0XFx0PG5hdiBjbGFzcz1cXFwicHVsbC1sZWZ0XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8dWw+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGxpPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxhIGhyZWY9XFxcIiNcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpIGNsYXNzPVxcXCJ0aS1zZXR0aW5nc1xcXCI+PC9pPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2xpPlxcblxcdFxcdFxcdFxcdFxcdDwvdWw+XFxuXFx0XFx0XFx0XFx0PC9uYXY+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29weXJpZ2h0IHB1bGwtcmlnaHRcXFwiPlxcblxcdFxcdFxcdFxcdFxcdCZjb3B5O1xcblxcdFxcdFxcdFxcdFxcdDxzY3JpcHQ+ZG9jdW1lbnQud3JpdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTwvc2NyaXB0PlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZm9vdGVyPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmYXRhbEVycm9yLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgPHAgKm5nSWY9XFxcIiFjYXNlXFxcIj5Mb2FkaW5nIGNhc2UgZGV0YWlscy4uLjwvcD5cXG5cXG4gICAgPGRpdiAqbmdJZj1cXFwiY2FzZVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMiBjb2wtbWQtN1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyIHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbTogMTBweDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwidGl0bGVcXFwiIHN0eWxlPVxcXCJtYXJnaW4tYm90dG9tOiAyNHB4O1xcXCI+Q2FzZSBkZXRhaWxzPC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JRDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1pbnB1dFxcXCIgdmFsdWU9XFxcInt7Y2FzZS5pZH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGF0ZSBvZiBjcmVhdGlvbjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1pbnB1dFxcXCIgdmFsdWU9XFxcInt7Y2FzZS5jcmVhdGlvbkRhdGV9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC01XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNpdGU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBib3JkZXItaW5wdXRcXFwiIHZhbHVlPVxcXCJ7e2Nhc2Uuc2l0ZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVxcXCI1XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1pbnB1dCBkaXNhYmxlZElucHV0XFxcIj57e2Nhc2UuZGVzY3JpcHRpb259fTwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBjb2wtbWQtb2Zmc2V0LTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9jayB0YWJsZS1idXQgYnRuLXdkXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXNlcy9jb21wb25lbnRzL2Nhc2UtZGV0YWlscy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICA8cCAqbmdJZj1cXFwiIWNhc2VzXFxcIj5Mb2FkaW5nIGNhc2VzLi4uPC9wPlxcblxcbiAgICA8ZGl2ICpuZ0lmPVxcXCJjYXNlc1xcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMiBidXR0b25zLW5hdiBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibmV3Q2FzZSgpXFxcIiBjbGFzcz1cXFwidGFibGUtbGluay1kZXRhaWxzXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrIHRhYmxlLWJ1dFxcXCI+QWRkIGNhc2U8L2J1dHRvbj48L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyIGNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJ0aXRsZVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206IDIwcHg7XFxcIj5DYXNlcyBoaXN0b3J5PC9oND5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICAgICAgPHRhYmxlIGlkPVxcXCJmcmVzaC10YWJsZVxcXCIgY2xhc3M9XFxcInRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLWZpZWxkPVxcXCJpZFxcXCI+SUQ8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtZmllbGQ9XFxcImV2aWRlbmNlXFxcIiBkYXRhLXNvcnRhYmxlPVxcXCJ0cnVlXFxcIj48aSBjbGFzcz1cXFwidGktYXJyb3dzLXZlcnRpY2FsIHB1bGwtcmlnaHRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAxNXB4OyBtYXJnaW4tbGVmdDogNXB4OyBjb2xvcjogIzk0OTA5NzsgZm9udC1zaXplOiAxMnB4O1xcXCI+PC9pPlNpdGU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGRhdGEtZmllbGQ9XFxcImRlc2NyaXB0aW9uXFxcIj5EZXNjcmlwdGlvbjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1maWVsZD1cXFwiZGF0ZVxcXCIgZGF0YS1zb3J0YWJsZT1cXFwidHJ1ZVxcXCI+PGkgY2xhc3M9XFxcInRpLWFycm93cy12ZXJ0aWNhbCBwdWxsLXJpZ2h0XFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTVweDsgbWFyZ2luLWxlZnQ6IDVweDsgY29sb3I6ICM5NDkwOTc7IGZvbnQtc2l6ZTogMTJweDtcXFwiPjwvaT5EYXRlIG9mIGNyZWF0aW9uPC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLWZpZWxkPVxcXCJ0eXBlXFxcIj5UeXBlPC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZXRhaWxzPC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGNhc2Ugb2YgY2FzZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tjYXNlLmlkfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tjYXNlLnNpdGV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2Nhc2UuZGVzY3JpcHRpb259fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2Nhc2UuY3JlYXRpb25EYXRlfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+bWFuYWdlcnBvbGFuZC5pbnR1aXRpb24uY29tPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGNsYXNzPVxcXCJ0YWJsZS1saW5rLWRldGFpbHNcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2sgdGFibGUtYnV0XFxcIiAoY2xpY2spPVxcXCJjYXNlRGV0YWlscyhjYXNlLmlkKVxcXCI+RGV0YWlsczwvYnV0dG9uPjwvYT48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Nhc2VzL2NvbXBvbmVudHMvY2FzZXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyIGNvbC1tZC03XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXIgdGV4dC1jZW50ZXJcXFwiIHN0eWxlPVxcXCJtYXJnaW4tYm90dG9tOiAxMHB4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJ0aXRsZVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206IDI0cHg7XFxcIj5OZXcgQ2FzZTwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3tkaWFnbm9zdGljfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJpZFxcXCI+SUQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImlkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1pbnB1dFxcXCIgbmFtZT1cXFwiaWRcXFwiIFsobmdNb2RlbCldPVxcXCJjYXNlLmlkXFxcIiByZXF1aXJlZCAjaWQ9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2hpZGRlbl09XFxcImlkLnZhbGlkIHx8IGlkLnVudG91Y2hlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZCBpcyByZXF1aXJlZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImNyZWF0aW9uRGF0ZVxcXCI+RGF0ZSBvZiBjcmVhdGlvbjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiY3JlYXRpb25EYXRlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1pbnB1dFxcXCIgbmFtZT1cXFwiY3JlYXRpb25EYXRlXFxcIiBbKG5nTW9kZWwpXT1cXFwiY2FzZS5jcmVhdGlvbkRhdGVcXFwiIHJlcXVpcmVkICNjcmVhdGlvbkRhdGU9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2hpZGRlbl09XFxcImNyZWF0aW9uRGF0ZS52YWxpZCB8fCBjcmVhdGlvbkRhdGUudW50b3VjaGVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0aW9uIGRhdGUgaXMgcmVxdWlyZWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzaXRlXFxcIj5TaXRlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJzaXRlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1pbnB1dFxcXCIgbmFtZT1cXFwic2l0ZVxcXCIgWyhuZ01vZGVsKV09XFxcImNhc2Uuc2l0ZVxcXCIgcmVxdWlyZWQgI3NpdGU9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2hpZGRlbl09XFxcInNpdGUudmFsaWQgfHwgc2l0ZS51bnRvdWNoZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZSBpcyByZXF1aXJlZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZGVzY3JpcHRpb25cXFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XFxcIjVcXFwiIGlkPVxcXCJkZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBib3JkZXItaW5wdXQgZGlzYWJsZWRJbnB1dFxcXCIgbmFtZT1cXFwiZGVzY3JpcHRpb25cXFwiIFsobmdNb2RlbCldPVxcXCJjYXNlLmRlc2NyaXB0aW9uXFxcIiByZXF1aXJlZCAjZGVzY3JpcHRpb249XFxcIm5nTW9kZWxcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbaGlkZGVuXT1cXFwiZGVzY3JpcHRpb24udmFsaWQgfHwgZGVzY3JpcHRpb24udW50b3VjaGVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0aW9uIGRhdGUgaXMgcmVxdWlyZWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00IGNvbC1tZC1vZmZzZXQtNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrIHRhYmxlLWJ1dCBidG4td2RcXFwiPlNhdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jYXNlcy9jb21wb25lbnRzL25ldy1jYXNlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuXFx0PHAgKm5nSWY9XFxcIiFjbGllbnRcXFwiPkxvYWRpbmcgY2xpZW50Li4uPC9wPlxcblxcblxcdDxkaXYgKm5nSWY9XFxcImNsaWVudFxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiaGVhZGVyIHRleHQtY2VudGVyXFxcIj5cXG5cXHRcXHRcXHRcXHQ8aDQgY2xhc3M9XFxcInRpdGxlXFxcIiBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbTogMjRweDtcXFwiPkNsaWVudCBkZXRhaWxzPC9oND5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG5cXHRcXHRcXHRcXHQ8Zm9ybT5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsPkNvZGU8L2xhYmVsPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1pbnB1dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNvZGVcXFwiIG5hbWU9XFxcImNsaWVudENvZGVcXFwiIFsobmdNb2RlbCldPVxcXCJjbGllbnQuY29kZVxcXCIgW2Rpc2FibGVkXT1cXFwiIWlzTmV3Q2xpZW50XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsPk5hbWU8L2xhYmVsPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1pbnB1dFxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hbWVcXFwiIG5hbWU9XFxcImNsaWVudE5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJjbGllbnQubmFtZVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsYWJlbD5Db21tZW50PC9sYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBib3JkZXItaW5wdXRcXFwiIHBsYWNlaG9sZGVyPVxcXCJDb21tZW50XFxcIiBuYW1lPVxcXCJjbGllbnRDb21tZW50XFxcIiBbKG5nTW9kZWwpXT1cXFwiY2xpZW50LmNvbW1lbnRcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgY29sLW1kLW9mZnNldC00XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2sgdGFibGUtYnV0IGJ0bi13ZFxcXCIgKGNsaWNrKT1cXFwib25TYXZlQ2xpZW50KClcXFwiPlNhdmU8L2J1dHRvbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjbGVhcmZpeFxcXCI+PC9kaXY+XFxuXFx0XFx0XFx0XFx0PC9mb3JtPlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcblxcdFxcdDxkaXYgICpuZ0lmPVxcXCIhaXNOZXdDbGllbnRcXFwiIGNsYXNzPVxcXCJjb2wtbGctMTIgY29sLW1kLTcgY2FyZFxcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiaGVhZGVyIHRhYmxlLWhlYWRlclxcXCI+XFxuXFx0XFx0XFx0XFx0PGg0IGNsYXNzPVxcXCJ0aXRsZVxcXCI+U2l0ZXM8L2g0PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDxociAvPlxcblxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLXNtLTYgY29sLXhzLTEyIGNlbnRlci1kaXZcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2sgdGFibGUtYnV0IHB1bGwtbGVmdCBidG4td2QgYnRuLWFkZFxcXCIgKGNsaWNrKT1cXFwiYWRkU2l0ZSgpXFxcIj5BZGQgc2l0ZTwvYnV0dG9uPlxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1zbS02IGNvbC14cy0xMiBjZW50ZXItZGl2XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2ggcHVsbC1yaWdodFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgcHVsbC1yaWdodCBzZWFyY2gtaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2hcXFwiIC8+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdj48aSBjbGFzcz1cXFwidGktc2VhcmNoIHB1bGwtcmlnaHQgc2VhcmNoLWljb25cXFwiPjwvaT48L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXG5cXHRcXHRcXHQ8aHIgLz5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXRhYmxlXFxcIj5cXG5cXHRcXHRcXHRcXHQ8dGFibGUgaWQ9XFxcImZyZXNoLXRhYmxlXFxcIiBjbGFzcz1cXFwidGFibGUgY2xpZW50RGV0YWlscyB0YWJsZS1yZXNwb25zaXZlXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8dGhlYWQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRyPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDx0aCBkYXRhLWZpZWxkPVxcXCJsaW5rXFxcIiBkYXRhLXNvcnRhYmxlPVxcXCJ0cnVlXFxcIj48aSBjbGFzcz1cXFwidGktYXJyb3dzLXZlcnRpY2FsXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTVweDsgbWFyZ2luLWxlZnQ6IDVweDsgbWFyZ2luLXJpZ2h0OiA1cHg7IGNvbG9yOiAjOTQ5MDk3OyBmb250LXNpemU6IDEycHg7XFxcIj48L2k+TGluazwvdGg+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHRoIGRhdGEtZmllbGQ9XFxcIm5hbWVTaFxcXCI+Q29udGVudDwvdGg+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHRoPkRldGFpbHM8L3RoPlxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdHI+XFxuXFx0XFx0XFx0XFx0XFx0PC90aGVhZD5cXG5cXHRcXHRcXHRcXHRcXHQ8dGJvZHk+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRyICpuZ0Zvcj1cXFwibGV0IHNpdGUgb2YgY2xpZW50LnNpdGVzXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8dGQ+e3tzaXRlLnVybH19PC90ZD5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8dGQ+e3tzaXRlLmludGVncmF0aW9uVHlwZX19PC90ZD5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8dGQ+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9jayB0YWJsZS1idXRcXFwiIChjbGljayk9XFxcInNpdGVEZXRhaWxzKHNpdGUuaWQpXFxcIj5EZXRhaWxzPC9idXR0b24+PC90ZD5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3RyPlxcblxcdFxcdFxcdFxcdFxcdDwvdGJvZHk+XFxuXFx0XFx0XFx0XFx0PC90YWJsZT5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuXFx0PHAgKm5nSWY9XFxcIiFjbGllbnRzXFxcIj5Mb2FkaW5nIGNsaWVudHMuLi48L3A+XFxuXFx0PGRpdiAqbmdJZj1cXFwiY2xpZW50c1xcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiaGVhZGVyIHRhYmxlLWhlYWRlclxcXCI+XFxuXFx0XFx0XFx0XFx0PGg0IGNsYXNzPVxcXCJ0aXRsZVxcXCI+Q2xpZW50czwvaDQ+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0PGhyIC8+XFxuXFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBjb2wtc20tNiBjb2wteHMtMTIgY2VudGVyLWRpdlxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9jayB0YWJsZS1idXQgcHVsbC1sZWZ0IGJ0bi13ZCBidG4tYWRkXFxcIiAoY2xpY2spPVxcXCJhZGRDbGllbnQoKVxcXCI+QWRkIGNsaWVudDwvYnV0dG9uPlxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1zbS02IGNvbC14cy0xMiBjZW50ZXItZGl2XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2ggcHVsbC1yaWdodFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgcHVsbC1yaWdodCBzZWFyY2gtaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2hcXFwiIC8+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdj48aSBjbGFzcz1cXFwidGktc2VhcmNoIHB1bGwtcmlnaHQgc2VhcmNoLWljb25cXFwiPjwvaT48L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXG5cXHRcXHRcXHQ8aHIgLz5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXRhYmxlXFxcIj5cXG5cXHRcXHRcXHRcXHQ8dGFibGUgaWQ9XFxcImZyZXNoLXRhYmxlXFxcIiBjbGFzcz1cXFwidGFibGUgY2xpZW50IHRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcblxcdFxcdFxcdFxcdFxcdDx0aGVhZD5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dHI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHRoIGRhdGEtZmllbGQ9XFxcImNvZGVcXFwiIGRhdGEtc29ydGFibGU9XFxcInRydWVcXFwiPjxpIGNsYXNzPVxcXCJ0aS1hcnJvd3MtdmVydGljYWxcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAxNXB4OyBtYXJnaW4tbGVmdDogNXB4OyBtYXJnaW4tcmlnaHQ6IDVweDsgY29sb3I6ICM5NDkwOTc7IGZvbnQtc2l6ZTogMTJweDtcXFwiPjwvaT5Db2RlPC90aD5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8dGggZGF0YS1maWVsZD1cXFwibmFtZVxcXCIgZGF0YS1zb3J0YWJsZT1cXFwidHJ1ZVxcXCI+PGkgY2xhc3M9XFxcInRpLWFycm93cy12ZXJ0aWNhbFxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDE1cHg7IG1hcmdpbi1sZWZ0OiA1cHg7IG1hcmdpbi1yaWdodDogNXB4OyBjb2xvcjogIzk0OTA5NzsgZm9udC1zaXplOiAxMnB4O1xcXCI+PC9pPkNsaWVudCdzIG5hbWU8L3RoPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDx0aD5EZXRhaWxzPC90aD5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3RyPlxcblxcdFxcdFxcdFxcdFxcdDwvdGhlYWQ+XFxuXFx0XFx0XFx0XFx0XFx0PHRib2R5PlxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ciAqbmdGb3I9XFxcImxldCBjbGllbnQgb2YgY2xpZW50c1xcXCIgKGNsaWNrKT1cXFwib25TZWxlY3QoY2xpZW50KVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHRkPnt7Y2xpZW50LmNvZGV9fTwvdGQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHRkPnt7Y2xpZW50Lm5hbWV9fTwvdGQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHRkPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2sgdGFibGUtYnV0XFxcIiAoY2xpY2spPVxcXCJjbGllbnREZXRhaWxzKGNsaWVudC5pZClcXFwiPkRldGFpbHM8L2J1dHRvbj48L3RkPlxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdHI+XFxuXFx0XFx0XFx0XFx0XFx0PC90Ym9keT5cXG5cXHRcXHRcXHRcXHQ8L3RhYmxlPlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvZGl2PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcblxcdDxwICpuZ0lmPVxcXCIhc2l0ZVxcXCI+TG9hZGluZyBzaXRlLi4uPC9wPlxcblxcblxcdDxkaXYgKm5nSWY9XFxcInNpdGVcXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImhlYWRlciB0ZXh0LWNlbnRlclxcXCI+XFxuXFx0XFx0XFx0XFx0PGg0IGNsYXNzPVxcXCJ0aXRsZVxcXCI+U2l0ZSBkZXRhaWxzPC9oND5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG5cXHRcXHRcXHRcXHQ8Zm9ybT5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwic2l0ZVR5cGVcXFwiPlNpdGUgdHlwZTwvbGFiZWw+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwic2l0ZVR5cGVcXFwiIFsobmdNb2RlbCldPVxcXCJzaXRlLmludGVncmF0aW9uVHlwZVxcXCIgbmFtZT1cXFwic2l0ZVR5cGVcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgdHlwZSBvZiBzaXRlVHlwZXNcXFwiIFt2YWx1ZV09XFxcInR5cGVcXFwiPnt7dHlwZX19PC9vcHRpb24+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zZWxlY3Q+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsYWJlbD5Vcmw8L2xhYmVsPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1pbnB1dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlVybFxcXCIgbmFtZT1cXFwic2l0ZVVybFxcXCIgWyhuZ01vZGVsKV09XFxcInNpdGUudXJsXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsPkNsaWVudOKAmXMgTE1TPC9sYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBib3JkZXItaW5wdXRcXFwiIHBsYWNlaG9sZGVyPVxcXCJDb2RlXFxcIiB2YWx1ZT1cXFwiXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsPkNvbW1lbnQ8L2xhYmVsPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDx0ZXh0YXJlYSByb3dzPVxcXCI1XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJvcmRlci1pbnB1dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkhlcmUgY2FuIGJlIHlvdXIgZGVzY3JpcHRpb25cXFwiIHZhbHVlPVxcXCJNaWtlXFxcIj5PaCBzbywgeW91ciB3ZWFrIHJoeW1lXFxuWW91IGRvdWJ0IEknbGwgYm90aGVyLCByZWFkaW5nIGludG8gaXRcXG5JJ2xsIHByb2JhYmx5IHdvbid0LCBsZWZ0IHRvIG15IG93biBkZXZpY2VzXFxuQnV0IHRoYXQncyB0aGUgZGlmZmVyZW5jZSBpbiBvdXIgb3BpbmlvbnMuPC90ZXh0YXJlYT5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbC1tZC00IGNvbC1tZC1vZmZzZXQtNFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrIHRhYmxlLWJ1dCBidG4td2RcXFwiIChjbGljayk9XFxcInNhdmVTaXRlKClcXFwiPlNhdmU8L2J1dHRvbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjbGVhcmZpeFxcXCI+PC9kaXY+XFxuXFx0XFx0XFx0XFx0PC9mb3JtPlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxkaXYgKm5nSWY9XFxcIiFpc05ld1NpdGVcXFwiIGNsYXNzPVxcXCJjb2wtbGctMTIgY29sLW1kLTEyIGNhcmRcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuXFx0XFx0XFx0XFx0PGg0IGNsYXNzPVxcXCJ0aXRsZVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206IDIwcHg7XFxcIj5Qcm9kdWN0czwvaDQ+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0PGhyPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLXNtLTYgY29sLXhzLTEyIGNlbnRlci1kaXZcXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2sgdGFibGUtYnV0IHB1bGwtbGVmdCBidG4td2QgYnRuLWFkZFxcXCIgKGNsaWNrKT1cXFwiYWRkUHJvZHVjdCgpXFxcIj5BZGQgcHJvZHVjdDwvYnV0dG9uPlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1zbS02IGNvbC14cy0xMiBjZW50ZXItZGl2XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzZWFyY2ggcHVsbC1yaWdodFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgcHVsbC1yaWdodCBzZWFyY2gtaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2hcXFwiIC8+XFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdj48aSBjbGFzcz1cXFwidGktc2VhcmNoIHB1bGwtcmlnaHQgc2VhcmNoLWljb25cXFwiPjwvaT48L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8aHI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCIgKm5nSWY9XFxcImlzQWRkaW5nTmV3UHJvZHVjdFxcXCI+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtbGctNiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMiBwdWxsLWxlZnRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tYm90dG9tOiAyMHB4O1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwicHJvZHVjdFNlbGVjdGlvblxcXCI+UGxlYXNlIHNlbGVjdCBwcm9kdWN0PC9sYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwcm9kdWN0U2VsZWN0aW9uXFxcIiBbKG5nTW9kZWwpXT1cXFwicHJvZHVjdFRvQWRkXFxcIiBuYW1lPVxcXCJwcm9kdWN0U2VsZWN0aW9uXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IHByb2Qgb2YgY3VycmVudERhdGFTZXJ2aWNlLnNldHVwLmFsbFByb2R1Y3RzXFxcIiBbbmdWYWx1ZV09XFxcInByb2RcXFwiPnt7cHJvZC5uYW1lfX0ge3twcm9kLnZlcnNpb259fTwvb3B0aW9uPlxcblxcdFxcdFxcdFxcdFxcdFxcdDwvc2VsZWN0PlxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS02IGNvbC14cy0xMiBjZW50ZXItYmxvY2tcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2sgcHVsbC1yaWdodCBidG4td2RcXFwiIChjbGljayk9XFxcInNhdmVQcm9kdWN0VG9BZGQoKVxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDI1cHhcXFwiPlNhdmU8L2J1dHRvbj5cXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiBjb2wteHMtMTIgY2VudGVyLWJsb2NrXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrIHB1bGwtcmlnaHQgYnRuLXdkXFxcIiAoY2xpY2spPVxcXCJjYW5jZWxBZGRpbmdQcm9kdWN0KClcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAyNXB4XFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXRhYmxlXFxcIj5cXG5cXHRcXHRcXHRcXHQ8dGFibGUgaWQ9XFxcImZyZXNoLXRhYmxlXFxcIiBjbGFzcz1cXFwidGFibGUgcHJvZHVjdCB0YWJsZS1yZXNwb25zaXZlXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8dGhlYWQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRyPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDx0aCBkYXRhLWZpZWxkPVxcXCJuYW1lU2hcXFwiIGRhdGEtc29ydGFibGU9XFxcInRydWVcXFwiPk5hbWU8L3RoPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDx0aCBkYXRhLWZpZWxkPVxcXCJuYW1lU2hcXFwiPlZlcnNpb248L3RoPlxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdHI+XFxuXFx0XFx0XFx0XFx0XFx0PC90aGVhZD5cXG5cXHRcXHRcXHRcXHRcXHQ8dGJvZHk+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRyICpuZ0Zvcj1cXFwibGV0IHByb2R1Y3Qgb2Ygc2l0ZS5wcm9kdWN0c1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHRkPnt7cHJvZHVjdC5uYW1lfX08L3RkPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDx0ZD57e3Byb2R1Y3QudmVyc2lvbn19PC90ZD5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8dGQ+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9jayBwdWxsLWxlZnQgYnRuLXdkXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVQcm9kdWN0KHByb2R1Y3QpXFxcIj5SZW1vdmU8L2J1dHRvbj48L3RkPlxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdHI+XFxuXFx0XFx0XFx0XFx0XFx0PC90Ym9keT5cXG5cXHRcXHRcXHRcXHQ8L3RhYmxlPlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NsaWVudHMvc2l0ZS1kZXRhaWxzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkNvdW50ZXI8L2gxPlxcblxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXG5cXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXG5cXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPldlYXRoZXIgZm9yZWNhc3Q8L2gxPlxcblxcbjxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlci48L3A+XFxuXFxuPHAgKm5nSWY9XFxcIiFmb3JlY2FzdHNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxuXFxuPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImZvcmVjYXN0c1xcXCI+XFxuICAgIDx0aGVhZD5cXG4gICAgICAgIDx0cj5cXG4gICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XFxuICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XFxuICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XFxuICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcbiAgICAgICAgPC90cj5cXG4gICAgPC90aGVhZD5cXG4gICAgPHRib2R5PlxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGZvcmVjYXN0IG9mIGZvcmVjYXN0c1xcXCI+XFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUMgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUYgfX08L3RkPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5zdW1tYXJ5IH19PC90ZD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGJvZHk+XFxuPC90YWJsZT5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMSBmYXRhbEVycm9yLWNvbnRlbnRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgIDxwIGNsYXNzPVxcXCJmYXRhbEVycm9yLWNhcmQtYmFubmVyXFxcIj5Zb3UgaGF2ZSByZWFjaGVkIDxicj4gdGhlIGVuZCBvZiB0aGUgSW50ZXJuZXQ8L3A+XFxyXFxuICAgICAgICA8cCBjbGFzcz1cXFwiZmF0YWxFcnJvci1jYXJkLWNvbW1lbnRcXFwiPkp1c3Qga2lkZGluZy4gVGhlcmUncyBqdXN0IG5vdGhpbmcgaGVyZTwvcD5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biB0YWJsZS1idXRcXFwiPjxhIGhyZWY9XFxcIiNcXFwiPlJldHVybjwvYT48L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwic2lkZWJhclxcXCIgZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVxcXCJ3aGl0ZVxcXCIgZGF0YS1hY3RpdmUtY29sb3I9XFxcImRhbmdlclxcXCI+XFxuXFxuXFx0PCEtLVxcblxcdFxcdFxcdFxcdFRpcCAxOiB5b3UgY2FuIGNoYW5nZSB0aGUgY29sb3Igb2YgdGhlIHNpZGViYXIncyBiYWNrZ3JvdW5kIHVzaW5nOiBkYXRhLWJhY2tncm91bmQtY29sb3I9XFxcIndoaXRlIHwgYmxhY2tcXFwiXFxuXFx0XFx0XFx0XFx0VGlwIDI6IHlvdSBjYW4gY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgYWN0aXZlIGJ1dHRvbiB1c2luZyB0aGUgZGF0YS1hY3RpdmUtY29sb3I9XFxcInByaW1hcnkgfCBpbmZvIHwgc3VjY2VzcyB8IHdhcm5pbmcgfCBkYW5nZXJcXFwiXFxuXFx0LS0+XFxuXFxuXFx0PGRpdiBjbGFzcz1cXFwic2lkZWJhci13cmFwcGVyXFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJsb2dvXFxcIj5cXG5cXHRcXHRcXHQ8YSBjbGFzcz1cXFwic2ltcGxlLXRleHRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXG5cXHRcXHRcXHRcXHRJbnR1aXRpb24gUHJvY2Vzc2luZ1xcblxcdFxcdFxcdDwvYT5cXG5cXHRcXHQ8L2Rpdj5cXG5cXG5cXHRcXHQ8dWwgY2xhc3M9XFxcIm5hdlxcXCI+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5kXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHQ8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+XFxuXFx0XFx0XFx0XFx0PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9jbGllbnRzJ11cXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxpIGNsYXNzPVxcXCJ0aS11c2VyXFxcIj48L2k+XFxuXFx0XFx0XFx0XFx0XFx0PHA+Q2xpZW50czwvcD5cXG5cXHRcXHRcXHRcXHQ8L2E+XFxuXFx0XFx0XFx0PC9saT5cXG5cXHRcXHRcXHQ8bGk+XFxuXFx0XFx0XFx0XFx0PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9jYXNlcyddXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8aSBjbGFzcz1cXFwidGktdmlldy1saXN0LWFsdFxcXCI+PC9pPlxcblxcdFxcdFxcdFxcdFxcdDxwPkNhc2VzPC9wPlxcblxcdFxcdFxcdFxcdDwvYT5cXG5cXHRcXHRcXHQ8L2xpPlxcblxcdFxcdDwvdWw+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInVsdWx1bFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD0naW5kaWNhdG9yJz48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8bGk+I3dvdzwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPiNzdWNoPC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+I2xpc3Q8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT4jaGVyZTwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPiNpczwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPiNzb21lPC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+I2NvbnRlbnQ8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgT3V0ZXJTdWJzY3JpYmVyXzEgPSByZXF1aXJlKCcuLi9PdXRlclN1YnNjcmliZXInKTtcbnZhciBzdWJzY3JpYmVUb1Jlc3VsdF8xID0gcmVxdWlyZSgnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCcpO1xuLyoqXG4gKiBQcm9qZWN0cyBlYWNoIHNvdXJjZSB2YWx1ZSB0byBhbiBPYnNlcnZhYmxlIHdoaWNoIGlzIG1lcmdlZCBpbiB0aGUgb3V0cHV0XG4gKiBPYnNlcnZhYmxlLCBlbWl0dGluZyB2YWx1ZXMgb25seSBmcm9tIHRoZSBtb3N0IHJlY2VudGx5IHByb2plY3RlZCBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5NYXBzIGVhY2ggdmFsdWUgdG8gYW4gT2JzZXJ2YWJsZSwgdGhlbiBmbGF0dGVucyBhbGwgb2ZcbiAqIHRoZXNlIGlubmVyIE9ic2VydmFibGVzIHVzaW5nIHtAbGluayBzd2l0Y2h9Ljwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3N3aXRjaE1hcC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBpdGVtcyBiYXNlZCBvbiBhcHBseWluZyBhIGZ1bmN0aW9uIHRoYXQgeW91XG4gKiBzdXBwbHkgdG8gZWFjaCBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCB3aGVyZSB0aGF0IGZ1bmN0aW9uXG4gKiByZXR1cm5zIGFuIChzby1jYWxsZWQgXCJpbm5lclwiKSBPYnNlcnZhYmxlLiBFYWNoIHRpbWUgaXQgb2JzZXJ2ZXMgb25lIG9mIHRoZXNlXG4gKiBpbm5lciBPYnNlcnZhYmxlcywgdGhlIG91dHB1dCBPYnNlcnZhYmxlIGJlZ2lucyBlbWl0dGluZyB0aGUgaXRlbXMgZW1pdHRlZCBieVxuICogdGhhdCBpbm5lciBPYnNlcnZhYmxlLiBXaGVuIGEgbmV3IGlubmVyIE9ic2VydmFibGUgaXMgZW1pdHRlZCwgYHN3aXRjaE1hcGBcbiAqIHN0b3BzIGVtaXR0aW5nIGl0ZW1zIGZyb20gdGhlIGVhcmxpZXItZW1pdHRlZCBpbm5lciBPYnNlcnZhYmxlIGFuZCBiZWdpbnNcbiAqIGVtaXR0aW5nIGl0ZW1zIGZyb20gdGhlIG5ldyBvbmUuIEl0IGNvbnRpbnVlcyB0byBiZWhhdmUgbGlrZSB0aGlzIGZvclxuICogc3Vic2VxdWVudCBpbm5lciBPYnNlcnZhYmxlcy5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5SZXJ1biBhbiBpbnRlcnZhbCBPYnNlcnZhYmxlIG9uIGV2ZXJ5IGNsaWNrIGV2ZW50PC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciByZXN1bHQgPSBjbGlja3Muc3dpdGNoTWFwKChldikgPT4gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKSk7XG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIGNvbmNhdE1hcH1cbiAqIEBzZWUge0BsaW5rIGV4aGF1c3RNYXB9XG4gKiBAc2VlIHtAbGluayBtZXJnZU1hcH1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaH1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaE1hcFRvfVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWU6IFQsID9pbmRleDogbnVtYmVyKTogT2JzZXJ2YWJsZX0gcHJvamVjdCBBIGZ1bmN0aW9uXG4gKiB0aGF0LCB3aGVuIGFwcGxpZWQgdG8gYW4gaXRlbSBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSwgcmV0dXJucyBhblxuICogT2JzZXJ2YWJsZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24ob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogSSwgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIpOiBhbnl9IFtyZXN1bHRTZWxlY3Rvcl1cbiAqIEEgZnVuY3Rpb24gdG8gcHJvZHVjZSB0aGUgdmFsdWUgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlIGJhc2VkIG9uIHRoZSB2YWx1ZXNcbiAqIGFuZCB0aGUgaW5kaWNlcyBvZiB0aGUgc291cmNlIChvdXRlcikgZW1pc3Npb24gYW5kIHRoZSBpbm5lciBPYnNlcnZhYmxlXG4gKiBlbWlzc2lvbi4gVGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiBhcmU6XG4gKiAtIGBvdXRlclZhbHVlYDogdGhlIHZhbHVlIHRoYXQgY2FtZSBmcm9tIHRoZSBzb3VyY2VcbiAqIC0gYGlubmVyVmFsdWVgOiB0aGUgdmFsdWUgdGhhdCBjYW1lIGZyb20gdGhlIHByb2plY3RlZCBPYnNlcnZhYmxlXG4gKiAtIGBvdXRlckluZGV4YDogdGhlIFwiaW5kZXhcIiBvZiB0aGUgdmFsdWUgdGhhdCBjYW1lIGZyb20gdGhlIHNvdXJjZVxuICogLSBgaW5uZXJJbmRleGA6IHRoZSBcImluZGV4XCIgb2YgdGhlIHZhbHVlIGZyb20gdGhlIHByb2plY3RlZCBPYnNlcnZhYmxlXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHJlc3VsdCBvZiBhcHBseWluZyB0aGVcbiAqIHByb2plY3Rpb24gZnVuY3Rpb24gKGFuZCB0aGUgb3B0aW9uYWwgYHJlc3VsdFNlbGVjdG9yYCkgdG8gZWFjaCBpdGVtIGVtaXR0ZWRcbiAqIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBhbmQgdGFraW5nIG9ubHkgdGhlIHZhbHVlcyBmcm9tIHRoZSBtb3N0IHJlY2VudGx5XG4gKiBwcm9qZWN0ZWQgaW5uZXIgT2JzZXJ2YWJsZS5cbiAqIEBtZXRob2Qgc3dpdGNoTWFwXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5mdW5jdGlvbiBzd2l0Y2hNYXAocHJvamVjdCwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5saWZ0KG5ldyBTd2l0Y2hNYXBPcGVyYXRvcihwcm9qZWN0LCByZXN1bHRTZWxlY3RvcikpO1xufVxuZXhwb3J0cy5zd2l0Y2hNYXAgPSBzd2l0Y2hNYXA7XG52YXIgU3dpdGNoTWFwT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN3aXRjaE1hcE9wZXJhdG9yKHByb2plY3QsIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMucmVzdWx0U2VsZWN0b3IgPSByZXN1bHRTZWxlY3RvcjtcbiAgICB9XG4gICAgU3dpdGNoTWFwT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgU3dpdGNoTWFwU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnByb2plY3QsIHRoaXMucmVzdWx0U2VsZWN0b3IpKTtcbiAgICB9O1xuICAgIHJldHVybiBTd2l0Y2hNYXBPcGVyYXRvcjtcbn0oKSk7XG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xudmFyIFN3aXRjaE1hcFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTd2l0Y2hNYXBTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN3aXRjaE1hcFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHByb2plY3QsIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5yZXN1bHRTZWxlY3RvciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleCsrO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wcm9qZWN0KHZhbHVlLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbm5lclN1YihyZXN1bHQsIHZhbHVlLCBpbmRleCk7XG4gICAgfTtcbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5faW5uZXJTdWIgPSBmdW5jdGlvbiAocmVzdWx0LCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGlubmVyU3Vic2NyaXB0aW9uID0gdGhpcy5pbm5lclN1YnNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGlubmVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpbm5lclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuaW5uZXJTdWJzY3JpcHRpb24gPSBzdWJzY3JpYmVUb1Jlc3VsdF8xLnN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIHJlc3VsdCwgdmFsdWUsIGluZGV4KSk7XG4gICAgfTtcbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbm5lclN1YnNjcmlwdGlvbiA9IHRoaXMuaW5uZXJTdWJzY3JpcHRpb247XG4gICAgICAgIGlmICghaW5uZXJTdWJzY3JpcHRpb24gfHwgaW5uZXJTdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLl9jb21wbGV0ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5uZXJTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH07XG4gICAgU3dpdGNoTWFwU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5Q29tcGxldGUgPSBmdW5jdGlvbiAoaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUoaW5uZXJTdWIpO1xuICAgICAgICB0aGlzLmlubmVyU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLl9jb21wbGV0ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgsIGlubmVyU3ViKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLl90cnlOb3RpZnlOZXh0KG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTd2l0Y2hNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fdHJ5Tm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnJlc3VsdFNlbGVjdG9yKG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgICB9O1xuICAgIHJldHVybiBTd2l0Y2hNYXBTdWJzY3JpYmVyO1xufShPdXRlclN1YnNjcmliZXJfMS5PdXRlclN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN3aXRjaE1hcC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9vcGVyYXRvci9zd2l0Y2hNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIHJvb3RfMSA9IHJlcXVpcmUoJy4uL3V0aWwvcm9vdCcpO1xuLyoqXG4gKiBAcGFyYW0gUHJvbWlzZUN0b3JcbiAqIEByZXR1cm4ge1Byb21pc2U8VD59XG4gKiBAbWV0aG9kIHRvUHJvbWlzZVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gdG9Qcm9taXNlKFByb21pc2VDdG9yKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAoIVByb21pc2VDdG9yKSB7XG4gICAgICAgIGlmIChyb290XzEucm9vdC5SeCAmJiByb290XzEucm9vdC5SeC5jb25maWcgJiYgcm9vdF8xLnJvb3QuUnguY29uZmlnLlByb21pc2UpIHtcbiAgICAgICAgICAgIFByb21pc2VDdG9yID0gcm9vdF8xLnJvb3QuUnguY29uZmlnLlByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocm9vdF8xLnJvb3QuUHJvbWlzZSkge1xuICAgICAgICAgICAgUHJvbWlzZUN0b3IgPSByb290XzEucm9vdC5Qcm9taXNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghUHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBQcm9taXNlIGltcGwgZm91bmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiB2YWx1ZSA9IHg7IH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHJlamVjdChlcnIpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlKHZhbHVlKTsgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnRvUHJvbWlzZSA9IHRvUHJvbWlzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvUHJvbWlzZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcnhqcy9vcGVyYXRvci90b1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDEyNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL091dGVyU3Vic2NyaWJlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDI2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJqZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy91dGlsL3Jvb3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9