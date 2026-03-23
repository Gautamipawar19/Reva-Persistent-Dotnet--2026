// ============================================================
// JavaScript Overview - js-overview.js
// All output renders into DOM elements in the browser.
// No console.log needed - everything is visible on the page.
// ============================================================

// ---- Shared helpers ----------------------------------------

function writeLine(id, text, color) {
  const el = document.getElementById(id);
  if (!el) return;
  const div = document.createElement("div");
  div.textContent = text;
  if (color) div.style.color = color;
  el.appendChild(div);
}

function cmt(id, text) { writeLine(id, text, "#6a9955"); }
function out(id, text) { writeLine(id, "=> " + text, "#ce9178"); }
function code(id, text) { writeLine(id, text, "#d4d4d4"); }
function gap(id) { writeLine(id, ""); }

// ============================================================
// JavaScript Overview
// ============================================================

cmt("out-overview", "// JavaScript makes HTML documents interactive");
cmt("out-overview", "// It runs directly in the browser - no install needed");
gap("out-overview");
code("out-overview", 'document.title = "Hello from JavaScript"');
out("out-overview", 'Page title is now: "' + document.title + '"');
gap("out-overview");
code("out-overview", "document.getElementById('id')  => selects an HTML element");
code("out-overview", "element.textContent = '...'   => changes what the user sees");
code("out-overview", "element.style.color = 'red'   => changes how it looks");

// ============================================================
// Data Types (Primitives and Objects)
// ============================================================

cmt("out-datatypes", "// PRIMITIVES - single immutable values");
gap("out-datatypes");
code("out-datatypes", 'const str  = "Hello"');
out("out-datatypes", 'typeof "Hello"     => string');
code("out-datatypes", "const num  = 42");
out("out-datatypes", "typeof 42          => number");
code("out-datatypes", "const bool = true");
out("out-datatypes", "typeof true        => boolean");
code("out-datatypes", "const n    = null");
out("out-datatypes", 'typeof null        => "object"  <- known JS quirk!');
code("out-datatypes", "const u    = undefined");
out("out-datatypes", "typeof undefined   => undefined");
gap("out-datatypes");
cmt("out-datatypes", "// OBJECTS - collections of key-value pairs");
gap("out-datatypes");
code("out-datatypes", 'const user   = { name: "Ravi", age: 28 }');
out("out-datatypes", 'typeof user          => object');
code("out-datatypes", "const scores = [95, 87, 100]");
out("out-datatypes", "Array.isArray(scores) => true");

// ============================================================
// Variables (var, let, const)
// ============================================================

cmt("out-variables", "// var - function scoped, hoisted, avoid in modern JS");
var legacyVar = "I am var";
out("out-variables", legacyVar);
gap("out-variables");
cmt("out-variables", "// let - block scoped, can be reassigned");
let playerScore = 10;
code("out-variables", "let playerScore = 10");
out("out-variables", "playerScore => " + playerScore);
playerScore = 20;
code("out-variables", "playerScore = 20");
out("out-variables", "playerScore => " + playerScore);
gap("out-variables");
cmt("out-variables", "// const - block scoped, cannot be reassigned");
const PI = 3.14159;
code("out-variables", "const PI = 3.14159");
out("out-variables", "PI => " + PI);
code("out-variables", "PI = 3  => TypeError: Assignment to constant variable");
gap("out-variables");
cmt("out-variables", "// const with objects - the binding is fixed, not the contents");
const personObj = { name: "Meera" };
personObj.name = "Anjali";
code("out-variables", 'const personObj = { name: "Meera" }');
code("out-variables", 'personObj.name = "Anjali"  <- this IS allowed');
out("out-variables", "personObj.name => " + personObj.name);

// ============================================================
// Type Coercion
// ============================================================

cmt("out-coercion", "// Implicit coercion - JS converts types automatically");
gap("out-coercion");
code("out-coercion", '"5" + 3');
out("out-coercion", '"5" + 3  => ' + ("5" + 3) + '  <- string wins, concatenation');
code("out-coercion", '"5" - 3');
out("out-coercion", '"5" - 3  => ' + ("5" - 3) + '  <- string coerced to number');
code("out-coercion", '"5" == 5');
out("out-coercion", '"5" == 5   => ' + ("5" == 5) + '  <- == coerces types, avoid!');
code("out-coercion", '"5" === 5');
out("out-coercion", '"5" === 5  => ' + ("5" === 5) + ' <- === checks type AND value');
gap("out-coercion");
cmt("out-coercion", "// Explicit coercion - you control the conversion");
out("out-coercion", 'Number("42")  => ' + Number("42"));
out("out-coercion", "String(100)   => " + String(100));
out("out-coercion", "Boolean(0)    => " + Boolean(0) + "  <- 0, '', null, undefined are falsy");

// ============================================================
// Strict Mode
// ============================================================

cmt("out-strict", '"use strict" - enables strict mode');
cmt("out-strict", "Prevents undeclared variables, duplicate params, silent failures");
gap("out-strict");
code("out-strict", '"use strict";');
code("out-strict", "x = 10  => ReferenceError (x was never declared)");
code("out-strict", "function fn(a, a) {}  => SyntaxError (duplicate param)");
gap("out-strict");
out("out-strict", "Strict mode is ON by default in ES Modules and Classes");
out("out-strict", "Always write 'use strict' at the top of old-style scripts");

// ============================================================
// Arithmetic Operators
// ============================================================

