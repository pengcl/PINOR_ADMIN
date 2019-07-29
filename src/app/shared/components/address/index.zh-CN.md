---
order: 110
title: address
type: Component
---

地址选择器，支持“省份、城市”或“省份、城市、区县”两种风格，参考账号管理示例。

## API

| 参数     | 说明 | 类型     | 默认值 |
|----------|----|----------|--------|
| `[ngModel]` | 指定选中项，返回城市或区县代码 | `string` | - |
| `[type]` | 类型 | `pc,pca` | `pca`   |
| `[allowClear]` | 是否支持清除 | `boolean` | `true` |
| `[autoFocus]` | 是否自动聚焦，当存在输入框时 | `boolean` | `false` |
| `[disabled]` | 禁用 | `boolean` | `false` |
| `[expandTrigger]` | 次级菜单的展开方式，可选 'click' 和 'hover' | `'click'｜'hover'` | `'click'` |
| `[notFoundContent]` | 当下拉列表为空时显示的内容 | `string` | - |
| `[placeHolder]` | 输入框占位文本 | `string` | `'请选择所在地'` |
| `[showSearch]` | 是否支持搜索，默认情况下对 `label` 进行全匹配搜索，不能和 `[nzLoadData]` 同时使用 | `boolean｜NzShowSearchOptions` | `false` |
| `[size]` | 输入框大小，可选 `large` `default` `small` | `'large'｜'small'｜'default'` | `'default'` |

## sf 小部件

小部件名称：`address`。
