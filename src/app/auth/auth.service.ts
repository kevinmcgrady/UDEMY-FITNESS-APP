import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  // property to store the user.
  private user: User;
  // a subject to store if the user is logged in or not.
  authChange = new Subject<boolean>();

  constructor(private router: Router) { }

  // method to register a new user.
  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    }
    // call the authSuccess method.
    this.authSuccess();
  }

  // method to log the user in.
  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    }
    // call the authSuccess method.
    this.authSuccess();
  }

  // method to log the user out.
  logout() {
    this.user = null;
    // send false to the subject.
    this.authChange.next(false);
    // navigate the user to the training page.
    this.router.navigate(['/login']);
  }

  // method to return the user.
  getUser() {
    // return a copy of the user in a object.
    // this way other parts of the app can't change the original user.
    return { ...this.user };
  }

  // method to check if the user is logged in.
  isAuth() {
    return this.user != null;
  }

  // method called when the auth was successful.
  private authSuccess() {
    // send true to the subject.
    this.authChange.next(true);
    // navigate the user to the training page.
    this.router.navigate(['/training']);
  }
}
