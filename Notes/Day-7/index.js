// ===== 1. Creating a regex object ======

// const regex = /pattern/;

// console.log(regex);

//=========================

// ========== 2. Matching literal text =======
// const regex = /hello/;
// const result = regex.test("hello world"); // returns true
// console.log(result);

//==============================

// ==== 3. Matching character sets ======

// const regex = /[abc]/;
// const result1 = regex.test("a"); // returns true
// const result2 = regex.test("d"); // returns false
// console.log(result1);
// console.log(result2);

// ==== OR =========
// const regex = /[0-9]/;
// const result1 = regex.test("5"); // returns true
// const result2 = regex.test("x"); // returns false
// console.log(result1);
// console.log(result2);
//==============================

//===== 4. Matching metacharacters===========

// const regex = /h.t/;
// const result1 = regex.test("hot"); // returns true
// const result2 = regex.test("hat"); // returns true
// const result3 = regex.test("h\nt"); // returns false
// const result4 = regex.test("hut"); // returns true
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

//========== OR =============

// const regex = /^hello$/;
// const result1 = regex.test("hello"); // returns true
// const result2 = regex.test("hello world"); // returns false
// console.log(result1);
// console.log(result2);

// ========================

// ====== 5. Matching quantifiers======

// const regex = /ab*c/;
// const result1 = regex.test("ac"); // returns true
// const result2 = regex.test("abc"); // returns true
// const result3 = regex.test("abbbc"); // returns true
// const result4 = regex.test("abxyc"); // returns false

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// =========================

// ======= 6. Matching with anchors ========

// const regex = /\bhello\b/;
// const result1 = regex.test("hello"); // returns true
// const result2 = regex.test("hello world"); // returns true
// const result3 = regex.test("sayhello"); // returns false
// console.log(result1);
// console.log(result2);
// console.log(result3);

// =====================

// ==== 7. Capturing groups ======

// const regex = /(\d{3})-(\d{3})-(\d{4})/;
// const input = "My phone number is 123-456-7890";
// const match = input.match(regex);
// console.log(match); // returns ["123-456-7890", "123", "456", "7890"]

//================================
// ===== 8. Non-capturing groups =====

// const regex = /(?:https?:\/\/)?(www\.)?google\.com/;
// const result1 = regex.test("http://www.google.com"); // returns true
// const result2 = regex.test("https://google.com"); // returns true
// const result3 = regex.test("www.google.com"); // returns true

// console.log(result1);
// console.log(result2);
// console.log(result3);

//===============================
// =====  9. Lookahead and lookbehind assertions =====

// // Positive lookahead assertion
// const regex1 = /foo(?=bar)/;
// const result1 = regex1.test("foobar"); // returns true
// const result2 = regex1.test("foobaz"); // returns false

// // Negative lookahead assertion
// const regex2 = /foo(?!bar)/;
// const result3 = regex2.test("foobar"); // returns false
// const result4 = regex2.test("foobaz"); // returns true

// // Positive lookbehind assertion
// const regex3 = /(?<=foo)bar/;
// const result5 = regex3.test("foobar"); // returns true
// const result6 = regex3.test("bazbar"); // returns false

// // Negative lookbehind assertion
// const regex4 = /(?<!foo)bar/;
// const result7 = regex4.test("foobar"); // returns false
// const result8 = regex4.test("bazbar"); // returns true

// console.log("result1 : " + result1);
// console.log("result2 : " + result2);
// console.log("result3 : " + result3);
// console.log("result4 : " + result4);
// console.log("result5 : " + result5);
// console.log("result6 : " + result6);
// console.log("result7 : " + result7);
// console.log("result8 : " + result8);

// =========================
