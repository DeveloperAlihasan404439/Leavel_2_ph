{
  type GenericArray<T> = Array<T>;

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User>=[
    {
        name: "ali hasan",
        age: 23
    }
  ]

  interface Developer<T>{
    name: string,
    age: number,
    phone?: number,
    nolage: T,

  }

  interface Nolage{
    language: string,
    year: number
  }
  const riskDeveloper: Developer<Nolage>={
    name: "Ali hasan",
    age: 54,
    nolage: {
        language: "JavaScript",
        year: 451,
    }
  }



}
