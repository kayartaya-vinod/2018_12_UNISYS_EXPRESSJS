import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = { username: '', password: '' };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  submitHandler() {
    this.userService.login(this.user)
      .subscribe(
        resp => { 
          sessionStorage['_x'] = resp['token'];
          sessionStorage['_z'] = JSON.stringify(resp['user']);
          this.router.navigate(['/']);
        },
        err => alert('There was an error: ' + err.message)
      );
  }
}
