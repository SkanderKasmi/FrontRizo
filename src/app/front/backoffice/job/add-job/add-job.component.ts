import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,Validators,FormGroup} from '@angular/forms';
import { job } from 'src/app/front/models/Job';
import { formation } from 'src/app/front/models/Formation';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/front/service/job.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  jobForm!:FormGroup ;
  message:any
id:any
job:job =new job ;

constructor(  private router : Router  ,private formBuilder :FormBuilder  ,private  jobService :JobService,private toastr: ToastrService) 
  {
    this.jobForm = new FormGroup({
  



    })
  }

  ngOnInit(): void {

    
 

    this.jobForm = this.formBuilder.group({
        
      titre:['',[Validators.required]],
      description:['', Validators.minLength(10)],
      skill:['',[Validators.required]],
     
      

  })
}
submitJob() {

  var res = confirm("Êtes-vous sûr de vouloir ajouter ?");
  if(res){
   
  

  this.jobService.createjob(this.jobForm.value).subscribe(
    job => {
      console.log(" success ")
      this.toastr.success(
        'job a été créer ' ,
        'Succès',
        { timeOut: 5000 })
    },
    
    error => {
      this.toastr.error(
        'job  ' ,
        'error',
        { timeOut: 5000 })
    }
  );
}
}
}
