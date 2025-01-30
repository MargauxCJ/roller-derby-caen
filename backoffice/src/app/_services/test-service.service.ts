import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Test {
  title: string;
}
@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http: HttpClient) {
  }

  public getTest(): Observable<Test> {
    return this.http.get<Test>("http://localhost:3000/api");
  }
}
