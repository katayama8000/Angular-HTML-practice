import { TesthttpService } from './../testhttp.service';
import { Component, OnInit } from '@angular/core';
import {member} from "../type/member-type";

@Component({
  selector: 'app-testhttp',
  templateUrl: './testhttp.component.html',
  styleUrls: ['./testhttp.component.css']
})
export class TesthttpComponent implements OnInit {

  constructor(private TesthttpService:TesthttpService) { }

  ngOnInit(): void {
  }

  member:member[] = [];

  getjsonplaceholder() {
    this.TesthttpService.getJson().subscribe(
      (data:member) => {
        this.member.push(data);
      }
    );
  }

}
