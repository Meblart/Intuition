import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Case } from '../models/case';
import { CasesService } from '../services/cases.service';
import { BackendService } from '../../../services/backend.service';

@Component({
    //selector: 'hero-form',
    templateUrl: './cases.component.html',
    //providers: [CaseService]
})

export class CasesComponent {
    public cases: Case[];
    status: string;

    constructor(private backend: BackendService,
                private router: Router) { }

    ngOnInit(): void {
        this.getCases();
    }

    getCases(): Promise<Case[]> {
        return this.backend.getCases([])
            .then((value: Case[]) => this.cases = value)
            .catch((reason: any) => this.status = reason);
    }

    caseDetails(id: string): void {
        this.router.navigate(['./cases/case-details', id]);
    }

    newCase(): void {
        this.router.navigate(['./cases/new-case']);
    }
    //model = new Case("TNA123209", "www.bombeltestuje.intuition.com", "This is description", "12/12/12");
    //submitted = false;
    //onSubmit() {
    //    this.addCase();
    //    this.submitted = true;
    //}
    //newCase() {
    //    this.model = new Case("asdas", "asdasd");
    //}

    //ngOnInit(): void {
    //    this.getAll();
    //}

    //getAll() {
    //    this.caseService.getCasesUp()
    //        .subscribe(
    //        cases => this.cases = cases,
    //        error => this.errorMessage = <any>error);

    //    console.log(this.cases);
    //}
    
    //addCase() {
    //    console.log(this.model);
    //    this.caseService.addCase(this.model)
    //        .subscribe(
    //        hero => this.cases.push(hero),
    //        error => this.errorMessage = <any>error);
    //}
}

