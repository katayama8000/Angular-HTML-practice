import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor(private router: Router) {
    console.log(this.router.url);
  }

  public parentData!: string;

  ngOnInit(): void {
    this.parentData = 'parent';
  }

  onRecieveEventFromChild(eventData: string) {
    this.parentData = eventData;
  }
}
