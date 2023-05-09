import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {


  constructor(private httpClient: HttpClient) { }
  SERVER_URL: string = "http://localhost:8082";
  public getformations(){ 
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/formations/all`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});

 }
 createformation(formation: any): Observable<any> {
  const token = localStorage.getItem('token');
  return this.httpClient.post<any>(this.SERVER_URL  + '/formations/add', formation,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});}
  deleteformation(id:number){
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/formations/delete/${id}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }
  sortformation(){
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/formations/sortByPrice`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }

  assignformationtojob(idformation: number, idjob: number): Observable<any> {
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/jobs/jobtoformation/${idformation}/${idjob}`,null, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    });
  }
  getformationbetweendates(date_debut: Date, date_fin: Date) {
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/formations/getbdates/${date_debut}/${date_fin}`,null, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    });
  }
 
}
