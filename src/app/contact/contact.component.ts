import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactId: any;
  public contactData: any;
  constructor(private spinner: NgxSpinnerService, private contactService: ContactService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.spinner.show();
    this.contactId = this.route.snapshot.paramMap.get('id')
    this.contactService.getContactById(this.contactId).subscribe((res) => { this.spinner.hide(); this.contactData = res; }, (err) => { this.spinner.hide(); console.error(err) });
  }

}