const numA = 10, numB = 3;
cmt("out-arithmetic", "// numA = 10, numB = 3");
gap("out-arithmetic");
out("out-arithmetic", "numA + numB  => " + (numA + numB));
out("out-arithmetic", "numA - numB  => " + (numA - numB));
out("out-arithmetic", "numA * numB  => " + (numA * numB));
out("out-arithmetic", "numA / numB  => " + (numA / numB).toFixed(4));
out("out-arithmetic", "numA % numB  => " + (numA % numB) + "  (modulo - remainder)");
out("out-arithmetic", "numA ** numB => " + (numA ** numB) + "  (exponentiation)");
gap("out-arithmetic");
let tally = 5;
code("out-arithmetic", "let tally = 5");
tally++;
out("out-arithmetic", "tally++  => " + tally + "  (post-increment)");
tally--;
out("out-arithmetic", "tally--  => " + tally + "  (post-decrement)");

// ============================================================
// Comparison and Logical Operators
// ============================================================

cmt("out-comparison", "// Comparison - always returns true or false");
gap("out-comparison");
out("out-comparison", "5 > 3    => " + (5 > 3));
out("out-comparison", "5 < 3    => " + (5 < 3));
out("out-comparison", "5 >= 5   => " + (5 >= 5));
out("out-comparison", "5 === 5  => " + (5 === 5) + "  (strict - type + value)");
out("out-comparison", "5 !== 3  => " + (5 !== 3));
gap("out-comparison");
cmt("out-comparison", "// Logical - combine conditions");
gap("out-comparison");
out("out-comparison", "true && true   => " + (true && true) + "  (AND)");
out("out-comparison", "true && false  => " + (true && false) + " (AND - one is false)");
out("out-comparison", "true || false  => " + (true || false) + "  (OR)");
out("out-comparison", "!true          => " + (!true) + " (NOT)");
gap("out-comparison");
cmt("out-comparison", "// ?? nullish coalescing - fallback when null or undefined");
const guestName = null;
out("out-comparison", 'null ?? "Guest"  => ' + (guestName ?? "Guest"));

// ============================================================
// Assignment Operators
// ============================================================

let assignX = 10;
cmt("out-assignment", "// assignX starts at 10");
gap("out-assignment");
out("out-assignment", "assignX = 10   => " + assignX);
assignX += 5;
out("out-assignment", "assignX += 5   => " + assignX);
assignX -= 3;
out("out-assignment", "assignX -= 3   => " + assignX);
assignX *= 2;
out("out-assignment", "assignX *= 2   => " + assignX);
assignX /= 4;
out("out-assignment", "assignX /= 4   => " + assignX);
assignX **= 2;
out("out-assignment", "assignX **= 2  => " + assignX);
gap("out-assignment");
cmt("out-assignment", "// Logical assignment");
let fallbackName = null;
fallbackName ??= "Default";
code("out-assignment", 'let fallbackName = null');
code("out-assignment", 'fallbackName ??= "Default"  <- assign only if null/undefined');
out("out-assignment", "fallbackName => " + fallbackName);

// ============================================================
// Control Flow (if/else, switch, loops)
// ============================================================

cmt("out-control", "// if / else");
const temp = 35;
if (temp > 30) {
  out("out-control", "if (temp > 30) => Hot day! temp = " + temp);
} else {
  out("out-control", "Cool day");
}
gap("out-control");
cmt("out-control", "// switch");
const currentDay = "Monday";
code("out-control", 'switch (currentDay) - currentDay = "Monday"');
switch (currentDay) {
  case "Monday": out("out-control", "Start of the work week"); break;
  case "Friday": out("out-control", "Almost weekend"); break;
  default: out("out-control", "Midweek");
}
gap("out-control");
cmt("out-control", "// for loop");
code("out-control", "for (let i = 1; i <= 5; i++)");
let forStr = "";
for (let i = 1; i <= 5; i++) { forStr += i + " "; }
out("out-control", forStr.trim());
gap("out-control");
cmt("out-control", "// for...of - iterate over array values");
const fruits = ["mango", "banana", "papaya"];
code("out-control", 'for (const fruit of ["mango", "banana", "papaya"])');
let fruitStr = "";
for (const fruit of fruits) { fruitStr += fruit + "  "; }
out("out-control", fruitStr.trim());
gap("out-control");
cmt("out-control", "// while loop");
let loopCount = 0;
let whileStr = "";
while (loopCount < 4) { whileStr += loopCount + " "; loopCount++; }
code("out-control", "while (loopCount < 4)");
out("out-control", whileStr.trim());

// ============================================================
// Array and Array Methods
// ============================================================

const numList = [10, 20, 30, 40, 50];
cmt("out-arrays", "// const numList = [10, 20, 30, 40, 50]");
gap("out-arrays");
out("out-arrays", "numList[0]       => " + numList[0] + "  (first element)");
out("out-arrays", "numList.length   => " + numList.length);
gap("out-arrays");
cmt("out-arrays", "// push / pop");
const mutableArr = [1, 2, 3];
mutableArr.push(4);
out("out-arrays", "[1,2,3].push(4)  => " + JSON.stringify(mutableArr));
mutableArr.pop();
out("out-arrays", "arr.pop()        => " + JSON.stringify(mutableArr));
gap("out-arrays");
cmt("out-arrays", "// map - transform every element");
out("out-arrays", "numList.map(n => n * 2)           => " + JSON.stringify(numList.map(n => n * 2)));
gap("out-arrays");
cmt("out-arrays", "// filter - keep elements that pass a test");
out("out-arrays", "numList.filter(n => n > 25)       => " + JSON.stringify(numList.filter(n => n > 25)));
gap("out-arrays");
cmt("out-arrays", "// find - first element matching a condition");
out("out-arrays", "numList.find(n => n > 25)         => " + numList.find(n => n > 25));
gap("out-arrays");
cmt("out-arrays", "// reduce - accumulate into a single value");
out("out-arrays", "numList.reduce((acc, n) => acc+n) => " + numList.reduce((acc, n) => acc + n, 0));
gap("out-arrays");
cmt("out-arrays", "// includes - check if a value exists");
out("out-arrays", "numList.includes(30)  => " + numList.includes(30));
out("out-arrays", "numList.includes(99)  => " + numList.includes(99));

