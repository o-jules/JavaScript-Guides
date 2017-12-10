'use strict'

var a = 4

function b() { 
	var a = 3
	console.log(a)

	// var 声明和函数声明会提前
	function a() {
		console.log('a')
	}
	a()
} 

b()

// 其定义相当于：scope2f.js