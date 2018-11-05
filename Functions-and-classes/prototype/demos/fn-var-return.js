
function A() {
	this.a = "inner"

	return {
		a: "return"
	}

}
A.prototype.getA = function () {
	console.log(this.a)
}

var a = new A()
console.log(a.a) // return
a.getA() // undefined