// ============================================================
// Functions - Declaration and Expression
// ============================================================

cmt("out-functions", "// Function Declaration - hoisted, callable before definition");
gap("out-functions");
function greetPerson(name) { return "Hello, " + name + "!"; }
code("out-functions", "function greetPerson(name) { return 'Hello, ' + name + '!' }");
out("out-functions", "greetPerson('Priya')  => " + greetPerson("Priya"));
gap("out-functions");
cmt("out-functions", "// Function Expression - assigned to variable, not hoisted");
gap("out-functions");
const squareNum = function (n) { return n * n; };
code("out-functions", "const squareNum = function(n) { return n * n }");
out("out-functions", "squareNum(7)  => " + squareNum(7));
gap("out-functions");
cmt("out-functions", "// Functions are first-class - pass them as arguments");
function applyTwice(fn, val) { return fn(fn(val)); }
code("out-functions", "applyTwice(squareNum, 3)");
out("out-functions", "=> squareNum(squareNum(3)) => squareNum(9) => " + applyTwice(squareNum, 3));

// ============================================================
// Arrow Functions
// ============================================================

cmt("out-arrow", "// Arrow functions - shorter syntax using =>");
gap("out-arrow");
cmt("out-arrow", "// Regular function");
code("out-arrow", "function addNums(a, b) { return a + b }");
out("out-arrow", "addNums(3, 4)  => " + (function (a, b) { return a + b; })(3, 4));
gap("out-arrow");
cmt("out-arrow", "// Arrow function - same thing, shorter");
const addNums = (a, b) => a + b;
code("out-arrow", "const addNums = (a, b) => a + b");
out("out-arrow", "addNums(3, 4)  => " + addNums(3, 4));
gap("out-arrow");
cmt("out-arrow", "// Single param - no parentheses needed");
const doubleVal = n => n * 2;
code("out-arrow", "const doubleVal = n => n * 2");
out("out-arrow", "doubleVal(5)   => " + doubleVal(5));
gap("out-arrow");
cmt("out-arrow", "// Especially useful inside array methods");
const cityList = ["Mumbai", "Pune", "Delhi"];
code("out-arrow", '["Mumbai","Pune","Delhi"].map(c => c.toUpperCase())');
out("out-arrow", "=> " + JSON.stringify(cityList.map(c => c.toUpperCase())));

// ============================================================
// Default Parameters
// ============================================================

function greetUser(name = "Guest", role = "Visitor") {
  return `Hello, ${name}! Logged in as: ${role}`;
}
code("out-defaults", 'function greetUser(name = "Guest", role = "Visitor")');
gap("out-defaults");
code("out-defaults", 'greetUser("Arjun", "Admin")  - both provided');
out("out-defaults", greetUser("Arjun", "Admin"));
code("out-defaults", 'greetUser("Arjun")  - role uses default');
out("out-defaults", greetUser("Arjun"));
code("out-defaults", 'greetUser()  - both use defaults');
out("out-defaults", greetUser());

// ============================================================
// Object Literals
// ============================================================

const catalogItem = {
  name: "Laptop",
  price: 75000,
  inStock: true,
  specs: { ram: "16GB", storage: "512GB SSD" },
  describe() { return `${this.name} costs Rs.${this.price}`; }
};
code("out-objects", "const catalogItem = { name, price, inStock, specs, describe() }");
gap("out-objects");
out("out-objects", "catalogItem.name          => " + catalogItem.name);
out("out-objects", "catalogItem.price         => " + catalogItem.price);
out("out-objects", "catalogItem.specs.ram     => " + catalogItem.specs.ram);
out("out-objects", "catalogItem.describe()    => " + catalogItem.describe());
gap("out-objects");
cmt("out-objects", "// Destructuring - extract values into named variables");
const { name: itemName, price: itemPrice } = catalogItem;
code("out-objects", "const { name, price } = catalogItem");
out("out-objects", "name  => " + itemName);
out("out-objects", "price => " + itemPrice);
gap("out-objects");
cmt("out-objects", "// Spread - copy or merge objects");
const updatedItem = { ...catalogItem, price: 70000 };
code("out-objects", "const updatedItem = { ...catalogItem, price: 70000 }");
out("out-objects", "updatedItem.price => " + updatedItem.price + "  (original: " + catalogItem.price + ")");

// ============================================================
// Template Literals
// ============================================================

const tplName = "Kavya";
const tplLang = "JavaScript";
const tplYear = 2024;
cmt("out-template", "// Backtick strings - embed expressions with ${}");
gap("out-template");
cmt("out-template", "// Old way - string concatenation with +");
code("out-template", '"Hello, " + tplName + "! Learning " + tplLang');
out("out-template", "Hello, " + tplName + "! Learning " + tplLang);
gap("out-template");
cmt("out-template", "// Template literal - cleaner");
code("out-template", "`Hello, ${tplName}! Learning ${tplLang}`");
out("out-template", `Hello, ${tplName}! Learning ${tplLang}`);
gap("out-template");
cmt("out-template", "// Expressions work inside ${}");
out("out-template", `Year: ${tplYear}, Next: ${tplYear + 1}`);
gap("out-template");
cmt("out-template", "// Multi-line strings - real line breaks supported");
out("out-template", "Line one\nLine two\nLine three");

// ============================================================
// Naming Conventions
// ============================================================

