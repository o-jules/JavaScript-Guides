// Object.prototype.toString.call()
// [object Something]

// Symbol.toStringTag 可以改变该行为

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
class CustomToString {
  get [Symbol.toStringTag]() {
    return 'Custom-toString'
  }
};

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
  },
  // [Object Custom-toString]
  {
    label: 'new CustomToString()',
    value: new CustomToString()
  }
].forEach(i => {
  console.log(`toString.call(${i.label})\t = ${Object.prototype.toString.call(i.value)}`)
});

