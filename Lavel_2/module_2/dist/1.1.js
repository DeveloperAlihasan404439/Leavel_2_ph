"use strict";
let assertion;
assertion = "hello developer";
assertion = 22;
assertion.valueOf;
console.log(assertion);
const assertionFunction = (data) => {
    if (typeof data === "string") {
        const value = `return the string value : ${data}`;
        return value;
    }
    if (typeof data === "number") {
        const value = `return the plus value : ${data + 100}`;
        return value;
    }
};
const result = assertionFunction("hello typescript");
const result2 = assertionFunction(100);
console.log(result);
console.log(result2);
let asser;
asser = "hello word";
asser.charAt(0);
