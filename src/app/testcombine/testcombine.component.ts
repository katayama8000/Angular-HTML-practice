import { Component, OnInit } from '@angular/core';
import { timer, combineLatest, Observable, of } from 'rxjs';

@Component({
  selector: 'app-testcombine',
  templateUrl: './testcombine.component.html',
  styleUrls: ['./testcombine.component.css'],
})
export class TestcombineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.add();
    // this.combineLatest();
  }

  obj1: Observable<number> = of(0);
  obj2: Observable<number> = of(0);

  add() {
    setInterval(() => {
      this.obj1.subscribe((value) => {
        this.obj1 = of(value + 1);
        console.log('obj1', value);
      });
    }, 1000);

    setInterval(() => {
      this.obj2.subscribe((value) => {
        this.obj2 = of(value + 1);
        console.log('obj2', value);
      });
    }, 2000);
  }

  combineLatest() {
    combineLatest(this.obj1, this.obj2).subscribe(([ob1, ob2]) => {
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaa', ob1, ob2);
    });
  }
}

// let ob1$ = timer(3000, 4000);
// let ob2$ = timer(2000, 3000);

// combineLatest(ob1$, ob2$).subscribe(([ob1, ob2]) => {
//   console.log(ob1, ob2);
// });
