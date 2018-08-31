import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};
@Injectable({
	providedIn: 'root'
})
export class ContactService {

	constructor(private http: HttpClient, private router: Router) { }

	contactJsonURL = '../assets/data.json';

	localServerUrl = 'http://localhost:3000/contact';

	getConfig(): Observable<any> {
		return this.http.get(this.contactJsonURL);
	}

	/** POST: add a new hero to the database */
	addContact(contact: Contact) {
		this.http.post<Contact>(this.localServerUrl, contact, httpOptions).toPromise()
			.then(() => {
				this.router.navigate(['/list']);
			});

	}

	editContact(contact: Contact, id: number) {
		const url = `${this.localServerUrl}/${id}`;

		this.http.put(url, contact, httpOptions)
			.toPromise()
			.then(() => {
				this.router.navigate(['/list']);
			})
	}

	deleteProduct = function (id) {
		const url = `${this.localServerUrl}/${id}`;

		return this.http.delete(url, { headers: this.httpOptions }).toPromise()
			.then(() => {
			});

	}

}
