import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FooterComponent } from './front/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProductService } from './services/product.service';
import { WishListService } from './services/wish-list.service';
import { NavComponent } from './admin/nav/nav.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

import { PostshowComponent } from './front/postshow/postshow.component';
import { PostcommentComponent } from './front/postcomment/postcomment.component';
import { PostManagmentComponent } from './admin/post-managment/post-managment.component';
import { AddPostComponent } from './admin/post-managment/add-post/add-post.component';
import { EditPostComponent } from './admin/post-managment/edit-post/edit-post.component';
import { CommentManagmentComponent } from './front/comment-managment/comment-managment.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AffichPostComponent } from './admin/affich-post/affich-post.component';
import { EditPostFrontComponent } from './front/edit-post-front/edit-post-front.component';
import {AddTopicComponent} from "./front/add-topic/add-topic.component";
import {FormComponent} from "./front/form/form.component";
import {TopicDetailsComponent} from "./front/topic-details/topic-details.component";
import {TopicsListComponent} from "./front/topics-list/topics-list.component";
import {ContactComponent} from "./front/contact/contact.component";
import {FrontListComponent} from "./front/front-list/front-list.component";
import sweetalert2 from 'sweetalert2';
import {HomeComponent} from "./front/home/home.component";

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    NavComponent,

    PostshowComponent,
    PostcommentComponent,
    PostManagmentComponent,
    EditPostComponent,
    CommentManagmentComponent,
      AddPostComponent,
      AffichPostComponent,
      EditPostFrontComponent,
    AddTopicComponent,
    FormComponent,
    TopicDetailsComponent,
    TopicsListComponent,
    ContactComponent,
    FrontListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([]),
    EditorModule,




  ],
  providers: [ProductService,WishListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
