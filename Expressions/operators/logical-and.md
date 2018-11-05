## logic AND `&&`

`a && b` returns `a` if a is `false`, else return `b`;

```js
let a
a = 2 && 1 // a = 1
a = 0 && 2 // a = 0
a = 2 && 0 // a = 0
a = '' && 0 // a = ''
```

```ts
function and (a, b) {
	if (!a) return a
	return b
}
```