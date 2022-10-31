import { Component, Input } from '@angular/core';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';
import { Task } from 'interface';
import { TaskService } from 'src/app/services/task.service';
import { DataService } from 'src/app/services/data.service';
import { ArchiveService } from 'src/app/services/archive.service';

@Component({
  selector: 'app-trashcan',
  templateUrl: './trashcan.component.html',
  styleUrls: ['./trashcan.component.css'],
})
export class TrashcanComponent {
  @Input() task: Task = {} as Task;

  constructor(
    private taskService: TaskService,
    private archiveService: ArchiveService,
    private dataService: DataService,
  ) {}

  faTrash = faTrash;

  delete() {
    this.taskService.delete(this.task).subscribe((tasks: Task[]) => {
      this.dataService.setTasks(tasks);
    });
    this.archiveService.delete(this.task).subscribe((tasks: Task[]) => {
      this.dataService.setArchives(tasks);
    });
  }
}
