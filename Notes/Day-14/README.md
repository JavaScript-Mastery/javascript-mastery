# Day-14 : Data Structures and Algorithms

## What are data structures?

In programming, a data structure is a way of organizing and storing data in memory so that it can be accessed and manipulated efficiently. 
Examples of common data structures include arrays, linked lists, trees, graphs, and hash tables.

Each data structure has its own advantages and disadvantages, depending on the problem you're trying to solve. 
For example, an array is useful for storing a sequence of elements that you want to access quickly by index, whereas a hash table is 
useful for storing key-value pairs that you want to look up quickly by key.

## What are algorithms?

An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. 
In programming, algorithms are often expressed as functions or methods that take one or more inputs and produce one or more outputs.

There are many different types of algorithms, depending on the problem you're trying to solve. 
Some common types of algorithms include sorting algorithms (which put a collection of elements in order), searching algorithms 
(which find a specific element in a collection), and graph algorithms (which traverse or manipulate graphs).

Now that you have a basic understanding of data structures and algorithms, let's look at some specific examples.

### Arrays

An array is a collection of elements, each of which can be accessed by its index (a number that represents its position in the array). 
Here's an example of how to create an array in JavaScript:

```javascript
const myArray = [1, 2, 3, 4, 5];
You can access individual elements of an array using square brackets and the element's index:

javascript
Copy code
console.log(myArray[0]); // Output: 1
console.log(myArray[3]); // Output: 4
```

You can also use methods like push, pop, shift, and unshift to add or remove elements from an array:

```JavaScript 
myArray.push(6); // Adds 6 to the end of the array
myArray.pop(); // Removes the last element from the array (in this case, 6)
myArray.shift(); // Removes the first element from the array (in this case, 1)
myArray.unshift(0); // Adds 0 to the beginning of the array
```

### Linked lists

A linked list is a data structure in which each element (or "node") contains a value and a pointer to the next node in the list. 
Here's an example of how to create a simple linked list in JavaScript:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
```

In this example, we've created three nodes with values of 1, 2, and 3, and linked them together so that the first node (or "head") 
points to the second node, which points to the third node.

You can traverse a linked list by starting at the head and following the next pointers:

```javascript
let currentNode = head;
while (currentNode != null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
```

This code will print out the values of each node in the linked list (in this case, 1, 2, and 3).

### Trees

A tree is a data structure in which each element (or "node") has one or more child nodes, forming a hierarchical structure. 
Here's an example of how to create a binary search tree in JavaScript:
```JavaScript 
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return undefined;
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } 
        currentNode = currentNode.right;
      }
    }
  }
  
  search(value) {
    if (this.root === null) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) return true;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}
```

In this example, we've defined a Node class to represent each node in the binary search tree, and a BinarySearchTree class to manage 
the tree as a whole. The insert method adds a new node to the tree in the appropriate position based on its value (smaller values go to 
the left, larger values go to the right), and the search method checks whether a given value is present in the tree.
