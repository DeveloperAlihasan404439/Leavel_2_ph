"use strict";
{
    class Modules {
        constructor(name, age, role) {
            this.name = name,
                this.age = age,
                this.role = role;
        }
        print() {
            console.log(`Hello ${this.name} your old in ${this.age} this role ${this.role}`);
        }
    }
    const user1 = new Modules("Ali hasan", 1245638, "user");
    const user2 = new Modules("Liton", 12458, "Admin");
    user1.print();
    user2.print();
    class Students {
        constructor(name, roll, age, phone) {
            this.name = name;
            this.roll = roll;
            this.age = age;
            this.phone = phone;
        }
        print2() {
            console.log(`Hello Students ${this.name} this role in ${this.roll}, there age in ${this.age} and there contact number in ${this.phone}`);
        }
    }
    const sixClass = new Students("sadded hosien", 10, 21, "01783228430");
    sixClass.print2();
}
