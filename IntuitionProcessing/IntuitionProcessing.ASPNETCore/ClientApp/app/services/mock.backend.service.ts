﻿import { Injectable } from '@angular/core';
import { Client } from '../components/clients/models/client';
import { Site } from '../components/clients/models/site';
import { Setup } from '../models/setup';
import { Product } from '../components/clients/models/product';
import { BackendService } from './backend.service';
import { Case } from '../components/cases/models/case';

var clients__: Client[] =
	[
		new Client("AAM", "AAM long descriptive name", "AAM comment", 1),
		new Client("BBVA", "BBVA long even more descriptive name", "BBVA comment", 2)
	];

var cases: Case[] = [
    new Case("TNA123209", "www.bombeltestuje.intuition.com", "This is description", "12/12/12"),
    new Case("TNA264409", "www.alefajnie.intuition.com", "This is description", "03/12/17"),
    new Case("TNA934543", "www.symphonysolutions.intuition.com", "This is description", "21/02/12"),
    new Case("TNA156586", "www.test.intuition.com", "This is description", "28/12/11"),
    new Case("TNA246757", "www.tomektest.intuition.com", "This is description", "12/08/10"),
    new Case("TNA234337", "www.testtesttest.intuition.com", "This is description", "12/08/10"),
    new Case("TNA644434", "www.tttttteeeest.intuition.com", "This is description", "12/08/10"),
    new Case("TNA246667", "www.tak.intuition.com", "This is description", "01/03/17")
];

clients__[0].sites.push(new Site("AICC", "aam site 1 comment", "https://aamcontent.intuition.com", 1));
clients__[0].sites.push(new Site("Hosted", "aam site 2 comment", "https://aamrubicon.intuition.com", 2));

var allProducts__: Array<Product> =
	[
		new Product("KnowHow", "KnowHow comment", "43", 1),
		new Product("KnowHow", "KnowHow comment", "42", 2),
		new Product("KnowHow", "KnowHow comment", "41", 3),
		new Product("KnowHow", "KnowHow comment", "40", 4),
		new Product("NASBA", "NASBA comment", "2016", 5)
	];

@Injectable()
export class MockBackendService extends BackendService {

	getClients(clientIds: string[]): Promise<Client[]> {
		return Promise.resolve(clients__);
	}

	getClient(clientId: number): Promise<Client> {
		return new Promise<Client>(resolve =>
			setTimeout(() =>
				resolve(clients__.find((value: Client, index: number, obj: Client[]) => { return value.id == clientId; })), 2000)
		);
	}

	saveClient(clientToSave: Client): Promise<string> {
		return new Promise<string>(resolve => {
			let existingClient = clients__.find((value: Client, index: number, obj: Client[]) => { return value.id == clientToSave.id; });
			let existingClientIndex = clients__.indexOf(existingClient);
			clients__.splice(existingClientIndex, 1, clientToSave);
			resolve("");
		});
	}

	addClient(clientToAdd: Client): Promise<number> {
		return new Promise<number>(resolve => {
			let mockNewClient = new Client(clientToAdd.code, clientToAdd.name, clientToAdd.comment, clients__.length + 1);
			clients__.push(mockNewClient);
			resolve(clients__.length);
		});

	}

	getSetup(): Promise<Setup> {
		return Promise.resolve(new Setup(allProducts__));
	}

	addSite(clientId: number, siteToAdd: Site): Promise<number> {
		let existingClient = clients__.find((value: Client, index: number, obj: Client[]) => { return value.id == clientId; });
		existingClient.sites.push(new Site(siteToAdd.integrationType, siteToAdd.comment, siteToAdd.url, existingClient.sites.length + 1));
		return Promise.resolve(existingClient.sites.length);
	}

	saveSite(siteToAdd: Site): Promise<void> {
		return Promise.resolve();
	}

    getCases(clientIds: string[]): Promise<Case[]> {
        return Promise.resolve(cases);
    }

    //getCase(caseId: number): Promise<Client> {
    //    return new Promise<Client>(resolve =>
    //        setTimeout(() =>
    //            resolve(clients__.find((value: Case, index: number, obj: Case[]) => { return value.id == caseId; })), 2000)
    //    );
    //}

}