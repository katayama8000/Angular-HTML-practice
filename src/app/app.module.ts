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
import { BindingComponent } from './binding/binding.component';
import { MaskPipe } from './mask.pipe';
import { TestcombineComponent } from './testcombine/testcombine.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './component/child/child.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { HTMLComponent } from './HTML/html-practice/html.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    TesthttpComponent,
    TestSubComponent,
    BindingComponent,
    MaskPipe,
    TestcombineComponent,
    RxjsComponent,
    ParentComponent,
    ChildComponent,
    HTMLComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
