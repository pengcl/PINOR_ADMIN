---
order: 60
title: editor
type: Component
---

基于 [quill](https://github.com/quilljs/quill) 富文本编辑器，参考[示例](https://preview.ng-alain.com/pro/#/ec/ware/edit/10001)。

## 特性

- 整合 [file-manager](file-manager)
- 整合 [quill-image-resize-module](https://github.com/kensnyder/quill-image-resize-module)

## API

| 参数                   | 说明                       | 类型                | 默认值                |
| ---------------------- | -------------------------- | ------------------- | --------------------- |
| `[(ngModel)]`          | 值                         | `string`            | -                     |
| `[mode]`               | 模式                       | `full,simple`       | `full`                |
| `[theme]`              | 主题                       | `string`            | `snow`                |
| `[readOnly]`           | 是否只读                   | `boolean`           | `false`               |
| `[required]`           | 是否必填                   | `boolean`           | -                     |
| `[maxLength]`          | 最大长度                   | `number`            | -                     |
| `[minLength]`          | 最少长度                   | `number`            | -                     |
| `[placeholder]`        | 文本框默认值               | `string`            | -                     |
| `[style]`              | 样式，可以决定富文本的高度 | `any`               | `{ height: '250px' }` |
| `(editorCreated)`    | 初始化完成后事件           | `EventEmitter<any>` | -                     |
| `(contentChanged)`   | 内容变更事件               | `EventEmitter<any>` | -                     |
| `(selectionChanged)` | `selection-change` 事件    | `EventEmitter<any>` | -                     |

## sf 小部件

小部件名称：`editor`。

### ui

| 参数                 | 说明         | 类型                      | 默认值 |
| -------------------- | ------------ | ------------------------- | ------ |
| `(contentChanged)` | 内容变更事件 | `(value: string) => void` | -      |