cmt("out-naming", "// camelCase - variables and functions");
code("out-naming", "let userName = 'Rohan'");
code("out-naming", "function getUserAge() {}");
gap("out-naming");
cmt("out-naming", "// PascalCase - classes and constructors");
code("out-naming", "class UserProfile {}");
code("out-naming", "class ShoppingCart {}");
gap("out-naming");
cmt("out-naming", "// UPPER_SNAKE_CASE - constants that never change");
code("out-naming", "const MAX_RETRIES = 3");
code("out-naming", "const API_BASE_URL = 'https://api.example.com'");
gap("out-naming");
cmt("out-naming", "// Boolean prefix - is, has, can, should");
code("out-naming", "let isLoggedIn = true");
code("out-naming", "let hasPermission = false");
code("out-naming", "let canEdit = true");

// ============================================================
// this Keyword
// ============================================================

cmt("out-this", "// 'this' inside a method => the owning object");
gap("out-this");
const carObj = {
  brand: "Toyota",
  model: "Camry",
  describe() { return `${this.brand} ${this.model}`; }
};
code("out-this", "const carObj = { brand: 'Toyota', model: 'Camry', describe() }");
out("out-this", "carObj.describe()  => " + carObj.describe());
gap("out-this");
cmt("out-this", "// Arrow functions do NOT have their own 'this'");
cmt("out-this", "// They capture 'this' from the surrounding scope");
gap("out-this");
code("out-this", "const obj = { val: 42, get: () => this.val }");
code("out-this", "obj.get()  => undefined  (arrow captured outer this, not obj)");
gap("out-this");
out("out-this", "Use regular functions for object methods that need 'this'");
out("out-this", "Use arrow functions for callbacks inside those methods");

// ============================================================
// Classes (ES6)
// ============================================================

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() { return `${this.name} says ${this.sound}`; }
}
class Dog extends Animal {
  constructor(name) { super(name, "Woof"); }
  fetch(item) { return `${this.name} fetches the ${item}!`; }
}
code("out-classes", "class Animal { constructor(name, sound) { ... } speak() { ... } }");
code("out-classes", "class Dog extends Animal { constructor(name) { super(name, 'Woof') } }");
gap("out-classes");
const myDog = new Dog("Bruno");
out("out-classes", "const myDog = new Dog('Bruno')");
out("out-classes", "myDog.speak()         => " + myDog.speak());
out("out-classes", "myDog.fetch('ball')   => " + myDog.fetch("ball"));
out("out-classes", "myDog instanceof Dog    => " + (myDog instanceof Dog));
out("out-classes", "myDog instanceof Animal => " + (myDog instanceof Animal));

// ============================================================
// Constructors
// ============================================================

class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
    this.txList = [];
  }
  deposit(amount) { this.balance += amount; this.txList.push("+" + amount); }
  getBalance() { return `${this.owner}'s balance: Rs.${this.balance}`; }
}
code("out-constructors", "class BankAccount { constructor(owner, balance = 0) { ... } }");
gap("out-constructors");
const acct = new BankAccount("Meena", 1000);
out("out-constructors", "new BankAccount('Meena', 1000)");
out("out-constructors", "acct.owner   => " + acct.owner);
out("out-constructors", "acct.balance => " + acct.balance);
acct.deposit(500);
out("out-constructors", "acct.deposit(500)");
out("out-constructors", "acct.getBalance() => " + acct.getBalance());

// ============================================================
// Methods
// ============================================================

class Rectangle {
  constructor(w, h) { this.w = w; this.h = h; }
  area() { return this.w * this.h; }
  perimeter() { return 2 * (this.w + this.h); }
  isSquare() { return this.w === this.h; }
  toString() { return `Rectangle(${this.w} x ${this.h})`; }
  static create(w, h) { return new Rectangle(w, h); }
}
code("out-methods", "class Rectangle - area(), perimeter(), isSquare(), toString()");
gap("out-methods");
const rect = new Rectangle(8, 5);
out("out-methods", "rect.area()       => " + rect.area());
out("out-methods", "rect.perimeter()  => " + rect.perimeter());
out("out-methods", "rect.isSquare()   => " + rect.isSquare());
out("out-methods", "rect.toString()   => " + rect.toString());
gap("out-methods");
cmt("out-methods", "// Static methods - belong to the class, not instances");
const rect2 = Rectangle.create(6, 6);
out("out-methods", "Rectangle.create(6, 6).isSquare() => " + rect2.isSquare());

// ============================================================
// Variable Scopes (Global, Function, Block)
// ============================================================

const globalMsg = "I am global - accessible everywhere";
cmt("out-scope", "// GLOBAL SCOPE");
out("out-scope", globalMsg);
gap("out-scope");
cmt("out-scope", "// FUNCTION SCOPE - var confined to function");
function scopeDemo() {
  var fnOnly = "I only exist inside this function";
  return fnOnly;
}
out("out-scope", "fnOnly inside function  => " + scopeDemo());
code("out-scope", "fnOnly outside function => ReferenceError");
gap("out-scope");
cmt("out-scope", "// BLOCK SCOPE - let/const confined to {}");
{
  let blockLetVar = "block-scoped let";
  const blockConstVar = "block-scoped const";
  out("out-scope", "Inside block - blockLetVar   => " + blockLetVar);
  out("out-scope", "Inside block - blockConstVar => " + blockConstVar);
}
code("out-scope", "Outside block - blockLetVar   => ReferenceError");
code("out-scope", "Outside block - blockConstVar => ReferenceError");
gap("out-scope");
cmt("out-scope", "// var leaks out of if/for blocks - avoid this");
if (true) { var leakedVar = "I leaked out of the if block"; }
out("out-scope", "leakedVar (var inside if) => " + leakedVar);

// ============================================================
// Hoisting
// ============================================================

