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



const routes: Routes = [
//General empty page and its children FRONT
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'app',component:AppBodyComponent,canActivate:[UserGuard],children:[
  {path:'profile',component:ProfileComponent},
  {path: 'articles' , component:BlogComponent},
 
  {path : 'articlesdetail/:idartcile',component:BlogDetailComponent},
    //components of inside the app "product,event,formation..."
     
]},
  {path:'admin',component:BackofficeComponent,canActivate:[AdminGuard],children:[
    {path:'',redirectTo:'User',pathMatch:'full'},
    {path:'profile',component:ProfileComponent},
    {path:'User',component:AdminuserComponent},
    {path:'articles',component:ArticleAdminComponent},
    
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
