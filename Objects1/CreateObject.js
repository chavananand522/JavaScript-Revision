let person = {
    greet: function () {
        console.log("Hello World")
    }
};

let s = Object.create(person);

s.name = "Aryan ";
s.age = "20";

console.log(s.name);
console.log(s.age);
s.greet();

