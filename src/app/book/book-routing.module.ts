import { BookListsComponent } from './book-lists/book-lists.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: BookListsComponent,
    children: [
      { path: 'new', component: BookFormComponent },
      { path: 'id/detail', component: BookDetailComponent }
    ]
  }
];

@NgModule ({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
