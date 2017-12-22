'strict';

// prototype v.s. inner
function A() {
  this.innerFn = function() {}
  this.innerVar = ''
  this.innerObj = {}
}

A.prototype.protoFn = function() {}
A.prototype.protoVar = ''
A.prototype.protoObj = {}

let v1 = new A()
let v2 = new A()

console.log(v1.innerFn === v2.innerFn) // false
console.log(v1.protoFn === v2.protoFn) // true

console.log(v1.innerObj === v2.innerObj) // false
console.log(v1.protoObj === v2.protoObj) // true

console.log(v1.innerVar === v2.innerVar) // true
console.log(v1.protoVar === v2.protoVar) // true

v1.innerVar = 'new'
console.log(v1.innerVar, v2.innerVar) // new, ''

v1.protoVar = 'set'
console.log(v1.protoVar, v2.protoVar) // set, ''
