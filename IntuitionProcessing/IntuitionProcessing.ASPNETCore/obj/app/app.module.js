"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular2_universal_1 = require("angular2-universal");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./components/app/app.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var home_component_1 = require("./components/home/home.component");
var fetchdata_component_1 = require("./components/fetchdata/fetchdata.component");
var counter_component_1 = require("./components/counter/counter.component");
var clients_component_1 = require("./components/clients/clients.component");
var client_details_component_1 = require("./components/clients/client-details.component");
var site_details_component_1 = require("./components/clients/site-details.component");
var client_service_1 = require("./components/clients/services/client.service");
var backend_service_1 = require("./services/backend.service");
var mock_backend_service_1 = require("./services/mock.backend.service");
var current_data_service_1 = require("./services/current-data.service");
var app_routing_module_1 = require("./app-routing.module");
var cases_component_1 = require("./components/cases/components/cases.component");
var case_details_component_1 = require("./components/cases/components/case-details.component");
var new_case_component_1 = require("./components/cases/components/new-case.component");
/*CSSes*/
require("./assets/css/animate.min.css");
require("./assets/css/fresh-bootstrap-table.css");
require("./assets/css/paper-dashboard.css");
require("./assets/css/themify-icons.css");
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
//# sourceMappingURL=app.module.js.map