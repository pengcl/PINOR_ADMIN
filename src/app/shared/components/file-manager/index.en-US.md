---
order: 70
title: file-manager
type: Component
---

File manager, [DEMO](https://preview.ng-alain.com/pro/#/sys/file-manager).

## API

### file-manager

| Property     | Description                                 | Type                | Default |
| ------------ | ------------------------------------------- | ------------------- | ------- |
| `[params]`   | Extra QueryString request parameter         | `any`               | -       |
| `[actions]`  | Custom action template                      | `TemplateRef<any>`  | -       |
| `[multiple]` | Whether to mulitple, or specified number    | `boolean, number`   | `false` |
| `(selected)` | Resource selected event, not include folder | `EventEmitter<any>` | -       |

### dialog-img

`dialog-img` is modal dialog based on the `file-manager` component, [DEMO](https://preview.ng-alain.com/pro/#/ec/ware/edit/10001).

| Property     | Description                                 | Type                | Default |
| ------------ | ------------------------------------------- | ------------------- | ------- |
| `[multiple]` | Whether to mulitple, or specified number    | `boolean, number`   | `false` |
| `[field]`    | Specify to return a field data              | `string`            | -       |
| `(selected)` | Resource selected event, not include folder | `EventEmitter<any>` | -       |

**DEMO**

You can only chooses 5 at most, trigger the `cho` event after confirmation.

```html
<button dialog-img [multiple]="5" (selected)="cho(i, $event)"
  nz-button type="button" nzType="primary" nzSize="small">
  Choose
</button>
```

## sf widget

Widget name: `img`.

### ui

| Property     | Description                                 | Type                   | Default |
|--------------|---------------------------------------------|------------------------|---------|
| `[multiple]` | Whether to mulitple, or specified number    | `boolean, number`      | `false` |
| `(selected)` | Resource selected event, not include folder | `(value: any) => void` | -       |
