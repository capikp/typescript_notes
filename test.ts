/*
npm install -g typescript
tsc --version
tsc test.ts
tsc test.ts -w  --> Compilation in watch mode
*/

// types
var testString: string = 'Test';
var testNumber: number = 12;
var testArrayString: string[] = ['test', 'two'];
var testArrayNumber: number[] = [1,4,5,7,8];
var testArrayStringTwo: Array<String> = ['one', 'two'];
var testArrayNumber: Array<number> = [1,44,5,6];
var testAny: any = [];
var testBoolean: boolean = true;
var testTuple: [string, number, boolean] = ['test', 34, false];
var testNever: never;

// 
let testLet: string = 'test';
const testConst: string = 'TEST';
enum testEnum {one, two=1}; 

// void, undefined, null
let testVoid: void = undefined;
let testUndefined: undefined = undefined;
let testNull: null = null;

// Review type of the varible
console.log(typeof(testEnum));

// Functions
function testFunction () {
    console.log(' function');
}

function testFunctionReturn(parameterOne: string, parameterTwo?: number): string {
    return `${parameterOne} ${parameterTwo}`;
}

console.log(testFunctionReturn('Today is:', 12));

function testFunctionVoid(): void {
    console.log('Void');
}

let myTestFunction = function testF (parameterOne: string | number, parameterTwo: number | string) {
    console.log(' function');
}

let myTestFunctionTwo = () => {
     console.log(' function');
}

let myTestFunction3 = function () {
    console.log(' function');
}

console.log(myTestFunction3());

// Interfaces
interface Itest {
    one: string;
    two?: number; // Optional propertie
}

function testInterfaceFunction(testObject: Itest): Itest {
    testObject.one='test interface';
    return testObject;
}

function testInterfaceFunctionBt(testObject: {one: string; two: number}) {
    testObject.one='test interface';
    return `${testObject.one} ${testObject.two}`;
}

var newInterface: Itest = {one: ''};

let testLetInterface = {
    one: 'test',
    two: 24
}

newInterface.one = 'testOne';
console.log(newInterface);
newInterface = testLetInterface;

console.log(testInterfaceFunction(newInterface));


// Class
class testClass {
    one: string;
    protected two?: number;
    private message?: string; 
    public isTrue?: boolean;

    constructor(
        one: string,
        two?: number // optional parameter
    ){
        this.one = one;
        this.two = two;
    }

    // Class methods
    showOne?() {
        //Interpolation
        console.log(`${this.one}`);
    }

    showMessage?(parameterOne: string): void {
        this.message = parameterOne;
        console.log(`${this.message}`);
    }
}

var newClass: testClass;
newClass = {one: 'one'};
console.log(newClass);

var newObjectClass = new testClass('test');
console.log(newObjectClass);

newObjectClass.showMessage('This is a message!');

// Inheritance
class testClassTwo extends testClass {
    first: number;

    constructor(first, one, two?, message?, isTrue?){
        super(one);
        this.first = first;
    }

    // Methods
    showMessageTwo(parameterOne: string) {
        super.showMessage(parameterOne);
    }
}

var test4ClassTwo = new testClassTwo(1, 'Test4Two');
test4ClassTwo.showMessageTwo('This is a message for Test4Two');


// Print
document.write(testArrayStringTwo.toString());