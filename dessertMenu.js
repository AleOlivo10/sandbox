var readline = require('readline-sync');
var name = readline.question("Welcome to my humble, little Dessert Shop! What is your name? ");
console.log("I see you have $10, " + name + " would you like to see what's on the menu today?);

/*var readline = require('readline-sync');
var dessert = readline.question("You have $5, enough for one pastry! What would you like? ");
var pastryChoices = {
    eclair: 2.50,
    donut: 2.00,
    brownie: 3.75,
    cupcake: 4.50,
    cookie: 3.50,
};
var menu = ["eclairs", "donuts", "brownies", "strawberry-shortcake", "cookies"];
for (let key in menu) {
    console.log(key, menu[key]);
}

var readline = require('readline-sync');
var choose = readline.question("Here's what's they have, what do you want? ");
console.log("You have " + dollars*Currency[money] + " " + money);