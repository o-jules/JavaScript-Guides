# Prototype / 原型

## __proto__ 与 prototype

总的来讲，原则为：实例的 `__proto__` 是 构造函数的的 `prototype`。

### 内置规则

```js
Object.__proto__ === Function.prototype; // true

Function.__proto__ === Object.prototype; // false
Function.__proto__ === Function.prototype; // true
```

# Prototype chain

```js
Object.prototype.__proto__ === null; // true
({}).__proto__.__proto__ === null; // true

Array.prototype.__proto__ === Object.prototype; // true
Function.prototype.__proto__ === Object.prototype; // true
```

## 原型链

### instanceof

参考[`instanceof` 操作符](instanceof.md)

### `isPrototypeOf`
