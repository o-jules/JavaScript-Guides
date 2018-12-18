
class Point {
  static [Symbol.hasInstance](instance) {
    return (
      instance &&
      typeof instance === 'object' && 
      typeof instance.x === 'number' &&
      typeof instance.y === 'number'
    );
  }
}

({ x: 1, y: 2 }) instanceof Point; // true
Point.prototype.isPrototypeOf(({ x: 1, y: 2})); // false
({ x: 1, y: 2 }).__proto__ === Point.prototype; // false

class CustomFalse {
  static [Symbol.hasInstance](instance) {
    return false;
  }
}

(new CustomFalse()) instanceof CustomFalse; // false
CustomFalse.prototype.isPrototypeOf(new CustomFalse()); // true
(new CustomFalse()).__proto__ === CustomFalse.prototype; // true

