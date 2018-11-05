
(function() {
	// var a = b = 5;
	// 等价于下面：

	var a
	b = 5
	a = b
})();

console.log(b);