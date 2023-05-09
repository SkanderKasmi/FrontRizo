import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hidelinkk !:boolean
  hidelink!:boolean
  hiden!:boolean
  constructor(private router:Router, private jwt:JwtHelperService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') === null){this.hidelink = true}else{this.hidelink =false}
    const decodeedtoken = this.jwt.decodeToken(localStorage.getItem('token') || '');
    const role = decodeedtoken.role;
    console.log(role+"role")
    if(role=="USER"){this.hidelinkk = true}else{this.hidelinkk =false}
    if(role=="ADMIN") {this.hiden = false} else{this.hiden =false}
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['home'])
  }

  

  }
  

