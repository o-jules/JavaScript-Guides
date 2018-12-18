# `static`

`static` 关键字等于在类上直接添加一个方法。

```js
class Custom {
  static format() {
    return ''
  }
}
Custom.format()
```

## 例外

虽然可以大致等同于传统的 `function Custom() {}; Custom.method = function() {}`，但也有例外。

```js
class CustomClass {
  static [Symbol.hasInstance]() { return true }
}
({}) instanceof CustomClass; // true

function CustomConstructor() {}
CustomConstructor[Symbol.hasInstance] = function() { return true };
({}) instanceof CustomConstructor; // false
```