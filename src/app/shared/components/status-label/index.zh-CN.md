---
order: 10
title: status-label
type: Component
---

状态标签，参考[示例](https://preview.ng-alain.com/ms/#/dns/domain)。

## DEMO

```html
<status-label>Normal</status-label>
<status-label type="error" text="Error"></status-label>
<span status-label type="error" text="Error"></span>
```

## API

| 参数     | 说明                    | 类型                    | 默认值    |
| -------- | ----------------------- | ----------------------- | --------- |
| `[type]` | 类型                    | `success,error,warning` | `success` |
| `[icon]` | 是否显示图标            | `boolean`               | `true`    |
| `[text]` | 文本，或 `[ng-content]` | `string`                | -         |