cmt("out-hoisting", "// Function declarations are fully hoisted");
out("out-hoisting", "hoistedFn() called BEFORE definition => " + hoistedFn());
function hoistedFn() { return "I work even before my definition!"; }
code("out-hoisting", "function hoistedFn() { ... }  <- defined after call above");
gap("out-hoisting");
cmt("out-hoisting", "// var is hoisted but initialised as undefined");
code("out-hoisting", "console.log(hoistedVar)  => undefined (no error)");
code("out-hoisting", "var hoistedVar = 'value'");
gap("out-hoisting");
cmt("out-hoisting", "// let and const - hoisted but NOT initialised");
code("out-hoisting", "console.log(notReady)  => ReferenceError");
code("out-hoisting", "let notReady = 'value'");
gap("out-hoisting");
out("out-hoisting", "Rule: declare before use, prefer const/let over var");

// ============================================================
// Closures
// ============================================================

cmt("out-closures", "// A closure remembers variables from its outer scope");
gap("out-closures");
function makeCounter(startVal) {
  let tally = startVal;
  return {
    increment() { tally++; return tally; },
    decrement() { tally--; return tally; },
    value() { return tally; }
  };
}
code("out-closures", "function makeCounter(startVal) { let tally = startVal; return { increment, decrement, value } }");
gap("out-closures");
const ctrA = makeCounter(10);
out("out-closures", "const ctrA = makeCounter(10)");
out("out-closures", "ctrA.increment() => " + ctrA.increment());
out("out-closures", "ctrA.increment() => " + ctrA.increment());
out("out-closures", "ctrA.decrement() => " + ctrA.decrement());
gap("out-closures");
cmt("out-closures", "// Each call creates its own independent closure");
const ctrB = makeCounter(100);
ctrA.increment();
ctrB.increment();
out("out-closures", "ctrA.value() => " + ctrA.value() + "  (independent from ctrB)");
out("out-closures", "ctrB.value() => " + ctrB.value() + "  (independent from ctrA)");

// ============================================================
// Spread and Rest Operators
// ============================================================

cmt("out-spread-rest", "// SPREAD (...) - expand array/object into individual items");
gap("out-spread-rest");
const arrX = [1, 2, 3];
const arrY = [4, 5, 6];
out("out-spread-rest", "[...arrX, ...arrY]     => " + JSON.stringify([...arrX, ...arrY]));
const baseObj = { a: 1, b: 2 };
out("out-spread-rest", "{ ...baseObj, c: 3 }   => " + JSON.stringify({ ...baseObj, c: 3 }));
const arrCopy = [...arrX];
arrCopy.push(99);
out("out-spread-rest", "copy = [...arrX]; copy.push(99) => copy: " + JSON.stringify(arrCopy) + ", original: " + JSON.stringify(arrX));
gap("out-spread-rest");
cmt("out-spread-rest", "// REST (...) - collect remaining args into an array");
gap("out-spread-rest");
function sumAll(...numbers) { return numbers.reduce((acc, n) => acc + n, 0); }
code("out-spread-rest", "function sumAll(...numbers) { return numbers.reduce(...) }");
out("out-spread-rest", "sumAll(1, 2, 3)         => " + sumAll(1, 2, 3));
out("out-spread-rest", "sumAll(10, 20, 30, 40)  => " + sumAll(10, 20, 30, 40));
function headAndTail(first, ...rest) { return { first, rest }; }
const ht = headAndTail("a", "b", "c", "d");
out("out-spread-rest", "headAndTail('a','b','c','d') => first: " + ht.first + ", rest: " + JSON.stringify(ht.rest));

// ============================================================
// Destructuring (Arrays and Objects)
// ============================================================

cmt("out-destructuring", "// ARRAY DESTRUCTURING - extract by position");
gap("out-destructuring");
const rgbArr = [255, 128, 0];
const [redCh, greenCh, blueCh] = rgbArr;
code("out-destructuring", "const [redCh, greenCh, blueCh] = [255, 128, 0]");
out("out-destructuring", "redCh => " + redCh + ", greenCh => " + greenCh + ", blueCh => " + blueCh);
const [firstLetter, , thirdLetter] = ["a", "b", "c"];
out("out-destructuring", "skip middle: [firstLetter, , thirdLetter] => " + firstLetter + ", " + thirdLetter);
const [headEl, ...tailEls] = [1, 2, 3, 4, 5];
out("out-destructuring", "rest: [headEl, ...tailEls] => head: " + headEl + ", tail: " + JSON.stringify(tailEls));
gap("out-destructuring");
cmt("out-destructuring", "// OBJECT DESTRUCTURING - extract by key name");
gap("out-destructuring");
const studentRec = { name: "Rohan", age: 21, grade: "A", city: "Pune" };
const { name: studentName, age: studentAge, grade } = studentRec;
code("out-destructuring", "const { name: studentName, age: studentAge, grade } = studentRec");
out("out-destructuring", "studentName => " + studentName + ", studentAge => " + studentAge + ", grade => " + grade);
const { country = "India" } = studentRec;
out("out-destructuring", "default: country = 'India' (not in object) => " + country);
gap("out-destructuring");
cmt("out-destructuring", "// Destructuring in function parameters");
function showUser({ name: uName, age: uAge }) { return `${uName} is ${uAge} years old`; }
out("out-destructuring", "showUser(studentRec) => " + showUser(studentRec));

// ============================================================
// Error Handling (try-catch)
// ============================================================

