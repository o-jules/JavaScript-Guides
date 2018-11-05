# Symbol

Each possible Symbol value is unique and immutable.

Each Symbol value immutably holds an associated value called `[[Description]]` that is either `undefined` or a String value.

## The well-known symbols

Well-known symbols are built-in Symbol values that are explicitly referenced by algorithms of the ECMA specification.

## Quiz

```js
let n = new Symbol() // error: Symbol is not a constructor

let a = Symbol('symbol')
let b = Symbol('symbol')

a === b // false
```