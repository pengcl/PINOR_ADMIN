import {SettingsService} from '@delon/theme';
import {Component, OnDestroy, Inject, Optional} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {NzModalService} from 'ng-zorro-antd';
import {
  SocialService,
  SocialOpenType,
  ITokenService,
  DA_SERVICE_TOKEN
} from '@delon/auth';
import {ReuseTabService} from '@delon/abc';
import {StartupService} from '@core';

import {AuthService} from '../auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [SocialService]
})
export class AuthLoginComponent implements OnDestroy {
  form: FormGroup;
  error = '';
  type = 0;
  authForm: FormGroup;
  loading = false;

  // #region get captcha

  count = 0;
  interval$: any;

  // #endregion

  constructor(
    modalSrv: NzModalService,
    private router: Router,
    private settingsService: SettingsService,
    @Optional()
    @Inject(ReuseTabService)
    private reuseTabService: ReuseTabService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private startupSrv: StartupService,
    private authSvc: AuthService) {
    this.authForm = new FormGroup({
      identifier: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.pattern(/^1\d{10}$/)]),
      captcha: new FormControl(null, [Validators.required])
    });
    modalSrv.closeAll();
  }

  // #region fields

  get identifier() {
    return this.authForm.get('identifier');
  }

  get password() {
    return this.authForm.get('password');
  }

  get mobile() {
    return this.authForm.get('mobile');
  }

  get captcha() {
    return this.authForm.get('captcha');
  }

  // #endregion

  switch(ret: any) {
    this.type = ret.index;
  }

  submit() {
    this.error = '';
    if (this.type === 0) {
      this.identifier.markAsDirty();
      this.identifier.updateValueAndValidity();
      this.password.markAsDirty();
      this.password.updateValueAndValidity();
      if (this.identifier.invalid || this.password.invalid) return;
      this.router.navigateByUrl('/');
    } else {
      this.mobile.markAsDirty();
      this.mobile.updateValueAndValidity();
      this.captcha.markAsDirty();
      this.captcha.updateValueAndValidity();
      if (this.identifier.invalid || this.password.invalid) return;
      window.location.href = 'assets/html/index.html';
    }

    // 默认配置中对所有HTTP请求都会强制 [校验](https://ng-alain.com/auth/getting-started) 用户 Token
    // 然一般来说登录请求不需要校验，因此可以在请求URL加上：`/login?_allow_anonymous=true` 表示不触发用户 Token 校验
    this.authSvc.login({
      identifier: this.identifier.value,
      password: this.password.value
    }).subscribe(res => {
      console.log(res);
      this.loading = false;
      // 清空路由复用信息
      this.reuseTabService.clear();
      // 设置用户Token信息
      this.tokenService.set(res.jwt);
      console.log(this.tokenService.get());
      // this.settingsService.setUser(res.user);
      // 重新获取 StartupService 内容，我们始终认为应用信息一般都会受当前用户授权范围而影响
      this.startupSrv.load().then(() => {
        let url = this.tokenService.referrer.url || '/';
        if (url.includes('/auth')) url = '/';
        this.router.navigateByUrl(url);
      });
    });
  }

  // #region social

  open(type: string, openType: SocialOpenType = 'href') {
  }

  // #endregion

  ngOnDestroy(): void {
    if (this.interval$) clearInterval(this.interval$);
  }
}
