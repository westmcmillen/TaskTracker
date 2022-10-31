import { Component, Input } from '@angular/core';
import { Task } from 'interface';
import { TaskService } from 'src/app/services/task.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  @Input() task: Task = {} as Task;

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
