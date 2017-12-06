# Logical OR `||`

`a || b`, if `a` is `true` return `a`, else return `b`;

## Samples

```js
let a
a = 0 || 2 // a = 2
a = 1 || 3 // a = 1
a = 1 || 0 // a = 1
a = '' || 0 // a = ''
```

```ts
function or (a, b) {
	if (a) return a
	return b
}
```