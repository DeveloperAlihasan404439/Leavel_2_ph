{
  interface User {
    name: string;
    phone: string;
  }
  interface Developer extends User {
    age: number;
    email: string;
    role: boolean;
  }
  const developer: Developer = {
    name: "ali Hasan",
    age: 44,
    email: "alihasan@gmail.com",
    phone: "01245862",
    role: false,
  };
  console.log(developer);

  interface CheckType {
    mobile: string;
    laptop: string;
    car: string;
    back: string;
  }

  type Check<T> = T extends keyof CheckType ? true : false;

  type HasCar = Check<"mobil">;
}
