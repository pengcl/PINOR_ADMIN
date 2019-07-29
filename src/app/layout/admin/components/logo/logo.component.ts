import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-admin-logo',
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutAdminLogoComponent {
  get name() {
    return this.setting.app.name;
  }

  constructor(private setting: SettingsService) {}
}
