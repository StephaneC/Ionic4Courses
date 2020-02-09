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
    this.messagesService.getMessages().subscribe(result => {
      console.log({ result });
      this.messages = result;
    }, error => console.log('Error getting message'),
      () => {
        console.log('completed');
      });
    this.messagesService.update();
  }


  postMessage() {
    if (this.message) {
      this.messagesService.post(this.message).then(res => {
      }, err => {
        console.error('post message error', err);
      });
    }
  }
}
