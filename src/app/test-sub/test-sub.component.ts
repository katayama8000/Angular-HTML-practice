import { map, take, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-test-sub',
  templateUrl: './test-sub.component.html',
  styleUrls: ['./test-sub.component.css'],
})
export class TestSubComponent implements OnInit {
  constructor(private http: HttpClient) {}

  obData1 = 0;
  subData1 = 0;
  obData2 = 0;
  subData2 = 0;

  ngOnInit(): void { }

  testWait() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getObservableData() {
    let tmpdata = new Observable<any>((observable) => {
      observable.next(Math.floor(Math.random() * 100) + 1);
      observable.next(Math.floor(Math.random() * 100) + 1);
      observable.next(Math.floor(Math.random() * 100) + 1);
      observable.next(Math.floor(Math.random() * 100) + 1);
    });
    tmpdata.pipe(
      map((data) => data * 10),
      take(3),
      filter((data: number) => data < 50)
    ).subscribe((data) => {
      this.obData1 = data;
    });
    tmpdata.subscribe((data) => {
      this.obData2 = data;
    });
  }

  getSubjectData() {
    let tmpdata = new Subject<any>();
    tmpdata.subscribe((data) => {
      this.subData1 = data;
    });
    tmpdata.pipe(
      map((data:number) => data * 10),
    ).subscribe((data) => {
      this.subData2 = data;
    });
    tmpdata.next(Math.floor(Math.random() * 100) + 1);
  }
}
