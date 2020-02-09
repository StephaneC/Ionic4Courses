import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Message } from './message';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);


  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.get('messages').then(
      data => {
          this.messages.next(data);
      });
  }


  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + localStorage.getItem('jwt')
    });

    return headers;
  }

  update(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.baseUrl + '/messages', { headers: this.getHeaders() } )
        .subscribe((res: any) => {
          this.storage.set('messages', res.messages);
          this.messages.next(res.messages);
        }, (err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  getMessages(): Observable<Message[]> {
    return this.messages;
  }

  post(message: string): Promise<any> {
    const payload = new HttpParams()
      .set('message', message);

    return new Promise((resolve, reject) => {
      this.http.post(environment.baseUrl + '/messages', payload, { headers: this.getHeaders() })
        .subscribe((res: any) => {
          console.log(res);
          if (res.success) {
            this.update();
            resolve();
          }
          reject(res);
        }, (err) => {
          console.log(err);
          reject(err);
        });
    });
  }
}
