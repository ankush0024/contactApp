
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public contactList = [];
  public sortBy: any;
  constructor(private spinner: NgxSpinnerService,private contactService: ContactService, private router: Router) { }
  public reverse = false;
  ngOnInit() {
    this.sortBy = "AZ"
    this.spinner.show();
    this.contactService.getContactList().subscribe((res: any) => { this.spinner.hide();this.contactList = res; }
      , (err) => { this.spinner.hide();alert("failed to get contact list"); console.error(err); }
    );
  }
  public deleteUser(id) {
    this.spinner.show();
    this.contactService.deleteUser(2).subscribe((res) => {
      this.contactList = this.contactList.filter((item) => item.id !== id);
      this.spinner.hide();
    }, (err) => { this.spinner.hide();console.error(err); alert("failed to delete the contact") });
  }
  public navigateToContact(id) {
    this.router.navigate(['contact', id]);
  }
  public sortContact() {
    this.reverse = this.sortBy === "AZ" ? false : true;
  }

}
