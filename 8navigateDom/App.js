const result = document.getElementById("result");

//PARENT(parentElement)

console.log(result.parentElement.parentElement.parentElement); //null since parent element of <html> is null

//childNodes---> returns all the child nodes including white spaces(text nodes)
//children --> returns the child nodes without the text nodes(white spaces)
//firstChild -> returns the first child alongwith whitespace
//lastChild ---> returns the last child alongwith whitespaces

console.log(result.childNodes); // returns the children..including whitespaces
console.log(result.children); //returns the child elements
console.log(result.firstChild); //returns the first child. Could be a whitespace(as in this case) or an element
console.log(result.firstElementChild);
console.log(result.lastChild);
console.log(result.lastElementChild);

//SIBLINGS(nextSibling, nextSibling) ; returns text nodes too

console.log(result.nextSibling);
//result.nextSibling.style.color = "blue";
console.log(result.nextElementSibling);
console.log(result.previousSibling);
console.log(result.previousElementSibling);

const first = document.querySelector(".special"); //1. WaterMelon
console.log(first.nextElementSibling.nextElementSibling); //3. Mango
first.nextElementSibling.style.color = "blue";

const last = document.getElementById("last");
console.log(last);
last.previousElementSibling.previousElementSibling.style.color = "green";

const node = document.getElementById("div1");
const a = document.createAttribute("my_attrib");
a.value = "newVal";
console.log(a);
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib")); // "newVal"
