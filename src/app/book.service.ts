import { Books } from './type/book-type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  getBooks(): Books {
    return {
      isbn: '978-4-7741-8411-1',
      title: '苦役列車',
      price: 3000,
      publisher: '亡くなった人',
    };
  }
}
