let makeUser = (name, age) => {
    return {
        name,
        age : 45,
        0: "test"
    };
}

console.log(makeUser("Parthajeet Saikia", 30))
let user1 = makeUser("Parthajeet Saikia", 30);
console.log(user1[0])
console.log(user1)
console.log(user1.name === "pp")