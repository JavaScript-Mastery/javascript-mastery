## Day-16 Testing and Debugging

### What is testing and debugging?

Testing is the process of verifying that a program or application functions as intended. 
It involves creating test cases and running them to ensure that the software meets the specified requirements. 
Testing can be done manually or automated using tools such as test frameworks.

Debugging is the process of finding and fixing errors in the code. 
This involves identifying the cause of the problem and making changes to the code to correct it. 
Debugging can be done using tools such as debuggers, console logging, and error messages.

### Types of testing

There are several types of testing that can be performed on software, including:
- **Unit testing:** This involves testing individual units or components of the code to ensure that they function correctly. 
It is usually done by developers using test frameworks such as Jest or Mocha.
- **Integration testing:** This involves testing how different components of the code work together. 
It can be done manually or using tools such as Cypress or Selenium.
- **Functional testing:** This involves testing the application as a whole to ensure that it meets the intended requirements. 
It is usually done manually by testers.
- **Performance testing:** This involves testing the performance of the application under different conditions, such as high traffic 
or heavy load.
- **Security testing:** This involves testing the application for vulnerabilities and ensuring that it meets security standards.

### Basic debugging techniques

When debugging code in JavaScript, there are several techniques that can be used to identify and fix errors:
- **Console logging:** This involves using console.log statements to output information to the console. 
This can help identify where the error is occurring and what the values of variables are at different points in the code.

- **Debuggers:** This involves using a debugger to step through the code line by line and identify where the error is occurring.

- **Error messages:** JavaScript will often provide error messages when something goes wrong. 
These messages can provide useful information about what the error is and where it is occurring.

### Basic testing techniques

When testing code in JavaScript, there are several techniques that can be used to ensure that the code is functioning correctly:

- **Test cases:** This involves creating test cases that cover all possible scenarios that the code should handle. 
This can include edge cases, invalid input, and unexpected behavior.

- **Test frameworks:** This involves using test frameworks such as Jest or Mocha to automate the testing process. 
These frameworks can run a suite of test cases and provide feedback on which cases passed and which failed.

- **Code coverage:** This involves measuring how much of the code is covered by the test cases. 
A high code coverage percentage indicates that the tests are comprehensive and cover all parts of the code.

### Example code

Here's an example of how to use console logging and a test framework to test and debug a simple JavaScript function:

```JavaScript 
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // should output 5

describe("add function", () => {
  it("should add two numbers together", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should handle negative numbers", () => {
    expect(add(-2, 3)).toBe(1);
  });
});
```

In this example, the add function adds two numbers together. 
We use console logging to verify that it works correctly for the inputs 2 and 3. 
We then use a test framework (Jest) to create two test cases that cover different scenarios. 
The first case verifies that the function correctly adds two positive numbers together, and the second case verifies that 
it correctly handles
