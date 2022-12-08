import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsComponent } from './components/news-list/news/news.component';
import { NewsCommentsComponent } from './components/news-comments/news-comments.component';
import { CommentComponent } from './components/news-comments/comment/comment.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsComponent,
    NewsCommentsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
