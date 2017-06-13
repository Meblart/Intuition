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
var case_1 = require("../models/case");
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
        templateUrl: './case-details.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], CaseDetailsComponent);
exports.CaseDetailsComponent = CaseDetailsComponent;
//# sourceMappingURL=case-details.component.js.map