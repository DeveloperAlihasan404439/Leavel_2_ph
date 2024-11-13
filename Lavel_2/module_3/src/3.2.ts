{
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      (this.name = name), (this.age = age), (this.address = address);
    }
    print(goBack: string) {
      console.log(`hello ${this.name} in the ${goBack} back`);
    }
  }
  class Students extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const students = new Students("Ali Hasan", 12, "Dinajpur");
  students.print("Dhaka");

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
  }

  const teacher= new Teacher("Milon islam", 40, "Ranger", "Professor")

  teacher.print("Dinajpur")
}
