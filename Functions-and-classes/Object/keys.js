/*
 * Object.keys
 * 用于返回对象自身的属性的 key 名（从原型继承的不会存在）
 */

function viewKeys(o) {
  console.log(Object.keys(o))
}

class A {
  constructor() {
    this.a = 'a'
    this.instanceMethodA = function () {}
  }

  prototypeMethodA() {}
}

function B() {
  this.b = 'b'
  this.instanceMethodB = function() {}
}
B.prototype.prototypePropertyB = 'pb'
B.prototype.prototypeMethodB = function() {}

function C () {
  A.constructor.call(this)
  this.c = 'c'
}
C.prototype.prototypePropertyC = 'pc'
C.prototype.prototypeMethodC = function() {}

function D () {
  B.call(this)
  this.d = 'd'
}
D.prototype.prototypeMethodD = function() {}

class E extends A {
  constructor() {
    super()
    this.e = 'e'
  }
}

viewKeys(new A())
viewKeys(new B())
viewKeys(new C())
viewKeys(new D())
viewKeys(new E())
