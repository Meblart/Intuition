import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/clients/client-details.component';
import { SiteDetailsComponent } from './components/clients/site-details.component';

import { ClientService } from './components/clients/services/client.service';
import { BackendService } from './services/backend.service';
import { MockBackendService } from './services/mock.backend.service';
import { CurrentDataService } from './services/current-data.service';

import { AppRoutingModule } from './app-routing.module';

import { CasesComponent } from './components/cases/components/cases.component';
import { CaseDetailsComponent } from './components/cases/components/case-details.component';
import { NewCaseComponent } from './components/cases/components/new-case.component';

/*CSSes*/
import './assets/css/animate.min.css';
import './assets/css/fresh-bootstrap-table.css';
import './assets/css/paper-dashboard.css';
import './assets/css/themify-icons.css';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		NavMenuComponent,
		CounterComponent,
		FetchDataComponent,
		HomeComponent,
		ClientsComponent,
		ClientDetailsComponent,
        CasesComponent,
        CaseDetailsComponent,
        NewCaseComponent,
		SiteDetailsComponent
	],
	imports: [
		UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
		FormsModule,
		AppRoutingModule
	],
	providers: [
		ClientService,
		{ provide: BackendService, useClass: MockBackendService },
		CurrentDataService
	]
})
export class AppModule {
}
