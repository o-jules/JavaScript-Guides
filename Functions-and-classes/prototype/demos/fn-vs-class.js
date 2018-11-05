
class Person {
  constructor(name) {
    this.name = name;
  }

  say() {}
  eat() {}
}

function Person2() {
  this.name = name;
}
Person2.prototype.say = function() {};
Person2.prototype.eat = function() {};

Object.keys(new Person().__proto__) // []
Object.keys(new Person2().__proto__) // ['say', 'eat']
