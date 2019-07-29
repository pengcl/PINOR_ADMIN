---
order: 60
title: editor
type: Component
---

Based on [quill](https://github.com/quilljs/quill) WYSIWYG editor, [DEMO](https://preview.ng-alain.com/pro/#/ec/ware/edit/10001).

## Feature

- Integration [file-manager](file-manager)
- Integration [quill-image-resize-module](https://github.com/kensnyder/quill-image-resize-module)

## API

| Property               | Description                            | Type                | Default               |
| ---------------------- | -------------------------------------- | ------------------- | --------------------- |
| `[(ngModel)]`          | Value of quill                         | `string`            | -                     |
| `[mode]`               | Mode of quill                          | `full,simple`       | `full`                |
| `[theme]`              | Theme of quill                         | `string`            | `snow`                |
| `[readOnly]`           | Whether to readonly                    | `boolean`           | `false`               |
| `[required]`           | Whether to required                    | `boolean`           | -                     |
| `[maxLength]`          | The maximum number of quill characters | `number`            | -                     |
| `[minLength]`          | The minimum number of quill characters | `number`            | -                     |
| `[placeholder]`        | Placeholder of quill                   | `string`            | -                     |
| `[style]`              | Styles of quill                        | `any`               | `{ height: '250px' }` |
| `(editorCreated)`    | Quill rendered event                   | `EventEmitter<any>` | -                     |
| `(contentChanged)`   | Quill content change event             | `EventEmitter<any>` | -                     |
| `(selectionChanged)` | `selection-change` event               | `EventEmitter<any>` | -                     |

## sf widget

Widget name: `editor`.

### ui

| Property             | Description                | Type                      | Default |
| -------------------- | -------------------------- | ------------------------- | ------- |
| `(contentChanged)` | Quill content change event | `(value: string) => void` | -       |
