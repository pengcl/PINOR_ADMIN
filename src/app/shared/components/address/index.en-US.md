---
order: 110
title: address
type: Component
---

China address picker, support two styles of “province, city” or “province, city, district”, refer to the account management example.

## API

| Property | Description | Type | Default |
|----------|----|----------|--------|
| `[ngModel]` | selected value， return the city or district code | `string` | - |
| `[type]` | Type of address | `pc,pca` | `pca`   |
| `[allowClear]` | whether allow clear | `boolean` | `true` |
| `[autoFocus]` | whether auto focus the input box | `boolean` | `false` |
| `[disabled]` | whether disabled select | `boolean` | `false` |
| `[expandTrigger]` | expand current item when click or hover, one of 'click' 'hover' | `'click'｜'hover'` | `'click'` |
| `[notFoundContent]` | Specify content to show when no result matches. | `string` | - |
| `[placeHolder]` | input placeholder | `string` | `'请选择所在地'` |
| `[showSearch]` | Whether support search. Cannot be used with `[nzLoadData]` at the same time | `boolean｜NzShowSearchOptions` | `false` |
| `[size]` | input size, one of `large` `default` `small` | `'large'｜'small'｜'default'` | `'default'` |

## sf widget

Widget name: `address`.