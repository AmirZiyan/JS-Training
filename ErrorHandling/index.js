// console.log("Im Here!!!");
// try {
//   console.log("Where are you ?");
// } catch (err) {
//   console.log(err.message);
//   console.log("Better do it correctly");
// } finally {
//   console.log("What were you doing ?");
// }

// try {
//   var arr = function (a, b) {
//     var sum = a + b;
//     return sum;
//   };

//   var w = arr(2, 4);
//   console.log(w);
// } catch (error) {
//   console.error("Error Message: " + error.message);
// }

// try {
//   function division(a, b) {
//     var div = a / b;
//     console.log(div);
//     division(4, 0);
//   }
// } catch (error) {
//   console.er("Error is :", error.message);
// }

// function division(a, b) {
//   var div = a / b;
//   console.log(div);
//   division(4, 0);
// }

try {
  var a = 10;
  console.log(a.toUpperCase());
} catch (error) {
  console.log("There is an error!!!");
  console.error(error.name);
  console.error("Error Message: " + error.message);
} finally {
  console.log("I am here!!");
}
