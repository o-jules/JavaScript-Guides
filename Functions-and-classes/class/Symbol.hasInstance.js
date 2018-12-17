
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
