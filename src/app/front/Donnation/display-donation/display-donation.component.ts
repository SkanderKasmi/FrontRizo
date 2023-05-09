import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormsModule  } from '@angular/forms';
import { DonationService } from 'src/app/front/service/donation.service';
import { Donation } from 'src/app/front/models/Donation';
import { ToastrService } from 'ngx-toastr';
import { NgModule } from '@angular/core';


import { DonataireService } from 'src/app/front/service/donataire.service';
import { MatDialog } from '@angular/material/dialog';
import { DonataireComponent } from 'src/app/front/Personne/donataire/donataire.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-donation',
  templateUrl: './display-donation.component.html',
  styleUrls: [ './display-donation.component.css'
  
]
})
export class DisplayDonationComponent implements OnInit {
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

  constructor(private router : Router  , private formsModule :FormsModule,private formBuilder :FormBuilder,public dialog: MatDialog,private activatedRoute : ActivatedRoute,private  donationService :DonationService , private donataireService:DonataireService ,private toastr: ToastrService ){}

  getdonations (){

    this.donationService.getdonations().subscribe((data)=>{

      this.Donations=data;
      this.filteredDonations=this.Donations

      this.filterDonations();
      this.updateDonationStatus()
 
            });

   
  }

 getsearch(key: string): void {
    console.log(key);
   
   
      this.donationService.searchjob(key).subscribe((data)=>{
        console.log(data); 
        this.Donations=data;
        this.filteredDonations=this.Donations
        this.totalItems = this.Donations.length;

          })

  }
  
  relod(){
    location.reload()
  }
     
  ngOnInit(): void {

    this.getdonations();

    
    
    this.donataireService.getAllDonataire()
    .subscribe((people) => {
      console.log(people)
      this.people = people;
    });

    this.getfilterDonations();
    this.id=this.activatedRoute.snapshot.paramMap.get('id');

  }


  ontabledatachange(event :any){
    this.page=event
    
    this.getdonations();


  }
  
  ontableSizechange(event :any):void{
    this.tablesize= event.target.value ;
    this.page=1
    
    this.getdonations();

  }
  public search(key: string): void {
    console.log(key);
   
    if (key!='') {
      this.donationService.searchjob(key).subscribe((data)=>{
        console.log(data); 
        this.Donations=data;
               this.updateDonationStatus()
        this.filteredDonations=this.Donations
        this.totalItems = this.Donations.length;
      })
      }else{

        this.donationService.getdonations().subscribe((data)=>{
          console.log(data);
          this.filteredDonations=data;
          this.Donations=this.filteredDonations;
          this.updateDonationStatus()
     

      })
        }
}
  onSelectPerson(): void {
    this.filterDonations();
  }

  filterDonations(): void {
    if (!this.selectedPerson) {
      this.filteredDonations = this.Donations;
  
    } else {
      console.log(this.selectedPerson)
      this.filteredDonations = this.Donations.filter((d: { persone: any; }) => d.persone === this.selectedPerson.id);
    
    }
  }

  

    
  

    getfilterDonations(): void {
      if (this.selectedTyp=='') {
  
        this.donationService.getdonations().subscribe((data)=>{
          console.log(data);
          this.filteredDonations=data;
          this.Donations=this.filteredDonations;
          this.updateDonationStatus()

        });
      }else {
        this.donationService.getDonByType(this.selectedTyp)
          .subscribe((data) => {
            this.filteredDonations = data;
            this.Donations=this.filteredDonations
            this.updateDonationStatus() 
            this.filterData()
          });
      }
    }
    

    onSelectType(): void {
 
      this.getfilterDonations();
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
          this.getdonations();
        })
        this.relod()
      }else{
        Swal.close(
       
        )
      }

 }

public filterData(): void {
    this.donationService.getdatebetween(this.fromDate,this.toDate)
      .subscribe(
        (data) => {
          console.log("bonjour"+data)
          this.Donations = data;
          this.updateDonationStatus() 
          this.filteredDonations = this.Donations
        },
        (error) => {
          console.error(error);
        }
      );
  }
  
  
  AffecterDon(id:any){
    this.router.navigate([`admin/listD/${id}`]);
    }

    updateDonationStatus() {
      if (Array.isArray(this.Donations)) { // Vérifier que this.Donations est un tableau
        for (const donation of this.Donations) { // Utiliser une boucle pour itérer sur le tableau
          // ... votre code pour mettre à jour le statut de la donation ...
          for (let don of this.Donations) 
          if  (don.personne && don.personne!=null) {
              don.status = "Assign";
           } else {
              don.status = "Available";
            }
        }
      } else {
        console.error('this.Donations n\'est pas un tableau !');
      }
    }

    getColor(status:any):any{
      if (status=="Assign") {
        return "red";
      }
      else if (status=="Available") {
        return "green";
      }
     
    }







    
  }
    
