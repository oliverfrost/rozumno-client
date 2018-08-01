import {NgModule} from '@angular/core';

import {ToDoListComponent} from './components/todo-list/todo-list.component';
import {ToDoItemComponent} from './containers/todo-item/todo-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [
    ToDoListComponent,
    ToDoItemComponent
  ],
  declarations: [
    ToDoListComponent,
    ToDoItemComponent
  ],
  providers: [],
})
export class NameModule {
}
