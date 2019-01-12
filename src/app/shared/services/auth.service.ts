import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private loggedInUser: User = null;

  constructor(private router: Router) { }

  login(user: User) {
    this.loggedInUser = user;
    this.isAuthenticated = true;
  }

  logout() {
    this.loggedInUser = null;
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getCurUser(): User {
    return this.loggedInUser;
  }
}
