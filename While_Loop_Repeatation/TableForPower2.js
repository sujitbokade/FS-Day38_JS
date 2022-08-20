const prompt = require("prompt-sync")();

let num = prompt("Enter number");

let n = 1;

while(n <= num){
    console.log(Math.pow(2,n));
    n++;
}