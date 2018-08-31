import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-component',
	templateUrl: './add-component.component.html',
	styleUrls: ['./add-component.component.css']
})
export class AddComponent implements OnInit {
	href: string = "";
	model: any = {};
	buttonName: string = "Add";
	id;

	constructor(private contact: ContactService, private router: Router) { }

	onSubmit() {
		if (this.buttonName === "Add") {
			this.contact.addContact(this.model);
		} else {
			this.contact.editContact(this.model, this.id);
		}
	}

	ngOnInit() {
		this.href = this.router.url;
		if (this.href.indexOf("edit") != -1) {
			this.id = this.href.substring(this.href.lastIndexOf('/') + 1);
			this.buttonName = "Edit";
			this.contact.getConfig().subscribe(data => {
				this.model = data.contact.find(e => e.id == this.id);
			});
		}
	}
}
