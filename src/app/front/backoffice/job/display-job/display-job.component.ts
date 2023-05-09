import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormsModule  } from '@angular/forms';
import { JobService } from 'src/app/front/service/job.service';
import { job } from 'src/app/front/models/Job';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-display-job',
  templateUrl: './display-job.component.html',
  styleUrls: ['./display-job.component.css']
})
export class DisplayJobComponent implements OnInit {
  totalItems=0   
  page:number= 1
  count : number =0
  tablesize :  number =2
  tablesizes :  any =[5,10,15,20]
  id :any
  jobs:any;
  data: any[] = [];
  message:any
  selectedTyp: string = '';
 
  filteredJob: any[] = [];
  jobss!: job[];
  constructor(  private router : Router  ,private formBuilder :FormBuilder,private activatedRoute : ActivatedRoute,private  jobService :JobService ,private toastr: ToastrService ){}

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


    
  }

 

  deleteJob(id:any){
    var res = confirm("Êtes-vous sûr de vouloir supprimer?");
    if(res){
    this.jobService.deletejob(id).subscribe(()=>{
      this.message=['job a été supprimer avec succés ']
      console.log("job deleted");
      this.toastr.success(
        'Etudiant a été supprimer ' ,
        'Succès',
        { timeOut: 5000 }
      );
      this.getjobs();
    })
    
  }else{
    this.toastr.warning(
      'Annulation de suppression ' ,
      'alerte',
      { timeOut: 5000 }
    );
  }
}
refreshPage() {
  location.reload(); // Use the location.reload() method to refresh the page
}
public searchjob(key: string): void {
  console.log(key);
 
 
    this.jobService.searchjob(key).subscribe((data)=>{
      console.log(data); 
      this.jobs=data;
      this.filteredJob=this.jobs
      this.totalItems = this.jobs.length;
        })
   
  
 

}
ontabledatachange(event :any){
  this.page=event
  
  this.getjobs();


}
ontableSizechange(event :any):void{
  this.tablesize= event.target.value ;
  this.page=1
  
  this.getjobs();

}

}
