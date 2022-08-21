import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input, Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  constructor(private router: Router) {
    console.log(this.router.url);
  }

  ngOnInit(): void {}

  @Input() public dataFromParent!: string;
  @Output() action = new EventEmitter<string>();
  onClick() {
    this.action.emit('子コンポーネントからイベントを送信');
  }
}
