import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";


@Injectable({providedIn: 'root'})
export class TodoService {
  todos: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  add(task: string) {
    let todos = [...this.todos.value , task];
    this.todos.next(todos);
  }


  remove(task: string) {
   let todos = this.todos.value.filter(x => x !== task);
   this.todos.next(todos);
  }
}
