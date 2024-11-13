const age: number = 20
const isAdult = age>18 ?"Adult" :"IsAdult";
console.log(isAdult)

const searchData = (value: string| null)=>{
    if(value){
        console.log('searching data')
    }
    else{
        console.log("no search data");
    }
}
searchData(null)