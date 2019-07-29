---
order: 70
title: file-manager
type: Component
---

文件管理器，参考[示例](https://preview.ng-alain.com/pro/#/sys/file-manager)。

## API

### file-manager

| 参数         | 说明                           | 类型                | 默认值  |
| ------------ | ------------------------------ | ------------------- | ------- |
| `[params]`   | 额外 QueryString 请求参数      | `any`               | -       |
| `[actions]`  | 自定义动作                     | `TemplateRef<any>`  | -       |
| `[multiple]` | 是否多选，若最多 N 张          | `boolean, number`   | `false` |
| `(selected)` | 当前资源选中事件，不包含文件夹 | `EventEmitter<any>` | -       |

### dialog-img

`dialog-img` 是在 `file-manager` 组件的基础上对话框化，参考[示例](https://preview.ng-alain.com/pro/#/ec/ware/edit/10001)。

| 参数         | 说明                           | 类型                | 默认值  |
| ------------ | ------------------------------ | ------------------- | ------- |
| `[multiple]` | 是否多选，若最多 N 张          | `boolean, number`   | `false` |
| `[field]`    | 指定返回某字段的数据           | `string`            | -       |
| `(selected)` | 当前资源选中事件，不包含文件夹 | `EventEmitter<any>` | -       |

**示例**

最多只能选择 5 张，确认后触发 `cho` 事件。

```html
<button dialog-img [multiple]="5" (selected)="cho(i, $event)"
  nz-button type="button" nzType="primary" nzSize="small">
  选择照片
</button>
```

## sf 小部件

小部件名称：`img`。

### ui

| 参数         | 说明                           | 类型                   | 默认值  |
| ------------ | ------------------------------ | ---------------------- | ------- |
| `[multiple]` | 是否多选，若最多 N 张          | `boolean, number`      | `false` |
| `(selected)` | 当前资源选中事件，不包含文件夹 | `(value: any) => void` | -       |
