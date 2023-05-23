import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router, private hardcodedAuthentication: HardcodedAuthenticationService){}
username="santosh5541"
password=""
isInValidLogin=false
errorMessage="Invalid Credentials"
handlelogin(){

  // console.log(this.username)
  // console.log(this.password)
  // if(this.username==='santosh5541' && this.password==='Iphone5541@123')
  if (this.hardcodedAuthentication.authenticate(this.username, this.password))
  {
    //redirect to welcome page
    this.route.navigate(['welcome',this.username])
    this.isInValidLogin=false;
  }
  else{
    this.isInValidLogin=true;
  }

}
}
