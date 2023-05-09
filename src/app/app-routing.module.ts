import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './front/home/home.component';
import { LoginComponent } from './front/login/login.component';
import { RegisterComponent } from './front/register/register.component';
import { AppBodyComponent } from './front/app-body/app-body.component';
import { AdminGuard } from './front/guards/admin.guard';
import { ForgotpasswordComponent } from './front/forgotpassword/forgotpassword.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { UserGuard } from './front/guards/user.guard';
import { BackofficeComponent } from './front/backoffice/backoffice.component';
import { ProfileComponent } from './front/profile/profile.component';
import { AdminuserComponent } from './front/backoffice/components/adminuser/adminuser.component';
import { BlogComponent } from './front/app-body/components/blog/blog.component';
import { BlogDetailComponent } from './front/app-body/components/blog/blog-detail/blog-detail.component';
import { ArticleAdminComponent } from './front/backoffice/components/article-admin/article-admin.component';
import { AddDonationComponent } from './front/Donnation/add-donation/add-donation.component';
import { HistoryDonnationComponent } from './front/Donnation/history-donnation/history-donnation.component';
import { DisplayDonationComponent } from './front/Donnation/display-donation/display-donation.component';
import { DisplayPersonneComponent } from './front/Personne/display-personne/display-personne.component';
import { AddFormationComponent } from './front/backoffice/formation/add-formation/add-formation.component';
import { AddJobComponent } from './front/backoffice/job/add-job/add-job.component';
import { AddSkillComponent } from './front/backoffice/skills/add-skill/add-skill.component';
import { DisplaySkillComponent } from './front/backoffice/skills/display-skill/display-skill.component';
import { DisplayJobComponent } from './front/backoffice/job/display-job/display-job.component';
import { DisplayFrontJobComponent } from './front/backoffice/job/display-front-job/display-front-job.component';
import { DisplayFormationComponent } from './front/backoffice/formation/display-formation/display-formation.component';
import { DisplayFrontFormationComponent } from './front/backoffice/formation/display-front-formation/display-front-formation.component';



const routes: Routes = [
//General empty page and its children FRONT
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'app',component:AppBodyComponent,canActivate:[UserGuard],children:[
  {path:'profile',component:ProfileComponent},
  {path: 'articles' , component:BlogComponent},
  {path:'Donation',component:AddDonationComponent },
  {path:'donnation/:id', component: AddDonationComponent },
  {path:'add',component:AddDonationComponent},
  {path:'histDon', component:HistoryDonnationComponent },
  {path:'viewfrontformation',component:DisplayFrontFormationComponent},
  {path:'viewfrontjob',component:DisplayFrontJobComponent},
  {path:'viewskill',component:DisplaySkillComponent},
  {path:'skill',component:AddSkillComponent},
 
  {path : 'articlesdetail/:idartcile',component:BlogDetailComponent},
    //components of inside the app "product,event,formation..."
     
]},
  {path:'admin',component:BackofficeComponent,canActivate:[AdminGuard],children:[
    {path:'',redirectTo:'User',pathMatch:'full'},
    {path:'profile',component:ProfileComponent},
    {path:'User',component:AdminuserComponent},
    {path:'articles',component:ArticleAdminComponent},
    {path:'list',component:DisplayDonationComponent},
    {path:'listD',component:DisplayPersonneComponent},
    {path:'listD/:id', component:DisplayPersonneComponent },
    {path:'job',component:AddJobComponent},
    {path:'formation',component:AddFormationComponent},
    {path:'viewformation',component:DisplayFormationComponent},
    {path:'viewjob',component:DisplayJobComponent}
  ]},

{path:'forgotpassword',component:ForgotpasswordComponent},

{path:'notfound',component:NotFoundComponent},
{path:'**',component:NotFoundComponent}
];   


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
