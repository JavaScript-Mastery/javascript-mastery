// ==========================================
// 1. (i) Arithmetic Operator:: funArith(n, m);
// ==========================================

export function funArith(n, m) {
  console.log(n + m); // 12
  console.log(n - m); // 2
  console.log(n * m); // 35
  console.log(n ** 2); // 49
  console.log(m ** 2); // 25
  console.log(n % m); // 2
  console.log(n / m); // 1.4
}
export function funAssign(n1, m1) {}
export function funCompa(n1, m1) {}

export function funLogic(n5, m5) {
  console.log(n5 >= 8 && m5 <= 10); // Output: true
  console.log(n5 > 10 || m5 < 8); // Output: false
  console.log(!(n5 == m5)); // Output: true
}
export function funBit(n6, m6) {
  console.log(n6 & m6); // Output: 1
  console.log(n6 | m6); // Output: 7
  console.log(n6 ^ m6); // Output: 6
  console.log(n6 << 1); // Output: 10
  console.log(n6 >> 1); // Output: 2
  console.log(n6 >>> 1); // Output: 2
}
export function funTern() {}
export function funTypeOpe() {}
export function funStrOpe(fName, lName, str) {
  console.log(fName + " " + lName); // Concatenation Operator (+)
  console.log(str.length); // String Length Property (length)
  console.log(str.indexOf("o")); // String indexOf() Method
  console.log(str.lastIndexOf("o")); // String lastIndexOf() Method
  console.log(str.slice(0, 5)); // String slice() Method
  console.log(str.replace("World", "JavaScript")); // String replace() Method
}
