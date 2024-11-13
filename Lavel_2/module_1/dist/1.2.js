"use strict";
{
    const add = (a, b, c = 0) => {
        return a + b + c;
    };
    console.log(add(32, 45));
}
const array1 = ["ali hasan", "Liton islam"];
const array2 = ["milon islam", 'shathi akther'];
array1.push(...array2);

