import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/models/topic.model';

const baseUrl = 'http://localhost:8089/api/topics';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Topic[]> {
    return this.http.get<Topic[]>(baseUrl);
  }

  get(id: any): Observable<Topic> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${baseUrl}?title=${title}`);

  }
}
