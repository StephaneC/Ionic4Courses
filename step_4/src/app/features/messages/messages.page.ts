import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  public message: string;
  public messages: any = [];

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.messagesService.get().then(res => {
      this.messages = res.messages;
    }, err => {
      console.error('Load messages error', err);
    });
  }

  postMessage() {
    if (this.message) {
      this.messagesService.post(this.message).then(res => {
        this.loadMessages();
      }, err => {
        console.error('post message error', err);
      });
    }
  }


}
