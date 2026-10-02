// Var Variable

var name = "Anand";
console.log("Name: " + name);

var age = 21;
console.log("Age " + age);


// Function Scoped var 
function Variable(){
    if (true) {
        var x = 10; 
    }
    console.log(x);
}
Variable();

// Redeclared
var y =1;
var y =4;
var y;
console.log(y);

// Reassigned 
var x = 10;
x=20;
x = "Hello";
console.log(x);