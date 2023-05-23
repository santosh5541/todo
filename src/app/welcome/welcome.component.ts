import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private route:ActivatedRoute){}
  
  message='Welcome to the welcome page '
  name=''
  
  ngOnInit(){

this.name = this.route.snapshot.params['name']

  }

  
}
