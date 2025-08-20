function sumNumber(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log("The total is->",sumNumber(1,2,3,4,5));
console.log("The total is->",sumNumber(1,2,3));

