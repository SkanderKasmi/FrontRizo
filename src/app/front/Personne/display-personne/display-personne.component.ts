import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DonataireService } from 'src/app/front/service/donataire.service';
import { Donation } from 'src/app/front/models/Donation';
import { personne } from 'src/app/front/models/Personne';
import Swal from 'sweetalert2';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-display-personne',
  templateUrl: './display-personne.component.html',
  styleUrls: ['./display-personne.component.css']
})
export class DisplayPersonneComponent implements OnInit {
  message:any
  donataires:any
  idDon:any
  idPerson:any
  personne:any
  hidden:Boolean =true;
  selectedFilter: string = 'none'
  score!: number;
  data: any;
  donatairesFiltered: any;

  page:number= 1
  count : number =0
  tablesize :  number =10
  tablesizes :  any =[5,10,15,20]

  constructor(  private router : Router  ,private formBuilder :FormBuilder,private jwt:JwtHelperService,private activatedRoute : ActivatedRoute,private  donataireService :DonataireService ,private toastr: ToastrService ){}


    getDonataire (){

    this.donataireService.getAllDonataire().subscribe((data)=>{
      console.log(data); 
      this.donataires=data;
      this.donatairesFiltered = this.donataires;

  
        })
      }
      relod(){
        location.reload()
      }
         
  ngOnInit(): void {

   
    this.idDon=this.activatedRoute.snapshot.paramMap.get('id');
    this.getDonataire();

   
    
  }

  ontabledatachange(event :any){
    this.page=event
    
    this.getDonataire();


  }
  
  ontableSizechange(event :any):void{
    this.tablesize= event.target.value ;
    this.page=1
    
    this.getDonataire();

  }

  verif(){
    if (this.idDon==null){
      console.log("aaaaa"+this.idDon)
      return false;
    }else{
      console.log(""+this.idDon)
      return true
    }
    }
  
  SpringBatch(){
    var res = confirm("Are you Sure To Update the data ?");
  if(res){
    this.donataireService.getSpringBatch().subscribe();
    Swal.fire()
    this.relod()
  }else{
    Swal.close()
  }
  }


  filterDonataires() {
    
    switch (this.selectedFilter) {
      case 'none':
        
        this.donatairesFiltered = this.donataires;
        break;
      case 'older':
       

        this.donatairesFiltered = this.donataires.filter((d: { age: number; }) => d.age > 50);
        break;
        case 'maxscore':
        this.donataireService.getDonataireWithHighestScore().subscribe((data)=>{

          this.donatairesFiltered=[data];
        })
          break;
          case 'SortScore':
          this.donataireService.trieByScore().subscribe((data:any)=>{
              data.reverse();
              this.donatairesFiltered = data;
        });
        break;
    }
  }
  deleteDonataire(id:any){
    var res = confirm("Are you Sure To Delete this  data?");
    if(res){
    this.donataireService.deletePersonne(id).subscribe(()=>{
      this.message=['supprimer avec succés ']
   
      console.log(" success ")
      Swal.fire({
        'icon': 'success',
        'text': 'Category added  !'
      })
      this.getDonataire();
    })
    this.relod()
  }else{
    Swal.close(
   
    )
  }

}

getColor(status:any):any{
  if (status=="Affecter") {
    return "red";
  }
  else if (status=="Disponible") {
    return "green";
  }
 
}



Affecter(id:any){
  var res = confirm("Are you Sure To assign it the Donnation ?");
  if(res){
  this.donataireService.assignDonToPerson(this.idDon,id).subscribe((data)=>{
    console.log("Succès ");
  this.router.navigate([`admin/list`]);
    })
}

else{
    Swal.close()
}
}}
