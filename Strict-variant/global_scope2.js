
(function() {
	// var a, b;
	// a = b = 5;
	// 等价于：

	var a
	var b
	b = 5
	a = b
})();

console.log(b); // undefined