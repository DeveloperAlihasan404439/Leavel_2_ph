"use strict";
{
    class Person {
        constructor(name, age, address) {
            (this.name = name), (this.age = age), (this.address = address);
        }
        print(goBack) {
            console.log(`hello ${this.name} in the ${goBack} back`);
        }
    }
    class Students extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const students = new Students("Ali Hasan", 12, "Dinajpur");
    students.print("Dhaka");
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
    }
    const teacher = new Teacher("Milon islam", 40, "Ranger", "Professor");
    teacher.print("Dinajpur");
}
