const arr=[1,2,3];
const newArray=[0,...arr,4,5];
const [first,second,...rest]=newArray;
console.log("New Array:",newArray);
console.log("first=",first,",second=",second,",rest=",rest);
