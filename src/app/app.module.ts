import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
// import {AppRoutingModule} from './app-routing.module';
import {BooksComponent} from './books/books.component';

import { StoreModule } from '@ngrx/store';
import {reducer as ToDoReducer} from './todos/reducers/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {ToDoService} from './core/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(ToDoReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
