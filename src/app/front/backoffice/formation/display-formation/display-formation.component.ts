import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/front/service/formation.service';
import {JobService } from 'src/app/front/service/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormsModule  } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-display-formation',
  templateUrl: './display-formation.component.html',
  styleUrls: ['./display-formation.component.css']
})
export class DisplayFormationComponent implements OnInit {


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
  onSelectjob(): void {
    this.filterDonations();
  }

  filterDonations(): void {
    if (!this.selectedjob) {
      console.log(this.filteredformation); 
      this.filteredformation = this.formations;
  
    } else {
      console.log(this.selectedjob)
      this.filteredformation = this.formations.filter((d: { persone: any; }) => d.persone === this.selectedjob.id);
    
    }
  }
 

  deleteformation(id:any){
    var res = confirm("Êtes-vous sûr de vouloir supprimer?");
    if(res){
    this.FormationService.deleteformation(id).subscribe(()=>{
      this.message=['formation a été supprimer avec succés ']
      console.log("formation deleted");
      this.toastr.success(
        'Etudiant a été supprimer ' ,
        'Succès',
        { timeOut: 5000 }
      );
      this.getformations();
    })
    
  }else{
    this.toastr.warning(
      'Annulation de suppression ' ,
      'alerte',
      { timeOut: 5000 }
    );
  }
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
Affecter(idformation:any){
  var res = confirm("Are you Sure To assign it the Donnation ?");
  if(res){
    const num = parseInt(this.selectedjobid);
  this.FormationService.assignformationtojob(idformation,num).subscribe((data)=>{
    console.log("Succès ");
  this.router.navigate([`admin/viewformation`]);
    })
}
}

}
