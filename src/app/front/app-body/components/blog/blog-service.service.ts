import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { React } from 'src/app/front/models/ArticleModels/react';
import { Article } from 'src/app/front/models/ArticleModels/article';
import { Commentaire } from 'src/app/front/models/ArticleModels/commentaire';
import { Media } from 'src/app/front/models/ArticleModels/media';




@Injectable({
  providedIn: 'root'
})
export class ServiceblogService {
  private apiServerUrl : string  = "http://localhost:8082/";
     httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  post_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  Blogs: any[] = [];
  loginStatusService = false;

  detailId: number = -1;
  showEdit = false;
  react :React= new React;

  constructor(public http: HttpClient) {}



  public addPost(bl: any) {
    this.Blogs.splice(0, 0, bl);
  }

  public deletePost(id: number) {
    this.Blogs = this.Blogs.filter(b => b.id !== id);
  }

  getArticles(): Observable<Article[]> {
    const token = localStorage.getItem('token');
    return this.http.get<Article[]>(this.apiServerUrl + 'article/all',{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }

  public addArticle(article:Article): Observable<Article>{
    const token = localStorage.getItem('token');
    return this.http.post<Article>(`${this.apiServerUrl}article/add`,article,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public UpdateArticle(article:Article): Observable<Article>{
    const token = localStorage.getItem('token');
    return this.http.put<Article>(`${this.apiServerUrl}article/update`,article,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public DeleteArticle(articleId:number): Observable<void>{
    const token = localStorage.getItem('token');
    return  this.http.delete<void>(`${this.apiServerUrl}article/delete/${articleId}`,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public findbyidArticle(articleId:number): Observable<Article>{
    const token = localStorage.getItem('token');
    return  this.http.get<Article>(`${this.apiServerUrl}article/find/${articleId}`,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public findAllCommentsCli(articleId:number):Observable<Commentaire[]>{
    const token = localStorage.getItem('token');
    return this.http.get<Commentaire[]>(`${this.apiServerUrl}commentaire/all/article/${articleId}`,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  
  public addlovereact(articleId:number): Observable<React>{
    const token = localStorage.getItem('token');
    return this.http.post<React>(`${this.apiServerUrl}react/add/love/${articleId}`,this.react,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public addlikereact(articleId:number): Observable<React>{
    const token = localStorage.getItem('token');
    return this.http.post<React>(`${this.apiServerUrl}react/add/like/${articleId}`,this.react,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public adddislikereact(articleId:number): Observable<React>{
    const token = localStorage.getItem('token');
    return this.http.post<React>(`${this.apiServerUrl}react/add/dislike/${articleId}`,this.react,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public addlovereactcomment(articleId:number): Observable<React>{
    const token = localStorage.getItem('token');
    return this.http.post<React>(`${this.apiServerUrl}react/add/love/comment/${articleId}`,this.react ,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public addlikereactcomment(articleId:number): Observable<React>{
    const token = localStorage.getItem('token');
    return this.http.post<React>(`${this.apiServerUrl}react/add/like/comment/${articleId}`,this.react,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public adddislikereactcomment(articleId:number): Observable<React>{
    const token = localStorage.getItem('token');
    return this.http.post<React>(`${this.apiServerUrl}react/add/dislike/comment/${articleId}`,this.react,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public countingforLove(idartcile:number):Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.get<any>(`${this.apiServerUrl}react/love/${idartcile}`,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public addcomment(articleId:number,comment:Commentaire,userId:number): Observable<Commentaire>{
    const token = localStorage.getItem('token');
    return this.http.post<Commentaire>(`${this.apiServerUrl}commentaire/add/user/${articleId}/${userId}`,comment,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  getComments(): Observable<Commentaire[]> {
    const token = localStorage.getItem('token');
    return this.http.get<Commentaire[]>(this.apiServerUrl + 'commentaire/all',{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }

  getImageCover(id:number): Observable<Media> {
    const token = localStorage.getItem('token');
    return this.http.get<Media>(this.apiServerUrl + '/find/title/cover/'+id, {headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }


}
