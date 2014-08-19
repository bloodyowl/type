var tape = require("tape")
var type = require("../")
var isBrowser = (
  typeof window != "undefined" &&
  typeof document != "undefined"
)

tape("type", function(test){

  test.ok(type(["foo", 3], type.isString, type.isNumber))
  test.ok(!type(["foo", 3], type.isString, type.isString))
  test.ok(type(["foo", 3, "bar"], type.isString, null, type.isString))
  test.ok(type(arguments, type.isObject))
  test.ok(type([], type.isObject))
  test.end()
})

tape("type.isObject", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

  test.ok(!type.isObject(""))
    test.ok(type.isObject(new String("")))
    test.ok(type.isObject([]))
    test.ok(type.isObject(object))
    test.ok(type.isObject(object2))
    test.ok(type.isObject(fn))
  test.ok(!type.isObject(1))
  test.ok(!type.isObject(NaN))
    test.ok(type.isObject(new Number(NaN)))
    test.ok(type.isObject(new Number(1)))
    test.ok(type.isObject(new Date()))
    test.ok(type.isObject(new RegExp()))
    test.ok(type.isObject(/foo/))
    test.ok(type.isObject(arguments))
    test.ok(type.isObject(new Boolean(false)))
  test.ok(!type.isObject(false))
  test.ok(!type.isObject(null))
  test.ok(!type.isObject(void 0))
    if(isBrowser) {
      test.ok(type.isObject(document.createElement("div")))
      test.ok(type.isObject(document.createTextNode("foo")))
    }
  test.end()

})

tape("type.isString", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

    test.ok(type.isString(""))
    test.ok(type.isString(new String("")))
  test.ok(!type.isString([]))
  test.ok(!type.isString(object))
  test.ok(!type.isString(object2))
  test.ok(!type.isString(fn))
  test.ok(!type.isString(1))
  test.ok(!type.isString(NaN))
  test.ok(!type.isString(new Number(NaN)))
  test.ok(!type.isString(new Number(1)))
  test.ok(!type.isString(new Date()))
  test.ok(!type.isString(new RegExp()))
  test.ok(!type.isString(/foo/))
  test.ok(!type.isString(arguments))
  test.ok(!type.isString(new Boolean(false)))
  test.ok(!type.isString(false))
  test.ok(!type.isString(null))
  test.ok(!type.isString(void 0))
  if(isBrowser) {
    test.ok(!type.isString(document.createElement("div")))
    test.ok(!type.isString(document.createTextNode("foo")))
  }
  test.end()

})


tape("type.isArray", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

  test.ok(!type.isArray(""))
  test.ok(!type.isArray(new String("")))
    test.ok(type.isArray([]))
  test.ok(!type.isArray(object))
  test.ok(!type.isArray(object2))
  test.ok(!type.isArray(fn))
  test.ok(!type.isArray(1))
  test.ok(!type.isArray(NaN))
  test.ok(!type.isArray(new Number(NaN)))
  test.ok(!type.isArray(new Number(1)))
  test.ok(!type.isArray(new Date()))
  test.ok(!type.isArray(new RegExp()))
  test.ok(!type.isArray(/foo/))
  test.ok(!type.isArray(arguments))
  test.ok(!type.isArray(new Boolean(false)))
  test.ok(!type.isArray(false))
  test.ok(!type.isArray(null))
  test.ok(!type.isArray(void 0))
  if(isBrowser) {
    test.ok(!type.isArray(document.createElement("div")))
    test.ok(!type.isArray(document.createTextNode("foo")))
  }
  test.end()

})


tape("type.isFunction", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

  test.ok(!type.isFunction(""))
  test.ok(!type.isFunction(new String("")))
  test.ok(!type.isFunction([]))
  test.ok(!type.isFunction(object))
  test.ok(!type.isFunction(object2))
    test.ok(type.isFunction(fn))
  test.ok(!type.isFunction(1))
  test.ok(!type.isFunction(NaN))
  test.ok(!type.isFunction(new Number(NaN)))
  test.ok(!type.isFunction(new Number(1)))
  test.ok(!type.isFunction(new Date()))
  test.ok(!type.isFunction(new RegExp()))
  test.ok(!type.isFunction(/foo/))
  test.ok(!type.isFunction(arguments))
  test.ok(!type.isFunction(new Boolean(false)))
  test.ok(!type.isFunction(false))
  test.ok(!type.isFunction(null))
  test.ok(!type.isFunction(void 0))
  if(isBrowser) {
    test.ok(!type.isFunction(document.createElement("div")))
    test.ok(!type.isFunction(document.createTextNode("foo")))
  }
  test.end()

})


