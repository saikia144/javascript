//[(1, 2)].forEach(alert);
const headings = document.getElementsByTagName("h1");
console.log(headings[1]);
headings[1].style.color = "red";
console.log(typeof headings);

/* for (let i = 0; i < headings.length; i++) {
  console.log(headings[i]);
} */

// ***These two array-like objects are not actual arrays.
//HTMLCollectionObject - array-like objects(limited amount of methods)
const myclass = document.getElementsByClassName("myclass");
console.log(myclass);
myclass[1].style.color = "blue";

//Nodelist - array-like objects (extra methods than HTMLCollectionObjects)
const h1 = document.querySelectorAll("h1");
h1.forEach((el) => {
  console.log(el.className);
  if (el.className == "myclass") {
    el.style.color = "pink";
  } else {
    el.style.color = "red";
  }
});
console.log(h1);
const newArray = Array.from(myclass);
