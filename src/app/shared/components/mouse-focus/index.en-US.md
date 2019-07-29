---
order: 80
title: mouse-focus
type: Component
---

The focus of the mouse, Add class to focus element when mouse over it in a set of elements, Keeping last state when leaving the container.

## DEMO

```html
<ul [mouseFocus]="{ time: 250, itemSelector: 'li', actionClassName: 'active'}">
  <li>
    <a href="javascript:;">Books</a>
    <img src="//qr.liantu.com/api.php?text=https://e.ng-alain.com/">
  </li>
  <li class="active">
    <a href="javascript:;">APP</a>
    <img src="//qr.liantu.com/api.php?text=https://e.ng-alain.com/">
  </li>
  <li>
    <a href="javascript:;">WeChat</a>
    <img src="//qr.liantu.com/api.php?text=https://e.ng-alain.com/">
  </li>
</ul>
```

## API

| Property     | Description        | Type      | Default |
| ----- | ------ | ----- | ------ |
| `[delay]` | Delay (unit: milliseconds) | `number` | `250`  |
| `[itemSelector]` | Class name of element item | `string` | `li` |
| `[actionClassName]` | Class name of focus element | `string` | `active` |
