import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule } from '@ionic/angular';

import { MessagesPageRoutingModule } from './messages-routing.module';

import { MessagesPage } from './messages.page';
import { MessagesService } from './messages.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule,
    IonicStorageModule.forRoot({
      driverOrder: ['sqlite', 'websql', 'indexeddb']}
    )
  ],
  declarations: [MessagesPage],
  providers: [
    MessagesService
  ]
})
export class MessagesPageModule {}
