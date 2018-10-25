var readline = require('readline-sync');
var name = readline.question("Welcome to my humble, little Dessert Shop! What is your name? ");
console.log("I see you have $10, " + name + " !");

var menuItems = {
    eclair: 2.50,
    donut: 2.00,
    brownie: 3.75,
    cupcake: 4.50,
    cookie: 3.50,
};

var yes = readline.question("Would you like to see what's on today's menu? ");

console.log(yes + "? Great, here you go, " + name + "!");


var menuArray = ["eclair", "donut", "brownie", "cupcake", "cookie"];
for (let key in menuItems) {
    console.log(key, menuItems[key]);

};

var dessertChoice = readline.question ("What would you like to have? ");
console.log("Great choice, " + name + ", that's one of my favorites! " + (10 - menuItems[dessertChoice]) + " is your change.");

