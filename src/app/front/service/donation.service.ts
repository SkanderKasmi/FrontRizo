import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Donation } from '../models/Donation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  
  constructor(private httpClient: HttpClient) { }
  SERVER_URL: string = "http://localhost:8082";



 
  public getdonations(){ 
    const token = localStorage.getItem('token');
      return this.httpClient.get<{donation:any}>(this.SERVER_URL + '/Donation',{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
    }
  
   
   createDonation(donation: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.httpClient.post<any>(this.SERVER_URL  + '/Donation', donation, {headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})

   }
   saveDontouser(donation: any,id: any):Observable<any> {
    
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/Donation/SaveDontoUser/${id}`, donation,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});}

public getdatebetween(startDate:Date ,endDate:Date){
  const token = localStorage.getItem('token');

  return this.httpClient.post(`${this.SERVER_URL}/Donation/getbydate/${startDate}/${endDate}`,null, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':` Bearer ${token}`
    })
  });
}

/*
  getDonationsBetweenDates(startDate: Date, endDate: Date): Observable<any[]> {
    const token = localStorage.getItem('token');
    return this.httpClient.get<any>(`${this.SERVER_URL +'/Donation'}/${startDate}/${endDate}`,,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }*/

  // public deleteDon(donId:any){
  //   const token = localStorage.getItem('token');
  //   return this.httpClient.delete<{message : string } >(`${this.SERVER_URL + '/Donation'}/${donId}` ,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
    
  // }
 
  deleteDon(id:string){
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/Donation/deleteDon/${id}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }
  

  getDonByType(typeobjet: any): Observable<any[]> {
    const token = localStorage.getItem('token');
    return this.httpClient.get<any>(`${this.SERVER_URL +'/Donation/type'}/${typeobjet}` ,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }

  public getDonbyAffectation(iddonataire: any): Observable<any[]> {
    const token = localStorage.getItem('token');
    return this.httpClient.get<any>(`${this.SERVER_URL +'/Donation/affection'}/${iddonataire}`,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});

  }
  public searchjob(s : string){
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/Donation/searchjobs/${s}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }


  assignDonToPerson(idDon: number, id: number): Observable<any> {
  const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/Donation'}/${idDon}/${id}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }

  getDonbyuser(id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/Donation/getDonbyuser/${id}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});}

}

/*
  assignDonToPerson(idDon: number, id: number): Observable<any> {
    const token = localStorage.getItem('token');
    return this.httpClient.post(`${this.SERVER_URL}/Donation'}/${idDon}/${id}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }*/
 /* assignDonToPerson(idDon: number, id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.SERVER_URL+'/Donation'}/${idDon}/${id}`, {});
  } */


/*
public getChef(chefid:any){
  return this.httpClient.get(`${this.SERVER_URL + 'chefs'}/${chefid}`); 
}
public creatChef(chef: {id: number, name: String, speciality: String, experience: number, dateOfBirth: string}){
  return this.httpClient.post(`${this.SERVER_URL + 'chefs'}`, chef)
}
public deleteChef(chefId:any){
  return this.httpClient.delete(`${this.SERVER_URL + 'chefs'}/${chefId}`)
}
public updateChef(chef: {id: number, name: String, speciality: String, experience: number, dateOfBirth: string}){
  return this.httpClient.put(`${this.SERVER_URL + 'chefs'}/${chef.id}`, chef)

  
}*/

