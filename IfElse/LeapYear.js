const prompt = require("prompt-sync")();

var year = prompt ("Enter a Year")
if(year%400==0 && year%100==0 || year%4==0 ){
    console.log("Leap Year")
}
else{
    console.log("Not leap Year")
}