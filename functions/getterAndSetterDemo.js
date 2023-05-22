let getValue,setValue;

(() =>{
    let secret = 0;

    getValue = () => secret;

    setValue = (x) => {
        if(typeof x === "number"){
            secret = x;
        };

    } 
})();

getValue();
console.log(getValue());
setValue(20);
console.log(getValue());
setValue(null);
console.log(getValue());

//Immediately Invoked Function Expressions
((a,b) => console.log(a+b))(1, 2);