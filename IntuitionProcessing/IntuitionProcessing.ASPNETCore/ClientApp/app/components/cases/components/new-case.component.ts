import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Case } from '../models/case';
import { CasesService } from '../services/cases.service';
import { BackendService } from '../../../services/backend.service';

@Component({
    //selector: 'case-details',
    templateUrl: './new-case.component.html',
})
export class NewCaseComponent {
    constructor(private route: ActivatedRoute,
                private router: Router) { }
    case: Case;
    error: string;

    submitted = false;

    onSubmit() { this.submitted = true; }

    get diagnostic() { return JSON.stringify(this.case); }

    ngOnInit(): void {
        this.case = new Case("","","","");
        
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
    }
}