tape("type.isNumber", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

  test.ok(!type.isNumber(""))
  test.ok(!type.isNumber(new String("")))
  test.ok(!type.isNumber([]))
  test.ok(!type.isNumber(object))
  test.ok(!type.isNumber(object2))
  test.ok(!type.isNumber(fn))
    test.ok(type.isNumber(1))
    test.ok(type.isNumber(NaN))
    test.ok(type.isNumber(new Number(NaN)))
    test.ok(type.isNumber(new Number(1)))
  test.ok(!type.isNumber(new Date()))
  test.ok(!type.isNumber(new RegExp()))
  test.ok(!type.isNumber(/foo/))
  test.ok(!type.isNumber(arguments))
  test.ok(!type.isNumber(new Boolean(false)))
  test.ok(!type.isNumber(false))
  test.ok(!type.isNumber(null))
  test.ok(!type.isNumber(void 0))
  if(isBrowser) {
    test.ok(!type.isNumber(document.createElement("div")))
    test.ok(!type.isNumber(document.createTextNode("foo")))
  }
  test.end()

})


tape("type.isBoolean", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

  test.ok(!type.isBoolean(""))
  test.ok(!type.isBoolean(new String("")))
  test.ok(!type.isBoolean([]))
  test.ok(!type.isBoolean(object))
  test.ok(!type.isBoolean(object2))
  test.ok(!type.isBoolean(fn))
  test.ok(!type.isBoolean(1))
  test.ok(!type.isBoolean(NaN))
  test.ok(!type.isBoolean(new Number(NaN)))
  test.ok(!type.isBoolean(new Number(1)))
  test.ok(!type.isBoolean(new Date()))
  test.ok(!type.isBoolean(new RegExp()))
  test.ok(!type.isBoolean(/foo/))
  test.ok(!type.isBoolean(arguments))
    test.ok(type.isBoolean(new Boolean(false)))
    test.ok(type.isBoolean(false))
  test.ok(!type.isBoolean(null))
  test.ok(!type.isBoolean(void 0))
  if(isBrowser) {
    test.ok(!type.isBoolean(document.createElement("div")))
    test.ok(!type.isBoolean(document.createTextNode("foo")))
  }
  test.end()

})

tape("type.isDate", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

  test.ok(!type.isDate(""))
  test.ok(!type.isDate(new String("")))
  test.ok(!type.isDate([]))
  test.ok(!type.isDate(object))
  test.ok(!type.isDate(object2))
  test.ok(!type.isDate(fn))
  test.ok(!type.isDate(1))
  test.ok(!type.isDate(new Number(1)))
  test.ok(!type.isDate(NaN))
  test.ok(!type.isDate(new Number(NaN)))
    test.ok(type.isDate(new Date()))
  test.ok(!type.isDate(new RegExp()))
  test.ok(!type.isDate(/foo/))
  test.ok(!type.isDate(arguments))
  test.ok(!type.isDate(new Boolean(false)))
  test.ok(!type.isDate(false))
  test.ok(!type.isDate(null))
  test.ok(!type.isDate(void 0))
  if(isBrowser) {
    test.ok(!type.isDate(document.createElement("div")))
    test.ok(!type.isDate(document.createTextNode("foo")))
  }
  test.end()

})


tape("type.isRegExp", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

  test.ok(!type.isRegExp(""))
  test.ok(!type.isRegExp(new String("")))
  test.ok(!type.isRegExp([]))
  test.ok(!type.isRegExp(object))
  test.ok(!type.isRegExp(object2))
  test.ok(!type.isRegExp(fn))
  test.ok(!type.isRegExp(1))
  test.ok(!type.isRegExp(NaN))
  test.ok(!type.isRegExp(new Number(NaN)))
  test.ok(!type.isRegExp(new Number(1)))
  test.ok(!type.isRegExp(new Date()))
    test.ok(type.isRegExp(new RegExp()))
    test.ok(type.isRegExp(/foo/))
  test.ok(!type.isRegExp(arguments))
  test.ok(!type.isRegExp(new Boolean(false)))
  test.ok(!type.isRegExp(false))
  test.ok(!type.isRegExp(null))
  test.ok(!type.isRegExp(void 0))
  if(isBrowser) {
    test.ok(!type.isRegExp(document.createElement("div")))
    test.ok(!type.isRegExp(document.createTextNode("foo")))
  }
  test.end()

})


tape("type.isArguments", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()
    , fake = ["foo"]

  test.ok(!type.isArguments(""))
  test.ok(!type.isArguments(new String("")))
  test.ok(!type.isArguments([]))
  test.ok(!type.isArguments(object))
  test.ok(!type.isArguments(object2))
  test.ok(!type.isArguments(fn))
  test.ok(!type.isArguments(1))
  test.ok(!type.isArguments(NaN))
  test.ok(!type.isArguments(new Number(NaN)))
  test.ok(!type.isArguments(new Number(1)))
  test.ok(!type.isArguments(new Date()))
  test.ok(!type.isArguments(new RegExp()))
  test.ok(!type.isArguments(/foo/))
    test.ok(type.isArguments(arguments))
  test.ok(!type.isArguments(new Boolean(false)))
  test.ok(!type.isArguments(false))
  test.ok(!type.isArguments(null))
  test.ok(!type.isArguments(void 0))
  if(isBrowser) {
    test.ok(!type.isArguments(document.createElement("div")))
    test.ok(!type.isArguments(document.createTextNode("foo")))
  }

  // fake arguments
  test.ok(!type.isArguments({0:"foo", length:1, callee:function(){}}))

  fake.callee = function(){}

  test.ok(!type.isArguments(fake))
  test.end()

})

