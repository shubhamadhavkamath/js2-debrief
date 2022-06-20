// Write a function  ...

// 1. That logs “The current date and time is “ - the current date and time 
// hint; you will need to research the Date object to get the current date! (https://www.w3schools.com/jsref/jsref_obj_date.asp)

function myTime () {
    const d =  new Date();
    console.log("The current date and time is: " + d);
}
myTime();

// 2. That prints “I’m ready” after 5 seconds.
// hint: you will need to research the setTimeout JavaScript function. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

const myTimeout = setTimeout(hello, 5000);
function hello () {
    console.log("I'm ready!")
}

// 3. Create a function to convert today’s temperature from Celsius to Fahrenheit
// a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
// b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C

function tempToFah (tem) {
    const fah = tem * (9/5) + 32;
    console.log(`${tem} degrees celsius is ${fah} degrees Fahrenheit`);
}

tempToFah(35);

function tempToCel (tem) {
    const cel = (tem- 32) * (5/9);
    console.log(`${tem} degrees Fahrenheit is ${cel} degrees celsius`);
    return cel;
}

tempToCel(95);
