import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PageEvent } from '@angular/material/paginator';
import { map, Observable, of, tap } from 'rxjs';
import { News } from 'src/app/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  length$?: Observable<number>;
  news$?: Observable<News[]>;
  pageEvent?: PageEvent;
  pageIndex = 0;
  pageSize = 10;
  constructor(private httpService: HttpService) {}

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.news$ = this.httpService.genNewsByHitsPerPage(e.pageIndex, e.pageSize);
  }

  ngOnInit(): void {
    this.news$ = this.httpService.getNews().pipe(
      tap((x) => {
        this.length$ = of(x.nbHits);
      }),
      map((e) => e.hits)
    );
  }
}
