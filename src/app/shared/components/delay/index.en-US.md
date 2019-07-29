---
order: 30
title: delay
type: Component
---

Delay trigger, for title search, [DEMO](https://preview.ng-alain.com/pro/#/other/article).

```html
<input nz-input [(ngModel)]="q" delay (delayChange)="load()" />
```

## API

| Property           | Description                            | Type                | Default |
|--------------------|----------------------------------------|---------------------|---------|
| `[delayTime]`      | Delay time (unit: ms)                  | `number`            | `500`   |
| `[delayFirstEmit]` | Whether to trigger after `delayChange` | `boolean`           | `false` |
| `(delayChange)`    | Callback event                         | `EventEmitter<any>` | -       |
