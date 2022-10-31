import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Task } from 'interface';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css'],
})
export class ArchivesComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentArchives.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
}
