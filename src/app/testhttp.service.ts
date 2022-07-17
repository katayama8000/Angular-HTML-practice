import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { member } from './type/member-type';

@Injectable({
  providedIn: 'root',
})
export class TesthttpService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(
    private http: HttpClient,
  ) { }

  getJson(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
