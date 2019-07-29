import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// auth pages
import { AuthLoginComponent } from './auth/login/login.component';
import { AuthRegisterComponent } from './auth/register/register.component';
import { AuthRegisterResultComponent } from './auth/register-result/register-result.component';
import { AuthLockComponent } from './auth/lock/lock.component';
// catalog pages
import {CatalogListComponent} from './catalog/list/list.component';
import {CatalogEditComponent} from './catalog/edit/edit.component';
// article pages
import {ArticleListComponent} from './article/list/list.component';
import {ArticleEditComponent} from './article/edit/edit.component';
// theme pages
import {ThemeListComponent} from './theme/list/list.component';
import {ThemeEditComponent} from './theme/edit/edit.component';
// single pages
import { CallbackComponent } from './callback/callback.component';

const COMPONENTS = [
  DashboardComponent,
  // passport pages
  AuthLoginComponent,
  AuthRegisterComponent,
  AuthRegisterResultComponent,
  AuthLockComponent,
  // catalog pages
  CatalogListComponent,
  CatalogEditComponent,
  // article pages
  ArticleListComponent,
  ArticleEditComponent,
  // theme pages
  ThemeListComponent,
  ThemeEditComponent,
  // single pages
  CallbackComponent
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT
})
export class RoutesModule {}
