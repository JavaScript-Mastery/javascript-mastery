// ==========================================
// 1. String: funStr(name, surname);
// ==========================================
export function funStr(name, surname) {
  console.log(name); // Ajay
  console.log(surname); // Dhangar
  console.log(name + " " + surname); // Ajay Dhangar
}
// ==========================================
// 2. Numbers: funNum(num1, num2);
// ==========================================
export function funNum(num1, num2) {
  console.log("num1: " + num1); // 5
  console.log("num2: " + num2); // 10
  console.log("num1 + num2: " + (num1 + num2)); // 15
  console.log("num2 * num1: " + num2 * num1); // 50
  console.log("num2 / num1: " + num2 / num1); // 2
  console.log("num2 % num1: " + (num2 % num1)); // 0
  console.log("num2 ** num1: " + num2 ** num1); // 100000
}

// ==========================================
// 3. BigInt: funBigInt(Bigint);
// ==========================================

export function funBigInt(Bigint, int) {
  console.log(Bigint); // 1234567890123456789n
  console.log(int); // 12345678901234567000
}
// ==========================================
// 4. Boolean: funBool(Bigint);
// ==========================================
export function funBool(a1, a2, b1, b2) {
  console.log(a1); // true
  console.log(a2); // false
  console.log(b1); // 4
  console.log(b2); // 7
  let c1 = b2 < b1; // false
  let c2 = b1 < b2; // true
  console.log(a1 === c1); // false
  console.log(a1 === c2); // true
  console.log(a2 === c1); // true
  console.log(a2 === c2); // false
}
// ==========================================
// 5. Undifine: funUndi(Bigint);
// ==========================================
export function funUndi(x) {
  console.log(x); // undefined
}
// ==========================================
// 6. Null: funNull(Bigint);
// ==========================================
export function funNull(y) {
  console.log(y); // null
}
