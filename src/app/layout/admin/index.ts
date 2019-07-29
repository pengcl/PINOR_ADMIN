// #region exports

export * from './admin.types';
export * from './admin.service';
export { LayoutAdminComponent } from './admin.component';

// #endregion

// #region widgets

import { LayoutAdminHeaderWidgetComponent } from './components/widget/widget.component';
import { LayoutAdminWidgetNotifyComponent } from './components/notify/notify.component';
import { LayoutAdminWidgetSearchComponent } from './components/search/search.component';
import { LayoutAdminWidgetUserComponent } from './components/user/user.component';
import { LayoutAdminWidgetQuickComponent } from './components/quick/quick.component';

const ADMIN_WIDGETS = [
  LayoutAdminHeaderWidgetComponent,
  LayoutAdminWidgetNotifyComponent,
  LayoutAdminWidgetSearchComponent,
  LayoutAdminWidgetUserComponent,
  LayoutAdminWidgetQuickComponent,
];

// #endregion

// #region entry components

import { AdminSettingDrawerComponent } from './setting-drawer/setting-drawer.component';
import { LayoutAdminWidgetQuickPanelComponent } from './components/quick/quick-panel.component';

export const ADMIN_ENTRYCOMPONENTS = [
  AdminSettingDrawerComponent,
  LayoutAdminWidgetQuickPanelComponent,
];

// #endregion

// #region components

import { LayoutAdminComponent } from './admin.component';
import { LayoutAdminMenuComponent } from './components/menu/menu.component';
import { LayoutAdminLogoComponent } from './components/logo/logo.component';
import { LayoutAdminHeaderComponent } from './components/header/header.component';
import { LayoutAdminFooterComponent } from './components/footer/footer.component';

export const ADMIN_COMPONENTS = [
  LayoutAdminComponent,
  LayoutAdminMenuComponent,
  LayoutAdminLogoComponent,
  LayoutAdminHeaderComponent,
  LayoutAdminFooterComponent,
  ...ADMIN_ENTRYCOMPONENTS,
  ...ADMIN_WIDGETS,
];

// #endregion

// #region shared components

import { AdminPageGridComponent } from './components/page-grid/page-grid.component';
import { AdminPageHeaderWrapperComponent } from './components/page-header-wrapper/page-header-wrapper.component';
export const ADMIN_SHARED_COMPONENTS = [
  AdminPageGridComponent,
  AdminPageHeaderWrapperComponent,
];

// #endregion
