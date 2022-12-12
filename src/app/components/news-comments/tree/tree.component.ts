import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/news';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  @Input() tree!: News[];
  comments?: News[];
  main?: News;
  constructor() {}

  ngOnInit(): void {
    this.main = this.tree[0];
    this.comments = this.tree.filter(
      (x) => x.parent_id && x.parent_id === x.story_id
    );
  }
}
