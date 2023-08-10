import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { User } from 'src/model/users';
import { Login } from 'src/model/login';
import { AdminService } from 'src/services/admin.service';
import { NgModel } from '@angular/forms';
import { User } from 'src/model/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public Login = new Login;
  public loginErrorMessage: string = '';
  public loginErrorCount: number = 0;
  public nombreTentative: number = 3;

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  public loginForm = new FormBuilder


  async seConecter(loginForm: NgForm) {
    // this.router.navigate(['/accueil']);
    // console.log(this.Login);

    await this.adminService.userExist(this.Login.EMAIL, this.Login.PASSWORD).subscribe((response: any) => {
      if(!response.data) {
        this.loginErrorMessage = response.message;
        this.loginErrorCount++;
        if(this.loginErrorCount > this.nombreTentative -1) {
          this.loginErrorMessage= "Compte bloqué. Veuillez contacter un administrateur";
        }
      }
      else this.router.navigate(['/accueil']);

    });

  }

}
