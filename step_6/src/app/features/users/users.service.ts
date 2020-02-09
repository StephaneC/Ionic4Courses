import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + localStorage.getItem('jwt')
    });

    return headers;
  }

  get(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.baseUrl + '/users', { headers: this.getHeaders() } )
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
