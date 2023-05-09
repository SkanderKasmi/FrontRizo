import {Observable} from "rxjs";
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Article } from "../../models/ArticleModels/article";
import { Commentaire } from "../../models/ArticleModels/commentaire";



@Injectable({
  providedIn: 'root'
})
export class ArticleService {

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
  private apiServerUrl : string  = "http://localhost:8082/";
  constructor(private http: HttpClient   ){}

  getArticles(): Observable<Article[]> {
    const token = localStorage.getItem('token');
    return this.http.get<Article[]>(this.apiServerUrl + 'article/all',{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }

  public addArticle(article:Article,id:number): Observable<Article>{
    const token = localStorage.getItem('token');
    return this.http.post<Article>(`${this.apiServerUrl}article/add/${id}`,article,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public UpdateArticle(article:Article): Observable<Article>{
    const token = localStorage.getItem('token');
    return this.http.put<Article>(`${this.apiServerUrl}article/update`,article,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public DeleteArticle(articleId:number): Observable<void>{
    const token = localStorage.getItem('token');
    return  this.http.delete<void>(`${this.apiServerUrl}article/delete/${articleId}`,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  public findbyidArticle(articleId:number): Observable<void>{
    const token = localStorage.getItem('token');
    return  this.http.get<void>(`${this.apiServerUrl}article/find/${articleId}`,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }

  getComments(): Observable<Commentaire[]> {
    const token = localStorage.getItem('token');
    return this.http.get<Commentaire[]>(this.apiServerUrl + 'commentaire/all',{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})});
  }
  upload(file: File, title:string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.apiServerUrl}/upload/db/{title}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

}
