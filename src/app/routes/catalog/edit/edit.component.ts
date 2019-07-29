import {
  Component,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';

import { NzNotificationService } from 'ng-zorro-antd';

import { NzMessageService } from 'ng-zorro-antd';

import { zip } from 'rxjs';

import { ModeService } from '../../mode/mode.service';
import { TypeService } from '../../type/type.service';
import { CatalogService } from '../catalog.service';
import { getIndex } from '@shared/utils/utils';

@Component({
  selector: 'app-catalog-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less'],
})
export class CatalogEditComponent implements OnInit {
  id;
  cid;
  loading = false;
  modes = [];
  types = [];
  catalogs = [];
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: LocationStrategy,
    private notificationSvc: NzNotificationService,
    private msgSvc: NzMessageService,
    private modeSvc: ModeService,
    private typeSvc: TypeService,
    private catalogSvc: CatalogService) {
  }

  compareFn(c1, c2): boolean {
    return c1 && c2 ? c1 === c2.id : c1 === c2;
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id'], 10);
    this.cid = parseInt(this.route.snapshot.queryParams['cid']);
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      catalog: new FormControl(null, []),
      mode: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      description: new FormControl(null, []),
    });

    zip(this.catalogSvc.get(), this.modeSvc.get(), this.typeSvc.get()).subscribe(([catalogs, modes, types]) => {
      this.catalogs = catalogs;
      this.modes = modes;
      this.types = types;

      if (this.id) {
        this.catalogSvc.get(this.id).subscribe(res => {
          for (const key in this.form.value) {
            if (res[key]) {
              this.form.get(key).setValue(res[key]);
            }
          }
        });
      } else {
        this.form.get('mode').setValue(this.modes[0]);
        this.form.get('type').setValue(this.types[0]);
      }

      if (this.cid) {
        this.form.get('catalog').setValue(this.catalogs[getIndex(this.catalogs, 'id', this.cid)]);
        console.log(this.form.value);
      }
    });
  }

  createNotification(type: string) {
    this.notificationSvc.create(
      type,
      '系统提示',
      `您已成功添加栏目：${this.form.get('name').value}`,
    );
  }

  save() {
    if (this.loading) {
      return false;
    }
    this.catalogSvc.save(this.form.value, this.id).subscribe(res => {
      this.createNotification('success');
      this.cancel();
    });
  }

  cancel() {
    this.location.back();
  }
}
