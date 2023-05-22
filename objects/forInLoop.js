let user = { name: "Parthajeet Saikia", age: 28, location: "Assam", test: null };

for (let k in user) {
    // console.log(key);
    // console.log(user[key]);
    console.log(`${k}: ${user[k]}`);
}
console.log(user.test === undefined)
console.log(user.loc === undefined)
console.log(user.name === undefined)

//Ordering of the properties. Integers are sorted automatically but the rest appear in creation order

let codes = {
    7: "7.India",
    capital: "Kiev",
    2: "2.Russia",
    4: "4.China",
    "3": "3.Japan",
    "9": "9.Brazil"
}

console.log(codes[3])
for (let key in codes) {
    console.log(codes[key])
}

console.log(String(Math.trunc(Number("49"))) == String(Math.trunc(Number("79"))))

//Task  1
let person = {};
person.name = "John";
person.surname = "Smith";
person["name"] = "Pete"

console.log(person)
delete person.name;

console.log(person)

//Task 2

let isEmpty = (obj) => {
    for (let key in obj) {
        return false;
    }
    return true;
};

let schedule = {};

schedule["8:20"] = "AlArm!!!"
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

//task 3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
let total_sal = () => {
    for (let prop in salaries) {
        sum += salaries[prop];
    }
    return sum;
}

console.log(total_sal());

//Task 4
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let multiplyNumeric = (obj) => {
    for (let prop in obj) {
        if (typeof obj[prop] === "number") {
            obj[prop] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu)