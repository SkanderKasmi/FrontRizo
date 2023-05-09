import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/front/service/formation.service';
import {JobService } from 'src/app/front/service/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormsModule  } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-display-front-formation',
  templateUrl: './display-front-formation.component.html',
  styleUrls: ['./display-front-formation.component.css']
})
export class DisplayFrontFormationComponent implements OnInit {



  id :any
  selectedjob: any=null;
  persone!:any
  formations:any;
  data: any[] = [];
  c: any[] = [];
  fromDate! :Date;
  toDate! :Date ;
  message:any
  jobs:any;
  selectedTyp: string = '';
  filteredformation: any[] = [];
  filteredjob: any[] = [];
  selectedjobid: any;
  constructor(  private router : Router  ,private formBuilder :FormBuilder,private activatedRoute : ActivatedRoute,private  FormationService :FormationService ,private  JobService :JobService ,private toastr: ToastrService ){}

  getformations (){

    this.FormationService.getformations().subscribe((data)=>{
      console.log(data); 
      this.formations=data;
      this.filteredformation=this.formations
        })
      }
      getjobs (){

        this.JobService.getjobs().subscribe((c)=>{
          console.log(c); 
          this.jobs=c;
          this.filteredjob=this.jobs
      
            })
          }
     
  ngOnInit(): void {
 
    this.getjobs ();
   this.getformations();


    
  }

 


public sortformation(): void {
  
 
 
    this.FormationService.sortformation().subscribe((data)=>{
      console.log(data); 
      this.formations=data;
      this.filteredformation=this.formations
     
        })
   
  
 

}
public getformationbdates(): void {
  
 
 
  this.FormationService.getformationbetweendates(this.fromDate,this.toDate).subscribe((data)=>{
    console.log(data); 
    this.formations=data;
    this.filteredformation=this.formations
   
      })
 



}

}
