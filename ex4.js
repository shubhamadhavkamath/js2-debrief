// Use a for loop to ...
// 1. Log numbers from 1 to 100 that are divisible by 5

function multiplesOfFive() {
    for (let i=1; i<=100; i++) {
        if(i%5 === 0) {
            console.log(i);
        }
    }
    
}
multiplesOfFive();

// 2. Use a nested for loop to print “I’m the outer loop” 3 times and “I’m the inner loop” within the inner loop.

let i=3;
while (i>0) {
    console.log("I am the outer loop");
    let j=1;
    while (j>0) {
        console.log("   I am the inner loop");
        j--;
    } 
    i--;
}
