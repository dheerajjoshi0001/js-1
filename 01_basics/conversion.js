let score = 11;
console.log(typeof score); // Output: number (not string)
console.log(typeof(score)); // Output: number (not string)

// Updating the value of score (no need to redeclare with let)

let target = 12

let valueinnumber = String(target);
console.log(typeof valueinnumber); // Output: number
console.log(valueinnumber); // Output: 12 (since "12" is a valid number)

// "33" = 33
// "33ab" = NaN
// true = 1, false = 0

let isLoggedin = 1;

let bolleanisloggedin = Boolean(isLoggedin);
console.log(bolleanisloggedin); // Output: true (because 1 is truthy in JavaScript)






