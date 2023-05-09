import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from 'src/app/front/service/donation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-donataire',
  templateUrl: './donataire.component.html',
  styleUrls: ['./donataire.component.css']
})
export class DonataireComponent{
  timeOut: number = 1000;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any , public dialogRef: MatDialogRef<DonataireComponent>) {

    setTimeout(() => {
      this.dialogRef.close();
    }, 4000);
  }
}