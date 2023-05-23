import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === "santosh5541" && password === "Iphone5541@123") {
      sessionStorage.setItem('authenticateUser',username)
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user===null);



  }

  logout(){

    sessionStorage.removeItem('authenticateUser')
  }
}
