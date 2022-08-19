let headCount = 0;
let tailCount = 0;

while(headCount < 12 && tailCount < 12){
    let random = Math.floor(Math.random() * 10) % 2;
    if (random == 0) {
        headCount++;
    } else {
        tailCount++;
    }
}
console.log("headCount = ",headCount);
console.log("tailCount = ",tailCount);