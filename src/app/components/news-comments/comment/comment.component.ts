import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/news';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() tree!: News[];
  @Input() comment!: News;
  constructor() {}

  getChildren(objectID: string) {
    const children = this.tree.filter((x) => x.parent_id === Number(objectID));
    return children;
  }
}
