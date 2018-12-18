// Object.prototype.toString.call()
// [object Something]

[
  // [object Undefined]
  undefined,
   // [object Null]
  null,
  // boolean
  // [object Boolean]
  true,
  false,
  // number
  // [object Number]
  0,
  NaN,
  Infinity,
].forEach(i => {
  console.log(`toString.call(${i})\t = ${Object.prototype.toString.call(i)}`)
});

class CustomObject {};

[
  // string
  // [object String]
  {
    label: "''",
    value: ''
  },
  // symbol
  // [object Symbol]
  {
    label: 'Symbol()',
    value: Symbol()
  },
  // Object
  // [object Object]
  {
    label: '{}',
    value: {}
  },
  {
    label: '[]',
    value: []
  },
  // [object Set]
  {
    label: 'new Set()',
    value: new Set()
  },
    // [object Map]
  {
    label: 'new Map()',
    value: new Map()
  },
  // [object Object]
  {
    label: 'new CustomObject()',
    value: new CustomObject()
  }
].forEach(i => {
  console.log(`toString.call(${i.label})\t = ${Object.prototype.toString.call(i.value)}`)
});

