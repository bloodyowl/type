var STRING_CLASS = "[object String]"
var ARRAY_CLASS = "[object Array]"
var NUMBER_CLASS = "[object Number]"
var BOOLEAN_CLASS = "[object Boolean]"
var DATE_CLASS = "[object Date]"
var REGEXP_CLASS = "[object RegExp]"
var ARGUMENTS_CLASS = "[object Arguments]"
var FUNCTION_CLASS = "[object Function]"
var _toString = {}.toString
var _hasOwnProperty = {}.hasOwnProperty
var _propertyIsEnumerable = {}.propertyIsEnumerable
var supportsArgumentsClass = _toString.call(arguments) == ARGUMENTS_CLASS

function typeExports(args /* types*/){
  var index = -1
  var length = args.length
  var types = arguments
  var typeChecker
  while(++index < length) {
    typeChecker = types[index + 1]
    if(!typeExports.isFunction(typeChecker)) {
      continue
    }
    if(!typeChecker(args[index])) {
      return false
    }
  }
  return true
}

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

module.exports = typeExports
