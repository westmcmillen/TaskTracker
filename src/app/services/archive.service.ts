import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'interface';

@Injectable({
  providedIn: 'root',
})
export class ArchiveService {
  constructor(private http: HttpClient) {}

  fetch(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:5000/api/archives/fetch');
  }

  create(task: Task): Observable<Task[]> {
    const options = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body: Task = task;

    return this.http.post<Task[]>(
      'http://localhost:5000/api/archives/create',
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
      `http://localhost:5000/api/archives/update/${task.id}`,
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
      `http://localhost:5000/api/archives/delete/${task.id}`,
      {
        headers: options,
      },
    );
  }
}
