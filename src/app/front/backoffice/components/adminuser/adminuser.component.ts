import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/front/service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {

  jsonData!: any;
  currentId!:string;
  newRole!:string;
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response:any)=>{
      console.log(response);
      this.jsonData = response;
    },(error) =>{
    })
  }
  activateAccount(id:string){
    const data = {
      "userId" : id,
      "status" : "true"
    }
    this.userService.activateAccount(data).subscribe((response:any)=>{
      Swal.fire(
        'ADMIN',
         response.message,
        'success'
      )
      location.reload();
    },(error)=>{
      if(error.error?.message){
        Swal.fire(
          'ADMIN',
           error.error.message,
          'error'
        )
      }
    })
  }
  BanAccount(id:string){
    const data = {
      "userId" : id,
      "status" : "false"
    }
    this.userService.activateAccount(data).subscribe((response:any)=>{
      Swal.fire(
        'ADMIN',
         response.message,
        'success'
      )
      location.reload();
    },(error)=>{
      if(error.error?.message){
        Swal.fire(
          'ADMIN',
           error.error.message,
          'error'
        )
      }
    })
  }
  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe((response:any)=>{
      console.log(response.message)
      Swal.fire(
        'ADMIN',
         response.message,
        'success'
      )
      location.reload();
    },(error)=>{
      if(error.error?.message){
        console.log(error.error.message)
        Swal.fire(
          'ADMIN',
           error.error.message,
          'error'
        )
      }
    })
  }
  takeCurrentId(userId:string){
    this.currentId=userId;
  }
  changeRole(){
    const data = {
      "userId" : this.currentId,
      "role" : this.newRole
    }
    this.userService.changeRole(data).subscribe((response:any)=>{
      Swal.fire(
        'ADMIN',
         response.message,
        'success'
      )
      location.reload()
    },(error) =>{
      if(error.error?.message){
        Swal.fire(
          'ADMIN',
           error.error.message,
          'error'
        )
      }
    })
  }


}
