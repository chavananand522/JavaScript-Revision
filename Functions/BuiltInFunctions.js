// 1.parseInt())
let a = "10";
let b = "20";
let c = "30";
console.log(parseInt(a));
console.log(parseInt(b));
console.log(parseInt(c));

// 2. parseFloat()
let x = "12.34";
let y = "93.32";
let z = "39.43";
console.log(parseFloat(x));
console.log(parseFloat(y));
console.log(parseFloat(z));

// 3. isNaN()
console.log(isNaN(200));
console.log(isNaN("hello"));
console.log(isNaN("10abc"));

// 4. setTimeout()
console.log("Program Started");
setTimeout(function () {
    console.log("Hello Anand!")
},3000);
console.log("Program Ended");
