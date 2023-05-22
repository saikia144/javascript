const res = document.getElementById("result");
res.style.background = "pink";

const result = document.querySelector("#result");
result.style.background = "yellow";

const list = document.querySelectorAll(".special");
list[2].style.background = "blue";

const lastItem = document.querySelectorAll("li:last-child");
console.log(lastItem);

const de = document.querySelectorAll(".special");
de.forEach((elt) => {
  console.log(elt);
});
de[5].style.background = "green";
