function sum() {
  sum = 10 + 5;
  console.log(sum);
}

sum();

//Function defn and declaration

function add(a, b) {
  add = 0;
  add = a + b;
  console.log(add);
}

add(100, 50);

//Subtraction

console.log("Subtraction");
function subtract(a, b) {
  sub = 0;
  sub = a - b;
  console.log(sub);
}

subtract(10, 7);
subtract(20, 14);
subtract(30, 20);

//Multiplication
console.log("Multiplication");
function multiplication(c, d) {
  mul = 0;
  mul = c * d;
  console.log(mul);
}

multiplication(3, 5);
multiplication(5, 8);
multiplication(1, 4.3);

//Division

console.log("Division");
function Division(e, f) {
  div = 0;
  div = e / f;
  console.log(div);
}

Division(4, 2);
Division(100, 3);
Division(30, 3);

const greet = function (name) {
  console.log(`Hello ` + name + " !");
};

greet("Emily");
greet("Nui");

//Even Function
console.log("Even Function");

function Even(num) {
  if (num % 2 == 0) {
    console.log(num + " is even");
  } else {
    console.log(num + " is odd");
  }
}

Even(3);
Even(8);
Even(65);

