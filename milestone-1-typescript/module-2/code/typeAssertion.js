"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kgTOgmConv = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value, value2] = input.split(" ");
        console.log(value2);
        return `Converted Output is ${Number(value) * 1000}`;
    }
};
const result1 = kgTOgmConv(2); // Type assertion
const result2 = kgTOgmConv('2 kg'); //Type assertion
console.log(kgTOgmConv('2 kg'));
//# sourceMappingURL=typeAssertion.js.map