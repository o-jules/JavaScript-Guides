'use strict';

(function() {
	var a = b = 5;
})();

console.log(b); 

// 使用 与 不使用 strict 的差别
// 使用 strict
// b 未声明，错