

## What are Regular Expressions?

Regular expressions, also known as "regex" or "regexp," are patterns used to match and manipulate text. They are powerful tools that allow you to search for specific patterns in strings, replace text, and extract information.

In JavaScript, regular expressions are represented by the `RegExp` object, which has methods for matching and manipulating strings.

## Creating Regular Expressions

In JavaScript, you can create a regular expression using the `RegExp` constructor or by using a regular expression literal, which is enclosed in forward slashes `/`.

For example, to create a regular expression that matches the word "hello" in a string, you can use:

```js
// Using RegExp constructor
const regex = new RegExp("hello");

// Using regular expression literal
const regex = /hello/;
```

## Using Regular Expressions to Match Patterns

Once you have created a regular expression, you can use it to match patterns in strings using the `test()` method or the `match()` method.

The `test()` method returns `true` if the regular expression matches the string, and `false` otherwise. For example:

```js
const regex = /hello/;
const str = "hello world";

if (regex.test(str)) {
  console.log("Match found!");
} else {
  console.log("No match found.");
}
```

The `match()` method returns an array of all the matches found in the string. For example:

```js
const regex = /hello/;
const str = "hello world";

const matches = str.match(regex);
console.log(matches); // ["hello"]
```

Regular expressions can also use metacharacters to match more complex patterns. Here are some examples of commonly used metacharacters:

- `.` - Matches any character except a newline.
- `*` - Matches zero or more occurrences of the preceding character or group.
- `+` - Matches one or more occurrences of the preceding character or group.
- `?` - Matches zero or one occurrence of the preceding character or group.
- `^` - Matches the start of the string.
- `$` - Matches the end of the string.
- `[]` - Matches any one of the characters within the brackets.
- `()` - Groups characters together to create a subpattern.

For example, to match a string that starts with a vowel and ends with a consonant, you can use:

```javascript
const regex = /^[aeiou].*[bcdfghjklmnpqrstvwxyz]$/;
const str = "apple";

if (regex.test(str)) {
  console.log("Match found!");
} else {
  console.log("No match found.");
}
```

In this example, the `^` character matches the start of the string, `[aeiou]` matches any one of the vowels, `.*` matches any number of characters in between, and `[bcdfghjklmnpqrstvwxyz]` matches any one of the consonants, and the `$` character matches the end of the string.

## Conclusion
Regular expressions are powerful tools for working with text in JavaScript. By learning how to create and use regular expressions, you can become more proficient at manipulating strings and extracting information from them. In the next lesson, we will cover advanced topics related to regular expressions, such as capturing groups and lookaheads.
