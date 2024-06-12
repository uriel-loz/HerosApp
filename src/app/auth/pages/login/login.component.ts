import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private authService = inject(AuthService);
  private router = inject(Router);


  constructor() { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login('uriel@codeman.company', '1234')
      .subscribe(user => {
        this.router.navigate(['/']);
      })
  }

}
