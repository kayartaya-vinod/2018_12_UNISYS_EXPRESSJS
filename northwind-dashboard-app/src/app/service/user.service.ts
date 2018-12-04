import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  url = 'http://localhost:3000/api/login/';

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(this.url, user);
  }
}
