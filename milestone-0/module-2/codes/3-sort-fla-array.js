// Array of numbers
const numbers = [5, 12, 8, 130, 44, 72, 19, 3, 27, 91];

// Array of strings
const fruits = [
  "apple",
  "Banana",
  "cherry",
  "Mango",
  "Orange",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Kiwi",
  "Watermelon",
];

numbers.sort((a, b) => b - a);

console.log(numbers);

fruits.sort((a, b) => a.localeCompare(b));
//sorting gives priority to uppercase, to remove the priority we need to use localCompare so it don't give priority
console.log(fruits);

//Flat array
// flat method combine all the nested array into one array

const nestedArray = [
  [
    // Layer 1
    [
      // Layer 2
      [
        // Layer 3
        "Value A",
        "Value B",
      ],
      [
        // Another branch at Layer 3
        "Value C",
      ],
    ],
  ],
  [
    // Another branch at Layer 1
    [["Value D", "Value E"]],
  ],
];

const flatArray = nestedArray.flat(Infinity);

console.log(flatArray);

const languagesNested = [
  [
    // Layer 1
    [
      
      [
        "JavaScript","Python","Java","JavaScript", 
      ],
      ["C++","Go","Python", // duplicate
      ],
    ],
  ],
  [
    // Another branch at Layer 1
    [
      [
        "Rust",
        "TypeScript",
        "C#",
        "Java", // duplicate
      ],
    ],
  ],
];

const filterLang = [...new Set(languagesNested.flat(Infinity))];

//new Set is used to remove duplicate 
//flat for combining array 
//Spread operator used to convert the set to array 

console.log(filterLang);