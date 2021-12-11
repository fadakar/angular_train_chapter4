import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {TodosComponent} from "./pages/todos/todos.component";
import {HomeComponent} from "./pages/home/home.component";
import {ShowTodoComponent} from "./pages/showTodo/show-todo.component";

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'todo' , component: TodosComponent },
  { path: 'todo/:task' , component: ShowTodoComponent },
  { path: 'about' , component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
