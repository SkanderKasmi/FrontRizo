import { Component, OnInit ,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';



import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-eventcrud',
  templateUrl: './eventcrud.component.html',
  styleUrls: ['./eventcrud.component.css']
})

export class EventcrudComponent implements OnInit {

  EventArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  dataSource!: MatTableDataSource<any>;
 
 
 
  
  datedebut!: Date ;
  datefin!: Date ;
  nom!: String ;

  currentEventID = "";
  selectedFile!: File  ;
 
 
 


  constructor(private http: HttpClient )
  {
    this.getAllEvent();
 
  }
 
  ngOnInit(): void {
  }
 
  getAllEvent()
  {
    
    this.http.get("http://localhost:9090/events/liste")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.EventArray = resultData;
    });
  }
 


  register()
  {
  
    let bodyData = {
      
      "datedebut" : this.datedebut ,
      "datefin" : this.datefin ,
      "nom" : this.nom ,
    };
 
    this.http.post("http://localhost:9090/events/add",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Events Registered Successfully")
        this.getAllEvent();

        this.nom ;
        this.datedebut; 
        this.datefin  ;
    });
  }
 
  setUpdate(data: any)
  {
   this.nom = data.nom;
   this.datedebut = data.datedebut;
   this.datefin = data.datefin;
   this.currentEventID = data.id;
  }
 
  UpdateRecords()
  {
    let bodyData = {
      "nom" : this.nom,
      "datedebut" : this.datedebut,
      "datefin" : this.datefin,
    };
    
    this.http.put("http://localhost:9090/events/update",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Events Registered Updateddd")
        this.getAllEvent();
        this.nom ;
        this.datedebut;
        this.datefin  ;
    });
  }
 
 
 
  save()
  {
    if(this.currentEventID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
 
 
  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:9090/events/delete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Events Deleted")
        this.getAllEvent();
  
    });
 
  }
  onFileSelected(event :any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
      this.http.post('http://localhost:9090/image/upload-image', formData)
        .subscribe(res => {
          console.log(res);
          // Handle the response from the server
        }, error => {
          console.error(error);
          // Handle any errors that occurred during the request
        });
    }


  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

}

