
function A () {
	this.a = "inner a"
}
A.prototype.a = "proto a"

function B() {
	A.apply(this)
	this.b = "inner b"
}
B.prototype = new A()

var b = new B()
console.log(b.a)