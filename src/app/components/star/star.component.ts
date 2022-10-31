import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/pro-duotone-svg-icons';
import { Task } from 'interface';
import { TaskService } from 'src/app/services/task.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  @Input() task: Task = {} as Task;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private dataService: DataService,
  ) {}

  href: string = this.router.url;

  faStar = faStar;

  star() {
    this.taskService
      .update({
        ...this.task,
        important: !this.task.important,
      })
      .subscribe((tasks: Task[]) => {
        this.dataService.setTasks(tasks);
      });
  }
}
