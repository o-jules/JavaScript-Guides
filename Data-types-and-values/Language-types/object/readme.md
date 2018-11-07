# The Object Type

## Definitions

### Property

Each property is either a `data property`, or an `accessor property`.

  - Data property: associates a key value with an ECMAScript language value and a set of Boolean attributes;

  - Accessor property: associates a key value with one or two accessor functions(getter and setter), and a set
    of Boolean attributes.

### Keys

  - Property Key: A property key is either an String value or a Symbol value.

  - Property name: A Property name is a property key that is a String value.

  - Integer index: a String-value property key that is a canonical numeric String, range: [+0, 2^53 - 1].

  - Array index: an integer index, range: [+0, 2^32 - 1].

### Own properties and inherited properies

  - own properties:

  - inherited properties:

### Ordinary object and exotic object

Differed in semantics for accessing and manipulating their properties, objects can be categoried as:

  - ordinary object:

  - exotic object: 

## Property attributes

Attributes of a data property:

| attribute name     | value domain       |
|--------------------|--------------------|
| `[[Value]]`        | any language type  |
| `[[Writable]]`     | Boolean            |
| `[[Enumerable]]`   | Boolean            |
| `[[Configurable]]` | Boolean            |

  - `[[Value]]`: value retrieved by a get access of the property.

  - `[[Writable]]`: if `true`, `[[Value]]` of property can be changed with `[[Set]]`.

  - `[[Enumerable]]`: if `true`, property can be enumerated by a for-in enumration.

  - `[[Configurable]]`: if `false`, attemps to delete the property, change the property to be an `accessor property`, or change its attributes(other than `[[Value]]`, or changing `[[Writable]]` to `false`) will fail.


Attributes of an accessor property:

| attribute name     | value domain        |
|--------------------|---------------------|
| `[[Get]]`          | Object or Undefined |
| `[[Set]]`          | Object or Undefined |
| `[[Enumerable]]`   | Boolean             |
| `[[Configurable]]` | Boolean             |

  - `[[Get]]`: a function object or undefined.

  - `[[Set]]`: a function object or undefined.

  - `[[Enumerable]]`: see `[[Enumerable]]` of data property.

  - `[[Configurable]]`: if fasle, attempts to delete the property, change the property to be a `data property`, or change its attributes will fail.


Default Attribute Values:

| Attribute Name     | Default Value |
|--------------------|---------------|
| `[[Value]]`        | undefined |
| `[[Get]]`          | undefined |
| `[[Set]]`          | undefined |
| `[[Writable]]`     | false     |
| `[[Enumerable]]`   | false     |
| `[[Configurable]]` | false     |

