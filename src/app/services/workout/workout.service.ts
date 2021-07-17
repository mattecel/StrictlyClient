import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://ec2-3-87-255-246.compute-1.amazonaws.com:8080/strictly/workouts';
// const url = 'http://localhost:8080/strictly/workouts/add';
@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  update(workout): Observable<any> {
    return this.http.post(`${url}/update`, workout);
  }

  add(workout): Observable<any> {
    return this.http.post(`${url}/add`, workout);
  }

  delete(workout): Observable<any> {
    return this.http.post(`${url}/delete`, workout);
  }
}