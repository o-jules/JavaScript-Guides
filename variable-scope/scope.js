function test(a) {
	console.log(a) // [Function a]

	var a = 123
	
  function a() {
	}
	
	console.log(a) // 123
}
test(444);
