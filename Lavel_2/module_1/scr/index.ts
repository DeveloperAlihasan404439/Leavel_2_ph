const hello: string = "the quick boren foxt jsumps over the laju dog";
console.log(hello);

type User = {
  readonly id: number;
  name: string;
  age: number;
  phone?: string;
  conpany: "bangladesh",
  education: {
    sub: string;
    point: number;
    code: number;
  };
};
type Roll = string & string[]

const user: User = {
  id: 101,
  name: "Ali Hasan",
  age: 30,
  phone: "01792156",
  education: {
    sub: "bangla",
    point: 3534,
    code: 46554,
  },
  conpany: "bangladesh"
};
console.log(user);


function add(num1:number, num2:number){
  return num1 + num2
}
console.log(add(2, 3))