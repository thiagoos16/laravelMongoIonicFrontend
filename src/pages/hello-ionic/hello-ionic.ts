import { Component } from '@angular/core';
import { UserMetalProvider } from '../../providers/user-metal/user-metal';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [UserMetalProvider]
})

export class HelloIonicPage {
  public usersMetal = [];

  public userMetalCadastro = {"id":"","name":"", "favorite_band":null};

  constructor(private userMetalService:UserMetalProvider) {
    this.getUserMetal();
  }

  public getUserMetal() {
    this.userMetalService.findAll().subscribe(response => this.usersMetal =  response);
  }

  public postUserMetal() {
    if (this.userMetalCadastro.id == "") {
      this.userMetalService.save(this.userMetalCadastro).subscribe(response => this.getUserMetal());
    } else {
      this.userMetalService.put(this.userMetalCadastro).subscribe(response => this.getUserMetal()); 
    }
  }

  public inputForm(userMetal) {
    this.userMetalCadastro = userMetal; 
  }
}
