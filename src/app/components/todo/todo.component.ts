import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() task: string = '';

}
