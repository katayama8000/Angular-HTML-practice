import { filter, map, take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.obstest();
  }

  obstest() {
    const obs = new Observable<number>((observer) => {
      console.log(observer);
      observer.next(10);
      observer.next(20);
      observer.next(30);
      observer.next(40);
      observer.next(50);
    });


    obs
      .pipe(
        filter((v) => 3 <= v),
        map((v) => v * 2),
        take(3)
      )
      .subscribe((value) => {
        console.log('Observer 1', value);
      });
  }
}
