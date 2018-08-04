import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { TrainingService } from '../training/training.service';

@Injectable()
export class AuthService {
  // property to store if the user is logged in.
  private isAuthenticated: boolean = false;
  // a subject to store if the user is logged in or not.
  authChange = new Subject<boolean>();

  constructor(private router: Router, private afAuth: AngularFireAuth, private trainingService: TrainingService) { }

  // this method will be called whenever a user auth changes.
  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      // if a user exists.
      if(user) {
        // set isAuthenticated to true.
        this.isAuthenticated = true;
        // send true to the subject.
        this.authChange.next(true);
        // navigate the user to the training page.
        this.router.navigate(['/training']);
      } else {
        // cancel the database subs.
        this.trainingService.cancelSubscriptions();
        // send false to the subject.
        this.authChange.next(false);
        // set isAuthenticated to false.
        this.isAuthenticated = false;
        // navigate the user to the training page.
        this.router.navigate(['/login']);
      }
    })
  }

  // method to register a new user.
  registerUser(authData: AuthData) {
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password).then((result) => {
      console.log('user registered!');
    }).catch((error) => {
      console.log(error);
    })
  }

  // method to log the user in.
  login(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then((result) => {
      console.log('logged in');
    }).catch((error) => {
      console.log(error);
    })
  }

  // method to log the user out.
  logout() {
    // call the signout method on the AngularFireAuth.
    this.afAuth.auth.signOut();
  }

  // method to check if the user is logged in.
  isAuth() {
    // return the isAuthenticated (true or false).
    return this.isAuthenticated;
  }
}
