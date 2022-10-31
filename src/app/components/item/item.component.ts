import { Component, Input } from '@angular/core';
import { Task } from 'interface';
import { TaskService } from 'src/app/services/task.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() task: Task = {} as Task;
  @Input() index: number = 0;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private dataService: DataService,
  ) {}

  href: string = this.router.url;

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
