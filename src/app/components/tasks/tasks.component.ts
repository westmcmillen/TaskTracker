import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Task } from 'interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentTasks.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
}
