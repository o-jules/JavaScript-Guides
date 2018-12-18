# Symbol.hasInstance

内置的 Symbol。通过这个，可以改变 instanceof 操作符的行为。但不会改变使用 `isPrototypeOf` 或者使用 `__proto__` 与 `prototype` 比较的行为。

## 背景

Symbol.hasInstance 会扰乱原有的合理逻辑，为什么需要添加这个设计？