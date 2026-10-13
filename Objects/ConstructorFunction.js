function Student(name, age, course) {
    this.name= name;
    this.age= age;
    this.course= course;
}

let s1 = new Student("Vineet",20, "IT");
let s2 = new Student("Dipak",21, "MBA");
let s3 = new Student("Suhas",22, "MBBS");
let s4 = new Student("Shivraj",21, "BAMS");

console.log(Student);
console.log(s1.name, s1.age,s1.course);
console.log(s2.name,s2.age,s2.course);
console.log(s3.name,s3.age,s3.course);


