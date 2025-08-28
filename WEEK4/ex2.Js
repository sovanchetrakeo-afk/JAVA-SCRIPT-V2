let number= [5, 12, 8, 130, 44];
let newNumber=number.slice(1,4);
console.log("Here are middle three numbers of the array:")
console.log(newNumber);
function isGreaterThan10(number){
    return number>10;
}
let result=number.filter(isGreaterThan10);
console.log("Here are the numbers greater than 10:")
console.log(result);
