import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  // property to store the user.
  private user: User;
  // a subject to store if the user is logged in or not.
  authChange = new Subject<boolean>();

  constructor() { }

  // method to register a new user.
  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    }
    // send true to the subject.
    this.authChange.next(true);
  }

  // method to log the user in.
  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    }
    // send true to the subject.
    this.authChange.next(true);
  }

  // method to log the user out.
  logout() {
    this.user = null;
    // send false to the subject.
    this.authChange.next(false);
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
}
