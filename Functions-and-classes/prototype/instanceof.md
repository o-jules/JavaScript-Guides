# `instaceof`

`instanceof` 属于**二元操作符**，用于检测对象原型链中是否包含构造函数。

对操作符左右的值都有要求，否则会抛出异常。

## instanceof 的缺点

  - 性能低下
    需要沿原型链进行查找。

  - 不可靠
    以下行为可以改变 instanceof 的行为：
    * 修改类的 `[Symbol.hasInstance]` 方法。具体参见[Symbol.hasInstance](/Functions-and-classes/class/Symbol.hasInstance.md)。
    * 修改对象实例的 `__proto__`。直接修改或使用 `Object.setPrototypeOf`。
    