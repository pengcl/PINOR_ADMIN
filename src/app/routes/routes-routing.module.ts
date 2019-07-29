import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {environment} from '@env/environment';
// layout
import {LayoutAdminComponent} from '@brand';
import {LayoutAuthComponent} from '../layout/auth/auth.component';
// dashboard pages
import {DashboardComponent} from './dashboard/dashboard.component';
// auth pages
import {AuthLoginComponent} from './auth/login/login.component';
import {AuthRegisterComponent} from './auth/register/register.component';
import {AuthRegisterResultComponent} from './auth/register-result/register-result.component';
import {AuthLockComponent} from './auth/lock/lock.component';

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
import {CallbackComponent} from './callback/callback.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {
        path: 'theme',
        children: [
          {
            path: 'list',
            component: ThemeListComponent
          },
          {
            path: 'edit/:id',
            component: ThemeEditComponent
          }
        ]
      },
      {
        path: 'catalog',
        children: [
          {
            path: 'list',
            component: CatalogListComponent
          },
          {
            path: 'edit/:id',
            component: CatalogEditComponent
          }
        ]
      },
      {
        path: 'article',
        children: [
          {
            path: 'list',
            component: ArticleListComponent
          },
          {
            path: 'edit/:id',
            component: ArticleEditComponent
          }
        ]
      },
      // Exception
      {
        path: 'exception',
        loadChildren: './exception/exception.module#ExceptionModule'
      }
    ]
  },
  // auth
  {
    path: 'auth',
    component: LayoutAuthComponent,
    children: [
      {
        path: 'login',
        component: AuthLoginComponent,
        data: {title: '登录', titleI18n: 'app.login.login'}
      },
      {
        path: 'register',
        component: AuthRegisterComponent,
        data: {title: '注册', titleI18n: 'app.register.register'}
      },
      {
        path: 'register-result',
        component: AuthRegisterResultComponent,
        data: {title: '注册结果', titleI18n: 'app.register.register'}
      },
      {
        path: 'lock',
        component: AuthLockComponent,
        data: {title: '锁屏', titleI18n: 'app.lock'}
      }
    ]
  },
  // 单页不包裹Layout
  {path: 'callback/:type', component: CallbackComponent},
  {path: '**', redirectTo: 'exception/404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class RouteRoutingModule {
}
