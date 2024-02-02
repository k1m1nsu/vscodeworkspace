# JavaScript naming convention

## variables, functions, modules

**lowerCamelCase**

```javascript
let myVariable;

function calculateTotal(price, quantity) {
  return price * quantity;
}

const myModule = require(`./myModule.js`);
```

## constants

**대문자**와 **언더스코어**를 사용하여 명명

```javascript
const MAX_VALUE = 100;
const PI = 3.14;
const DEFALUT_COLOR = `#ffffff`;
```

## class

**UpperCamelCase**

```javascript
class ElectricCar {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._privateVariable = 10; // Use _ for private variables
  }
}
```
