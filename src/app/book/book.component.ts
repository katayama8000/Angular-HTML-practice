import { BookService } from './../book.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../type/book-type';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(private BookService: BookService) {}

  ngOnInit(): void {
    this.books.push(this.BookService.getBooks());
  }

  @Input() dataFromParent: String = '';
  @Output() action = new EventEmitter<String>();

  onClick() {
    this.action.emit(
      '子コンポーネントから親コンポーネントへデータを渡す際はイベントを経由します。'
    );
  }

  books: Book[] = [
    {
      isbn: '978-4-7741-8411-1',
      title: 'サイコロを投げる',
      price: 3000,
      publisher: '翔泳社',
    },
    {
      isbn: '978-4-7741-8411-2',
      title: 'サイコロを投げる2',
      price: 3100,
      publisher: '翔泳社',
    },
  ];
}
