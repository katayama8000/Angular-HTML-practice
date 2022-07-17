import { TesthttpService } from './../testhttp.service';
import { Component, OnInit } from '@angular/core';
import { member } from '../type/member-type';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-testhttp',
  templateUrl: './testhttp.component.html',
  styleUrls: ['./testhttp.component.css'],
})
export class TesthttpComponent implements OnInit {
  constructor(private TesthttpService: TesthttpService) {}

  ngOnInit(): void {}

  member: member[] = [];

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

  example = this.source.pipe(filter((person) => person.age >= 30));
  subscribe = this.example.subscribe((val) => console.log(`Over 30: ${val.name}`));

  getjsonplaceholder() {
    this.TesthttpService.getJson().subscribe((data: member) => {
      this.member.push(data);
    });
  }
}
