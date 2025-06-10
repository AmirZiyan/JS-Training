// a = 3;
// b = 2;
// try {
//   var result = a / b;

//   console.log(result);
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("This runs regardless of the result");
// }

// var max = 10;
// try {
//   console.log(max);
// } catch (error) {
//   console.log("Caught an error!!!");
//   console.error("Error Message:", error.message);
//   console.error("Error Name:" + error.name);
// } finally {
//   console.log("This is the number you were looking for !!!");
// }

// //Vote

// function vote(age) {
//   if (age < 18) {
//     throw new Error("You are not eligible to vote");
//   } else {
//     console.log("You are eligible to vote");
//   }
// }
// try {
//   vote(19);
// } catch (error) {
//   console.log(error.message);
// }

// try {
//   console.log("This will run");
//   throw new Error("Oops Something went wrong");
// } catch (error) {
//   console.log("Caught an error");
//   console.log(error.message);
//   console.log(error.name);
// }

function safeDivide(a, b) {
  if (b == 0) {
    throw new Error("Cannot be divided when b = 0");
  }
  return a / b;
}

try {
  var dove = safeDivide(4, 0);
  console.log(dove);
} catch (error) {
  console.log(error.message);
}
finally
{
  console.log("This will run regardless of the error");
}
