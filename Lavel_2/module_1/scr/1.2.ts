{
  const add = (a: number, b: number, c: number=0) => {
    return a + b + c;
  };
  console.log(add(32, 45))
}


const array1: string[]= ["ali hasan","Liton islam"]

const array2 : string[]=["milon islam", 'shathi akther']

array1.push(...array2)