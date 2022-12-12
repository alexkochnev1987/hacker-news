import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_COMMENT, API_STORY, API_URL } from '../constatnts';
import { GetNews } from '../news';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<GetNews>(API_URL);
  }

  genNewsByHitsPerPage(page: number, hits: number) {
    return this.http
      .get<GetNews>(API_URL + `&page=${page}&hitsPerPage=${hits}`)
      .pipe(map((x) => x.hits));
  }

  getComments(story: string) {
    return this.http.get<GetNews>(API_COMMENT + story);
  }

  getStory(id: string) {
    return this.http.get<GetNews>(API_STORY + id + '&hitsPerPage=1000');
  }
}
