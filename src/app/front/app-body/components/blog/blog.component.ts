import { Component, OnInit } from '@angular/core';
import { Blog } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/front/models/ArticleModels/article';
import { MatDialog } from '@angular/material/dialog';

import { JwtHelperService } from '@auth0/angular-jwt';
import { PopupAdd } from 'src/app/front/backoffice/components/article-admin/article-admin.component';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogsDetail: Blog[] = [];
  listArticles : Article[]= [];
  count:number=1;
  constructor(
    private jwtHelper: JwtHelperService,
    public service: ServiceblogService,
    public router: Router,
    public http: HttpClient,
    public dialog:MatDialog,
  ) {
    this.service.showEdit = false;
  }

  ngOnInit(): void {
      this.service.getArticles().subscribe((d: any) => (this.listArticles = d));
      const token : any = localStorage.getItem('token');
     const decodedToken =this.jwtHelper.decodeToken(token);
     const id= decodedToken.userId;
     console.log(id);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupAdd, {
      width: '800px',
     
    });}

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }

  viewDetail(idartcile: number) {
    this.service.detailId = idartcile;

     this.service.showEdit = true;

    this.router.navigate(['/app/articlesdetail', idartcile]);
  }
}
