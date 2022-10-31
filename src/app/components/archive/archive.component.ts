import { Component, Input } from '@angular/core';
import { faArchive } from '@fortawesome/pro-duotone-svg-icons';
import { Task } from 'interface';
import { TaskService } from 'src/app/services/task.service';
import { DataService } from 'src/app/services/data.service';
import { ArchiveService } from 'src/app/services/archive.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent {
  @Input() task: Task = {} as Task;

  constructor(
    private taskService: TaskService,
    private archiveService: ArchiveService,
    private dataService: DataService,
  ) {}

  faArchive = faArchive;

  delete() {
    this.taskService.delete(this.task).subscribe((tasks: Task[]) => {
      this.dataService.setTasks(tasks);
    });
  }

  archive(task: Task) {
    this.archiveService.create(task).subscribe((tasks: Task[]) => {
      this.dataService.setArchives(tasks);
    });

    this.delete();
  }
}
