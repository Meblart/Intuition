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
        templateUrl: './new-case.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], NewCaseComponent);
exports.NewCaseComponent = NewCaseComponent;
//# sourceMappingURL=new-case.component.js.map