let sayHi = function(){
    console.log("Saying HI!!");
}

    function sayHello(){console.log("Hello!!");}

    let func = sayHello;
    func();
    sayHello();
    sayHi();

let showMessage = (a,b = "unknown") => `This is ${a} ${b}`
console.log(showMessage("Parthajeet", "Saikia"))