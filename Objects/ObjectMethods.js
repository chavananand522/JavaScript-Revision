let calculator = {
    add: function (a,b) {
        return a + b;
    },
    sub: function (a,b) {
        return a - b;
    },
    mul: function (a,b) {
        return a * b;
    },
    div: function (a,b) {
        return a / b;
    },
    mod: function (a,b) {
        return a % b;
    }
};

console.log(calculator.add(10,3));
console.log(calculator.sub(10,3));
console.log(calculator.mul(10,3));
console.log(calculator.div(10,3));
console.log(calculator.mod(10,3));
