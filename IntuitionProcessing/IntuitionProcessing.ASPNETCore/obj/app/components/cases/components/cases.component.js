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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var backend_service_1 = require("../../../services/backend.service");
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
        templateUrl: './cases.component.html',
    }),
    __metadata("design:paramtypes", [backend_service_1.BackendService,
        router_1.Router])
], CasesComponent);
exports.CasesComponent = CasesComponent;
//# sourceMappingURL=cases.component.js.map