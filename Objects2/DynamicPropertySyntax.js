let key = "name";

let student = {
    [key]: "Anand",
    ["age"]:21,
    ["display"](){
        console.log("My name is: "+this.name);
    }
}; 

console.log(student.name);
console.log(student.age);
student.display();
