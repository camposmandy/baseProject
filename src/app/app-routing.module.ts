import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentClassComponent } from './module-one/component-class/component-class.component';
import { ServiceClassComponent } from './module-two/service-class/service-class.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookListsComponent } from './book/book-lists/book-lists.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

const routes: Routes = [
  { path: 'component', component: ComponentClassComponent },
  { path: 'services', component: ServiceClassComponent },
  {
    path: 'books',
    loadChildren : "./book/book.module#BookModule"
  },
  { path: 'components', component: ComponentClassComponent},
  { path: 'services', component: ServiceClassComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
