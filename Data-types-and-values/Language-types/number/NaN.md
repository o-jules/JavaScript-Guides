# `NaN`

`NaN` 代表 Not-a-Number。它在语意上为 undefined numberic result。

注意的是，它与 true、false、null、undefined 等不同，它不是关键字，而是 global object 上的属性;此外，Number 上也有一个 NaN 属性，即 Number.NaN。

## NaN 的底层实现

根据 ECMA 标准（其浮点数按照 IEEE 754-2008 标准），`NaN` 使用 (2^53 − 2) 来表示。

### 不同语言实现的 NaN

对于 JavaScript 等语言，使用的是 quiet NaN，对于 C/C++ 的强类型的语言，则有 signaling NaN。

## NaN 的特性

虽然 NaN 底层也是用与数字相当的字节表示，但是为了保证算数运算的有效性，NaN 在操作时，并不被视为正常的数字。

  - NaN 是无序的
    ```js
    NaN === NaN // false
    NaN < Infinity
    NaN >= 1 // false
    NaN < 1 // false
    ```

  - `NaN` 参与的运算结果都是 `NaN`
    ```js
    NaN - Math.pow(2, 52) // NaN
    NaN * 0.1 // NaN
    NaN / 10 // NaN
    ```

  - NaN 属于 number 类型，`typeof NaN === 'number'`

## NaN 产生的情况

  - 0 除以 0
  - Infinity 除以 Infinity
  - Infinity 与 0 相乘
  - NaN 参与的所有运算
  - 将非数字字符串转换为数字（`Number`，`parseInt`，`parseFloat`）

## 判断 NaN

任何 NaN 的值与 NaN 都不相等。因此判断 `NaN` 的方法有：

  - n !== n
  - isNaN
  - Number.isNaN

### `isNaN` 与 `Number.isNaN` 的区别

`isNaN` 会将值强制转换成数字，再判断；`Number.isNaN` 直接判断当前的值是否为 `NaN`。

```js
isNaN('string') // true
Number.isNaN('string') // false

isNaN('12bc') // true
isNaN('12') // false

function isNaN(x) {
  const n = Number(x);
  return n !== n;
}

function Number.isNaN(x) {
  return x !== x;
}
```

### JavaScript 的 NaN 比较的实现

具体参见[V8中实现的代码](https://github.com/v8/v8/blob/master/src/compiler/typer.cc)：

```c++
Type Typer::Visitor::JSEqualTyper(Type lhs, Type rhs, Typer* t) {
  if (lhs.Is(Type::NaN()) || rhs.Is(Type::NaN())) return t->singleton_false_;
  // ...
}
```

## 参考

 - [(Medium) NaN and typeof](https://medium.com/engineering-housing/nan-is-not-equal-to-nan-771321379694)