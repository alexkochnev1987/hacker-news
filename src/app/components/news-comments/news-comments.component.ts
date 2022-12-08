import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { tap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-news-comments',
  templateUrl: './news-comments.component.html',
  styleUrls: ['./news-comments.component.scss'],
})
export class NewsCommentsComponent {
  spinner$ = this.spinnerService.getStatus();
  comments$ = this.httpService
    .getComments(this.activateRoute.snapshot.params['id'])
    .pipe(tap(() => this.spinnerService.hideSpinner()));
  constructor(
    private httpService: HttpService,
    private activateRoute: ActivatedRoute,
    private spinnerService: SpinnerService
  ) {}
}
