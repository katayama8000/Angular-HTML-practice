import { filter, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
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

  getJson(): Observable<member> {
    return this.http.get<member>('https://jsonplaceholder.typicode.com/todos/1').pipe(
      tap((data) => console.log(data)),
      catchError(throwError)
    );
  }

  getArrayJson(): Observable<member[]> {
    return this.http
      .get<member[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        filter((data: member[]) => data.length > 0),
        tap((data) => console.log("alllllllllll")),
        catchError(throwError)
      );
  }

}
