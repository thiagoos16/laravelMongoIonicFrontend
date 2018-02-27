import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the UserMetalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserMetalProvider {

  public urlUserMetal = "http://localhost:8000/user" 
  
  constructor(public http: HttpClient) {
    console.log('Hello UserMetalProvider Provider');
  }

  public findAll():Observable<any> {
    return this.http.get(this.urlUserMetal);
  }

  public save(userMetal):Observable<any> {
    return this.http.post(this.urlUserMetal, userMetal);
  }

  public put(userMetal):Observable<any> {
    return this.http.put(this.urlUserMetal + "/" + userMetal.id, userMetal);
  }

  public delete(id):Observable<any>{
    return this.http.delete(this.urlUserMetal + "/" + id);
  }
}
