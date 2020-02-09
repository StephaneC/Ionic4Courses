import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageRoutingModule } from './signin-routing.module';

import { SigninPage } from './signin.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SigninService } from './signin.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SigninPageRoutingModule
  ],
  providers: [
    SigninService
  ],
  declarations: [SigninPage]
})
export class SigninPageModule {}
