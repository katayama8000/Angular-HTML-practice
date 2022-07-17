import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks() {
    console.log('getBooks');
  }
}
