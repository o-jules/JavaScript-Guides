
let a = {};
Object.setPrototypeOf(a, Date.prototype);

a instanceof Date; // true
Date.prototype.isPrototypeOf(a); // true

try {
  a.toString();
} catch(error) {
  console.log(error.message);
}
