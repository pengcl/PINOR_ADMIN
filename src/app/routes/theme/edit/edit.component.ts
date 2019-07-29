import {
  Component,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';

import { NzNotificationService } from 'ng-zorro-antd';

import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less'],
})
export class ThemeEditComponent implements OnInit {
  id;
  parentId;
  loading = false;
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: LocationStrategy,
    private notificationSvc: NzNotificationService,
    private themeSvc: ThemeService) {
  }

  compareFn(c1, c2): boolean {
    return c1 && c2 ? c1 === c2.id : c1 === c2;
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id'], 10);
    this.parentId = parseInt(this.route.snapshot.queryParams['id']);
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      template: new FormControl(null, [Validators.required]),
      description: new FormControl(null, []),
      price: new FormControl(null, [Validators.required]),
      discount: new FormControl(1.00, [Validators.required]),
      view: new FormControl(0, [Validators.required]),
      like: new FormControl(0, [Validators.required]),
      use: new FormControl(0, [Validators.required]),
    });

    if (this.id) {
      this.themeSvc.get(this.id).subscribe(res => {
        for (const key in this.form.value) {
          if (res[key]) {
            this.form.get(key).setValue(res[key]);
          }
        }
      });
    }
  }

  createNotification(type: string) {
    this.notificationSvc.create(
      type,
      '系统提示',
      `您已成功添加主题：${this.form.get('name').value}`,
    );
  }

  save() {
    if (this.loading) {
      return false;
    }
    this.themeSvc.save(this.form.value, this.id).subscribe(res => {
      this.createNotification('success');
      this.cancel();
    });
  }

  cancel() {
    this.location.back();
  }
}
