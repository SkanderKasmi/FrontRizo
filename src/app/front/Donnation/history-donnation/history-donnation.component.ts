import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from '../../service/donation.service';
import { DonataireService } from '../../service/donataire.service';
import Swal from 'sweetalert2';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-history-donnation',
  templateUrl: './history-donnation.component.html',
  styleUrls: ['./history-donnation.component.css']
})
export class HistoryDonnationComponent implements OnInit {

  constructor(private router : Router  , private formsModule :FormsModule,private jwt: JwtHelperService,private formBuilder :FormBuilder,public dialog: MatDialog,private activatedRoute : ActivatedRoute,private  donationService :DonationService , private donataireService:DonataireService  ){}
  id :any
Donations:any;
filteredDonations: any;
data: any[] = [];
fromDate!: Date;
toDate!: Date ;
message:any
selectedTyp: string = '';
filteredDonation: any[] = [];
people!: any;
selectedPerson: any=null;
persone!:any
totalItems=0   
page:number= 1
count : number =0
tablesize :  number =10
tablesizes :  any =[5,10,15,20]

  getdonations (id:any){

    this.donationService.getDonbyuser(id).subscribe((data)=>{
console.log("data"+data)
      this.Donations=data;
      this.filteredDonations=this.Donations

 
            });

   
  }

  ngOnInit(): void {

    const decodeedtoken = this.jwt.decodeToken(localStorage.getItem('token') || '');
    const num = parseInt(decodeedtoken.userId);
console.log(num+'num')

   this.getdonations(num)

 

  }



  relod(){
    location.reload()
  }





 
    
  deleteDon(id:any){
    var res = confirm("Êtes-vous sûr de vouloir supprimer?");
    if(res){
    this.donationService.deleteDon(id).subscribe(()=>{
      this.message=['supprimer avec succés ']
   
      console.log(" success ")
      Swal.fire({
        'icon': 'success',
        'text': 'Category added  !'
      })
 
    })
    this.relod()
  }else{
    Swal.close(
   
    )
  }

}
  

 


 
}
