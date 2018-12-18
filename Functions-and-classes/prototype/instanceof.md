# `instaceof`

检测对象原型链中是否包含构造函数。

## instanceof 的缺点

  - 性能低下

  - 不可靠
    修改类的 `[Symbol.hasInstance]` 方法，可改变 instanceof 的行为。具体参见[Symbol.hasInstance](/Functions-and-classes/class/Symbol.hasInstance.md)。

  - 对操作符左右的值都有要求，否则会抛出异常
    