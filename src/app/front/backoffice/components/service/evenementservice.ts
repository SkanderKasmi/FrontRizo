import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root', })
export class evenementservice{
    constructor(private _http: HttpClient) {}
    addEvenement(data: any): Observable<any> {
        return this._http.post('http://localhost:3000/events/add', data);
      }
    
      updateEvenemnt(id: number, data: any): Observable<any> {
        return this._http.put(`http://localhost:3000/events/update`, data);
      }
    
      getvenement(): Observable<any> {
        return this._http.get('http://localhost:3000/events/liste');
      }
    
      deleteEvenement(id: number): Observable<any> {
        return this._http.delete(`http://localhost:3000/employees/${id}`);
      }


   

    
}