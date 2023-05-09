import { ChangeDetectorRef, Component,  OnInit, ViewChild,  } from '@angular/core';
import {  MatDialog, MatDialogRef } from '@angular/material/dialog';


import {MatTableDataSource} from '@angular/material/table';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ServiceblogService } from 'src/app/front/app-body/components/blog/blog-service.service';
import { Article } from 'src/app/front/models/ArticleModels/article';
import { Commentaire } from 'src/app/front/models/ArticleModels/commentaire';
import { ArticleService } from 'src/app/front/service/ArticleServices/Articles.service';
import Swal from 'sweetalert2';
const titles:string[]=[]
const taglist:string='';
const slug:string='';
const description:string='';
const body:string='';
const createAt:Date=new Date;
const updateat:Date=new Date;
const count: number = 0;



@Component({
  selector: 'app-article-admin',
  templateUrl: './article-admin.component.html',
  styleUrls: ['./article-admin.component.css']
})
export class ArticleAdminComponent implements OnInit  {
  listeArticle:Article[]=[];
  listComment:Commentaire[]=[];
  datasource:any;
  dataSource:any;
  displayedColumns: string[] = ['idartcile', 'title', 'slug', 'description','body', 'Actions'];
  displayedColumns2: string[] = ['idcommnt', 'bodycommt', 'CreateAtcommt' ,'Actions'];
  labelName:string = '';
  constructor(private service:ServiceblogService, public dialog:MatDialog, public cd:ChangeDetectorRef){
   
    this.datasource = new MatTableDataSource();

  }

  ngOnInit(): void {
    this.loadArticle();
    this.loadComments();
   
  }
  loadArticle(){
    this.service.getArticles().subscribe(res=> {
      this.listeArticle=res,
      console.log(this.listeArticle),
      this.datasource = new MatTableDataSource(this.listeArticle)
      console.log(this.datasource);
      this.cd.detectChanges();
    });
  }
  loadComments(){
    this.service.getComments().subscribe(res=> {
      this.listComment=res,
      console.log(this.listeArticle),
      this.dataSource = new MatTableDataSource(this.listComment)
      console.log(this.dataSource);    
    });
  }

  deleteArticle(id:number){
    this.service.DeleteArticle(id).subscribe((response:any)=>

    console.log(response));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }
  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupAdd, {
      width: '800px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  selectedTabValue(event:any){
    console.log(event);
    this.labelName = event.tab.textLabel;
    console.log(this.labelName)
  }

 

}
  
  



// function createNewUser(id: number): Article {
//   const title =
//     titles[Math.round(Math.random() * (titles.length - 1))] +
//     ' ' +
//     titles[Math.round(Math.random() * (titles.length - 1))].charAt(0) +
//     '.';

//   return { 
//     idartcile: id,
//     title:title,
//     tagList:taglist,
//     description:description,
//     body:body,
//     slug:slug,
//     createdAt:createAt,
//     updatedat:updateat,
//     count:count,

// };

    
    
  // };
  @Component({
    selector: 'popadd',
    templateUrl: 'PopupAdd.html',
  })
  export class PopupAdd {
    data:any={
      title:'',
      slug:'',
      body:'',
      description:''
    }
    tilearticle:string='';
    
    
    constructor(
      public dialogRef: MatDialogRef<PopupAdd>,private dataService:ServiceblogService,private jwtHelper:JwtHelperService) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
     token : any = localStorage.getItem('token');
     decodedToken =this.jwtHelper.decodeToken(this.token);
     id:number= this.decodedToken.userId;
     
  
    onSubmit() {
      this.dataService.addArticle(this.data, this.id  ).subscribe(response => {
        console.log(response);
        
        this.tilearticle=this.data.title;
        console.log(this.tilearticle);
        this.obj=response.idartcile;

        // Reset the form
        console.log(this.data)
        this.data = {
          title: '',
          slug: '',
          body:'',
          description:'',
          
        };
      
      });
      
    }
    obj:number=0;
    currentFile: any;
    selectedFiles!: FileList;

    file!: File;
    selectFile(event:any) {
      this.selectedFiles = event.target.files;
    }
    
      upload() :File{
        this.currentFile = this.selectedFiles.item(0);
        console.log(this.selectedFiles)
        console.log(this.currentFile)
        console.log("here ya zebi")
        this.dataService.upload(this.currentFile,this.obj).subscribe(
          
          event => {
            console.log(event)
            
                     console.log("file",event)

          }
         );
        return this.file;
      }
    }
  
  
  