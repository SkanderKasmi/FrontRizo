import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ngOnInit() {}
 /* emailForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {
  }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      name: [' ', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required]
    });
  }

  sendEmail() {
    const formData = new FormData();
    formData.append('file', this.emailForm.get('name')?.value);
    formData.append('file', this.emailForm.get('email')?.value);
    formData.append('file', this.emailForm.get('description')?.value);


  }

  */

  name: string;
  email: string;
  description: string;

  constructor(private http: HttpClient) { }

  sendEmail() {
    const url = 'http://localhost:8089/api/send-email';
    const body = new URLSearchParams();
    body.set('name', this.name);
    body.set('email', this.email);
    body.set('description', this.description);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    this.http.post(url, body.toString(), httpOptions).subscribe(
      () => {
        Swal.fire('Email Sent', 'Email sent successfully!', 'success'); // Display success notification
        // You can add code here to handle the success case
      },
      (error) => {
        Swal.fire('Email Sent', 'Email sent successfully!', 'success'); // Display success notification
        // You can add code here to handle the success case
      }
    );
  }
}
