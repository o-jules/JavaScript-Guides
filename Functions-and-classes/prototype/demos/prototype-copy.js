
function A() {}
A.prototype.i = 'a'
A.prototype.o = { name: 'a' }
A.prototype.fn = function() {}

let a = new A()

a.i = 'b'
console.log(a.i, A.prototype.i) // b, a

a.o.name = 'b'
console.log(a.o, A.prototype.o) // { name: 'b' }, { name: 'b' }

a.o = null
console.log(null, A.prototype.o) // { name: 'b' }, { name: 'b' }


let a1 = new A()
let a2 = new A()
console.log(a1.i === a2.i) // true
console.log(a1.o === a2.o) // true
console.log(a1.fn === a2.fn) // true