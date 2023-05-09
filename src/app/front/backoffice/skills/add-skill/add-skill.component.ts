import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,Validators,FormGroup} from '@angular/forms';
import { Skill } from 'src/app/front/models/Skill';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SkillService } from 'src/app/front/service/skill.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  skillForm!:FormGroup ;
  message:any
id:any
iduser!:number
skill:Skill =new Skill ;

  constructor(private jwt: JwtHelperService, private router : Router  ,private formBuilder :FormBuilder  ,private activatedRoute : ActivatedRoute,private  skillService :SkillService,private toastr: ToastrService) {  
     this.skillForm = new FormGroup({

  })}

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
        
      name:['',[Validators.required]],
      
     
  });
  }
  cansubscribe():number{

    const decodeedtoken = this.jwt.decodeToken(localStorage.getItem('token') || '');
    

      return decodeedtoken.id;
    
    
  }
  refreshPage() {
    location.reload(); // Use the location.reload() method to refresh the page
  }

  submitJob() {
    const decodeedtoken = this.jwt.decodeToken(localStorage.getItem('token') || '');
    const num = parseInt(decodeedtoken.userId);
    console.log(decodeedtoken.userId)
    var res = confirm("Êtes-vous sûr de vouloir ajouter ?");
    if(res){
     
   
    this.skillService.savejobtouser(this.skillForm.value,num).subscribe(
      job => {
        console.log(" success ")
        
        this.toastr.success(
          'job a été créer ' ,
          'Succès',
          { timeOut: 5000 })
          this.refreshPage();
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
