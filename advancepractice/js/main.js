//
// ==============================================
// import a js file for conecting to our codes
// ==============================================
//
import {
  funStr,
  funNum,
  funBigInt,
  funNull,
  funBool,
  funUndi,
} from "./inro.js";
import {
  funArith,
  funAssign,
  funCompa,
  funBit,
  funLogic,
  funTern,
  funTypeOpe,
  funStrOpe,
} from "./operator.js";

// ==========================================
// first program "Hello World!"
// ==========================================

console.log("Hello World!");

// ==========================================
// DataType in Js
// ==========================================

//  1. String: we are using any string or value with the help of ' ' (single quate) and  " " (double quates) both for strings.

const name = "Ajay";
const surname = "Dhangar";
funStr(name, surname);

//  2. Numbers: we can be used numbers like integer or floating points

let num1 = 5;
let num2 = 10;
funNum(num1, num2);

//  3. BigInt: It can be store a value in a 64 bits

const Bigint = BigInt("12345678901234567890");
const int = 12345678901234567890;
funBigInt(Bigint, int);

//  4. Boolean: we can use in Boolean true or false

const a1 = true;
const a2 = false;
const b1 = 4;
const b2 = 7;

funBool(a1, a2, b1, b2);

//  5. Undefkined: If variable declared but not initialized then seee Undifine in console (it is work on the case of var, let but in the case of const give "caught SyntaxError: Missing initializer in const declaration" this.  )
let x;
funUndi(x);

//  6. Null:
const y = null;
funNull(y);
//  7. Symbol:
//  8. object:

// ==========================================
// 2. Operators in Js
// ==========================================

//  (i) Arithmetic operators - used to perform arithmetic calculations on numeric values.
// Examples include addition(+), subtraction(-), multiplication(*), division(/), and modulo (%).
// OR (+, -, /, *, **, %, ++, --)
let n = 7;
let m = 5;
funArith(n, m);

//  (ii) Assignment operators - used to assign values to variables.
// Examples include equals(=), plus - equals(+=), minus - equals(-=), and so on.
// (=, +=, -+, *=, /=, %=)
let n1 = 7;
let m1 = 5;
funAssign(n1, m1);

//  (iii) Comparisom Operator - used to compare two values and return a Boolean (true/false) value.
// (==, ===, !==, !=, <, <, <=, >=)
let n3 = 7;
let m3 = 5;
let o3 = "5";
funCompa(n3, m3);
//  (iv) String Operator
const fName = "John";
const lName = "Doe";
const str = "Hello World!";
funStrOpe(fName, lName, str);
//  (v) Logic Operator (&&, ||, !)
let n5 = 8;
let m5 = 10;
let o5 = "10";
funLogic(n5, m5);
//  (vi) Bitwise Operator- used to perform bitwise operations on numeric values.
// Examples include AND(&), OR(|), XOR(^), left shift(<<), right shift(>>), and zero - fill right shift(>>>).
let n6 = 5;
let m6 = 3;
let o6 = "5";
funBit(n6, m6);
//  (vii) Ternary Operator

let n7 = 8;
let m7 = 9;
let o7 = "9";
funTern(n7, m7);
//  (viii) Type Operator

let n8 = 5;
let m8 = 8;
let o8 = "8";
funTypeOpe(n8, m8);

//
