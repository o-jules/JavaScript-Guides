
var a = 1

function b () {
	console.log(a)

	var a = 2
	console.log(a)
}

b()

// 输出 undefined 和 2