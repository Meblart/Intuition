"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var fetchdata_component_1 = require("./components/fetchdata/fetchdata.component");
var counter_component_1 = require("./components/counter/counter.component");
var clients_component_1 = require("./components/clients/clients.component");
var client_details_component_1 = require("./components/clients/client-details.component");
var cases_component_1 = require("./components/cases/components/cases.component");
var case_details_component_1 = require("./components/cases/components/case-details.component");
var new_case_component_1 = require("./components/cases/components/new-case.component");
var site_details_component_1 = require("./components/clients/site-details.component");
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
//# sourceMappingURL=app-routing.module.js.map