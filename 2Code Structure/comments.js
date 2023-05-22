//Comments and semicolons

//  For a single line commment use CTRL + /
/* For a multi line comment use shift + alt + A */

alert("hello");

[1,2].forEach(alert);

/* 
The o/p of the program should print hello first, 1 and then 2 

But when the semi-colon is removed from the first alert statement it will print only a hello.

This happens because the Javascript does not assume a semicolon before a square bracket and consider this
as a single statement.

{ alert("hello")[1,2].forEach(alert)}
*/