cmt("out-error-handling", "// try-catch - handle errors without crashing");
gap("out-error-handling");
try {
  const parsed = JSON.parse('{"valid": true}');
  out("out-error-handling", "JSON.parse valid string => " + JSON.stringify(parsed));
} catch (e) {
  out("out-error-handling", "Error: " + e.message);
}
gap("out-error-handling");
try {
  JSON.parse("not valid json {{");
} catch (e) {
  out("out-error-handling", "JSON.parse invalid => caught: " + e.message.substring(0, 40));
}
gap("out-error-handling");
cmt("out-error-handling", "// finally - always runs");
function riskyOp(shouldFail) {
  try {
    if (shouldFail) throw new Error("Something went wrong");
    return "success";
  } catch (e) {
    return "caught: " + e.message;
  } finally {
    // cleanup always runs here
  }
}
out("out-error-handling", "riskyOp(false) => " + riskyOp(false));
out("out-error-handling", "riskyOp(true)  => " + riskyOp(true));
gap("out-error-handling");
cmt("out-error-handling", "// Throw custom errors");
function safeDivide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed");
  return a / b;
}
try { safeDivide(10, 0); } catch (e) { out("out-error-handling", "safeDivide(10, 0) => " + e.message); }
out("out-error-handling", "safeDivide(10, 2) => " + safeDivide(10, 2));

// ============================================================
// DOM Structure
// ============================================================

cmt("out-dom-structure", "// The DOM is a live tree - every HTML tag is a node");
gap("out-dom-structure");
out("out-dom-structure", "document.title             => " + document.title);
out("out-dom-structure", "document.body.tagName      => " + document.body.tagName);
out("out-dom-structure", "document.children[0].tagName => " + document.children[0].tagName);
gap("out-dom-structure");
cmt("out-dom-structure", "// Node types");
out("out-dom-structure", "document.nodeType          => " + document.nodeType + "  (9 = Document)");
out("out-dom-structure", "document.body.nodeType     => " + document.body.nodeType + "  (1 = Element)");
out("out-dom-structure", "document.body.childNodes[0].nodeType => " + document.body.childNodes[0].nodeType + "  (3 = Text)");

// ============================================================
// Selecting Elements from the DOM
// ============================================================

cmt("out-selecting", "// getElementById - select one element by its unique id");
const selectTarget = document.getElementById("demo-select-target");
out("out-selecting", "getElementById('demo-select-target') found: " + (selectTarget !== null));
out("out-selecting", "selectTarget.tagName => " + selectTarget.tagName);
gap("out-selecting");
cmt("out-selecting", "// querySelector - first match of any CSS selector");
const firstH2 = document.querySelector("h2");
out("out-selecting", "querySelector('h2') => " + firstH2.textContent.trim().substring(0, 28) + "...");
gap("out-selecting");
cmt("out-selecting", "// querySelectorAll - all matches as a NodeList");
const allSections = document.querySelectorAll("section");
out("out-selecting", "querySelectorAll('section').length => " + allSections.length + " sections on this page");
gap("out-selecting");
cmt("out-selecting", "// Highlight the target element to prove we selected it");
selectTarget.style.outline = "3px solid #f59e0b";
selectTarget.style.outlineOffset = "2px";
out("out-selecting", "selectTarget.style.outline = '3px solid orange' => see orange outline above");

// ============================================================
// DOM Manipulation - innerHTML, textContent, createElement
// ============================================================

const manipEl = document.getElementById("dom-manip-target");
cmt("out-dom-manip", "// textContent - sets plain text (safe, no HTML parsing)");
manipEl.textContent = "Changed with textContent";
out("out-dom-manip", "element.textContent = 'Changed with textContent'  => see above");
gap("out-dom-manip");
cmt("out-dom-manip", "// innerHTML - sets HTML markup");
manipEl.innerHTML = "Updated with <strong>innerHTML</strong> - bold works here";
out("out-dom-manip", "element.innerHTML = '...with <strong>bold</strong>'  => see above");
gap("out-dom-manip");
cmt("out-dom-manip", "// createElement + appendChild - build and insert new element");
const newNode = document.createElement("div");
newNode.textContent = "I was created with createElement and appended";
newNode.style.cssText = "background:#ecfdf5;padding:0.3rem 0.6rem;border-radius:4px;margin-top:0.4rem;font-size:0.9rem;";
manipEl.appendChild(newNode);
out("out-dom-manip", "createElement('div') + appendChild => new div appeared above");

// ============================================================
// classList (add, remove, toggle)
// ============================================================

const clEl = document.getElementById("classlist-target");
cmt("out-classlist", "// classList.add - adds a CSS class to the element");
clEl.classList.add("highlight-added");
clEl.style.background = "#fef9c3";
clEl.style.borderColor = "#f59e0b";
out("out-classlist", "classList.add('highlight-added') => styling applied above");
gap("out-classlist");
cmt("out-classlist", "// classList.remove - removes a CSS class");
setTimeout(() => {
  clEl.classList.remove("highlight-added");
  clEl.style.background = "";
  clEl.style.borderColor = "#ccc";
}, 1500);
out("out-classlist", "classList.remove fires after 1.5s => border returns to normal");
gap("out-classlist");
cmt("out-classlist", "// classList.toggle - adds if absent, removes if present");
clEl.addEventListener("click", () => {
  const isOn = clEl.classList.toggle("active-highlight");
  clEl.style.background = isOn ? "#bbf7d0" : "";
  clEl.style.borderColor = isOn ? "#16a34a" : "#ccc";
});
out("out-classlist", "classList.toggle on click => click the box above");
gap("out-classlist");
cmt("out-classlist", "// classList.contains - check if a class is present");
out("out-classlist", "classList.contains('highlight-added') => " + clEl.classList.contains("highlight-added"));

// ============================================================
// setAttribute, getAttribute
// ============================================================

