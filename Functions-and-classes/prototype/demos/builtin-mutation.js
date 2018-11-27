
Array.prototype.multiply = function() {
  const size = this.length;
  let index = size;
  while (index < size * 2) {
    let val = this[index - size]
    this[index] = val * val
    index ++;
  }
}

var a = [1, 2, 3, 4, 5]
a.multiply()
console.log(a)

String.prototype.repeat = function(times) {
  if (typeof times !== 'number') {
    return
  }

  while (times > 0) {
    // do:
    times = times - 1
  }
}

var s = 'abc'
s.repeat(3)
console.log(s)