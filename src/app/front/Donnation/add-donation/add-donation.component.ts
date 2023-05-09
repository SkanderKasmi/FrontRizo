import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,Validators,FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from 'src/app/front/service/donation.service';
import { ToastrService } from 'ngx-toastr';
import Swal from "sweetalert2";
import { Donation } from 'src/app/front/models/Donation';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',

  styleUrls: [
    './add-donation.component.css',
 
    
]
})
export class AddDonationComponent implements OnInit {
  donationForm!:FormGroup ;
  montant:any
message:any
id:any
  handler:any = null;
  amount:any
donation:Donation =new Donation ;
payverif:boolean =false
  constructor(  private router : Router  ,private formBuilder :FormBuilder,private jwt:JwtHelperService  ,private  donationService :DonationService) 
    {
      this.donationForm = new FormGroup({
        frequence: new FormControl ('', Validators.required),
      })
    }
    relod(){
      location.reload()
    }

  ngOnInit(): void {
 
    const currentDate = new Date();
    // Formatage de la date système pour l'affichage dans le champ de date
    const formattedDate = currentDate.toISOString().substring(0, 10);
    // Initialisation du formulaire réactif avec la date système comme valeur par défaut pour le champ de date
 

    this.donationForm = this.formBuilder.group({
        
      frequence:['',[Validators.required]],
      description:['', Validators.minLength(5)],
      typeObjet:['',[Validators.required]],
      montant: ['', Validators.required],
     date:[formattedDate,[Validators.required]],

  })

}
   

isObjectType(): boolean {
  return this.donationForm.get('typeObjet')?.value=='object';

}

isMoneyType(): boolean {
  return this.donationForm.get('typeObjet')?.value === 'money';
}

onDonationTypeChange() {
  const type = this.donationForm.get('type')?.value;
  if (type === 'object') {
    this.donationForm.addControl('description', new FormControl('', [Validators.required, Validators.minLength(10)]));
    this.donationForm.removeControl('amount');
  } else if (type === 'money') {
    this.donationForm.addControl('montant', new FormControl('', [Validators.required, Validators.min(1)]));
    this.donationForm.removeControl('description');
  }
}

  // public submitDonation() {
  //   this.donationService.createDonation(this.donationForm.value).subscribe(
  //     donation => {
  //       this.donation.montant=this.montant
  //       console.log(" success "+this.montant)
  //       console.log(" success ")
  //       Swal.fire({
  //         'icon': 'success',
  //         'text': 'Category added  !'
  //       })
  //     }
      
  //   );

  //   }


  

  loadStripe() {
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: (token: any) => {
           
            console.log(token);
            alert('Payment Success!!');
         
          }
        });
      }
      window.document.body.appendChild(s);
    }
  }
  
  pay(montant: any) {    
    const decodeedtoken = this.jwt.decodeToken(localStorage.getItem('token') || '');
    const num = parseInt(decodeedtoken.userId);
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: (token: any) => {
        console.log(token);
        alert('Token Created!!');
        
        this.donationService.saveDontouser(this.donationForm.value,num).subscribe(
          (donation:any) => {
            console.log(donation+"00000")
            this.donation.montant = this.montant;
            console.log("success " + this.montant);
            this.relod();
          },(error) => {
            if(error.error){
              console.log(error.error)
            }
          }
          
        );
       
      }
    });
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: montant * 100
    });
  }
  

  /*

   this.get(num);*/

}

  



