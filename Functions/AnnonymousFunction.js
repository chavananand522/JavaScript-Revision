let greet = function () {
    console.log("Hello World")
};
greet();


function calculate(a, b, operation) {
    operation(a, b);
}

calculate(10, 20, function (x, y) {
    console.log("Addition:", x + y);
});