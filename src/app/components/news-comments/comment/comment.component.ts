import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { News } from 'src/app/news';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() comment!: News;
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
