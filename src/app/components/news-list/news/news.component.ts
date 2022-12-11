import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  @Input() news!: News;
  constructor(private router: Router) {}
  getComments() {
    this.router.navigate(['news', this.news.objectID]);
  }
}
