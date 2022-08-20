const prompt = require("prompt-sync")();

let n = prompt ("Enter the limit: ");
let fact = 1;
for( let i=1; i<=n; i++){
    fact = fact * i;
}
console.log(fact);