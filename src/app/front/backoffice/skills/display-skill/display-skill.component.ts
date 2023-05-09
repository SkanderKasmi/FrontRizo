import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/front/models/Skill';
import { FormBuilder ,FormControl,Validators,FormGroup} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SkillService } from 'src/app/front/service/skill.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-display-skill',
  templateUrl: './display-skill.component.html',
  styleUrls: ['./display-skill.component.css']
})
export class DisplaySkillComponent implements OnInit {
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
  jobss!: Skill[];
  constructor(private jwt: JwtHelperService,private router : Router  ,private formBuilder :FormBuilder,private activatedRoute : ActivatedRoute,private  skillService :SkillService ,private toastr: ToastrService ) { }

  getjobs (id:any){

    this.skillService.getskillbyuser(id).subscribe((data)=>{
      console.log(data); 
      this.jobs=data;
      this.filteredJob=this.jobs
      this.totalItems = this.jobs.length;
        })
      }
     
  ngOnInit(): void {
    const decodeedtoken = this.jwt.decodeToken(localStorage.getItem('token') || '');
    const num = parseInt(decodeedtoken.userId);

   this.getjobs(num);


    
  }

}
