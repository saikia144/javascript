function showMesssage() {
    console.log('Hello, My dear user');
}

showMesssage();

let userName = "John";

function showUserName() {
    let userName = "Bob";

    console.log(`Hello ${userName}, Welcome to Javascript!!`);
}

console.log(userName);

showUserName();

console.log(userName);

//Parameters and Arguments and default values

function showMessage(a, b = "no text given") {
    console.log(`${a}: ${b}`);
}

showMessage('Ann', 'Hello there');
showMessage('Ann'); //Default parameter value being used here since second argument is not passed


function showMessages(a, b) {
    if (b == undefined) {
        b = "unknown";
    }
    console.log(`${a}: ${b}`);
}

showMessages("Partha", "Hey! Congrats!!");
showMessages("Parthajeet");


//returning values
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

function showMovie(age) {
    if (!checkAge(age)) {
        console.log("Nope its not possible");
        return;
    } else {
        console.log("Showing you the movie: LEAP YEAR");
    }
}

showMovie(20);
showMovie(17);

if(showMovie(12) === undefined){
    console.log('Grow up');
}

console.log(showMovie);