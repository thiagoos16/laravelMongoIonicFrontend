import { Component } from '@angular/core';
import { UserMetalProvider } from '../../providers/user-metal/user-metal';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [UserMetalProvider]
})

export class HelloIonicPage {
  public usersMetal = [];

  constructor(private userMetalService:UserMetalProvider) {
    this.getUserMetal();
  }

  public getUserMetal(){
    this.userMetalService.findAll().subscribe(response => this.usersMetal =  response);
  }
}
