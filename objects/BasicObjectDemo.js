let user = {}

user.name = "John";
user.age = 20;
user["likes birds"] = true;

console.log(user);
console.log(`${user.name} ${user.age}`);
console.log(user["likes birds"]);

let key = "likes sports";
user[key] = true;
console.log(user)
console.log(user[key]);

user["build"] = 110;
console.log(user);

console.log(typeof user["age"] === "number")
console.log(user.age * 2)