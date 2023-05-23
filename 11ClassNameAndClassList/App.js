const body = document.querySelector("body");

const div = document.createElement("div");
div.setAttribute("class", "demo1");
body.appendChild(div);

div.classList.add("demo2"); //Adding a class to an element *******
div.classList.add("demo3");

console.log(div.classList);
console.log(div.className);

console.log(div);

div.className = "demo4 demo5"; // This will override the existing classes and add demo4 and demo5***********

//console.log(div);

div.classList.remove("demo5"); //removes a class from the existing list of classes
console.log(div.className);
