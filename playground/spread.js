// function add(a,b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [19,5,6,23,6,3,56,7,3];
// console.log(add(...toAdd));


// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA, ...groupB]
//
// console.log(final);


var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function printOutput(name, age) {
  console.log(`Hi, ${name}, you are ${age}.`);
};

printOutput(...person);
printOutput(...personTwo);

var names = ['Mike', 'Ben'];
var final = [...names, 'James'];

for (i=0; i<final.length; i++) {
  console.log(`Hi, ${final[i]}!`);  
}
