import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  public user:User[] = []

  constructor(private authService: AuthService,
              private router: Router) {}

  onLogin(): void{

     this.authService.login('jesusvaldes0125@gmail.com', '1234546')
     .subscribe(user => {

      this.router.navigate(['/'])

     });
  }

}
