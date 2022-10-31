import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  fetch(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:5000/api/tasks/fetch');
  }

  create(description: string): Observable<Task[]> {
    const options = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body: { description: string } = {
      description: description,
    };

    return this.http.post<Task[]>(
      'http://localhost:5000/api/tasks/create',
      body,
      { headers: options },
    );
  }

  update(task: Task): Observable<Task[]> {
    const options = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body: Task = task;

    return this.http.put<Task[]>(
      `http://localhost:5000/api/tasks/update/${task.id}`,
      body,
      {
        headers: options,
      },
    );
  }

  delete(task: Task): Observable<Task[]> {
    const options = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.delete<Task[]>(
      `http://localhost:5000/api/tasks/delete/${task.id}`,
      {
        headers: options,
      },
    );
  }
}
