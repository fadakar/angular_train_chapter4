import {Component} from "@angular/core";
import {TodoService} from "../services/todo.service";


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
})
export class TodoAddComponent {
  title: string = '';

  constructor(
    private todoService: TodoService
  ) {

  }


  add(){
    this.todoService.add(this.title);
    this.title = '';
  }

}