const attrEl = document.getElementById("attr-target");
cmt("out-attributes", "// getAttribute - read current attribute value");
out("out-attributes", "getAttribute('href')  => " + attrEl.getAttribute("href"));
gap("out-attributes");
cmt("out-attributes", "// setAttribute - set or update any attribute");
attrEl.setAttribute("href", "https://developer.mozilla.org");
attrEl.setAttribute("target", "_blank");
attrEl.textContent = "Now links to MDN (href updated)";
out("out-attributes", "setAttribute('href', 'https://developer.mozilla.org')");
out("out-attributes", "getAttribute('href') now => " + attrEl.getAttribute("href"));
gap("out-attributes");
cmt("out-attributes", "// data-* attributes - custom attributes for JS hooks");
attrEl.setAttribute("data-id", "42");
out("out-attributes", "setAttribute('data-id', '42')");
out("out-attributes", "getAttribute('data-id')   => " + attrEl.getAttribute("data-id"));
out("out-attributes", "element.dataset.id        => " + attrEl.dataset.id + "  (shorthand)");

// ============================================================
// Traversing the DOM
// ============================================================

const midItem = document.getElementById("traverse-middle");
cmt("out-traversing", "// Navigate from a known element to its relatives");
gap("out-traversing");
out("out-traversing", "midItem.textContent                          => '" + midItem.textContent + "'");
out("out-traversing", "midItem.parentElement.tagName                => " + midItem.parentElement.tagName);
out("out-traversing", "midItem.previousElementSibling.textContent   => '" + midItem.previousElementSibling?.textContent + "'");
out("out-traversing", "midItem.nextElementSibling.textContent       => '" + midItem.nextElementSibling?.textContent + "'");
gap("out-traversing");
const traverseList = document.getElementById("traverse-list");
out("out-traversing", "list.children.length                  => " + traverseList.children.length);
out("out-traversing", "list.firstElementChild.textContent    => '" + traverseList.firstElementChild.textContent + "'");
out("out-traversing", "list.lastElementChild.textContent     => '" + traverseList.lastElementChild.textContent + "'");
gap("out-traversing");
cmt("out-traversing", "// Color-code siblings to show traversal visually");
midItem.style.background = "#fef08a";
midItem.previousElementSibling.style.background = "#bbf7d0";
midItem.nextElementSibling.style.background = "#fecaca";
out("out-traversing", "previous=green, current=yellow, next=red => see list above");

// ============================================================
// Events and Event Listeners
// ============================================================

const evBtn = document.getElementById("event-btn");
let evClickCount = 0;
cmt("out-events", "// addEventListener(eventType, handler)");
code("out-events", "evBtn.addEventListener('click', function() { ... })");
gap("out-events");
evBtn.addEventListener("click", function () {
  evClickCount++;
  const line = document.createElement("div");
  line.textContent = "=> click #" + evClickCount + " at " + new Date().toLocaleTimeString();
  line.style.color = "#ce9178";
  document.getElementById("out-events").appendChild(line);
});
out("out-events", "Handler attached - click the button above");
gap("out-events");
cmt("out-events", "// Common events: click, dblclick, mouseover, keydown, keyup, submit, change, load, resize");

// ============================================================
// Event Object
// ============================================================

const evInput = document.getElementById("event-obj-input");
cmt("out-event-object", "// The event object (e) is passed automatically to every handler");
code("out-event-object", "evInput.addEventListener('keyup', (e) => { ... })");
gap("out-event-object");
evInput.addEventListener("keyup", function (e) {
  const el = document.getElementById("out-event-object");
  while (el.children.length > 1) el.removeChild(el.lastChild);
  [
    "e.type         => " + e.type,
    "e.key          => " + e.key,
    "e.keyCode      => " + e.keyCode,
    "e.target.value => '" + e.target.value + "'",
    "e.target.tagName => " + e.target.tagName,
  ].forEach(text => {
    const d = document.createElement("div");
    d.textContent = "=> " + text;
    d.style.color = "#ce9178";
    el.appendChild(d);
  });
});
out("out-event-object", "Type in the input above to inspect the event object live");

// ============================================================
// Event Bubbling and Capturing
// ============================================================

const outerEl = document.getElementById("bubble-outer");
const innerEl = document.getElementById("bubble-inner");
let bubbleLog = 0;
cmt("out-bubbling", "// Bubbling - event travels from target UP to document");
gap("out-bubbling");
code("out-bubbling", "innerEl.addEventListener('click', handler)  <- fires first");
code("out-bubbling", "outerEl.addEventListener('click', handler)  <- fires second (bubbles up)");
gap("out-bubbling");
function logBubbleEvent(source) {
  bubbleLog++;
  const d = document.createElement("div");
  d.textContent = "=> [" + bubbleLog + "] reached: " + source;
  d.style.color = "#ce9178";
  document.getElementById("out-bubbling").appendChild(d);
}
innerEl.addEventListener("click", (e) => { e.stopPropagation(); logBubbleEvent("INNER div - stopPropagation called, won't reach OUTER"); });
outerEl.addEventListener("click", () => logBubbleEvent("OUTER div"));
out("out-bubbling", "Click INNER div => only inner fires (stopPropagation blocks bubbling)");
out("out-bubbling", "Click OUTER div => outer fires normally");
gap("out-bubbling");
cmt("out-bubbling", "// Remove stopPropagation to see bubbling: both inner and outer would fire");

// ============================================================
// JSON (JavaScript Object Notation)
// ============================================================

cmt("out-json", "// JSON.stringify() - convert JS object to JSON string");
const jsObj = { name: "Priya", age: 27, skills: ["HTML", "CSS", "JS"], active: true };
code("out-json", "const jsObj = { name: 'Priya', age: 27, skills: [...], active: true }");
const jsonStr = JSON.stringify(jsObj);
out("out-json", "JSON.stringify(jsObj) => " + jsonStr);
gap("out-json");
cmt("out-json", "// JSON.parse() - convert JSON string back to JS object");
const parsedObj = JSON.parse(jsonStr);
out("out-json", "JSON.parse(jsonStr).name   => " + parsedObj.name);
out("out-json", "JSON.parse(jsonStr).skills => " + JSON.stringify(parsedObj.skills));
gap("out-json");
cmt("out-json", "// Pretty print with indentation");
code("out-json", "JSON.stringify(jsObj, null, 2)");
out("out-json", JSON.stringify(jsObj, null, 2));

