var price = 50
var itemName = "apple" 
var messagetoPrint = "The price of " + itemName + " is " + price + " dollars." //Concatenation
var messagetoPrint2 = `The price of ${itemName} is ${price} dollars.` //Interpolation

console.log(messagetoPrint)
console.log(messagetoPrint2)