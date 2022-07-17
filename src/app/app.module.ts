import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import { TesthttpComponent } from './testhttp/testhttp.component';
import { TestSubComponent } from './test-sub/test-sub.component';

@NgModule({
  declarations: [AppComponent, BookComponent, TesthttpComponent, TestSubComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
