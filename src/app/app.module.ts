import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {AboutComponent} from "./pages/about/about.component";
import {TodosComponent} from "./pages/todos/todos.component";
import {TodoAddComponent} from "./components/todo-add/todo-add.component";
import {HomeComponent} from "./pages/home/home.component";
import {FormsModule} from "@angular/forms";
import {ShowTodoComponent} from "./pages/showTodo/show-todo.component";
import {TodoComponent} from "./components/todo/todo.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoComponent,


    AboutComponent,
    TodosComponent,
    HomeComponent,
    ShowTodoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
