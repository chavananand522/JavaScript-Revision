let student = {
    name: "Anand",
    age: 21,
    course: "BSc CS"
};

for (let key in student) {
    console.log(key, student[key]);
}