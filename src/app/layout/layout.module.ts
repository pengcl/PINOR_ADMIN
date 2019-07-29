import { NgModule } from '@angular/core';
import { LayoutModule as CDKLayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '@shared/shared.module';

import { ADMIN_ENTRYCOMPONENTS, ADMIN_COMPONENTS } from './admin/index';

// passport
import { LayoutAuthComponent } from './auth/auth.component';
const PASSPORT = [LayoutAuthComponent];

@NgModule({
  imports: [SharedModule, CDKLayoutModule],
  entryComponents: ADMIN_ENTRYCOMPONENTS,
  declarations: [...ADMIN_COMPONENTS, ...PASSPORT],
  exports: [...ADMIN_COMPONENTS, ...PASSPORT],
})
export class LayoutModule {}
