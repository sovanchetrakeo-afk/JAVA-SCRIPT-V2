let prices=[10, 20, 30, 40];
let discountedPrices=prices.map(prices=>prices-(prices*20/100));
console.log("These are the discounted prices:")
console.log(discountedPrices);
function PrintMessage(discountedPrices){
    console.log("Discounted price: $",discountedPrices);
};
console.log("These are the discounted  prices within full discription:")
discountedPrices.forEach(PrintMessage);