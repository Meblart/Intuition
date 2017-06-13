import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/clients/client-details.component';
import { CasesComponent } from './components/cases/components/cases.component';
import { CaseDetailsComponent } from './components/cases/components/case-details.component';
import { NewCaseComponent } from './components/cases/components/new-case.component';
import { SiteDetailsComponent } from './components/clients/site-details.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'cases', component: CasesComponent },
    { path: 'cases/case-details/:id', component: CaseDetailsComponent, },
    { path: 'cases/new-case', component: NewCaseComponent, },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'clients/client-details/:id', component: ClientDetailsComponent, },
	{ path: 'clients/client-details/site-details/:id', component: SiteDetailsComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
