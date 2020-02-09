import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  public errorMessage: string;

  public loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required
    ])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
  });

  validationMessages = {
    email: [
      { type: 'required', message: 'L\'adresse email est obligatoire' },
      { type: 'pattern', message: 'Ton adreese email n\'est pas valide' }
    ],
    password: [
      { type: 'required', message: 'Le mot de passe est obligatoire' },
      { type: 'minlength', message: 'Le mot de passe doit faire minimum 5 caractères.' }
    ],
  };

  constructor(
    private signinService: SigninService,
    private router: Router) { }

  ngOnInit() {
  }


  login() {
    this.signinService.doLogin(this.loginForm.value.email, this.loginForm.value.password)
      .then(res => {
        console.log('signin done');
        sessionStorage.setItem('jwt', res.jwt);
        console.log('saved jwt done');
        this.router.navigateByUrl('/connected', { skipLocationChange: true });
      }, err => {
        this.errorMessage = err.message;
        console.error(err);
      });
  }

}
