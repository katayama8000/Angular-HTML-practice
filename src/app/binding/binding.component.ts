import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fontColor: string = 'green';
  bgColor: string = 'yellow';

  onClick1(color: string) {
    this.fontColor = color;
  }

  onClick2(color: string) {
    this.bgColor = color;
  }
}
