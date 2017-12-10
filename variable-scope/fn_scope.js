'use strict'

var a = 4

function b() { 
	console.log(a)

	function a() {
		console.log('a')		
	}
	a()
} 

b()