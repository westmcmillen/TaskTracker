import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from 'interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  tasks = new BehaviorSubject<Task[]>([] as Task[]);
  currentTasks: Observable<Task[]> = this.tasks.asObservable();

  setTasks(tasks: Task[]) {
    this.tasks.next(tasks);
  }

  archives = new BehaviorSubject<Task[]>([] as Task[]);
  currentArchives: Observable<Task[]> = this.archives.asObservable();

  setArchives(tasks: Task[]) {
    this.archives.next(tasks);
  }
}
