{
    type Generic<T> = Array<T>

    const roll: Generic<number> = [1,2,3,4]
    const user : Generic<string> = ["hello", "22"]

    const infoStudents: Generic<{name: string, age: number, gander: String}>=[
        {
            name : "Milon islam",
            age: 44,
            gander: "Mail"
        },
        {
            name: "Liton islam",
            age: 45,
            gander: "Mail"
        }
    ]
    console.log(infoStudents)
}