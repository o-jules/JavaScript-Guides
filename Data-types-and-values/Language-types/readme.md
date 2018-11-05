# The language types

An *ECMAScript language type* is one of:

- Undefined
- Null
- Boolean
- String
- Symbol
- Number
- Object

An *ECMAScript language value* is a value that is characterized by an *ECMAScript language type*.

## The Undefined type

Type(Undefined) = { `undefined` }

## The Null type

Type(Null) = { `null` }

## The Boolean type

Type(Boolean) = { `true`, `false` }

## [The String type](string/readme.md)

Let element be a 16-bit unsigned integer,
Type(String) = { all ordered sequences of zero or more element values(up to a maximum length of 2^53 - 1 elments) }

Each element in the String is treated as a UTF-16 code unit value.

## [The Symbol type](symbol/readme.md)

The Symbol type is the set of all non-String values that may be used as the key of an Object property.

## [The Number type](number/readme.md)

The Number type is the set of the double-precision 64-bit format IEEE 754-2008 values, except that `2^53 - 2` represents `NaN` value.

## [The Object type](object/readme.md)

An Object is logically a collections of properties.