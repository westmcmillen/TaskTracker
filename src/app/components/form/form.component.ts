import { TaskService } from 'src/app/services/task.service';
import { Component } from '@angular/core';
import { Task } from 'interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  description: string = '';

  constructor(
    private taskService: TaskService,
    private dataService: DataService,
  ) {}

  submit() {
    if (!this.description.replace(' ', '')) return;
    this.taskService.create(this.description).subscribe((tasks: Task[]) => {
      this.dataService.setTasks(tasks);
      this.description = '';
    });
  }
}
