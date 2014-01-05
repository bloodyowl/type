# type

[![browser support](https://ci.testling.com/bloodyowl/type.png)](https://ci.testling.com/bloodyowl/type)

## Install

```
$ npm install bloody-type
```

## Require

```javascript
var type = require("bloody-type")
// or 
define(["type"], function(type){  })
// or 
window.type
```

## API

All methods available take one argument, and return whether or not this argument matches the type. 

### `type[method] (value) -> boolean`

* `type.isObject(value)`
* `type.isString(value)`
* `type.isArray(value)`
* `type.isFunction(value)`
* `type.isNumber(value)`
* `type.isBoolean(value)`
* `type.isBoolean(value)`
* `type.isDate(value)`
* `type.isRegExp(value)`
* `type.isArguments(value)`
* `type.isUndefined(value)`
* `type.isNull(value)`
* `type.isNaN(value)`
* `type.isElement(value)`
