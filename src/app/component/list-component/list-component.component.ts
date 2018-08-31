import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-list-component',
	templateUrl: './list-component.component.html',
	styleUrls: ['./list-component.component.css']
})
export class ListComponent implements OnInit {

	contactObject;

	constructor(private contact: ContactService, private router: Router) {
		this.contact.getConfig().subscribe(
			data => {
				if (data != undefined) {

					this.contactObject = data.contact;
				}
			}
		);
	}
	updateItem(contactID) {
		this.router.navigate([`/edit/${contactID.id}`]);
	}
	deleteItem(contactID) {
		this.contact.deleteProduct(contactID.id);
	}
	ngOnInit() {
	}

}
