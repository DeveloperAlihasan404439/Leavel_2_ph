{
    type AddType = string | number;
    const add = (first: AddType, screen: AddType): AddType=>{
        if(typeof first === "number" && typeof screen === "number"){
            return first + screen

        }
        else {
           return first.toString() + screen.toString()
        }
    }
    console.log(add(12, "12"))
}