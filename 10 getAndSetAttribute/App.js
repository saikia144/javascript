//Keep in mind that once an element is appended to a parent element it cannot be appended to another parent
//Either use the cloneNode(true) method or create a new element and append it to the other parent
const h1 = document.createElement("h1");
h1.textContent = "This header is created dynamically";

let p = document.createElement("p");
p.textContent = "This is generated dynamically";

const div = document.querySelector("div");
div.setAttribute("class", "demo"); //set Attribute ***
div.appendChild(h1);
div.appendChild(p);
console.log(div.getAttribute("class")); //getAttribute ** op:demo

//Outside the div
const h2 = document.createElement("h2");
h2.textContent = "This is h2 header";
document.body.appendChild(h2);

console.log(document.body.childNodes);

let p1 = document.createElement("p");
p1.textContent = "Another <p> tag outside of <div> tag";
document.body.appendChild(p1);
const clonedP = p1.cloneNode(true); //one way to append same element to different parents ***********
div.append(clonedP);
