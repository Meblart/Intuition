import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Case } from '../models/case';
import { CasesService } from '../services/cases.service';
import { BackendService } from '../../../services/backend.service';

@Component({
    //selector: 'case-details',
    templateUrl: './case-details.component.html',
})
export class CaseDetailsComponent {
    constructor(private route: ActivatedRoute,
                private router: Router) { }
    case: Case;
    error: string;
    ngOnInit(): void {
        this.case = null;
        this.case = new Case("TNA123209", "www.bombeltestuje.intuition.com", "This is description", "12/12/12")
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