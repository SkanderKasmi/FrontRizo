import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {job} from "../models/Job";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) { }
  SERVER_URL: string = "http://localhost:8082";
  public getjobs(){ 
    const token = localStorage.getItem('token');
    return this.httpClient.get<{job:any}>(this.SERVER_URL + '/jobs/all',{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});

 }
 public searchjob(s : string){
  const token = localStorage.getItem('token');
  return this.httpClient.post(`${this.SERVER_URL}/jobs/searchjobs/${s}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
}
 createjob(job: any): Observable<any> {
  const token = localStorage.getItem('token');
  return this.httpClient.post<any>(this.SERVER_URL  + '/jobs', job,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});}



  deletejob(id:number){
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/jobs/delete/${id}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }
  assignsuerTojob(iduser:number,idjob:number){
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/jobs/jobtouser/${iduser}/${idjob}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }
  getsuerbyjob(iduser:number){
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/jobs/getjobbyuser/${iduser}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }
  getjobByformation(typeobjet: any): Observable<any[]> {
    return this.httpClient.get<any>(`${this.SERVER_URL +'/searchjobs'}/${typeobjet}`);
  }
}
