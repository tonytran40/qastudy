var customer = {
    firstName: "John",
    lastName: "Tran",
}

//Dot notation
console.log(customer.firstName)

//Bracket notation
customer["lastName"] = "Nguyen"
console.log(`${customer.firstName} ${customer["lastName"]}`)

//Array
var car = ["BMW", "Mercedes", "Audi"]
car[1] = "Toyota"