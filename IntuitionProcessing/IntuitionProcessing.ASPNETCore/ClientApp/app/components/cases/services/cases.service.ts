﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Case } from '../models/case';

@Injectable()
export class CasesService {
    private casesUrl = '/api/cases';  // URL to web APIfce

    constructor(private http: Http) { }

    getCasesUp(): Observable<Case[]> {
        return this.http.get(this.casesUrl)
            .map((response: Response) => <Case[]>response.json())
            .catch(this.handleError);
    }

    addCase(caseObj: Case): Observable<Case> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, body: caseObj });

        return this.http.post(this.casesUrl, { caseObj }, options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}