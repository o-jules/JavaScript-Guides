function f1() {
  console.log('1')
}

function f2() {
  console.log('2')
}

var b = 1
var a = 1 // 这里有分号，则输出 f1，没有分号则输出 f2
-a + b === 0 ? f1() : f2()
