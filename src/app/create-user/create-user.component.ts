import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public user = { name: '', job: '' };
  constructor(private spinner: NgxSpinnerService,private contactService: ContactService, private router: Router) { }

  ngOnInit() {
  }
  submitF(form) {
    this.spinner.show();
    this.contactService.createUser(form.value).subscribe(
      (res) => {  this.spinner.hide(); alert("user created successfully"); this.router.navigateByUrl('/') },
      (err) => {   this.spinner.hide();alert("failed to create user"); console.error(err); }

    );
  }
}
