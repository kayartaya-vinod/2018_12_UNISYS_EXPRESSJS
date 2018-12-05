import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// npm i rxjs-compat --save
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {

  url = 'http://localhost:3000/api/login/';
  public loggedUser;

  constructor(private http: HttpClient) {
    if ('_z' in sessionStorage) {
      this.loggedUser = JSON.parse(sessionStorage['_z']);
    }
  }

  login(user) {
    return this.http.post(this.url, user)
      .do(resp => {
        sessionStorage['_x'] = resp['token'];
        sessionStorage['_z'] = JSON.stringify(resp['user']);
        this.loggedUser = resp['user'];
      });
  }

  logout() {
    delete sessionStorage['_x'];
    delete sessionStorage['_z'];
    this.loggedUser = undefined;
  }
}
