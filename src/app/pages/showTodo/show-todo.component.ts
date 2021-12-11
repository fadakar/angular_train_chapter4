import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
})
export class ShowTodoComponent implements OnInit{
  task: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.task = this.route.snapshot.params.task;
  }


  back() {
    this.router.navigate(['/todo']);
  }
}
