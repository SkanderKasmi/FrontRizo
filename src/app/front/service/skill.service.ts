import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SkillService {

  
  
  constructor(private httpClient: HttpClient) { }
  SERVER_URL: string = "http://localhost:8082";
  public getskills(){ 
    const token = localStorage.getItem('token');
    return this.httpClient.get<{job:any}>(this.SERVER_URL + '/skills/all',{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});

 }
 
 createjob(skill: any): Observable<any> {
  const token = localStorage.getItem('token');
  return this.httpClient.post<any>(this.SERVER_URL  + '/skills/add', skill,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});}



  savejobtouser(skill: any,id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.post<any>(`${this.SERVER_URL}/skills/saveSkilltouser/${id}`, skill,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});}

    getskillbyuser(id: number) {
      const token = localStorage.getItem('token');
      return this.httpClient.post(`${this.SERVER_URL}/skills/getskillbyuser/${id}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});}
  
  }
