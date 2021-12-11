import {Component, OnInit} from "@angular/core";
import {TodoService} from "../services/todo.service";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  todos: string [] = [];

  constructor(
    public todoService: TodoService
  ) {
  }

  ngOnInit(): void {
    // this.todoService.todos.subscribe(todos => {
    //   this.todos = todos;
    // });

  }


  del(task: string) {
    this.todoService.remove(task);
  }
}
