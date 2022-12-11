import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/news';
import { HttpService } from 'src/app/services/http.service';

export interface Comments extends News {
  children?: Comments[];
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  @Input() tree!: News[];
  comments?: News[];
  main?: News;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.main = this.tree[0];

    this.comments = this.tree.filter(
      (x) => x.parent_id && x.parent_id === x.story_id
    );
  }
}
