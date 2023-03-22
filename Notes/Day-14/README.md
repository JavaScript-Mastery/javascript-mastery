# Day-14 : Data Structures and Algorithms

## Data Structures

### Arrays: 
Arrays are the most basic data structure in programming. An array is a collection of similar data types that can be accessed using an index. Here is an example code to declare an array and access its elements:

```JavaScript 
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // Output: 1
console.log(arr[1]); // Output: 2
console.log(arr[4]); // Output: 5
```

### Linked List: 

A linked list is a linear data structure in which the elements are not stored at contiguous memory locations. Instead, each element is a separate object, and the elements are linked using pointers. Here is an example code to create a linked list:

```JavaScript 
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
console.log(ll.head.data); // Output: 1
console.log(ll.head.next.data); // Output: 2
console.log(ll.head.next.next.data); // Output: 3
```

### Stacks:

A stack is a linear data structure in which elements can be inserted and deleted only from one end of the stack, called the top. Here is an example code to create a stack:

```JavaScript 
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
```

### Queues:

A queue is a linear data structure in which elements can be inserted at one end and deleted from the other end. The end from which elements are inserted is called the rear, and the end from which elements are deleted is called the front. Here is an example code to create a queue:

```JavaScript 
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length == 0) return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.items.length == 0) return "No elements in Queue";
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2
```

### Trees:

A tree is a non-linear data structure that consists of nodes connected by edges. Each node contains a value and a list of references to its child nodes. Here is an example code to create a binary tree:

```JavaScript 
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

const bst = new BinaryTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
console.log(bst.root.data); // Output: 8
console.log(bst.root.left.data); // Output: 3
console.log(bst.root.right.data); // Output: 10
```

### Graphs: 

A graph is a non-linear data structure that consists of vertices connected by edges. Each vertex represents a node, and each edge represents a relationship between two nodes. Here is an example code to create an undirected graph:

```JavaScript 
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  printGraph() {
    for (let [vertex, edges] of this.adjacencyList) {
      console.log(vertex, "-->", edges.join(", "));
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.printGraph();
// Output:
// A --> B
// B --> A, C
// C --> B
```
<hr />

## Algorithms

### Sorting Algorithms:

Sorting is a process of arranging elements in a particular order. There are various sorting algorithms available, and each has its pros and cons. Here is an example code to implement the bubble sort algorithm:

```JavaScript 
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]
```


### Searching Algorithms: 

Searching is a process of finding a particular element in a given set of elements. There are various searching algorithms available, and each has its pros and cons. Here is an example code to implement the binary search algorithm:

```JavaScript 
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const arr = [11, 12, 22, 25, 34, 64, 90];
console.log(binarySearch(arr, 25)); // Output: 3
console.log(binarySearch(arr, 50)); // Output: -1
```


## Important DSA questions for preparation:

1. Implement a stack using an array and a linked list.
2. Implement a queue using an array and a linked list.
3. Given an array of integers, find the pair of elements that add up to a given sum.
4. Implement a binary search tree and perform various operations like insert, delete, and search.
5. Given a string, find the first non-repeating character.
6. Given a sorted array of integers, create a balanced binary search tree.
7. Given a linked list, reverse it in place.
8. Given a binary tree, print the nodes in a level-wise order.
9. Implement a graph and perform various operations like add vertex, add edge, and print the graph.
10. Given a set of jobs with start and end times, find the maximum number of non-overlapping jobs that can be scheduled.
11. Given a matrix of integers, find the path with the maximum sum from the top left to the bottom right.
12. Implement quicksort algorithm and analyze its time complexity.
13. Implement Dijkstra's algorithm to find the shortest path in a weighted graph.
14. Implement a hash table and perform various operations like add key-value pair, delete key-value pair, and search for a key.
15. Given a string, find the longest palindrome in it.
16. Given a sorted array of integers with duplicates, find the first and last occurrence of a given number.
17. Implement a trie data structure and perform various operations like insert, search, and delete.
18. Given a string, find the length of the longest substring without repeating characters.
19. Implement the breadth-first search algorithm to traverse a graph.
20. Implement a binary heap and perform various operations like insert, delete, and extract minimum.
