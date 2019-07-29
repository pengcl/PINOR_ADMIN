import {Component, Injector, OnInit} from '@angular/core';
import {AppComponentBase} from '@shared/app-component-base';

import {NzTreeNode, NzFormatEmitEvent} from 'ng-zorro-antd';
import {ArrayService} from '@delon/util';
import {CatalogService} from '../catalog.service';
import {getIndex} from '@shared/utils/utils';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CatalogListComponent extends AppComponentBase implements OnInit {
  data = [];
  nodes = [];
  loading = false;

  mapOfCheckedId = {};
  numberOfChecked = 0;

  mapOfExpandId = {};
  activedNode: NzTreeNode;

  constructor(injector: Injector,
              private arrSvc: ArrayService,
              private catalogSvc: CatalogService) {
    super(injector);
  }

  ngOnInit() {
    this.getData();
  }

  catalogsToTreeNode(catalogs) {
    return catalogs;
  }

  getData() {
    this.catalogSvc.get().subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

  openFolder(data: NzTreeNode | Required<NzFormatEmitEvent>): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      const node = data.node;
      if (node) {
        node.isExpanded = !node.isExpanded;
      }
    }
  }

  activeNode(data: NzFormatEmitEvent): void {
    this.activedNode = data.node!;
  }

  expandStatus(status) {
    return status;
  }

  expandChange(e) {
    console.log(e);
  }

  checkAll(value: boolean): void {
    this.data.forEach(item => this.mapOfCheckedId[item.id] = value);
    console.log(this.mapOfCheckedId);
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.numberOfChecked = this.data.filter(item => this.mapOfCheckedId[item.id]).length;
  }

  del(id: string) {
    if (this.loading) {
      return false;
    }
    this.loading = true;
    this.catalogSvc.delete(id).subscribe(res => {
      this.getData();
      this.loading = false;
    });
  }
}
