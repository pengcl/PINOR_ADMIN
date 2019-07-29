import {
  Component,
  ElementRef,
  Renderer2,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  OnDestroy,
  Inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, RouteConfigLoadStart, NavigationError } from '@angular/router';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
import { updateHostClass } from '@delon/util';
import { ScrollService } from '@delon/theme';
import { ReuseTabService } from '@delon/abc';
import { environment } from '@env/environment';

import { AdminSettingDrawerComponent } from './setting-drawer/setting-drawer.component';
import { BrandService } from './admin.service';

@Component({
  selector: 'layout-admin',
  templateUrl: './admin.component.html',
  // NOTICE: If all pages using OnPush mode, you can turn it on and all `cdr.detectChanges()` codes
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutAdminComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private queryCls: string;
  @ViewChild('settingHost', { read: ViewContainerRef, static: false }) private settingHost: ViewContainerRef;

  isFetching = false;

  get isMobile() {
    return this.admin.isMobile;
  }

  get getLayoutStyle() {
    const { isMobile, fixSiderbar, collapsed, menu, width, widthInCollapsed } = this.admin;
    if (fixSiderbar && menu !== 'top' && !isMobile) {
      return {
        paddingLeft: (collapsed ? widthInCollapsed : width) + 'px',
      };
    }
    return null;
  }

  get getContentStyle() {
    const { fixedHeader, headerHeight } = this.admin;
    return {
      margin: '24px 24px 0',
      'padding-top': (fixedHeader ? headerHeight : 0) + 'px',
    };
  }

  private get body(): HTMLElement {
    return this.doc.body;
  }

  constructor(
    bm: BreakpointObserver,
    mediaMatcher: MediaMatcher,
    router: Router,
    msg: NzMessageService,
    scroll: ScrollService,
    reuseTabSrv: ReuseTabService,
    private resolver: ComponentFactoryResolver,
    private el: ElementRef,
    private renderer: Renderer2,
    public admin: BrandService,
    @Inject(DOCUMENT) private doc: any,
  ) // private cdr: ChangeDetectorRef
  {
    // scroll to top in change page
    router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
        scroll.scrollToTop();
      }
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        msg.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.isFetching = false;
      // If have already cached router, should be don't need scroll to top
      if (!reuseTabSrv.exists(evt.url)) {
        scroll.scrollToTop();
      }
    });

    // media
    const query = {
      'screen-xs': '(max-width: 575px)',
      'screen-sm': '(min-width: 576px) and (max-width: 767px)',
      'screen-md': '(min-width: 768px) and (max-width: 991px)',
      'screen-lg': '(min-width: 992px) and (max-width: 1199px)',
      'screen-xl': '(min-width: 1200px)',
    };
    bm.observe([
      '(min-width: 1200px)',
      '(min-width: 992px) and (max-width: 1199px)',
      '(min-width: 768px) and (max-width: 991px)',
      '(min-width: 576px) and (max-width: 767px)',
      '(max-width: 575px)',
    ]).subscribe(() => {
      this.queryCls = Object.keys(query).find(key => mediaMatcher.matchMedia(query[key]).matches);
      this.setClass();
    });
  }

  private setClass() {
    const { body, renderer, queryCls, admin } = this;
    updateHostClass(body, renderer, {
      ['color-weak']: admin.layout.colorWeak,
      [`layout-fixed`]: admin.layout.fixed,
      [`aside-collapsed`]: admin.collapsed,
      ['alain-pro']: true,
      [queryCls]: true,
      [`alain-pro__content-${admin.layout.contentWidth}`]: true,
      [`alain-pro__fixed`]: admin.layout.fixedHeader,
      [`alain-pro__wide`]: admin.isFixed,
      [`alain-pro__dark`]: admin.theme === 'dark',
      [`alain-pro__light`]: admin.theme === 'light',
    });
  }

  ngAfterViewInit(): void {
    // Setting componet for only developer
    if (!environment.production) {
      setTimeout(() => {
        const settingFactory = this.resolver.resolveComponentFactory(AdminSettingDrawerComponent);
        this.settingHost.createComponent(settingFactory);
      }, 22);
    }
  }

  ngOnInit() {
    const { admin, unsubscribe$ } = this;
    admin.notify.pipe(takeUntil(unsubscribe$)).subscribe(() => {
      this.setClass();
    });
  }

  ngOnDestroy() {
    const { unsubscribe$, body, admin } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
    body.classList.remove(
      `alain-pro__content-${admin.layout.contentWidth}`,
      `alain-pro__fixed`,
      `alain-pro__wide`,
      `alain-pro__dark`,
      `alain-pro__light`,
    );
  }
}
