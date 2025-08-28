let expenses=[120,75,300,50];
let sum=0;
function printMessage(expenses){
    console.log("Expences recorded: $",expenses);
}
function Sum(expenses){
   for(let i=0;i<expenses.length;i++){
    sum+=expenses[i];
   }
   return sum;
}
let Addition=Sum(expenses);
expenses.forEach(printMessage);
console.log("Total expenses: $",Addition)

