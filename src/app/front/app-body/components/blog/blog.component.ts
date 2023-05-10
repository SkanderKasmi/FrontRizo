import { Component, OnInit } from '@angular/core';
import { Blog } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/front/models/ArticleModels/article';
import { MatDialog } from '@angular/material/dialog';

import { JwtHelperService } from '@auth0/angular-jwt';
import { PopupAdd } from 'src/app/front/backoffice/components/article-admin/article-admin.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogsDetail: Blog[] = [];
  listArticles : Article[]= [];
  name:string= ";"
  first:string="";
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
  dataSource:any;

  ngOnInit(): void {
      this.service.getArticles().subscribe((d: any) =>{
        this.listArticles = d;
        this.dataSource = new MatTableDataSource(this.listArticles)
        
      });
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  labelName:any;
  selectedTabValue(event:any){
    console.log(event);
    this.labelName = event.tab.textLabel;
    console.log(this.labelName)
  }
}
