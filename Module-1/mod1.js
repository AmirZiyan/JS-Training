/* Array - It is  basically a variable which can store number of values in it.Collection of elements which are similar data types,But in JS it can store different data type. */

var arr = [12, "Aman", 56, 6.7, false, "Doctor"];

console.log(arr);

//Accessing array elements

console.log(arr[0]);

arr[1] = "Amar";

console.log(arr);

//Output: [12, "Amar", 56, 6.7, false]

//Using Length property

console.log("The Length of the array is", arr.length);

var emp1 = ["Das", "Elayavoor", 120000, 45, true];

var emp2 = ["Vinod", "Chovva", 230000, 34, false];

console.log("The number of values of emp1 is", emp1.length, ".");

console.log("The number of values of emp2 is", emp2.length, ".");

//Array Methods

//Pop Method

var sol = [12, 45.6, "Jabal"];

console.log(sol);

console.log("The element popped is ", sol.pop());
console.log("Remaining Elements are", sol);

//Push Method

sol.push(1001);
console.log("The pushed element is", sol[2], ".");
console.log(sol);

//Shift Method

var a = sol.shift();
console.log(a);
console.log(sol);

//UnShift Method

var b = sol.unshift(100);
console.log(b);
console.log(sol);
