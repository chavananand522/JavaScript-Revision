// step 1 . class declared 
class Student {

    // step 2 . Create the constructor
    constructor(name, age, address) {    // (Receives values when an object is created)

        // step 3. Object properties intialized
        this.name = name;      // (Stores the name,age and address in the object))
        this.age = age;
        this.address = address;
    }

     // STEP 4: Create the showDetails method
    showDetails() {             // (Executes when called) 
        console.log(this.name, this.age, this.address);
        console.log(this.age);
        console.log(this.address);
    }
}

// step 5 . Object created 
let s1 = new Student("Amita", 20, "Pimpri");

// step 6 . method call 
s1.showDetails();

