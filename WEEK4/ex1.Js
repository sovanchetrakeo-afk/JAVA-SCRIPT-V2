let fruits=["apple", "banana", "cherry"];
fruits.push("mango","oragne");
console.log("The result of adding item:")
console.log(fruits);
fruits.pop();
console.log("The result of last removing item:")
console.log(fruits);
fruits.splice(1,1,"grape","kiwi");
console.log("The result of removing and replacing item:")
console.log('["' + fruits.join('","') + '"]');
