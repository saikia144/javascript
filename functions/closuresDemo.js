var myCounter = (function() {
    var counter = 0;
	
    // Nested anonymous function
    return function() {
        counter += 1;
        return counter;
    }
})();

console.log(myCounter()); // Prints: 1
console.log(myCounter());

var newCounter = () => {
    var counter1 = 0;

    return function() {
        counter1 +=1;
        return counter1; 
    }
};

let x = newCounter();
console.log(x())
console.log(x())

console.log(newCounter());