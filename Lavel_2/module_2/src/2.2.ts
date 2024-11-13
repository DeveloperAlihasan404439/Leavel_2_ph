{
  interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
    phone?: number;
    roll?: number;
    address: string;
  }

  interface Students {
    name: string;
    roll: number;
  }

  const students: Students = {
    name: "Ali Hasan",
    roll: 460351,
  };

  type Roll1 = number[];
  const roll1: Roll1 = [1, 2, 1];

  interface Roll2 {
    [index: number]: number;
  }

  const roll2: Roll2 = [1, 2, 3, 4];
  console.log(roll1, roll2)
}
