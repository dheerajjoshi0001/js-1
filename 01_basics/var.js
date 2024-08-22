const accid = 1122;   // This is a constant, so it cannot be reassigned
let accpass = "dj12";
var acccity = "kashipur";
let acccountry = "india";

// Don't reassign accid, as it's a constant
// accid = 2211;  // This will cause an error, so it's commented out

accpass = "12dj";
acccity = "jaspur";
acccountry = "india";

// var is used rarely because of issue in block and functional scope 
// Using console.table to display the values with labels


console.table({
  accpass,
  acccity,
  acccountry
});



