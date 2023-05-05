//The .filter() method returns a new array containing all elements that pass a test from a function you provide. 
//In other words, .filter() takes an array, tests every element and returns a new array containing only 
//elements that pass a test you provide.

const words = ["thaw", "achievement", "gain", "outlet", "difference"];

let newWords = words.filter(word => word.length<5)

console.log(newWords);
