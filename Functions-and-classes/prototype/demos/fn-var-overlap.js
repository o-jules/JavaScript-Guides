
function A() {
	this.m = "member"

	this.getM = function() {
		console.log("inner method", this.m)
		return this.m
	}
}

A.m = "static"
A.prototype.m = "prototype"
A.prototype.getM = function() {
	console.log("prototype method", this.m)
	return this.m
}

let a = new A()
console.log(a.m) // member
a.getM() // inner method
console.log(a.__proto__) //  A.prototype

/**
 * 优先级
 * 先内部
 * 再 prototype
 */