class Animal {
  constructor(name) {
    this.name = name;
  }

  eat () {
    console.log(this.name, 'is eating.');
  }
}

var animal = new Animal('Mr. Cute');

var cat = new Proxy(animal, {
  set: (target, key, value) => {
    console.log('set', key, value);
    switch (key) {
      case 'yell':
        console.log('mieu mieu mieu');
        break;
      default:
        console.log(target.name, 'do nothing');
        break;
    }
  },
  get: (target, key) => {
    switch (key) {
      case 'skin':
        return 'fluffy';
      default:
        break;
    }

    if (typeof target[key] === 'function') {
      console.error('Can not get method');
    }
  },
  has: (target, key) => {
    console.log(`Does ${target.name} have ${key}?`);
    return key in target;
  },
  deleteProperty: (target, key) => {
    switch (key) {
      case 'hair':
        console.log(`${target.name} lost its ${key}`);
        return true;
      default:
        break;
    }
    console.log('Cat can not lose', key);
    return false;
  },
  ownKeys: (target) => {
    console.log('Get property names of', target.name);
    return Reflect.ownKeys(target);
  },
});

// error
// cat.eat();

// undefined
console.log(cat.eat);

console.log(cat.skin);
console.log(cat.emptyProp);

// set
cat.tail = 'long';

// get

// has
'name' in cat;

// deleteProperty
delete cat.hair;
delete cat.name;

// ownKey
Object.getOwnPropertyNames(cat);
Object.getOwnPropertySymbols(cat);