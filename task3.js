let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let three = 3;
let five = 5;
let sixty = 60;
let ninety = 90;

const firstSort = someNumbers.some(function () {
    return number % three === 0 || number % five === 0 || number % sixty === 0 || number % ninety === 0;
})

function isMultiple(number) {
    return number % three === 0 || number % five === 0 || number % sixty === 0 || number % ninety === 0;
};

const secondSort = someNumbers.some(isMultiple);


// const numbers {
//     three: 3,
//     five: 5,
//     sixty: 60,
//     ninety: 90
// }
