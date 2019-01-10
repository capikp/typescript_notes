/*
npm install -g typescript
tsc --version
tsc test.ts
tsc test.ts -w  --> Compilation in watch mode
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// types
var testString = 'Test';
var testNumber = 12;
var testArrayString = ['test', 'two'];
var testArrayNumber = [1, 4, 5, 7, 8];
var testArrayStringTwo = ['one', 'two'];
var testArrayNumber = [1, 44, 5, 6];
var testAny = [];
var testBoolean = true;
var testTuple = ['test', 34, false];
var testNever;
// 
var testLet = 'test';
var testConst = 'TEST';
var testEnum;
(function (testEnum) {
    testEnum[testEnum["one"] = 0] = "one";
    testEnum[testEnum["two"] = 1] = "two";
})(testEnum || (testEnum = {}));
;
// void, undefined, null
var testVoid = undefined;
var testUndefined = undefined;
var testNull = null;
// Review type of the varible
console.log(typeof (testEnum));
// Functions
function testFunction() {
    console.log(' function');
}
function testFunctionReturn(parameterOne, parameterTwo) {
    return parameterOne + " " + parameterTwo;
}
console.log(testFunctionReturn('Today is:', 12));
function testFunctionVoid() {
    console.log('Void');
}
var myTestFunction = function testF(parameterOne, parameterTwo) {
    console.log(' function');
};
var myTestFunctionTwo = function () {
    console.log(' function');
};
var myTestFunction3 = function () {
    console.log(' function');
};
console.log(myTestFunction3());
function testInterfaceFunction(testObject) {
    testObject.one = 'test interface';
    return testObject;
}
function testInterfaceFunctionBt(testObject) {
    testObject.one = 'test interface';
    return testObject.one + " " + testObject.two;
}
var newInterface = { one: '' };
var testLetInterface = {
    one: 'test',
    two: 24
};
newInterface.one = 'testOne';
console.log(newInterface);
newInterface = testLetInterface;
console.log(testInterfaceFunction(newInterface));
// Class
var testClass = /** @class */ (function () {
    function testClass(one, two // optional parameter
    ) {
        this.one = one;
        this.two = two;
    }
    // Class methods
    testClass.prototype.showOne = function () {
        //Interpolation
        console.log("" + this.one);
    };
    testClass.prototype.showMessage = function (parameterOne) {
        this.message = parameterOne;
        console.log("" + this.message);
    };
    return testClass;
}());
var newClass;
newClass = { one: 'one' };
console.log(newClass);
var newObjectClass = new testClass('test');
console.log(newObjectClass);
newObjectClass.showMessage('This is a message!');
// Inheritance
var testClassTwo = /** @class */ (function (_super) {
    __extends(testClassTwo, _super);
    function testClassTwo(first, one, two, message, isTrue) {
        var _this = _super.call(this, one) || this;
        _this.first = first;
        return _this;
    }
    // Methods
    testClassTwo.prototype.showMessageTwo = function (parameterOne) {
        _super.prototype.showMessage.call(this, parameterOne);
    };
    return testClassTwo;
}(testClass));
var test4ClassTwo = new testClassTwo(1, 'Test4Two');
test4ClassTwo.showMessageTwo('This is a message for Test4Two');
// Print
document.write(testArrayStringTwo.toString());
