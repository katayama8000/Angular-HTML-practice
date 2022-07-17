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
  imageUrl =
    'https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png';
  date!: Date | string;

  myName = '片山';

  test() {
    this.date = '';
  }

  show() {
    this.date = new Date();
  }
}
