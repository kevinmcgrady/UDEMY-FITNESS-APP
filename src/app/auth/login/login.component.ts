import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // method called when the form is submitted.
  onSubmit(form: NgForm) {
    // call the login method on the service.
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });
  }

}
