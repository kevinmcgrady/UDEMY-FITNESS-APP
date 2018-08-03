import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // a property to store the max date (over 18).
  maxDate: Date;
  constructor() { }

  ngOnInit() {
    // set the max date to a new date object.
    this.maxDate = new Date();
    // set the full year to the current year - 18.
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  // method called when the form is sumbitted.
  onSubmit(form: NgForm) {
    console.log(form);
  }

}
