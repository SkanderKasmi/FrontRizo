import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonataireService {

  constructor(private httpClient: HttpClient) { }
  SERVER_URL: string = "http://localhost:8082";

  deletePersonne(id:string){
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/Personne/deletePersonne/${id}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }

  public getAllDonataire(){ 
    const token = localStorage.getItem('token');
      return this.httpClient.get<{personne:any}>(this.SERVER_URL + '/Personne',{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
    }
  
    public trieByScore() {
      const token = localStorage.getItem('token');
      return this.httpClient.post(`${this.SERVER_URL}/Personne/sortByScore`,null, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
      });
  }
  public   getDonataireWithHighestScore() {
    const token = localStorage.getItem('token');
    return this.httpClient.get<{personne:any}>(this.SERVER_URL + '/Personne/maxscore',{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
}

// assignDonToPerson(idDon: number, id: number): Observable<any> {
//   const token = localStorage.getItem('token');
//   return this.httpClient.put<any>(`${this.SERVER_URL+'/Donation'}/${idDon}/${id}`, {},{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
// }





// Cette fonction permet d'assigner une personne à une donation qui contient un objet "personne"
assignDonToPerson(idDon: number, idPerson: number): Observable<any> {
  const token = localStorage.getItem('token');
  return this.httpClient.post(`${this.SERVER_URL}/Donation/${idDon}/${idPerson}`,null, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  });
}

public searchjob(s : string){
  const token = localStorage.getItem('token');
  return this.httpClient.post(`${this.SERVER_URL}/jobs/searchjobs/${s}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
}
/*
assignDonToPerson(idDon: number, id: number): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  const url = `${this.SERVER_URL}/Donation/${idDon}/${id}`;
  return this.httpClient.put<any>(url,{}, { headers });
}*/

public getSpringBatch(){ 
  const token = localStorage.getItem('token');
    return this.httpClient.get<{personnes:any}>(this.SERVER_URL + '/Personne/startBatch',{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }

}