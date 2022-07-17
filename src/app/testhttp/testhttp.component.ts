import { member } from './../type/member-type';
import { TesthttpService } from './../testhttp.service';
import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-testhttp',
  templateUrl: './testhttp.component.html',
  styleUrls: ['./testhttp.component.css'],
})
export class TesthttpComponent implements OnInit {
  constructor(private TesthttpService: TesthttpService) {}

  member$!: Observable<member>;
  title: string = '';
  member: member[] = [];
  subject = new Subject();

  ngOnInit(): void {
    this.testasync();
    this.testmap();
    this.getjsonplaceholderarray();
  }

  source = from([
    { name: 'sdfhd', age: 31 },
    { name: 'Bob', age: 25 },
    { name: 'dg', age: 31 },
    { name: 'Bob', age: 25 },
    { name: 'fhk', age: 31 },
    { name: 'Bob', age: 25 },
    { name: 'dgj', age: 31 },
    { name: 'Bob', age: 25 },
    { name: 'gjkl', age: 31 },
    { name: 'Bob', age: 25 },
  ]);

  example = this.source.pipe(filter((person) => person.age >= 30)).subscribe(
    (val) => console.log(`Over 30: ${val.name}`),
    (err) => console.log(err),
    () => console.log('complete')
  );

  testasync(): void {
    this.member$ = this.TesthttpService.getJson();
  }

  testmap() {
    this.TesthttpService.getJson()
      .pipe(map((data: member) => 'map' + data.title))
      .subscribe((data: string) => {
        this.title = data;
      });
  }

  getjsonplaceholder() {
    this.TesthttpService.getJson().subscribe((data: member) => {
      this.member.push(data);
    });
  }

  getjsonplaceholderarray() {
    // this.TesthttpService.getArrayJson().subscribe((data: member[]) => {
    //   this.member = data;
    // });
    this.TesthttpService.getArrayJson()
      .pipe(
        map((data: member[]) => {
          this.member = data;
        })
      )
      .subscribe();

    //console.log(data);
  }

  count = 0;

  testTake() {
    for (let i = 0; i < 10; i++) {
      this.TesthttpService.getArrayJson()
        .pipe(take(3))
        .subscribe((data: member[]) => {
           console.log(`take(${++this.count})`);
        });
    }
  }



  numberOne$ = of(1);
}
