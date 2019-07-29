---
order: 80
title: mouse-focus
type: Component
---

鼠标焦点，在一组元素里鼠标移到某个元素时增加额外一个类名，当离开容器时保留最后一个状态。

## DEMO

```html
<ul [mouseFocus]="{ time: 250, itemSelector: 'li', actionClassName: 'active'}">
  <li>
    <a href="javascript:;">必读</a>
    <img src="//qr.liantu.com/api.php?text=https://e.ng-alain.com/">
  </li>
  <li class="active">
    <a href="javascript:;">APP</a>
    <img src="//qr.liantu.com/api.php?text=https://e.ng-alain.com/">
  </li>
  <li>
    <a href="javascript:;">微信</a>
    <img src="//qr.liantu.com/api.php?text=https://e.ng-alain.com/">
  </li>
</ul>
```

## API

| 参数                | 说明            | 类型     | 默认值   |
|---------------------|---------------|----------|----------|
| `[delay]`           | 延迟（单位：毫秒） | `number` | `250`    |
| `[itemSelector]`   | 项类名          | `string` | `li`     |
| `[actionClassName]` | 获得焦点时类名  | `string` | `active` |
