'use strict'

var a = 4

function b() {
	var a
	a = function() {
		console.log('a')
	}

	a = 3
	console.log(a)

	a()
} 

b()