# Module 1: Mindset Over Syntax

---

##  What I Learned
- Critical thinking in programming
- Data Structure
- Algorithm
- Big-O Notation
- Big-O basics
- Arrays & Set

---

##  Key Concepts

### Critical thinking
Concept: Critical thinking is something not accepting as it is rather it's about asking question about that particular things.

Elements of CT
- Knowing about available tools
- Properly decompose problems into pieces
- Asking effective questions about the project
- Watching the big picture

---

### DATA STRUCTURE
Concept: DS is the process of arranging data so that app funs fast and efficient;

### Algorithm
Concept: Algorithm is the step by step instruction to solve any problem;

### Big O Notation
Concept: Big O Notation describes how the time or space complexity of an algorithm grows as the input size increases, focusing on the worst-case scenario.

## Order of time - tells us the growth rate of an algorithm’s running time .

O(1) → Runs in constant time
```js
let x = arr[5];
```
O(n) → Time increases directly linearly with the size of input.
```js
for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}
```

O(n²) → Time increases rapidly because of nested iterations.
```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

O(n!) → Time grows extremely fast due to all possible permutations.(Worst Algorithm possible)
```js
function permute(arr) {
  if (arr.length === 0) return [[]];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let rest = permute(arr.slice(0, i).concat(arr.slice(i + 1)));
    for (let r of rest) {
      result.push([arr[i], ...r]);
    }
  }
  return result;
}
```
O(log n) → Time grows slowly as input size increases (reduces problem each step).
O(n log n) → Time grows slightly faster than linear due to divide-and-combine steps.
### Array
```js
const arr = [1, 2, 3];
