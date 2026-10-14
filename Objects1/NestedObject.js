let student = {
    name: "Anand",
    age: 21,

    address: {
        city: "Pune",
        state: "Maharashtra",
        pincode: 411018
    },
    course: {
        name : "BSc Cs",
        duration : 3
    }
};


console.log( student);
console.log( student.name, student.age);
console.log( student.address.city, student.address.state,student.address.pincode);

console.log(student["course"]["name"]);
console.log(student["course"]["duration"]);

console.log(student["address"]["city"]);
console.log(student["address"]["state"]);
console.log(student["address"]["pincode"]);
