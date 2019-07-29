/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {NzAddOnModule, NzNoAnimationModule} from 'ng-zorro-antd/core';
import {NzIconModule} from 'ng-zorro-antd/icon';

import {TreeNodeComponent} from './tree-node.component';
import {TreeComponent} from './tree.component';

@NgModule({
  imports: [CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule],
  declarations: [TreeComponent, TreeNodeComponent],
  exports: [TreeComponent, TreeNodeComponent]
})
export class TreeModule {
}
