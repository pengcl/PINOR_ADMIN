---
order: 50
title: masonry
type: Component
---

基于 [masonry](https://masonry.desandro.com/) 瀑布流布局，参考[示例](https://preview.ng-alain.com/pro/#/other/gallery)。

## 容器结构

```html
<div nz-row nzGutter="8" masonry [disabled]="masonryDisabled">
  <div class="masonry__sizer ant-col-md-12 ant-col-xl-6 position-absolute"></div>
  <div *ngFor="let i of images; let idx=index" (click)="gallery.open(idx)"
    class="masonry__thm mb-sm" nz-col nzMd="12" nzXl="6">
    <a class="img-thm img-thm__zoom-in">
      <i class="img-thm__mask"></i>
      <i class="img-thm__icon" nz-icon nzType="search"></i>
      <img class="img-thm__img" src="{{i.url}}" (load)="imgLoaded()" style="min-height: 150px">
    </a>
  </div>
</div>
```

其中 `masonry__` 前缀类样式是必须部分。

## API

| 参数         | 说明                                              | 类型      | 默认值  |
|--------------|-------------------------------------------------|-----------|---------|
| `[masonry]`  | [选项](https://masonry.desandro.com/options.html) | `any`     | -       |
| `[disabled]` | 是否禁用                                          | `boolean` | `false` |