tape("type.isUndefined", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

  test.ok(!type.isUndefined(""))
  test.ok(!type.isUndefined(new String("")))
  test.ok(!type.isUndefined([]))
  test.ok(!type.isUndefined(object))
  test.ok(!type.isUndefined(object2))
  test.ok(!type.isUndefined(fn))
  test.ok(!type.isUndefined(1))
  test.ok(!type.isUndefined(NaN))
  test.ok(!type.isUndefined(new Number(NaN)))
  test.ok(!type.isUndefined(new Number(1)))
  test.ok(!type.isUndefined(new Date()))
  test.ok(!type.isUndefined(new RegExp()))
  test.ok(!type.isUndefined(/foo/))
  test.ok(!type.isUndefined(arguments))
  test.ok(!type.isUndefined(new Boolean(false)))
  test.ok(!type.isUndefined(false))
  test.ok(!type.isUndefined(null))
    test.ok(type.isUndefined(void 0))
  if(isBrowser) {
    test.ok(!type.isUndefined(document.createElement("div")))
    test.ok(!type.isUndefined(document.createTextNode("foo")))
  }
  test.end()

})

tape("type.isNull", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

  test.ok(!type.isNull(""))
  test.ok(!type.isNull(new String("")))
  test.ok(!type.isNull([]))
  test.ok(!type.isNull(object))
  test.ok(!type.isNull(object2))
  test.ok(!type.isNull(fn))
  test.ok(!type.isNull(1))
  test.ok(!type.isNull(NaN))
  test.ok(!type.isNull(new Number(NaN)))
  test.ok(!type.isNull(new Number(1)))
  test.ok(!type.isNull(new Date()))
  test.ok(!type.isNull(new RegExp()))
  test.ok(!type.isNull(/foo/))
  test.ok(!type.isNull(arguments))
  test.ok(!type.isNull(new Boolean(false)))
  test.ok(!type.isNull(false))
    test.ok(type.isNull(null))
  test.ok(!type.isNull(void 0))
  if(isBrowser) {
    test.ok(!type.isNull(document.createElement("div")))
    test.ok(!type.isNull(document.createTextNode("foo")))
  }
  test.end()

})

tape("type.isNaN", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

  test.ok(!type.isNaN(""))
  test.ok(!type.isNaN(new String("")))
  test.ok(!type.isNaN([]))
  test.ok(!type.isNaN(object))
  test.ok(!type.isNaN(object2))
  test.ok(!type.isNaN(fn))
  test.ok(!type.isNaN(1))
    test.ok(type.isNaN(NaN))
    test.ok(type.isNaN(new Number(NaN)))
  test.ok(!type.isNaN(new Number(1)))
  test.ok(!type.isNaN(new Date()))
  test.ok(!type.isNaN(new RegExp()))
  test.ok(!type.isNaN(/foo/))
  test.ok(!type.isNaN(arguments))
  test.ok(!type.isNaN(new Boolean(false)))
  test.ok(!type.isNaN(false))
  test.ok(!type.isNaN(null))
  test.ok(!type.isNaN(void 0))
  if(isBrowser) {
    test.ok(!type.isNaN(document.createElement("div")))
    test.ok(!type.isNaN(document.createTextNode("foo")))
  }
  test.end()

})

tape("type.isElement", function(test){

  var object = {}
    , fn = function(){}
    , object2 = new fn()

  test.ok(!type.isElement(""))
  test.ok(!type.isElement(new String("")))
  test.ok(!type.isElement([]))
  test.ok(!type.isElement(object))
  test.ok(!type.isElement(object2))
  test.ok(!type.isElement(fn))
  test.ok(!type.isElement(1))
  test.ok(!type.isElement(NaN))
  test.ok(!type.isElement(new Number(NaN)))
  test.ok(!type.isElement(new Number(1)))
  test.ok(!type.isElement(new Date()))
  test.ok(!type.isElement(new RegExp()))
  test.ok(!type.isElement(/foo/))
  test.ok(!type.isElement(arguments))
  test.ok(!type.isElement(new Boolean(false)))
  test.ok(!type.isElement(false))
  test.ok(!type.isElement(null))
  test.ok(!type.isElement(void 0))
  if(isBrowser) {
      test.ok(type.isElement(document.createElement("div")))
    test.ok(!type.isElement(document.createTextNode("foo")))
  }
  test.end()

})
