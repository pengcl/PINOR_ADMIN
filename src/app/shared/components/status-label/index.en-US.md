---
order: 10
title: status-label
type: Component
---

Status label, [DEMO](https://preview.ng-alain.com/ms/#/dns/domain)。

## DEMO

```html
<status-label>Normal</status-label>
<status-label type="error" text="Error"></status-label>
<span status-label type="error" text="Error"></span>
```

## API

| Property | Description                             | Type                    | Default   |
| -------- | --------------------------------------- | ----------------------- | --------- |
| `[type]` | Type of status label                    | `success,error,warning` | `success` |
| `[icon]` | Whether show icon                       | `boolean`               | `true`    |
| `[text]` | Text of status label, or `[ng-content]` | `string`                | -         |
