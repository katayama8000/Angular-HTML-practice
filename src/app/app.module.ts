import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [AppComponent, BookComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
