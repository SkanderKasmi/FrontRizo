import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormsModule  } from '@angular/forms';
import { JobService } from 'src/app/front/service/job.service';
import { job } from 'src/app/front/models/Job';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-display-front-job',
  templateUrl: './display-front-job.component.html',
  styleUrls: ['./display-front-job.component.css']
  
})
export class DisplayFrontJobComponent implements OnInit {
  totalItems=0   
  page:number= 1
  count : number =0
  tablesize :  number =2
  tablesizes :  any =[5,10,15,20]
  id :any
  jobs:any;
  myjobs:any;
  data: any[] = [];
  message:any
  selectedTyp: string = '';
  myfilteredJob: any[] = [];
  filteredJob: any[] = [];
  jobss!: job[];
  constructor( private jwt: JwtHelperService, private router : Router  ,private formBuilder :FormBuilder,private activatedRoute : ActivatedRoute,private  jobService :JobService ,private toastr: ToastrService ){}


  getjobs (){

    this.jobService.getjobs().subscribe((data)=>{
      console.log(data); 
      this.jobs=data;
      this.filteredJob=this.jobs
      this.totalItems = this.jobs.length;
        })
      }
     
  ngOnInit(): void {
 

   this.getjobs();

this.displaymyjobs();
    
  }
  refreshPage() {
    location.reload(); // Use the location.reload() method to refresh the page
  }


  assign(id:number){
   console.log(id+"dddd") 
   const decodeedtoken = this.jwt.decodeToken(localStorage.getItem('token') || '');
   const num = parseInt(decodeedtoken.userId);
   var res = confirm("Are you Sure To assign it the Donnation ?");

   if(res){
    
   this.jobService.assignsuerTojob(num,id).subscribe((data)=>{
     console.log("Succès ");
   this.refreshPage();
     })
 }
 }
 displaymyjobs(){
  const decodeedtoken = this.jwt.decodeToken(localStorage.getItem('token') || '');
  const num = parseInt(decodeedtoken.userId);
  this.jobService.getsuerbyjob(num).subscribe((data)=>{
    console.log(data); 
    this.myjobs=data;
    this.myfilteredJob=this.myjobs
   
      })

 }


}
