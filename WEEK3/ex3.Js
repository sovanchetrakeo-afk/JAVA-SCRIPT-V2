const firstArray=[1,2,3];
const secondArray=[4,5,6];
const newCombinedArray=[...firstArray,...secondArray];
console.log(newCombinedArray);

const a={x:1,y:2};
const b={y:3,z:4};
const Merge={...a,...b};
console.log(Merge); 