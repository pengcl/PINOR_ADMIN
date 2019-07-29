import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { DrawerHelper } from '@delon/theme';
import { LayoutAdminWidgetQuickPanelComponent } from './quick-panel.component';

@Component({
  selector: 'layout-admin-quick',
  templateUrl: './quick.component.html',
  host: {
    '[class.alain-pro__header-item]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutAdminWidgetQuickComponent {
  constructor(private drawerHelper: DrawerHelper) {}

  @HostListener('click')
  show() {
    this.drawerHelper
      .create(``, LayoutAdminWidgetQuickPanelComponent, null, {
        size: 480,
        drawerOptions: {
          nzTitle: null,
          nzBodyStyle: {
            'min-height': '100%',
            padding: 0,
          },
        },
      })
      .subscribe();
  }
}
