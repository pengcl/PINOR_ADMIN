import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

import { ThemeService } from './../theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ThemeListComponent extends AppComponentBase implements OnInit {
  data = [];
  loading: false;

  mapOfCheckedId = {};
  numberOfChecked = 0;

  constructor(injector: Injector, private themeSvc: ThemeService) {
    super(injector);
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.themeSvc.get().subscribe(res => {
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
