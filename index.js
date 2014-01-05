;(function(root, name, output){
  if(typeof define == "function" && define.amd) return define([], output)
  if(typeof module == "object" && module.exports) module.exports = output()
  else root[name] = output()
})(this, "type", function(){

  var STRING_CLASS = "[object String]"
    , ARRAY_CLASS = "[object Array]"
    , NUMBER_CLASS = "[object Number]"
    , BOOLEAN_CLASS = "[object Boolean]"
    , DATE_CLASS = "[object Date]"
    , REGEXP_CLASS = "[object RegExp]"
    , ARGUMENTS_CLASS = "[object Arguments]"
    , FUNCTION_CLASS = "[object Function]"
    , _toString = {}.toString
    , _hasOwnProperty = {}.hasOwnProperty
    , _propertyIsEnumerable = {}.propertyIsEnumerable
    , supportsArgumentsClass = _toString.call(arguments) == ARGUMENTS_CLASS
    , typeExports = {}

  typeExports.isObject = isObject
  function isObject(value){
    var type = typeof value
    return value &&
        type == "object" ||
        type == "function"
  }

  typeExports.isString = isString
  function isString(value){
    return typeof value == "string" ||
        _toString.call(value) == STRING_CLASS
  }

  typeExports.isArray = isArray
  function isArray(value){
    return _toString.call(value) == ARRAY_CLASS
  }

  typeExports.isFunction = typeof /f/ == "function" ?
      isFunctionCompat :
      isFunction

  function isFunction(value){
    return typeof value == "function"
  }

  function isFunctionCompat(value){
    return typeof value == "function" &&
        _toString.call(value) == FUNCTION_CLASS
  }

  typeExports.isNumber = isNumber
  function isNumber(value){
    return typeof value == "number" ||
        _toString.call(value) == NUMBER_CLASS
  }

  typeExports.isBoolean = isBoolean
  function isBoolean(value){
    return typeof value == "boolean" ||
        _toString.call(value) == BOOLEAN_CLASS
  }

  typeExports.isDate = isDate
  function isDate(value){
    return _toString.call(value) == DATE_CLASS
  }

  typeExports.isRegExp = isRegExp
  function isRegExp(value){
    return _toString.call(value) == REGEXP_CLASS
  }

  typeExports.isArguments = supportsArgumentsClass ? isArguments : isArgumentsCompat
  function isArguments(value){
     return _toString.call(value) == ARGUMENTS_CLASS
  }

  function isArgumentsCompat(value){
    return value &&
        typeof value == "object" &&
        typeof value.length == "number" &&
        _hasOwnProperty.call(value, "callee") &&
        !_propertyIsEnumerable.call(value, "callee")
  }

  typeExports.isUndefined = isUndefined
  function isUndefined(value){
    return value === void 0
  }

  typeExports.isNull = isNull
  function isNull(value){
    return value === null
  }

  typeExports.isNaN = isNaN
  function isNaN(value){
    return isNumber(value) && +value != value
  }

  typeExports.isElement = isElement
  function isElement(value){
    return !!value && value.nodeType == 1
  }
  
  return typeExports

})
