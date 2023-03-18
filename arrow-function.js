/* function add(num1, num2) {
    return num1 + num2;

} */


// const add2 = function add(num1, num2) {
//     return num1 + num2;
// }


// const add3 = function (num1, num2) {
//     return num1 + num2;
// }


//  =>   এইটাই একটা array function 
// const add4 = (num1, num2) => num1 + num2;

// const sum1 = add(15, 40);
// const sum2 = add2(15, 40);
// const sum3 = add3(15, 40);
// const sum4 = add4(15, 40);


const doMath = (x, y) => {
    const sum = x + y;
    const dif = x - y;
    const mult = sum * dif
    return mult;
}
const result = doMath(12, 5)
console.log(result);