//Inorder to find out the value or the text inside an element we can use textContent or nodeValue
//textContent
//nodeValue

const row1 = document.getElementById("row1");
const row2 = row1.nextElementSibling;
console.log(row1.textContent);
const data = row1.firstElementChild;
console.log(data.textContent);
console.log(data.nextElementSibling.textContent);
console.log(row2.children);

//NodeValue mostly returns null because I used it with element nodes(<tr>,<td>,<th>,<h1>,etc...). Use nodeValue with
//textnodes such as p, span,div,etc..

//Displaying each individual text node seperately
let flag = true;
while (flag) {
  if (row1.hasChildNodes()) {
    const val = row1.children;
    for (let i = 0; i < val.length; i++) {
      console.log(val[i].textContent);
    }
    flag = false;
  }
}
