import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the PerfilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerfilProvider {

  public urlPerfil = "http://localhost:8000/perfil" 

  constructor(public http: HttpClient) {
    console.log('Hello PerfilProvider Provider');
  }

  public findAll():Observable<any> {
    return this.http.get(this.urlPerfil);
  }

  public save(perfil):Observable<any> {
    return this.http.post(this.urlPerfil, perfil);
  }

  public put(perfil):Observable<any> {
    return this.http.put(this.urlPerfil + "/" + perfil.id, perfil);
  }

  public delete(id):Observable<any>{
    return this.http.delete(this.urlPerfil + "/" + id);
  }

}
