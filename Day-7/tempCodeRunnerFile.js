// Positive lookahead assertion
const regex1 = /foo(?=bar)/;
const result1 = regex1.test("foobar"); // returns true
const result2 = regex1.test("foobaz"); // returns false

// Negative lookahead assertion
const regex2 = /foo(?!bar)/;
const result3 = regex2.test("foobar"); // returns false
const result4 = regex2.test("foobaz"); // returns true

// Positive lookbehind assertion
const regex3 = /(?<=foo)bar/;
const result5 = regex3.test("foobar"); // returns true
const result6 = regex3.test("bazbar"); // returns false

// Negative lookbehind assertion
const regex4 = /(?<!foo)bar/;
const result7 = regex4.test("foobar"); // returns false
const result8 = regex4.test("bazbar"); // returns true

console.log("result1 : " + result1);
console.log("result2 : " + result2);
console.log("result3 : " + result3);
console.log("result4 : " + result4);
console.log("result5 : " + result5);
console.log("result6 : " + result6);
console.log("result7 : " + result7);
console.log("result8 : " + result8);
