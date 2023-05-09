import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,Validators,FormGroup} from '@angular/forms';
import { formation } from 'src/app/front/models/Formation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/front/service/formation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  formationForm!:FormGroup ;
  message:any
id:any
formation:formation =new formation ;
constructor(  private router : Router  ,private formBuilder :FormBuilder  ,private  FormationService :FormationService,private toastr: ToastrService) 
  {
    this.formationForm = new FormGroup({
  



    })
  }

  ngOnInit(): void {
    this.formationForm = this.formBuilder.group({
        
      titre:['',[Validators.required]],
      prix:['', [Validators.required]],
      description:['',[Validators.required]],
      dateDebut:['',[Validators.required]],
      dateFin:['',[Validators.required]],
      
  
  })
  }
  submitFormation() {

    var res = confirm("Êtes-vous sûr de vouloir ajouter ?");
    if(res){
  
  
    this.FormationService.createformation(this.formationForm.value).subscribe(
      formation => {
        console.log(" success ")
        this.toastr.success(
          'formation a été créer ' ,
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
