import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private http: HttpClient,
  ) { }

  get5Questions(): Observable<Question[]> {
    return this.http.get<Question[]>(environment.apiUrl + '/api/questions');
  }
}
