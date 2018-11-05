
function A() {
	this.m = "member"
}

A.s = "static"
A.prototype.p = "prototype"

let a = new A()
console.log(a.m) // member
console.log(a.s) // undefined
console.log(a.p) // prototype