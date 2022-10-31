import { Component, Input } from '@angular/core';
import { Task } from 'interface';
import { TaskService } from 'src/app/services/task.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input() task: Task = {} as Task;
  @Input() index: number = 0;

  constructor(
    private taskService: TaskService,
    private dataService: DataService,
  ) {}

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
