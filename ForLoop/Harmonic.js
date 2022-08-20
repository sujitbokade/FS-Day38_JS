const prompt = require("prompt-sync")({sigint:true});

let n = ("Enter a Number");

let sum = 0;
for(let i=1; i<=n; i++){
    sum=sum + (1/i);
}
console.log(sum);