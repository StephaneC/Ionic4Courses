import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http: HttpClient) { }


  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return headers;
  }

  doRegister(username: string, pwd: string, urlPhoto: string): Promise<any> {
    let body = 'username=' + username;
    body = body + '&pwd=' + pwd;

    const payload = new HttpParams()
      .set('username', username)
      .set('urlPhoto', urlPhoto)
      .set('pwd', pwd);


    return new Promise((resolve, reject) => {
      this.http.post(environment.baseUrl + '/signup', payload, { headers: this.getHeaders() })
        .subscribe((res: any) => {
          console.log(res);
          if (res.success) {
            resolve(res);
          }

          reject(res);
        }, (err) => {
          console.log(err);
          reject(err);
        });
    });
  }
}
