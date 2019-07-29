import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-admin-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutAdminFooterComponent {
  get year() {
    return this.setting.app.year;
  }

  constructor(private setting: SettingsService) {}
}
