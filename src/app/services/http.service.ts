import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_COMMENT, API_URL } from '../constatnts';
import { GetNews, News } from '../news';
import { map } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private spinnerService: SpinnerService
  ) {}
  getNews() {
    this.spinnerService.showSpinner();
    return this.http.get<GetNews>(API_URL).pipe(map((e) => e.hits));
  }

  getComments(story: string) {
    this.spinnerService.showSpinner();
    return this.http.get<GetNews>(API_COMMENT + story).pipe(map((e) => e.hits));
  }
}
