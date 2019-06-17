import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListsComponent } from './book-lists/book-lists.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookServiceService } from './book-service.service';
import { BookRoutingModule} from './book-routing.module';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    BookFormComponent,
    BookListsComponent,
    BookDetailComponent,
  ],

  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
  ],

  exports: [
    BookFormComponent,
     BookListsComponent,
     BookDetailComponent
  ],

  providers: [
    BookServiceService,
  ]
})
export class BookModule { }