// ============================================================
// Promises
// ============================================================

cmt("out-promises", "// Promise: pending => resolved or rejected");
gap("out-promises");
const resolvedPromise = new Promise((resolve) => setTimeout(() => resolve("Data loaded!"), 600));
const rejectedPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Network timeout")), 600));
code("out-promises", "new Promise((resolve, reject) => { setTimeout(() => resolve('Data loaded!'), 600) })");
gap("out-promises");
resolvedPromise
  .then(data => out("out-promises", ".then() fired  => " + data))
  .catch(err => out("out-promises", ".catch() fired => " + err.message));
rejectedPromise
  .then(data => out("out-promises", ".then() fired  => " + data))
  .catch(err => out("out-promises", ".catch() fired => " + err.message));
out("out-promises", "Both promises pending... results appear in ~600ms");
gap("out-promises");
cmt("out-promises", "// Promise.all - wait for multiple promises");
code("out-promises", "Promise.all([p1, p2, p3]).then(([r1, r2, r3]) => ...)");

// ============================================================
// Fetch API
// ============================================================

const fetchBtn = document.getElementById("fetch-btn");
cmt("out-fetch", "// fetch() returns a Promise - chain .then() for response");
gap("out-fetch");
code("out-fetch", "fetch('https://jsonplaceholder.typicode.com/todos/1')");
code("out-fetch", "  .then(response => response.json())");
code("out-fetch", "  .then(data => { ... })");
code("out-fetch", "  .catch(err => { ... })");
gap("out-fetch");
fetchBtn.addEventListener("click", function () {
  const el = document.getElementById("out-fetch");
  const loading = document.createElement("div");
  loading.textContent = "=> Fetching...";
  loading.style.color = "#9cdcfe";
  el.appendChild(loading);
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
      const d = document.createElement("div");
      d.textContent = "=> response.status => " + response.status + " " + response.statusText;
      d.style.color = "#6a9955";
      el.appendChild(d);
      return response.json();
    })
    .then(data => {
      el.removeChild(loading);
      const d = document.createElement("div");
      d.textContent = "=> data => " + JSON.stringify(data);
      d.style.color = "#ce9178";
      el.appendChild(d);
    })
    .catch(err => {
      el.removeChild(loading);
      const d = document.createElement("div");
      d.textContent = "=> Error: " + err.message;
      d.style.color = "#f87171";
      el.appendChild(d);
    });
});

// ============================================================
// async/await Keywords
// ============================================================

const asyncBtn = document.getElementById("async-btn");
cmt("out-async-await", "// async function always returns a Promise");
cmt("out-async-await", "// await pauses until the Promise resolves");
gap("out-async-await");
code("out-async-await", "async function loadUser(id) {");
code("out-async-await", "  const response = await fetch(`/users/${id}`)");
code("out-async-await", "  const data = await response.json()");
code("out-async-await", "  return data");
code("out-async-await", "}");
gap("out-async-await");
asyncBtn.addEventListener("click", async function () {
  const el = document.getElementById("out-async-await");
  const loading = document.createElement("div");
  loading.textContent = "=> awaiting fetch...";
  loading.style.color = "#9cdcfe";
  el.appendChild(loading);
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const userData = await response.json();
    el.removeChild(loading);
    [
      "await resolved",
      "user.name         => " + userData.name,
      "user.email        => " + userData.email,
      "user.company.name => " + userData.company.name,
    ].forEach(text => {
      const d = document.createElement("div");
      d.textContent = "=> " + text;
      d.style.color = "#ce9178";
      el.appendChild(d);
    });
  } catch (err) {
    el.removeChild(loading);
    const d = document.createElement("div");
    d.textContent = "=> Error: " + err.message;
    d.style.color = "#f87171";
    el.appendChild(d);
  }
});

// ============================================================
// Handling API Responses
// ============================================================

const apiBtn = document.getElementById("api-btn");
cmt("out-api-responses", "// Complete pattern: status check + parse + error handling");
gap("out-api-responses");
code("out-api-responses", "async function fetchData(url) {");
code("out-api-responses", "  try {");
code("out-api-responses", "    const res = await fetch(url)");
code("out-api-responses", "    if (!res.ok) throw new Error(`HTTP ${res.status}`)");
code("out-api-responses", "    const data = await res.json()");
code("out-api-responses", "    return data");
code("out-api-responses", "  } catch (err) {");
code("out-api-responses", "    console.error('Fetch failed:', err)");
code("out-api-responses", "  }");
code("out-api-responses", "}");
gap("out-api-responses");
apiBtn.addEventListener("click", async function () {
  const el = document.getElementById("out-api-responses");
  async function fetchData(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("HTTP error: " + res.status);
    return res.json();
  }
  const loading = document.createElement("div");
  loading.textContent = "=> Fetching posts...";
  loading.style.color = "#9cdcfe";
  el.appendChild(loading);
  try {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts?_limit=3");
    el.removeChild(loading);
    const hdr = document.createElement("div");
    hdr.textContent = "=> Received " + posts.length + " posts:";
    hdr.style.color = "#6a9955";
    el.appendChild(hdr);
    posts.forEach((post, i) => {
      const d = document.createElement("div");
      d.textContent = "=> [" + (i + 1) + "] " + post.title.substring(0, 55) + "...";
      d.style.color = "#ce9178";
      el.appendChild(d);
    });
  } catch (err) {
    el.removeChild(loading);
    const d = document.createElement("div");
    d.textContent = "=> Caught: " + err.message;
    d.style.color = "#f87171";
    el.appendChild(d);
  }
});