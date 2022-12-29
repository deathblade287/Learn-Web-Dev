const MAX_LIMIT = 10;

// Defining orignal list
let numList = new Array();
for (let i = 0; i < MAX_LIMIT; i++) {
    numList.push(i+1);
}
console.log(`Orignal/Starting List : ${numList}`);


// Loop that runs till "numList" is empty while recording the order in which it removes elements in the "orderedList"
let orderedList = new Array()
const length = numList.length;

while (numList.length !== 0) {
    for (let i = 0; i < length; i++) {  
    if (numList[i] === undefined) {
        console.log(`Loop ${i+1} : ${numList}`);
        console.log('----- Break -----')
        break;
    } else {
        console.log(i + ' ' + numList[i]);
        orderedList.push(numList[i])
        numList.splice(i, 1); 
    }
}
}

console.log(orderedList)