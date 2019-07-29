---
order: 50
title: masonry
type: Component
---

Based on [masonry](https://masonry.desandro.com/) grid layout, [DEMO](https://preview.ng-alain.com/pro/#/other/gallery).

## Container structure

```html
<div nz-row nzGutter="8" masonry [disabled]="masonryDisabled">
  <div
    class="masonry__sizer ant-col-md-12 ant-col-xl-6 position-absolute"
  ></div>
  <div
    *ngFor="let i of images; let idx=index"
    (click)="gallery.open(idx)"
    class="masonry__thm mb-sm"
    nz-col
    nzMd="12"
    nzXl="6"
  >
    <a class="img-thm img-thm__zoom-in">
      <i class="img-thm__mask"></i>
      <i class="img-thm__icon" nz-icon nzType="search"></i>
      <img
        class="img-thm__img"
        src="{{i.url}}"
        (load)="imgLoaded()"
        style="min-height: 150px"
      />
    </a>
  </div>
</div>
```

The `masonry__` prefix class styles is required part.

## API

| Property     | Description                                          | Type      | Default |
|--------------|------------------------------------------------------|-----------|---------|
| `[masonry]`  | [Options](https://masonry.desandro.com/options.html) | `any`     | -       |
| `[disabled]` | Whether to disable                                   | `boolean` | `false` |
