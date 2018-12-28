# Proxy

Proxy 用于自定义和覆盖对象的基本操作，如属性访问、赋值、函数调用等。

用法：

```typescript

new Proxy(target: object, handler: {
  [key in TrapName]: Trap
});

type TrapName = (
  'getPrototypeOf' | 'setPrototypeOf' |
  'isExtensible' | 'preventExtensions' |
  'getOwnPropertyDescriptor' | 'defineProperty' |
  'has' | 'get' | 'set' | 'deleteProperty' |
  'ownKeys' |
  'apply' | 'construct' );

interface Trap {};
```

## Proxy 构造函数的特点

  - 缺少 prototype 属性
  - target 参数必须是对象，否则会抛出异常

## Trap

Proxy 的 trap 主要有：

  - `getPrototypeOf? (target: T): object | null;`
    用于 `Object.getPrototypeOf`
  
  - `setPrototypeOf? (target: T, v: any): boolean;`
    用于 `Object.setPrototypeOf`
  
  - `isExtensible? (target: T): boolean;`
    用于 `Object.isExtensible`
  
  - `preventExtensions? (target: T): boolean;`
    用于 `Object.preventExtensions`
  
  - `getOwnPropertyDescriptor? (target: T, p: PropertyKey): PropertyDescriptor | undefined;`
    用于 `Object.getOwnPropertyDescriptor`
  
  - `has? (target: T, p: PropertyKey): boolean;`

  - `get? (target: T, p: PropertyKey, receiver: any): any;`
    用于获取属性的操作

  - `set? (target: T, p: PropertyKey, value: any, receiver: any): boolean;`
    用于设置属性的操作

  - `deleteProperty? (target: T, p: PropertyKey): boolean;`
    用于 `delete` 操作符

  - `defineProperty? (target: T, p: PropertyKey, attributes: PropertyDescriptor): boolean;`
    用于 `Object.defineProperty`

  - `enumerate? (target: T): PropertyKey[];`
    用于 `for ... in`（过时的 trap，将会移除）

  - `ownKeys? (target: T): PropertyKey[];`
    用于 `Object.getOwnPropertyNames` 和 `Object.getOwnPropertySymbols`

  - `apply? (target: T, thisArg: any, argArray?: any): any;`
    用于 `function` 的 call

  - `construct? (target: T, argArray: any, newTarget?: any): object;`
    用于构造函数的 `new` 操作符.

## Proxy 上的方法

  - revocable

    函数签名：
    ```typescript
    function revocable<T extends object>(target: T, handler: ProxyHandler<T>): { proxy: T; revoke: () => void; };
    ```
  
    静态方法，用于生成一个 proxy 及取消它的 revoke 方法；当调用 revoke 后，再使用 proxy 会抛出异常。

## Proxy 与 Object.defineProperty

## Proxy 的应用

著名的应用有 Vuejs 3.0 使用 Proxy 代替 Object.defineProperty 扩展了功能及提高了性能。