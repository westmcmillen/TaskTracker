import { Component, Input } from '@angular/core';
import { faCheck, faCircleSmall } from '@fortawesome/pro-duotone-svg-icons';
import { Task } from 'interface';
import { TaskService } from 'src/app/services/task.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkmark',
  templateUrl: './checkmark.component.html',
  styleUrls: ['./checkmark.component.css'],
})
export class CheckmarkComponent {
  @Input() task: Task = {} as Task;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private dataService: DataService,
  ) {}

  href: string = this.router.url;

  faCheck = faCheck;
  faCircleSmall = faCircleSmall;

  check() {
    this.taskService
      .update({
        ...this.task,
        status: this.task.status === 'Pending' ? 'Completed' : 'Pending',
      })
      .subscribe((tasks: Task[]) => {
        this.dataService.setTasks(tasks);
      });
  }
}
