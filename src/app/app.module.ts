import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsComponent } from './components/news-list/news/news.component';
import { NewsCommentsComponent } from './components/news-comments/news-comments.component';
import { CommentComponent } from './components/news-comments/comment/comment.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingInterceptor } from './loading.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeComponent } from './components/news-comments/tree/tree.component';
import {
  MatButtonModule,
  MatIconModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatTreeModule,
} from '@angular/material';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsComponent,
    NewsCommentsComponent,
    CommentComponent,
    HeaderComponent,
    TreeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    CdkTreeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
