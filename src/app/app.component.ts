import { TaskService } from './services/task.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Task } from 'interface';
import { ArchiveService } from './services/archive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private archiveService: ArchiveService,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.taskService.fetch().subscribe((tasks: Task[]) => {
      this.dataService.setTasks(tasks);
    });

    this.archiveService.fetch().subscribe((tasks: Task[]) => {
      this.dataService.setArchives(tasks);
    });

    this.dataService.currentTasks.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });

    this.dataService.currentArchives.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
}
