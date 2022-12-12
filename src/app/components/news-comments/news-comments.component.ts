import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { PageEvent } from '@angular/material/paginator';
import { map, Observable, of, tap } from 'rxjs';
import { News } from 'src/app/news';

interface Story {
  story_text: string;
  title: string;
  author: string;
}

@Component({
  selector: 'app-news-comments',
  templateUrl: './news-comments.component.html',
  styleUrls: ['./news-comments.component.scss'],
})
export class NewsCommentsComponent implements OnInit {
  comments$?: Observable<News[]>;
  storyId = this.activateRoute.snapshot.params['id'];
  constructor(
    private httpService: HttpService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.comments$ = this.httpService
      .getStory(this.storyId)
      .pipe(map((e) => e.hits));
  }
}
