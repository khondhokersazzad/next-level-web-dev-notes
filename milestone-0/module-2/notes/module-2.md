# Module 1: Mindset Over Syntax

---

## What I Learned

- map vs object
-

---

## Key Concepts

### Object VS Map

Concept: Obj and Map both are key-value pair data structure.

Map

- key can be of any types
- Order keys in insertion order
- It is optimized for large dataset,frequent addition/removals
- map has built in features

```js
map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);
map.size;
map.clear();
```

---


### Array

```js
const arr = [1, 2, 3];
```

Some Methods

- Filter 
- Sort
- map
- Spread
- Flat
  - Used for Combining nested array into One single array
- Some 
  - Checks if any one element pass the checks , if it is then  it stops the checks.
  - Works for validation, search, permissions.
  ```js
  const roles = ["viewer", "editor"];
  const canEdit = roles.some(role => role === "editor");
  ```
