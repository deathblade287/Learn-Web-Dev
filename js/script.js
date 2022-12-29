// "use strict";

// let num = 5;
// const num2 = 20; // Constant Variables (Values that don't need to be reassigned)
// const COLOR_YELLOW = "#ff7f"; // Constants that are aliases for difficult-to-remember values that are known prior to executionare ("hard-coded values")named using capital letters and underscores

// console.log(num);
// console.log(num2);


// // Primitive Types
// // String
// // Number
// // Boolean
// // undefined
// // null


// // Reference Types

const cars = ["Saab", "Volvo", "BMW", "Mercedes", "Mahindra", "Rolls Royce", "Ford"];
for (let i = 0; i < cars.length; i++) {
    const para = document.createElement("p");
    const node = document.createTextNode(cars[i]);
    para.appendChild(node);

    const element = document.getElementById("demo");
    element.appendChild(para);
}
// document.getElementById("demo").innerHTML = cars;
