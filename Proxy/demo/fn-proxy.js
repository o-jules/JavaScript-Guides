
function AbstractAnimal (name) {
  this.name = name;
}

const Animal = new Proxy(AbstractAnimal, {
  construct: (target, argsList, newTarget) => {
    console.log('Call constructor', argsList);
    return new target(argsList);
  },
  apply: (target, thisArg, argsList) => {
    console.log('Apply', argsList);
    target.apply(thisArg, argsList);
  }
});

function Cat() {
  Animal.call(this, 'Cat');
}
Cat.prototype = new Animal();

const cat = new Cat();

console.log('Name is:', cat.name);