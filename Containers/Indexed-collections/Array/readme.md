# Array / 数组

## Array 上的方法

## `values`

返回一个 Array Iterator。
等于

```js
// true
Array.prototype.values === Array.prototype[Symbol.iterator]

for (let i of [1, 2, 3].values()) {
  console.log(i)
}
```
