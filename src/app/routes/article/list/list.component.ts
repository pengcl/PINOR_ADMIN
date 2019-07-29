import {Component, Injector, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppComponentBase} from '@shared/app-component-base';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ArticleListComponent extends AppComponentBase implements OnInit {
  cid = this.route.snapshot.queryParams['cid']; // 列表栏目id
  data = [];
  mapOfCheckedId = {};
  numberOfChecked = 0;

  constructor(injector: Injector, private route: ActivatedRoute, private articleSvc: ArticleService) {
    super(injector);
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.query['catalog'] = this.cid;
    this.articleSvc.list(this.query).subscribe(res => {
      this.data = res;
    });
  }

  checkAll(value: boolean): void {
    this.data.forEach(item => this.mapOfCheckedId[item.id] = value);
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.numberOfChecked = this.data.filter(item => this.mapOfCheckedId[item.id]).length;
  }
}
