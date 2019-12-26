# Sort Arrays Array

This tiny and fast module performs the sort of an Array of arrays with the field defined. The module returns a new copy of the array so the original is not mutated. 

The only dependencies this module have is jest to run the tests and [console-hue](https://www.npmjs.com/package/console-hue)


## Install

You can install with [npm]:

```sh
$ npm install --save sort-arrays-array
```
## Usage

The module requires two parameters: The array to sort and the the field index to use in the sorting (if you don't provide this parameter it will default to 0):


```js

// Example1: Sorting array of arrays with default index.

const sortaa = require('sort-arrays-array');

const numericTest = [
  [6, 2, 12],
  [4, 10, 6],
  [7, 8, 1]
]

sortaa(numericTest)

// Returns
// [ [4, 10, 6],
//   [6, 2, 12],
//   [7, 8, 1] ]

// Example2: Sorting with with specific index

sortaa(numericTest, 2)

// Returns
// [ [7, 8, 1],
//   [4, 10, 6],
//   [6, 2, 12] ]

// Example3: Sorting with String values.

const stringTest = [
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['a', 'z', 'c']
]

sortaa(stringTest)

// Returns
// [ ['a', 'z', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i'] ]

```

You can pass a third parameter `({})` with the following options.

| Parameter     | Description   |
| -----------------|:-------------:|
| order            | 'desc' if you want a descending order. Default ascending |
| caseInsensitive  | true if you want to ignore the case. Default case sensitive |

### Running tests

You can run the tests and check the functionality of this module using:

```sh
$ npm install && npm test
```

### License

Copyright © 2019, [Juan Convers](https://juanconvers.com).
Released under the [MIT License](LICENSE).