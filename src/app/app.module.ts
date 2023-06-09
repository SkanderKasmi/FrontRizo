
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './front/header/header.component';
import { LoginComponent } from './front/login/login.component';
import { ForgotpasswordComponent } from './front/forgotpassword/forgotpassword.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { RegisterComponent } from './front/register/register.component';
import { AppBodyComponent } from './front/app-body/app-body.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FooterComponent } from './front/footer/footer.component';
import { BackofficeComponent } from './front/backoffice/backoffice.component';
import { ProfileComponent } from './front/profile/profile.component';
import { AdminuserComponent } from './front/backoffice/components/adminuser/adminuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './front/app-body/components/blog/blog.component';
import { ArticleAdminComponent, PopupAdd, Popupdate } from './front/backoffice/components/article-admin/article-admin.component';
import { BlogDetailComponent } from './front/app-body/components/blog/blog-detail/blog-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { AddDonationComponent } from './front/Donnation/add-donation/add-donation.component';
import { DisplayDonationComponent } from './front/Donnation/display-donation/display-donation.component';
import { DonataireComponent } from './front/Personne/donataire/donataire.component';
import { DisplayPersonneComponent } from './front/Personne/display-personne/display-personne.component';
import { PaiementComponent } from './front/Donnation/paiement/paiement.component';
import { HistoryDonnationComponent } from './front/Donnation/history-donnation/history-donnation.component';
import { AddJobComponent } from './front/backoffice/job/add-job/add-job.component';
import { DisplayJobComponent } from './front/backoffice/job/display-job/display-job.component';
import { AddFormationComponent } from './front/backoffice/formation/add-formation/add-formation.component';
import { DisplayFormationComponent } from './front/backoffice/formation/display-formation/display-formation.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AddSkillComponent } from './front/backoffice/skills/add-skill/add-skill.component';
import { DisplaySkillComponent } from './front/backoffice/skills/display-skill/display-skill.component';
import { DisplayFrontFormationComponent } from './front/backoffice/formation/display-front-formation/display-front-formation.component';
import { DisplayFrontJobComponent } from './front/backoffice/job/display-front-job/display-front-job.component'
import { ShComponent } from './front/backoffice/components/sh/sh.component';
import { EventcrudComponent } from './front/backoffice/components/eventcrud/eventcrud.component';
import { AccueilComponent } from './front/app-body/components/accueil/accueil.component';
import {MatCardModule} from '@angular/material/card';






@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ForgotpasswordComponent,
    NavbarComponent,
    RegisterComponent,
    AppBodyComponent,
    NotFoundComponent,
    FooterComponent,
    BackofficeComponent,
    ProfileComponent,
    AdminuserComponent,
    BlogComponent,
    ArticleAdminComponent,
    BlogDetailComponent,
    PopupAdd,
    AddDonationComponent, 
    DisplayDonationComponent, 
    DonataireComponent,  
    DisplayPersonneComponent,
    PaiementComponent,
    HistoryDonnationComponent,
    AddJobComponent,
    DisplayJobComponent,
    AddFormationComponent,
    DisplayFormationComponent,
    ShComponent,
    EventcrudComponent,
    Popupdate,
    AddSkillComponent,
    DisplaySkillComponent,
    DisplayFrontFormationComponent,
    DisplayFrontJobComponent,
    AccueilComponent,
 
    
   

 
 
  ],
  imports: [
    MatCardModule,
    MatStepperModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSortModule,
    MatTabsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxPaginationModule,
    FullCalendarModule,
    RouterModule.forRoot([]),
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>{
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost'],
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
