import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<div><h1>hello</h1><div>{{name}}</div></div>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-practice';
  name = 'Angular';
}
