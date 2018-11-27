class A {}
A.prototype.i = 'p'

var x = new A()
console.log(x.i)
var isSuccess = delete x.i
console.log(isSuccess, x.i)
console.log('')
// Result:
// 'p'
// true, 'p'


class B {
  constructor() {
    this.i = 'm'
  }
}
B.prototype.i = 'p'

var y = new B()
console.log(y.i)
var isSuccess = delete y.i
console.log(isSuccess, y.i)
console.log('')
// Result:
// 'm'
// true, 'p'

var z = []
console.log(z.length)
var isSuccess = delete z.length
console.log(isSuccess, z.length)
z.i = 'user-define'
console.log(z.i)
var isSuccess = delete z.i
console.log(isSuccess, z.i)
// Result:
// 0
// false, 0
// 'user-define'
// true, undefined

