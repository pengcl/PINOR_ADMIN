---
order: 30
title: delay
type: Component
---

延迟触发，适用于标题搜索，参考[示例](https://preview.ng-alain.com/pro/#/other/article)。

```html
<input nz-input [(ngModel)]="q" delay (delayChange)="load()" />
```

## API

| 参数               | 说明                         | 类型                | 默认值  |
|--------------------|----------------------------|---------------------|---------|
| `[delayTime]`      | 延迟时间（单位：毫秒）          | `number`            | `500`   |
| `[delayFirstEmit]` | 是否加载后触发 `delayChange` | `boolean`           | `false` |
| `(delayChange)`    | 回调函数                     | `EventEmitter<any>` | -       |
