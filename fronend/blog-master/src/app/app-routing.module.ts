import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { CategoryProduct } from './models/category-product';

import {PostshowComponent} from "./front/postshow/postshow.component";
import { AddPostComponent } from './admin/post-managment/add-post/add-post.component';
import { PostManagmentComponent } from './admin/post-managment/post-managment.component';
import { EditPostComponent } from './admin/post-managment/edit-post/edit-post.component';
import { CommentManagmentComponent } from './front/comment-managment/comment-managment.component';
import { AffichPostComponent } from './admin/affich-post/affich-post.component';
import {TopicsListComponent} from "./front/topics-list/topics-list.component";
import {ContactComponent} from "./front/contact/contact.component";
import {AddTopicComponent} from "./front/add-topic/add-topic.component";
import {TopicDetailsComponent} from "./front/topic-details/topic-details.component";
import {FormComponent} from "./front/form/form.component";
import {FrontListComponent} from "./front/front-list/front-list.component";
import {HomeComponent} from "./front/home/home.component";

const routes: Routes = [




  { path: 'admin', component: DashboardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'topics', component: TopicsListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'topics/:id', component: TopicDetailsComponent },
  { path: 'add', component: AddTopicComponent },
  { path: 'fronttopics', component: FrontListComponent },
  { path: 'form', component: FormComponent },

  //Post Paths:
  { path: 'addPost', component: AddPostComponent },
  { path: 'commentpost/editPost/:id', component: EditPostComponent },
  { path: 'listPost/affichpost/:id', component: AffichPostComponent },
  { path: 'listPost', component: PostManagmentComponent },
  { path: 'commentpost', component: CommentManagmentComponent },
  { path: 'showpost', component: PostshowComponent },

  //{path:'favoriteProduct', component: WishListComponent},
  { path: 'listProduct/:id', component: CategoryProduct },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
