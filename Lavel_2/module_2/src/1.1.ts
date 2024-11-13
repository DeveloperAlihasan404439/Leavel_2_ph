let assertion: any;
assertion = "hello developer";
assertion = 22;

(assertion as number).valueOf

console.log(assertion)

const assertionFunction = (data:string | number): string | number| undefined=>{
    if(typeof data === "string"){
        const value = `return the string value : ${data}`;
        return value
    }
    if(typeof data === "number"){
        const value = `return the plus value : ${data + 100}`;
        return value
    }
}
const result = assertionFunction("hello typescript")as string;
const result2 = assertionFunction(100) as number;

console.log(result);
console.log(result2);


let asser:any;
asser = "hello word";

(asser as string).charAt(0)