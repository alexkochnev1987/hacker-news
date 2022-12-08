import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCommentsComponent } from './components/news-comments/news-comments.component';
import { NewsListComponent } from './components/news-list/news-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsListComponent },
  { path: 'news/:id', component: NewsCommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
