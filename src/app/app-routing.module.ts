import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { HTMLComponent } from './HTML/html-practice/html.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  {
    path: 'html',
    component: HTMLComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
