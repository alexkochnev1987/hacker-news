import { Component, Input } from '@angular/core';
import { tap } from 'rxjs';
import { News } from 'src/app/news';
import { HttpService } from 'src/app/services/http.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent {
  spinner$ = this.spinnerService.getStatus();
  news$ = this.httpService
    .getNews()
    .pipe(tap(() => this.spinnerService.hideSpinner()));
  constructor(
    private httpService: HttpService,
    private spinnerService: SpinnerService
  ) {}
}
