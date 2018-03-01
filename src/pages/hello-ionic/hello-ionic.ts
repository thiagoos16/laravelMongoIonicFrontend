import { Component } from '@angular/core';
import { UserMetalProvider } from '../../providers/user-metal/user-metal';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [UserMetalProvider, PerfilProvider, Camera]
})

export class HelloIonicPage {
  public usersMetal = [];
  public perfis = [];

  public userMetalCadastro = {"id":"","name":"", "favorite_band":null , "perfil_id":"",  "foto":""};

  constructor(private userMetalService:UserMetalProvider, private perfilService:PerfilProvider, private camera:Camera) {
    this.getUserMetal();
    this.getPerfis();
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

  public delete(id) {
    this.userMetalService.delete(id).subscribe(response => this.getUserMetal());
  }

  public compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

  public getPerfis() {
    this.perfilService.findAll().subscribe(response => this.perfis = response);
  }

  public capturarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     console.log(base64Image);
     this.userMetalCadastro.foto = base64Image;
    }, (err) => {
     // Handle error
    });
  }
}
