import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  validationsForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  validationMessages = {
    email: [
      { type: 'required', message: 'L\'adresse email est obligatoire' },
      { type: 'pattern', message: 'Ton adreese email n\'est pas valide' }
    ],
    password: [
      { type: 'required', message: 'Le mot de passe est obligatoire' },
      { type: 'minlength', message: 'Le mot de passe doit faire minimum 5 caractères.' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
    private registerService: RegisterService
  ) { }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      urlPhoto: new FormControl('')
    });
  }

  tryRegister(value) {
    // console.log('tryRegister', value);

    this.registerService.doRegister
      (this.validationsForm.value.email, this.validationsForm.value.password, this.validationsForm.value.urlPhoto)
      .then(res => {
        console.log('register ok', res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created. Please log in.';
        this.location.back();
      });
  }

  goLoginPage() {
    this.router.navigate(['/login']);
  }

}
