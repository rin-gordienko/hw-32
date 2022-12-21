"use strict";
// Написать функцию getDiff ,
// которая будет принимать 2 строки и находить все символы,
// которые различаются в этих строках и также считать их количество.
// Функция должна вернуть объект с 2мя полями amount и array
function getDiff(firstString, secondString) {
    const firstArray = Array.from(firstString);
    const secondArray = Array.from(secondString);
    const result = firstArray
        .filter((letter) => !secondArray.includes(letter))
        .concat(secondArray.filter((letter) => !firstArray.includes(letter)));
    return {
        amount: result.length,
        array: result
    };
    // const a = firstArray.filter((letter) => !secondArray.includes(letter)); // letters in the 1st arr but not the 2nd
    // const b = secondArray.filter((letter) => !firstArray.includes(letter)); // letters in the 2nd but not in the 1st
    // const c = a.concat(b);
    // console.log(a);
    // console.log(b);
}
console.log(getDiff("abc", "abcd")); // { amount: 1, array: ['d'] }
console.log(getDiff("abcd", "cdfe")); // { amount: 4, array: ['a', 'b', 'f', 'e'] }
console.log(getDiff("abc", "wbbcc")); // { amount: 2, array: ['a', 'w'] }
console.log(getDiff("abc", "abc")); // { amount: 0, array: [] }
